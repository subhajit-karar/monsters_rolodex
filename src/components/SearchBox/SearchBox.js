import React from 'react';
import './searchBox.css';

export const SearchBox = ({placeholder, handleOnChange}) => {
    return (
        <input 
        className="search"
        type="search" 
        placeholder={placeholder}
        onChange={handleOnChange}/>
    )
}




