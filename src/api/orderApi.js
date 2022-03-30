import {apiUrl} from "../config/urls.js";
import {postRequest, getRequest, putRequest, deleteRequest} from "./rest";

const getOrders = async () => {
    const orders = await getRequest(apiUrl + "order")
    return orders
}

const createOrder = async (name, price, order_date, quantity, type_order) => {
    const body = {
        name, price, order_date, quantity, type_order
    }

    const result = await postRequest(body, apiUrl + "order/create")
    return result
}

const editOrder = async (id, name, price, order_date, quantity, type_order) => {
    const body = {
        id, name, price, order_date, quantity, type_order
    }
    const result = await putRequest(apiUrl + "order/edit", body)
    return result
}

const deleteOrder = async id => {
    const result = await deleteRequest(apiUrl + "order/delete", {id})
    return result
}

export const orderApi = {
    getOrders,
    createOrder,
    editOrder,
    deleteOrder
}