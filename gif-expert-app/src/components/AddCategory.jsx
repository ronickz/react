import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
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
