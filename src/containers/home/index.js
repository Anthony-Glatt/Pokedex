import React, { Fragment } from 'react';
import './styles.scss';
import { withStore } from '../../store';
import Card from '../../components/card';

/**
 * @function
 * @memberof containers
 * @returns {React.Component} The rendered component
 */
export const HomePage = ({store}) => {
  const { theme } = store;
  return (
    <Fragment>
      <h1>Home</h1>
      <button onClick={() => theme.toggleTheme()}>{theme.theme}</button>
      <Card
        title="Pokemon"
      />
    </Fragment>
  );
};

export const HomePageWithStore = withStore(HomePage, 'theme');

export default HomePageWithStore;
