/** @namespace store */

import React, { useContext, createContext } from "react";
import { PropTypes } from "prop-types";
import { observer } from 'mobx-react';

/**
 * @private
 * @memberof store
 */
const _store = {
    pokemon: new PokemonStore(),
};

/**
 * Exception when attempting to access invalid store slice
 * 
 * @class
 * @private
 * @memberof store
 * @param {string} message The exception message
 */
class InvalidStoreSliceException {
    constructor(message) {
        this.message = message;
    }
}

/**
 * The store context for React
 * 
 * @memberof store 
 */
export const StoreContext = createContext(_store);

/**
 * Hook to povide the store context in a function component
 * 
 * @function
 * @memberof store
 * @throws {InvalidStoreSliceException}
 * @param {string} slice Optional piece of store 
 * @returns {object} The StoreContext
 */
export const useStore = (slice) => {
    let store = useContext(StoreContext);

    if (slice.length > 0) {
        store = pick(store, slice);
    }

    if (!store) throw new InvalidStoreSliceException(`Trying to access an invalid store: ${slice}`);

    return store;
};

/**
 * HOC to provide store, either all or by slice, to a component
 * 
 * @function
 * @memberof store
 * @param {Function} WrappedComponent The component to provice the store to
 * @param {string} slice Optional piece of store state
 * @returns {Function} Wrapped component with store and props
 */
export const withStore = (WrappedComponent, slice) => {
    const ObserverComponent = observer(WrappedComponent);

    return function WrapperComponent(props) {
        if (!slice) slice = '';
        const cleanStore = slice.replace(' ', '');
        const splitStore = cleanStore.split(',');
        const store = useStore(splitStore);

        return (
            <ObserverComponent store={store} {...props} />
        );
    };
};

/**
 * The React store provider for the store's context
 * 
 * @memberof store
 * @see {@link StoreContext}
 * @param {object} props The passed props
 * @returns {React.Component} The rendered component
 */
export const StoreProvider = (props) => {
    return (
        <StoreContext.Provider value={_store}>
            {props.children}
        </StoreContext.Provider>
    );
};

StoreProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.string
    ]),
};

StoreProvider.defaultProps = {
    children: null,
};

export default StoreProvider;