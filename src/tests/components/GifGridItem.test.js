import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {

    const title = 'un título';
    const url = 'https://locahost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url }/> )
    
    test('Debe de mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de tener un párrafo con el título', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });
    
    test('Debe de tener la imágen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('Debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );

    });

})
