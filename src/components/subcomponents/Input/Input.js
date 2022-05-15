import React from "react";
import "./Input.css";

const Input = ({id, label, placeholder, onChange, value}) => {
    return <section className="container-input">
        <label htmlFor={id}>{label}:</label>
        <input id={id} placeholder={placeholder} type="text" required onChange={onChange}
               value={value}/>
    </section>;
};

export default Input;
