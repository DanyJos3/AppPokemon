import React, {useContext, useState} from "react";
import "./CreatorPokemon.css";
/* Components */
import {Button} from "../Button/Button";
import InputRange from "../InputRange/InputRange";
import Input from "../Input/Input";
/* Icons */
import {RiSave2Fill} from "react-icons/ri";
import {CgErase} from "react-icons/cg";
import {serviceCreatePokemon} from "../../../services/pokemon/services";
import {PokemonContext} from "../../../pages/Pokemon";

const CreatorPokemon = () => {
    const {getAllPokemon} = useContext(PokemonContext);
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonImage, setPokemonImage] = useState("");
    const [pokemonAttack, setPokemonAttack] = useState(50);
    const [pokemonDefense, setPokemonDefense] = useState(50);
    const [pokemonHP, setPokemonHP] = useState(50);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            "name": pokemonName,
            "type": "normal",
            "hp": pokemonHP,
            "attack": pokemonAttack,
            "defense": pokemonDefense,
            "idAuthor": 1,
            "image": pokemonImage,
        }
        createPokemon(data);
    }

    const reset = () => {
        setPokemonName("");
        setPokemonImage("");
        setPokemonDefense(50);
        setPokemonAttack(50);
        setPokemonHP(50)
        document.getElementById("name").value = "";
        document.getElementById("image").value = "";
        document.getElementById("attack").value = 50;
        document.getElementById("defense").value = 50;
        document.getElementById("hp").value = 50;
    }


    const createPokemon = async (pokemon) => {
        serviceCreatePokemon(pokemon).then(
            (response) => {
                alert(`Pokemon ${response.name} creado con éxito`)
                getAllPokemon();
            }
        );
    }

    return (
        <section className="creator-container">
            <h3> Crear Nuevo Pokémon</h3>
            <form onSubmit={handleSubmit}>
                <section className="container-left">
                    <div>
                        <Input id="name" onChange={(event) => setPokemonName(event.target.value)} label="Nombre"
                               placeholder="Nombre"/>
                        <Input id="image" onChange={(event) => setPokemonImage(event.target.value)} label="Imagen"
                               placeholder="Url de la imagen"/>
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
                        disabled={pokemonName === '' || pokemonImage === ''}
                        type="submit"
                    >

                        <RiSave2Fill/>
                        Guardar
                    </Button>
                    <Button buttonStyle="btn" type="button" onClick={() => reset()}>
                        <CgErase/> Limpiar
                    </Button>
                </section>
            </form>
        </section>
    );
};

export default CreatorPokemon;
