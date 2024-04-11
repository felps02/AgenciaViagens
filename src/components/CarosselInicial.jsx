import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarrosselInicial = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="path-to-image1.jpg"
          alt="Primeira diapositiva"
        />
        <Carousel.Caption>
          <h3>Promoção Exclusiva</h3>
          <p>Navegue com estilo e economize até 30%.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="path-to-image2.jpg"
          alt="Segunda diapositiva"
        />

        <Carousel.Caption>
          <h3>Destino Popular</h3>
          <p>Explore as maravilhas das Maldivas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Mais itens aqui */}
    </Carousel>
  );
};

export default CarrosselInicial;