import './index.css'
import Carousel from 'react-bootstrap/Carousel';
import flores from "../AppCarousel/img/Flores.jpg"
import familia from "../AppCarousel/img/Familia.jpg"
import silletas from "../AppCarousel/img/Silletas.jpg"

// const caption = "Bienvenidos a la Familia Londoño!";

function Carusel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={flores}
          alt=""
        />
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={familia}
          alt=""
        />
        {/* <Carousel.Caption>
        <h1>{caption}</h1>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={silletas}
          alt=""
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default Carusel;
