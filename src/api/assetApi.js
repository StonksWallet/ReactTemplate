import {apiUrl} from "../config/urls.js";
import {postRequest, getRequest} from "./rest";

const getAssets = async () => {
    const assets = await getRequest(apiUrl + "assets")
    return assets
}

const getMyAssets = async () => {
    const assets = await getRequest(apiUrl + "my-assets")
    return assets
}

const getMostProfitAssets = async () => {
    const assets = await getRequest(apiUrl + "report/insight/profit")
    return assets
}

const getMostOperationAssets = async () => {
    const assets = await getRequest(apiUrl + "report/insight/operation")
    return assets
}

export const assetApi = {
    getAssets,
    getMyAssets,
    getMostOperationAssets,
    getMostProfitAssets,
}