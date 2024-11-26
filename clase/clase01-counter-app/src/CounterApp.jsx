import { useState } from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

  console.log('entre')

  const [nombre, setNombre] = useState(" Sin nombre ");
  const [contador, setContador] = useState(value);

  const handleAdd = (event) => {
    setNombre('Eze');
    setContador(contador + 1);
  };
  const handleRem = (event) => {
    setContador(contador - 1);
  };
  const handleReset = (event) => {
    setContador(value);
  };

  return (
    <>
      <h1>{nombre}</h1>
      <h2>{contador}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRem}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.PropTypes = {
  value: PropTypes.number.isRequired,
};
