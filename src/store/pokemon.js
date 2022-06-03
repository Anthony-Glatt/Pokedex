import {
    action,
    observable,
    runInAction,
    makeAutoObservable,
} from 'mobx';

/**
 * The store for pokemon
 * 
 * @memberof store
 * @class
 */
class PokemonStore {
    error = null;
    limit = 100;
    offset = 0;
    pokemon = [];
    response = {};

    constructor() {
        makeAutoObservable(this, {
            reset: action,
            error: observable,
            pokemon: observable,
            getPokemon: action,
        });
    }

    /**
     * Reset offset param in pokemon fetch call
     * 
     * @function
     */
    async reset() {
        runInAction(() => {
            this.offset = 0;
        });
        this.getPokemon();
    }

    /**
     * @function
     */
    async getPokemon() {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset * this.limit}`)
            .then(res => res.json())
            .then((res) => {
                runInAction(() => {
                    this.response = res;
                    this.pokemon = res.results;
                    this.offset = this.offset === 0 ? this.offset + 2 : this.offset + 1;
                });
            })
            .catch((err) => {
                this.error = err;
            });
    }
}

export default PokemonStore;
