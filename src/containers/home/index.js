import React, { useEffect } from 'react';
// import { PropTypes } from 'prop-types';
import { withStore } from 'src/store';
import './styles.scss';

/**
 * @function
 * @memberof containers
 * @param {object} props The component props
 * @param {object} props.store The app store
 * @returns {React.Component} The rendered component
 */
export const HomePage = ({store}) => {
  const { pokemon } = store;

  useEffect(() => {
    if (store) {
      pokemon.getPokemon();
   }
  }, []);

  return (
    <section className="home">
      <header>
        <h1>Home</h1>
      </header>
      <main className="home__content">
        {pokemon.pokemon.length === 0 ? (
          <button onClick={() => pokemon.reset()}>Reset</button>
        ) : (
          <button onClick={() => pokemon.getPokemon()}>Next</button>
        )}
        <pre>
          {JSON.stringify(pokemon.pokemon, null, 2)}
        </pre>
      </main>
    </section>
  );
};

const HomePageWithStore = withStore(HomePage, 'pokemon')

export default HomePageWithStore;
