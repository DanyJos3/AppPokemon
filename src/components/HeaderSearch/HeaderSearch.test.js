import React from "react";
import {screen, render, fireEvent} from "@testing-library/react";
import HeaderSearch from "./HeaderSearch";


beforeEach(() => render(<HeaderSearch/>));

describe('HeaderSearch render', () => {
    it('must display button Buscar', () => {
        const buttonName = screen.queryByText(/buscar/i)
        expect(buttonName).toBeInTheDocument();
    });

});

test('Test find service', async () => {


    const inputKeyword = screen.getByLabelText(/keyword/i)
    const buttonSearch = screen.getByRole('button',{name: /buscar/i})

    fireEvent.change(inputKeyword, {target:{value:'Pikachu'}})
    fireEvent.click(buttonSearch);



    screen.debug();

});
