import React from "react";
import "./Button.css";

export const Button = ({children, type, onClick, buttonStyle,disabled}) => {

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className="btn"
        >
            {children}
        </button>
    );
};
