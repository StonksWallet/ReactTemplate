import {apiUrl} from "../config/urls.js";
import {postRequest, getRequest} from "./rest";

const getAssets = async () => {
    const assets = await getRequest(apiUrl + "assets")
    return assets
}

export const assetApi = {
    getAssets,
}