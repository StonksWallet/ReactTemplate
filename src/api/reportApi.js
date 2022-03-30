import {apiUrl} from "../config/urls.js";
import {postRequest, getRequest, putRequest, deleteRequest} from "./rest";

const getProfit = async (assetName) => {
    let params = ""
    if(assetName) params += "?name="+assetName
    const profit = await getRequest(apiUrl + "report/profit"+params)
    return profit
}

export const reportApi = {
    getProfit
}