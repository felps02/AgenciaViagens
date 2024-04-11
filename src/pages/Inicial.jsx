import React from 'react';
import CarrosselInicial from '../components/CarrosselInicial';

const Inicial = () => {
  return (
    <div>
      <CarrosselInicial />
      {<div>
      <h1>Promoções e Destinos Populares</h1>
      <h2>Promoções</h2>
      <ul>
        <li>Promoção 1</li>
        <li>Promoção 2</li>
        <li>Promoção 3</li>
      </ul>
      <h2>Destinos Populares</h2>
      <ul>
        <li>Destino 1</li>
        <li>Destino 2</li>
        <li>Destino 3</li>
      </ul>
    </div>
    }
    </div>
  );
}

export default Inicial;