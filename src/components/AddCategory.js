import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputvalue, setinputvalue] = useState('');

    const handleInputChange = (e) =>{
        setinputvalue(e.target.value);
    }
    const handleSummit =(e)=>{
        e.preventDefault();

        if(inputvalue.trim().length > 2){
           setCategories(cats =>[...cats, inputvalue]); 
           setinputvalue('');
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSummit}>
                <h1>{inputvalue}</h1>
                <input  
                type="text"
                value={inputvalue}
                onChange={handleInputChange}
                />  
            </form>
           
        </div>
    )
}
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}