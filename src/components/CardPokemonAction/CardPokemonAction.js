import CreatorPokemon from "../subcomponents/Creator/CreatorPokemon";
import EditorPokemon from "../subcomponents/Editor/EditorPokemon";
import React from "react";


const CardPokemonAction = (props) => {

    return (
        <div>
            {
                props.actionSelected === "CREATE" ?
                    <CreatorPokemon {...props} />
                    :
                    <EditorPokemon {...props} />
            }
        </div>
    )
}


export default CardPokemonAction;
