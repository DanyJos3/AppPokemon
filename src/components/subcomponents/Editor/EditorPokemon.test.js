import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import EditorPokemon from "./EditorPokemon";


beforeEach(() => render(<EditorPokemon/>))
test('renders form properly', () => {

    const pokemonName = screen.getByLabelText(/nombre:/i)
    const pokemonImage = screen.getByLabelText(/imagen:/i)
    const pokemonAttack = screen.getByLabelText(/ataque:/i)
    const pokemonDefense = screen.getByLabelText(/defensa:/i)
    const pokemonHP = screen.getByLabelText(/hp:/i)

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonName).toHaveAttribute('type', 'text')

    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute('type', 'text')


    expect(pokemonAttack).toBeInTheDocument();
    expect(pokemonAttack).toHaveAttribute('type', 'range')

    expect(pokemonDefense).toBeInTheDocument();
    expect(pokemonDefense).toHaveAttribute('type', 'range')

    expect(pokemonHP).toBeInTheDocument();
    expect(pokemonHP).toHaveAttribute('type', 'range')
});


test('btn should be disabled for empty form', () => {

    const pokemonName = screen.getByLabelText(/nombre:/i)
    const pokemonImage = screen.getByLabelText(/imagen:/i)

    fireEvent.change(pokemonName, {'target': {'value': ""}})
    fireEvent.change(pokemonImage, {'target': {'value': ""}})

    const btnEdit = screen.getByRole('button', {name: 'Actualizar'});
    // expect(btnEdit).toBeDisabled();
})

test('btn should be enabled for non-empty form', () => {

    const pokemonName = screen.getByLabelText(/nombre:/i)
    const pokemonImage = screen.getByLabelText(/imagen:/i)

    fireEvent.change(pokemonName, {'target': {'value': 'Pikachu'}})
    fireEvent.change(pokemonImage, {'target': {'value': 'https://vignette.wikia.nocookie.net/doblaje/images/e/ea/Pikachu_DP.png/revision/latest?cb=20161002183304&path-prefix=es'}})

    const btn = screen.getByRole('button', {name: 'Actualizar'});
    expect(btn).not.toHaveAttribute('disabled');
})
