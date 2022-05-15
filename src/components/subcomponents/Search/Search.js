import React from "react";
import {FiSearch} from "react-icons/fi";
import "./Search.css";

const Search = ({placeholder,setKeyword}) => {

    const inputOnChange = (event) => {
        setKeyword(event.target.value);
    }

    return (
        <form className="input-container">
            <FiSearch className="input-icon"/>
            <label htmlFor="keyword" hidden>keyword</label>
            <input id='keyword' className="searchInput" type="search" placeholder={placeholder} onChange={event => inputOnChange(event)}/>
        </form>
    );
};

export default Search;
