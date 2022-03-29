import React, { useState, useEffect } from "react";
import "./style.css";
import {Box, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography} from "@mui/material";
import { format } from 'date-fns'
import { withSnackbar } from 'notistack';

const TradeModal = ({enqueueSnackbar, open, onClose, asset, confirmCallback, title, defaultOrder }) => {
    const [type, setType] = useState('buy');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));

    useEffect(() => {
        if(defaultOrder)  {
            console.log(defaultOrder)
            setType(defaultOrder.type_order ? "buy" : "sell")
            setQuantity(defaultOrder.quantity)
            setPrice(defaultOrder.price)
            setDate(defaultOrder.order_date.substring(0,10))
        }
    }, [defaultOrder])

    const handleConfirm = async (e) => {
        e.preventDefault()
        try {
            console.log(type)
            await confirmCallback(asset, price, date, quantity, type === 'buy', defaultOrder?.id)
            enqueueSnackbar('Operação realizada.', {
                variant: 'success'
            })
            setType('buy')
            setQuantity(undefined)
            onClose()
        } catch(err) {
            enqueueSnackbar('Erro: ' + err.message, {
                variant: 'error'
            })
        }
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={'tradeModal-box'}>
                <form onSubmit={handleConfirm}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        {title}
                    </Typography>
                    <div className='tradeModal-form'>
                        <FormControl fullWidth>
                            <InputLabel id="trade-type">Tipo</InputLabel>
                            <div className='tradeModal-formComponent'>
                                <Select
                                    labelId="trade-type"
                                    id="trade-type"
                                    value={type}
                                    label="Tipo"
                                    onChange={(e) => setType(e.target.value)}
                                    sx={{width: '300px'}}
                                >
                                    <MenuItem value={'buy'}>Compra</MenuItem>
                                    <MenuItem value={'sell'}>Venda</MenuItem>
                                </Select>
                            </div>
                            <div className='tradeModal-formComponent'>
                                <TextField
                                    id="outlined-price"
                                    label="Price"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    sx={{width: '300px'}}
                                    required={true}
                                />
                            </div>
                            <div className='tradeModal-formComponent'>
                                <TextField
                                    id="outlined-quantity"
                                    label="Quantity"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    sx={{width: '300px'}}
                                    required={true}
                                />
                            </div>
                            <div className='tradeModal-formComponent'>
                                <TextField
                                    id="date"
                                    label="Date"
                                    type="date"
                                    value={date}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                            <div className='tradeModal-formComponent'>
                                <button className='tradeModal-formButton'>
                                    Confirmar
                                </button>
                            </div>
                        </FormControl>
                    </div>
                </form>
            </Box>
        </Modal>
    );
}

export default withSnackbar(TradeModal)
