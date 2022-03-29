import React, { useState } from "react"
import "./style.css"
import { List, ListItem, Paper, CircularProgress, IconButton } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { orderApi } from "../../api/orderApi.js"
import TradeModal from "../../Components/TradeModal"
import SimpleDialog from "../SimpleDialog"
import { withSnackbar } from 'notistack';

const Orders = ({ orders, fetchOrders, enqueueSnackbar}) => {
    const [ showTradeModal, setShowTradeModal ] = useState(false)
    const [ selectedOrder, setSelectedOrder ] = useState(null)
    const [ showConfirmDialog, setShowConfirmDialog ] = useState(false)

    const openTradeModal = () => {
        setShowTradeModal(true)
    }

    const closeTradeModal = () =>{
        setShowTradeModal(false)
    }

    const openConfirmDialog = () => {
        setShowConfirmDialog(true)
    }
    
    const closeConfirmDialog = () => {
        setShowConfirmDialog(false)
    }
    
    const editCallback = async (asset, price, date, quantity, type, id=null) => {
        const result = await orderApi.editOrder(id, asset, price, date, quantity, type)
        await fetchOrders()
    }

    const deleteCallback = async () => {
        try {
            await orderApi.deleteOrder(selectedOrder.id)
            await fetchOrders()
            closeConfirmDialog()
            enqueueSnackbar('Operação excluída!', {
                variant: 'success'
            })
        } catch(err) {
            enqueueSnackbar('Erro: ' + err.message, {
                variant: 'error'
            })
        }
    }

    const handleEditButton = async (order) => {
        setSelectedOrder(order)
        openTradeModal()
    }

    const handleDeleteButton = async (order) => {
        setSelectedOrder(order)
        openConfirmDialog()
    }

    return (
        <React.Fragment>
            <Paper className="orders-bg">
                <SimpleDialog 
                    open={showConfirmDialog}
                    handleConfirm={deleteCallback}
                    handleClose={closeConfirmDialog}
                    title="Excluir operação"
                    body="A operação será excluída permanentemente."
                />
                <TradeModal 
                    open={showTradeModal}
                    onClose={closeTradeModal}
                    asset={selectedOrder?.name}
                    title="Editar Operação"
                    confirmCallback={editCallback}
                    defaultOrder={selectedOrder}
                    />
                <p className="orders-title">Operações</p>
                {!Array.isArray(orders) &&
                    <div className="assets-list-progress">
                        <CircularProgress />
                    </div>
                }
                {orders && 
                    <List>
                        {orders.map(order => (
                            <ListItem
                                key={order.id}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    minHeight: 70,
                                    backgroundColor: order.type_order ? '#BBFF77' : '#FF6868',
                                    marginTop: 2,
                                }}
                            >
                                <span className="orders-name">
                                    <span>{order.type_order ? "Comprou" : "Vendeu"}: {order.name}</span><br />
                                    <span style={{fontSize: 12}}>{order.order_date.substring(0,10)}</span>
                                </span>
                                <div style={{display: 'flex'}}>
                                    <div className="orders-values">
                                        <span className="orders-price">
                                            $ {order.price.toLocaleString(
                                                undefined,
                                                { minimumFractionDigits: 2 }
                                            )}
                                        </span>
                                        <span style={{
                                            textAlign: 'center'
                                        }}>
                                            Qnt: {order.quantity}
                                        </span>
                                    </div>
                                    <IconButton aria-label="edit" size="small" onClick={() => handleEditButton(order)} >
                                        <EditIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton aria-label="edit" size="small" onClick={() => handleDeleteButton(order)} >
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                }
            </Paper>
        </React.Fragment>
    )
}

export default withSnackbar(Orders)
