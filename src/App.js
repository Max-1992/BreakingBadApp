import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

const Boton = styled.button`
    margin-top: 3rem;
    padding: 1rem 3rem;
    border: 2px solid black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    color: #fff;
    cursor: pointer;
`;

function App() {

const initialStateFrase = {
  autor: '',
  descripcion: ''
};
const [frase, setFrase] = useState(initialStateFrase);

const getApi = async  () => {

  try {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    
    setFrase({
        autor: frase[0].author,
        descripcion: frase[0].quote
      });

  } catch (error) {
    console.log(error);
  }
 
}

useEffect(() => { 
  getApi();
}, [])

  return (
    <Contenedor>

      <Frase 
        frase={frase}
      />

      <Boton 
        onClick={getApi}
      >Breaking Bad</Boton>
    </Contenedor>
  );
}

export default App;
