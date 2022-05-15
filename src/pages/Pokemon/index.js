import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import TableStats from "../../components/TableStats/TableStats";
import React, {useState} from "react";
import CardPokemonAction from "../../components/CardPokemonAction/CardPokemonAction";
import "./index.css"
import {serviceGetAllPokemons} from "../../services/pokemon/services";


export const PokemonContext = React.createContext(null);


const PokemonComponent = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [actionSelected, setActionSelected] = useState("CREATE")
    const [pokemonToUpdate, setPokemonToUpdate] = useState(undefined)


    const selectPokemonToUpdate = (pokemon) => {
        setPokemonToUpdate(pokemon);
        setActionSelected('EDIT')
    }

    const getAllPokemon = async () => {
        await serviceGetAllPokemons()
            .then((response) => {
                setPokemonList(response.sort().reverse());
            });
    }


    return (
        <div className="container-main">
            <h1 className="text-center">Lista de Pokémons</h1>
            <PokemonContext.Provider
                value={{pokemonList,setPokemonList,getAllPokemon}}>
                <CardPokemonAction
                    actionSelected={actionSelected}
                    pokemonToUpdate={pokemonToUpdate}
                    setActionSelected={setActionSelected}
                />
                <HeaderSearch
                />
                <TableStats
                    selectPokemonToUpdate={selectPokemonToUpdate}
                />
            </PokemonContext.Provider>

        </div>
    )
}

export default PokemonComponent;
