import {apiUrl} from "../config/urls.js";
import {postRequest, getRequest} from "./rest";

async function signin(name, lastName, email, password) {
    const body = {
        name,
        lastName,
        email,
        password,
    }
    await postRequest(body, apiUrl + "users/signin");
}

async function login(email, password) {
    const body = {
        email: email,
        password: password,
    }
    const response = await postRequest(body, apiUrl + "users/login");
    return response.access_token;
}

async function logout() {
    await getRequest(apiUrl + "users/logout");
}

async function createUser(name, email, password) {
    const body = {
        name: name,
        email: email,
        password: password,
    }
    await postRequest(body, apiUrl + "users");
}

async function getUser() {
    const user = await getRequest(apiUrl + "user");
    return user;
}

export const userApi = {
    signin,
    login,
    logout,
    createUser,
    getUser,
}
