import React from "react";
import "./InputRange.css";

const InputRange = ({id, label, onChange, value}) => {
    return (
        <section className="range-container">
            <label htmlFor={id}>{label}: </label>
            <input id={id} onChange={(event) => onChange(event)}
                   className="input-range" type="range" min="0"
                   max="100"
                   value={value}
            />
            <span>{value}</span>
        </section>
    );
};

export default InputRange;
