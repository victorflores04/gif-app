import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputvalue, setinputvalue] = useState('hola bby');

    const handleInputChange = (e) =>{
        setinputvalue(e.target.value);
    }
    const handleSummit =(e)=>{
        e.preventDefault();

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
