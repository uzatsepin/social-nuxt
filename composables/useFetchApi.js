import useAuth from "~/composables/useAuth.js";

export default (url, options = {}) => {

    const { useAuthToken } = useAuth()
    return $fetch(url, {
        ...options,
        headers: {
            ...options.header,
            Authorization: `Bearer ${useAuthToken().value}`
        }
    })
}