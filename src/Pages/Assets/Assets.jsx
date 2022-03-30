import React, { useState, useEffect }from "react";
import "./style.css";
import Navbar from "../../Components/Navbar";
import { navUser } from "../../assets/navLists"
import AssetsList from "../../Components/AssetsList/AssetsList";
import { assetApi } from "../../api/assetApi.js";
import { CircularProgress } from "@mui/material";
import { withSnackbar } from 'notistack';

const Assets = ({ enqueueSnackbar }) => {

    const [ assets, setAssets ] = useState([])

    const fetchAssets = async () => {
        try {
            const assetList = await assetApi.getAssets()
            setAssets(assetList)
        } catch(e) {
            enqueueSnackbar('Erro: ' + e.message, {
                variant: 'error'
            })
        }
    }

    useEffect(() => {
        fetchAssets()
    }, [])

    function onSearch(text) {
        console.log(text);
        //TODO: request to backend
    }
    
    if(!assets) {
        return (
            <CircularProgress />
        )        
    }

    return (
        <React.Fragment>
            <Navbar navList={navUser} />
            <div className="assets-bg">
                <AssetsList
                    title="Ativos"
                    assets={assets}
                    searchField={false}
                    searchCallback={onSearch}
                    dataLoaded //TODO: fix
                />
            </div>
        </React.Fragment>
    )
}

export default withSnackbar(Assets)
