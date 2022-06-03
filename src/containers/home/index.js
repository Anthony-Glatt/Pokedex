import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { withStore } from 'src/store';

/**
 * @function
 * @memberof containers
 * @param {object} props The component props
 * @param {object} props.store The app store
 * @returns {React.Component} The rendered component
 */
export const HomePage = ({store}) => {
    return (
        <section className="home">
            <header>
                <h1>Home</h1>
            </header>
            <main className="home__content">
                
            </main>
        </section>
    );
};