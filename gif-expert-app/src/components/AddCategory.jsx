import React, { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if( inputValue.trim().length <= 1 ) return;

    onNewCategory( inputValue.trim() )
    setInputValue('')
  };

  return (
    //(event) => onSubmit(event) == OnSubmit
    <form onSubmit={(event) => onSubmit(event)} action="">
      <input
        type="text"
        placeholder="
    Buscar Gif"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
