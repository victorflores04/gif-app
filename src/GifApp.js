import { useState } from "react";
import React from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {
   
    const [categories, setCategories] = useState(['Once Punsh','Samuria X', 'Dragon Ball']);

    // const handleAdd=()=>{
    //     setCategories( cats =>[...categories, "mari"]);
    // }

    return (
        <div>
            <h2>Gif-App</h2>
           <AddCategory/>
            <hr/>
            <ol>{categories.map(category=>{
                return <li key={category}>{category}</li>
            })}</ol>

        </div>
    )
}
