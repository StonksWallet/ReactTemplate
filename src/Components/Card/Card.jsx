import React from "react";
import "./style.css";

const Card = ({ children, style }) => {
    return (
        <div
            style={{
                backgroundColor: '#545D69',
                borderRadius: 32,
                padding: 18,
                textAlign: 'center',
                fontSize: 16,
                ...style
            }}
        >
            {children}
        </div>
    )
}

export default Card