import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            setCategories(cate => [inputValue, ...cate]);
            setInputValue('');
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Ingrese un nombre a buscar: </label>
            <input
                type="text"
                value = {inputValue}
                onChange = {handleInputValue}
            />
        </form>
        </>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;