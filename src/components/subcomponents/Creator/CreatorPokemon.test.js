import React from "react";
import {render, screen, fireEvent, cleanup} from "@testing-library/react";
import CreatorPokemon from "./CreatorPokemon";


beforeEach(() => render(<CreatorPokemon/>))
afterEach(cleanup);


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

test('btn save should be disabled for empty form', () => {

    const pokemonName = screen.getByLabelText(/nombre:/i)
    const pokemonImage = screen.getByLabelText(/imagen:/i)

    fireEvent.change(pokemonName, {'target': {'value': ''}})
    fireEvent.change(pokemonImage, {'target': {'value': ''}})

    const btn = screen.getByRole('button', {name: 'Guardar'});
    expect(btn).toHaveAttribute('disabled');
})


test('btn save should be enabled for non-empty form', () => {

    const pokemonName = screen.getByLabelText(/nombre:/i)
    const pokemonImage = screen.getByLabelText(/imagen:/i)

    fireEvent.change(pokemonName, {'target': {'value': 'Pikachu'}})
    fireEvent.change(pokemonImage, {'target': {'value': 'https://vignette.wikia.nocookie.net/doblaje/images/e/ea/Pikachu_DP.png/revision/latest?cb=20161002183304&path-prefix=es'}})

    const btn = screen.getByRole('button', {name: 'Guardar'});
    expect(btn).not.toHaveAttribute('disabled');
})


test('btn cancel should clear form', () => {

    const pokemonName = screen.getByLabelText(/nombre:/i)
    const pokemonImage = screen.getByLabelText(/imagen:/i)
    const pokemonAttack = screen.getByLabelText(/ataque:/i)
    const pokemonDefense = screen.getByLabelText(/defensa:/i)
    const pokemonHP = screen.getByLabelText(/hp:/i)

    fireEvent.change(pokemonName, {'target': {'value': 'Pikachu'}})
    fireEvent.change(pokemonImage, {'target': {'value': 'https://vignette.wikia.nocookie.net/doblaje/images/e/ea/Pikachu_DP.png/revision/latest?cb=20161002183304&path-prefix=es'}})
    fireEvent.change(pokemonAttack, {'target': {'value': 100}})
    fireEvent.change(pokemonDefense, {'target': {'value': 100}})
    fireEvent.change(pokemonHP, {'target': {'value': 100}})

    const btn = screen.getByRole('button', {name: 'Limpiar'});
    fireEvent.click(btn);
    expect(pokemonName).toBeEmptyDOMElement();
    expect(pokemonImage).toBeEmptyDOMElement();
    expect(pokemonAttack).toBeEmptyDOMElement();
})

