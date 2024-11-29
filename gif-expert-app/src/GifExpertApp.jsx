import React from "react";
import { useState } from "react";
import {AddCategory} from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ])

    const onAddCategory = (newCategory) => {
        setCategories([...categories,newCategory])
    }

    return (
    <>
      {/* Titulo */}

      <h1>GifExpertApp</h1>

      {/* Input */}

      <AddCategory onNewCategory={onAddCategory}></AddCategory>

      {/* Listado de Items */}

      <ol> 
        {categories.map(category => {
            return <li key={category}>{category}</li>
        })}
      </ol>
      
      {/* Gif item */}
    </>
  );
};
