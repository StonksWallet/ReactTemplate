import {getToken} from "../services/authentication";

export async function getRequest(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: getHeaders(),
    });

    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.message);
    }
    return result;
}

export async function deleteRequest(url, body) {
    const response = await fetch(url, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: getHeaders(),
    });

    const result = await response.json();
    if(!response.ok) {
        throw new Error(result.message);
    }
}

export async function postRequest(body, url) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: getHeaders(),
    });

    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.message);
    }
    return result;
}

export async function putRequest(url, body) {
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: getHeaders(),
    });
    const result = await response.json();

    if(!response.ok){
        throw new Error(result.message);
    }
}

function getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const token = getToken();
    if(token) {
        headers.append('Authorization', 'Bearer ' + token);
    }
    return headers;
}
