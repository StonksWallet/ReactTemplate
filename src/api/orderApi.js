import {apiUrl} from "../config/urls.js";
import {postRequest, getRequest} from "./rest";

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

export const orderApi = {
    getOrders,
    createOrder
}