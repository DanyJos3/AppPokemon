import React from "react";
import {screen, render} from "@testing-library/react";
import TableStats from "./TableStats";


beforeEach(() => render(<TableStats/>));

describe('TableStats render', () => {
    it('must display colum name', () => {
        const columnName = screen.queryByText(/nombre/i)
        expect(columnName).toBeInTheDocument();
    });

    it('must display colum image', () => {
        const columnImage = screen.queryByText(/imagen/i)
        expect(columnImage).toBeInTheDocument();
    });

    it('must display colum attack', () => {
        const columnAttack = screen.queryByText(/ataque/i)
        expect(columnAttack).toBeInTheDocument();
    });

    it('must display colum defense', () => {
        const columnDefense = screen.queryByText(/defensa/i)
        expect(columnDefense).toBeInTheDocument();
    });

    it('must display colum hp', () => {
        const columnHp = screen.queryByText(/hp/i)
        expect(columnHp).toBeInTheDocument();
    });

});

