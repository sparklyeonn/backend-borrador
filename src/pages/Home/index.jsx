import React from "react";
import { Carousel } from "react-bootstrap";
import "./styles.css"; // Asegúrate de tener el archivo styles.css para personalizar el carrusel

const MusicCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://example.com/music-carousel-image1.jpg"  // Reemplaza con la URL de tu imagen
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Descubre los últimos lanzamientos</h3>
          <p>Explora la música más reciente en nuestra tienda.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://example.com/music-carousel-image2.jpg"  // Reemplaza con la URL de tu imagen
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Encuentra tu instrumento perfecto</h3>
          <p>Explora nuestra selección de instrumentos musicales para todos los niveles.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://example.com/music-carousel-image3.jpg"  // Reemplaza con la URL de tu imagen
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Ofertas exclusivas</h3>
          <p>¡No te pierdas nuestras ofertas especiales en instrumentos y accesorios!</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Puedes agregar más elementos según sea necesario */}
    </Carousel>
  );
};

const Home = () => {
  return (
    <>
      <MusicCarousel />
      <p>
        Bienvenido a nuestra tienda de música, donde encontrarás todo lo que necesitas
        para tu pasión por la música. Explora nuestro catálogo y descubre nuevas
        experiencias musicales.
      </p>
    </>
  );
};

export default Home;
