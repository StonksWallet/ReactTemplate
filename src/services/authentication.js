import {userApi} from "../api/userApi.js";

const tokenKey = 'tokenKey';

export const login = async (email, password) => {
    const token = await userApi.login(email, password);
    localStorage.setItem(tokenKey, token);
}

export const logout = async () => {
    try {
        await userApi.logout();
        localStorage.removeItem(tokenKey);
    } catch (e) {
        localStorage.removeItem(tokenKey);
    }
}

export const getToken = () => {
    return localStorage.getItem(tokenKey);
}

export const verifyLogin = () => {
    const token = getToken();
    return token != null;
}
