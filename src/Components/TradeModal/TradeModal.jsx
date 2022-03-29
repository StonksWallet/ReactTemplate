import React, {useState} from "react";
import "./style.css";
import {Box, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography} from "@mui/material";

const TradeModal = ({open, onClose, asset}) => {
    const [type, setType] = useState('buy');
    const [quantity, setQuantity] = useState();

    function handleTrade(e) {
        e.preventDefault();
        if(type && quantity) {
            alert(type + " " + quantity);
            setType('buy');
            setQuantity(undefined);
            onClose();
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
                                    id="outlined-number"
                                    label="Number"
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

export default TradeModal
