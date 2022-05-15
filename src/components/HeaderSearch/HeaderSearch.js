import React, {useContext, useState} from "react";
import {Button} from "../subcomponents/Button/Button";
import Search from "../subcomponents/Search/Search";
import "./HeaderSearch.css";
import {FiSearch} from "react-icons/fi";
import {serviceGetPokemonByName} from "../../services/pokemon/services";
import {PokemonContext} from "../../pages/Pokemon";


const EMPTY_KEYWORD = '';

const HeaderSearch = () => {
    const {getAllPokemon, setPokemonList} = useContext(PokemonContext);
    const [keyword, setKeyword] = useState(EMPTY_KEYWORD);


    const searchPokemon = async () => {
        if (keyword === EMPTY_KEYWORD) {
            getAllPokemon();
        } else {
            getPokemonByName(keyword);
        }
    }

    const getPokemonByName = async (pokemonName) => {
        serviceGetPokemonByName(pokemonName)
            .then(
                (response) => {
                    setPokemonList(response);
                }
            );
    }


    return (
        <section>
            <h3>Búsqueda de pokémon por nombre</h3>
            <div className="container-header">
                <div>
                    <Search setKeyword={setKeyword} placeholder="Nombre del pokemon a buscar..."/>
                </div>
                <Button type="button" buttonStyle="btn" onClick={() => searchPokemon()}>
                    <FiSearch/> Buscar
                </Button>
            </div>

        </section>
    );
};

export default HeaderSearch;
