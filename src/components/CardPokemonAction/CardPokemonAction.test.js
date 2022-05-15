import React from "react";
import {screen, render} from "@testing-library/react";
import CardPokemonAction from "./CardPokemonAction";


beforeEach(() => render(<CardPokemonAction/>));

describe('Component render', () => {
    it('must display', () => {
        screen.debug();
    });



});
