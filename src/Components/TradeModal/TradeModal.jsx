import React, {useState} from "react";
import "./style.css";
import {Box, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography} from "@mui/material";
import { format, parseISO } from 'date-fns'
import { orderApi } from "../../api/orderApi.js";
import { withSnackbar } from 'notistack';

const TradeModal = ({enqueueSnackbar, open, onClose, asset}) => {
    const [type, setType] = useState('buy');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));

    const handleTrade = async (e) => {
        e.preventDefault();
        alert(type + " " + quantity + " " + price + " " + date);
        try {
            const result = await orderApi.createOrder(asset, price, date, quantity, type === 'buy')
            console.log(result)
            enqueueSnackbar('Operação criada.', {
                variant: 'success'
            })
            setType('buy');
            setQuantity(undefined);
            onClose();
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
                <form onSubmit={handleTrade}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Realizar Operação
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
