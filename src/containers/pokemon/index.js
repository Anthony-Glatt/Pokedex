import React, { useState, useEffect } from "react";
import { withStore } from "src/store";
import InputField from '../../components/input';
import Button from '../../components/button';

export const PokemonPage = ({store}) => {
  const { pokemon } = store;
  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => {
    if(store) {
      pokemon.getPokemonList();
    }
  }, []);

  const handleClick = (name) => {
    console.log(name);
    pokemon.getPokemon(name);
  };

  return (
    <section>
      <header>
        <h1>Pokemon</h1>
      </header>
      <InputField label={"Search"} placeholder={"Name"} handleChange={handleChange} />
      <Button handleClick={() => handleClick(inputValue)} />
      <div>
        <pre>
          {JSON.stringify(pokemon.pokemon, null, 2)}
        </pre>
      </div>
    </section>
  );
};

const PokemonPageWithStore = withStore(PokemonPage, 'pokemon');

export default PokemonPageWithStore;
