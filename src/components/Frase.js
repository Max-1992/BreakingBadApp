
import React, { useState } from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    
    @media(min-width: 992px) {
        margin-top: 16rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            position: absolute;
            left: -1rem;
            top: -1rem;
        }
    }

    p {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 1.6rem;
        text-align: right;
        color: #666;
        margin-top: 1.4rem;
        font-weight: bold;
    }
`;

const Frase = ({ frase }) => {

    if( Object.keys(frase).length === 0 ) return null;

    const { autor, descripcion } = frase;
 
    return (
        <ContenedorFrase>
             <p>
                { descripcion }
            </p>
            <h1>{ autor }</h1>
           
        </ContenedorFrase>
    );

}

export default Frase;