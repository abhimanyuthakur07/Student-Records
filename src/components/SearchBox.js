import React from 'react';
//import './searchbox.css'
const SearchBox = ({placeholder,handleChange,onSearchSubmit}) =>{
    return(
        <>
        <input type='search'
        className='search'
        placeholder={placeholder}
        onChange = {handleChange}
        />
        <div  className="btn text-danger" onClick={onSearchSubmit}>
                                        <i className="fa fa-search"></i>
                                    </div>
                                    </>
    )
}

export default SearchBox;