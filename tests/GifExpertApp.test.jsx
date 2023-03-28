import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en el GifExpertApp', () => { 

    test('Probamos si existe un valor en categories y mostrarlo en el html', () => { 

        render( <GifExpertApp /> );
        const categories = screen.getByText('One Punch');

        expect( categories.innerHTML ).toBe('One Punch');

     });

     test('probamos la existencia de una categoria', () => { 

        render( <GifExpertApp /> );

      })

 })