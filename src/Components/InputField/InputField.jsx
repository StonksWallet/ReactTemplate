import React from "react";
import TextField from '@mui/material/TextField';
import "./style.css";

function InputField({ value, onChange, color, id, label, name, variant, style, ...rest }) {
    return (
        <TextField 
            {...rest}
            value={value}
            onChange={onChange}
            style={{
                borderRadius: 8,
                width: '100%',
                marginTop: '20px',
                backgroundColor: '#ffffff',
                ...style,
            }}
            color={color}
            id={id}
            label={label}
            name={name}
            variant={variant}
        />
    );
}

export default InputField;
