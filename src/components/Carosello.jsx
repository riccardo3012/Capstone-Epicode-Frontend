import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../assets/The Basement/6. Somebody.jpeg";
import Img2 from "../assets/Imaginary Estate/3. Imaginary Estate.jpeg";
import Img3 from "../assets/The Suburbs/IMG_6234.jpeg";
import Img4 from "../assets/The Suburbs/IMG_5664.jpeg";
import Img5 from "../assets/Imaginary Estate/IMG_5998.jpeg";
import Img6 from "../assets/An Evening in The Basement/image00001 (2).jpeg";
import Img7 from "../assets/An Evening in The Basement/image00002 (2).jpeg";
import Img8 from "../assets/Imaginary Estate/IMG_5998.jpeg";
import Img9 from "../assets/An Evening in The Basement/image00006 (2).jpeg";
import Img10 from "../assets/An Evening in The Basement/image00007 (2).jpeg";
import Img11 from "../assets/An Evening in The Basement/image00008 (2).jpeg";
import Img12 from "../assets/An Evening in The Basement/image00008.jpeg";
import Img13 from "../assets/Answering Machine/Strangers4.jpeg";
import Img14 from "../assets/Answering Machine/IMG_3012.jpeg";
import Img15 from "../assets/The Basement/1. Intro.jpeg";
import Img16 from "../assets/The Basement/IMG_0195.jpeg";
import Img17 from "../assets/Imaginary Estate/IMG_5996.jpeg";
import Img18 from "../assets/An Evening in The Basement/image00003 (2).jpeg";
import Img19 from "../assets/Confidential/image00022.jpeg";

const Carosello = () => {
  const imgStyle = {
    width: "100%",
    height: "auto",
  };

  const carouselStyle = {
    Height: "50vh",
  };

  return (
    <Carousel style={carouselStyle}>
      <Carousel.Item interval={9000}>
        <img src={Img1} alt="First slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img2} alt="Second slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img3} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img4} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img5} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img6} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img7} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img8} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img9} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img10} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img11} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img12} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img13} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img14} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img15} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img16} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img17} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img18} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img src={Img19} alt="Third slide" style={imgStyle} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carosello;
