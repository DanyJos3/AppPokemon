import React, {useContext, useEffect, useState} from "react";
import "./EditorPokemon.css";
/* Components */
import {Button} from "../Button/Button";
import InputRange from "../InputRange/InputRange";
import Input from "../Input/Input";
/* Icons */
import {RiSave2Fill} from "react-icons/ri";
import {MdClear} from "react-icons/md";
import {serviceUpdatePokemon} from "../../../services/pokemon/services";
import {PokemonContext} from "../../../pages/Pokemon";

const EditorPokemon = ({pokemonToUpdate, setActionSelected}) => {
    const {getAllPokemon}= useContext(PokemonContext);
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonImage, setPokemonImage] = useState("");
    const [pokemonAttack, setPokemonAttack] = useState("");
    const [pokemonDefense, setPokemonDefense] = useState("");
    const [pokemonHP, setPokemonHP] = useState("");

    useEffect(() => {
        setPokemonName(pokemonToUpdate?.name);
        setPokemonImage(pokemonToUpdate?.image);
        setPokemonAttack(pokemonToUpdate?.attack);
        setPokemonDefense(pokemonToUpdate?.defense);
        setPokemonHP(pokemonToUpdate?.hp);
    }, [pokemonToUpdate])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            "id": pokemonToUpdate.id,
            "name": pokemonName,
            "type": "normal",
            "hp": pokemonHP,
            "attack": pokemonAttack,
            "defense": pokemonDefense,
            "idAuthor": 1,
            "image": pokemonImage,
        }
        updatePokemon(data);
    }

    const updatePokemon = async (pokemon) => {
        serviceUpdatePokemon(pokemon).then(
            (response) => {
                alert(`Pokemon ${response.name} actualizado con éxito`)
                getAllPokemon();
            }
        );
    }


    return (
        <section className="creator-container">
            <h3> Editar Información Pokémon</h3>
            <form onSubmit={handleSubmit}>
                <section className="container-left">
                    <div>
                        <Input id="name" onChange={(event) => setPokemonName(event.target.value)} label="Nombre"
                               placeholder="Nombre"
                               value={pokemonName}
                        />
                        <Input id="image" onChange={(event) => setPokemonImage(event.target.value)} label="Imagen"
                               placeholder="Imagen"
                               value={pokemonImage}
                        />
                    </div>
                    <div>
                        <InputRange id="attack" onChange={(event) => setPokemonAttack(event.target.value)}
                                    label="Ataque"
                                    value={pokemonAttack}/>
                        <InputRange id="defense" onChange={(event) => setPokemonDefense(event.target.value)}
                                    label="Defensa"
                                    value={pokemonDefense}/>
                        <InputRange id="hp" onChange={(event) => setPokemonHP(event.target.value)} label="HP"
                                    value={pokemonHP}/>
                    </div>
                </section>
                <section className="container-right">
                    <Button
                        disabled={pokemonName === "" || pokemonImage === ""}
                        type="submit">

                        <RiSave2Fill/>
                        Actualizar
                    </Button>
                    <Button onClick={() => setActionSelected("CREATE")} buttonStyle="btn" type="button">
                        <MdClear/> Cancelar
                    </Button>
                </section>
            </form>
        </section>
    );
};

export default EditorPokemon;
