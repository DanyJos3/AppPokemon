import React, {useContext} from "react";
import "./TableStats.css";
import {MdDelete} from "react-icons/md";
import {BiEdit} from "react-icons/bi";
import {serviceDeletePokemon} from "../../services/pokemon/services";
import {PokemonContext} from "../../pages/Pokemon";

const TableStats = ({selectPokemonToUpdate}) => {
    const {getAllPokemon,pokemonList} = useContext(PokemonContext);

    const deletePokemon = async (id) => {
        serviceDeletePokemon(id).then(
            (response) => {
                alert(`Pokemon ${response.name} eliminado con éxito`)
                getAllPokemon();
            }
        );
    }


    return (
        <div style={{overflowX: 'auto'}}>

            <table className="container-table">
                <tbody className="table-body">
                <tr className="body-title">
                    <th id="cell0-0">Nombre</th>
                    <th id="cell0-1">Imagen</th>
                    <th id="cell0-2">Ataque</th>
                    <th id="cell0-3">Defensa</th>
                    <th id="cell0-4">HP</th>
                    <th id="cell0-5">Acciones</th>
                </tr>

                {pokemonList?.map((pokemon) => {
                    return <tr key={pokemon.id}>
                        <td>{pokemon.name}</td>
                        <td>
                            <img className="pokemon-image" src={pokemon.image} alt=""/>
                        </td>
                        <td>{pokemon.attack}</td>
                        <td>{pokemon.defense}</td>
                        <td>{pokemon.hp}</td>
                        <td>
                            <button className="btn-icon" onClick={() => selectPokemonToUpdate(pokemon)}>
                                <BiEdit></BiEdit></button>
                            <button className="btn-icon" onClick={() => deletePokemon(pokemon.id)}><MdDelete></MdDelete>
                            </button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default TableStats;
