import { sendError } from "h3"
import { getRefreshTokenByToken } from "../../db/refreshTokens.js"
import { decodeRefreshToken, generateTokens } from "../../utils/jwt.js"
import {getUserById} from "~/server/db/users/users.js";

export default defineEventHandler(async (event) => {
    const cookies = getCookie(event, 'refresh_token')

    if(!cookies) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Refresh token is invalid"
        }))
    }
    
    const rToken = await getRefreshTokenByToken(cookies)
    
    if(!rToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Refresh token is invalid"
        }))
    }
    
    const token = decodeRefreshToken(cookies)
    
    try {
        const user = await getUserById(token.userId);
        const { accessToken } = generateTokens(user)
        return { access_token: accessToken }
    } catch (error) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Refresh token is invalid'
        }))
    }
});