import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";


export const MultipleCustomHooks = () => {

    const {counter,increment,decrement} = useCounter(1)
    const {data,hasError,isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    return(
        <div className="container">
            <h1>Informacion de Pokemon</h1>
            <hr />

            { isLoading ? <LoadingMessage/> : <PokemonCard id={data.id} name={data.name} sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
            ]}/>}

            <button className="btn btn-primary mt-2 mx-2" onClick={()=> counter>1 ? decrement():null}>Anterior</button>
            <button className="btn btn-primary mt-2" onClick={()=>increment()}>Siguiente</button>

        </div>
    )
}