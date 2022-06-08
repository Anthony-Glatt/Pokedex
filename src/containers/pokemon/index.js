import React, { useEffect } from "react";
import { withStore } from "src/store";

export const PokemonPage = ({store}) => {
  const { pokemon } = store;
  console.log(pokemon);
  useEffect(() => {
    if(store) {
      pokemon.getPokemon();
    }
  }, []);

  return (
    <section>
      <header>
        <h1>Pokemon</h1>
      </header>
      <main>
        <pre>
          {JSON.stringify(pokemon.pokemon, null, 2)}
        </pre>
      </main>
    </section>
  );
};

const PokemonPageWithStore = withStore(PokemonPage, 'pokemon');

export default PokemonPageWithStore;
