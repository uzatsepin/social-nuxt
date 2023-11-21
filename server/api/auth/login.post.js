import { getUserByUsername } from "~/server/db/users/users";
import bcrypt from 'bcryptjs'
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import { userTransformer } from "~/server/transformers/user";
import { createRefreshToken } from "~/server/db/refreshTokens";
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event); 

    const {username, password} = body;
    if (!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid params'
        }))
    }
    const user = await getUserByUsername(username);

    if (!user) {
        return sendError(event, createError({
            statusCode: 404,
            statusMessage: 'User not found'
        }))
    }

    const doesThePasswordMath = await bcrypt.compare(password, user.password)

    if(!doesThePasswordMath) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    //Generate Tokens
    //Access token
    //Refresh token
    const {accessToken, refreshToken} = await generateTokens(user)

    //Save it to db
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    // Add http only cookie
    sendRefreshToken(event, refreshToken)

    return {
        access_token: accessToken, user: userTransformer(user)
    }
})
