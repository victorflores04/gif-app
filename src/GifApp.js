import { useState } from "react";
import React from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
   
    const [categories, setCategories] = useState(['Once Punsh']);

    // const handleAdd=()=>{
    //     setCategories( cats =>[...categories, "mari"]);
    // }

    return (
        <div>
            <h2>Gif-App</h2>
           <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>{categories.map(category=>(
                <GifGrid 
                key={category}
                category={category}/>
                ))
                }
            </ol>

        </div>
    )
}
