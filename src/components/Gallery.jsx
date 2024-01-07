import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopBar from "./Topbar";
import Footer from "./Footer";
import Img1 from "../assets/Answering Machine/IMG_3012.jpeg";
import Img2 from "../assets/Confidential/image00003.jpeg";
import Img3 from "../assets/Confidential/8. I Hope.jpeg";
import Img4 from "../assets/The Basement/IMG_0195.jpeg";
import sfondoCard from "../assets/sfondoNeroCard.png";
import "../App.css";

const Gallery = () => {
  const cardStyle = {
    width: "23rem",
    height: "auto",
    background: `url(${sfondoCard})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const textStyle = {
    color: "white",
  };

  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div
      className="d-flex flex-column"
      style={{
        height: "100%",
        backgroundImage: `url(${sfondoCard})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <TopBar className="top-bar" />
      <Row className="justify-content-center align-items-center mt-5">
        {/* Prima riga */}
        <Col md={3} className="mb-4" style={{ marginRight: "150px", marginTop: "150px" }}>
          <Link to="/gallerytre" style={linkStyle}>
            <Card className="second-custome-card" style={cardStyle}>
              <Card.Img variant="top" src={Img2} />
              <Card.Body className="text-center">
                <Card.Text style={textStyle}>Answering Machine</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={3} className="mb-4" style={{ marginRight: "20px", marginTop: "190px" }}>
          <Link to="/galleryquattro" style={linkStyle}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={Img1} />
              <Card.Body className="text-center">
                <Card.Text style={textStyle}>Confidential</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4 mb-5">
        {/* Seconda riga */}
        <Col md={3} className="mb-4" style={{ marginRight: "150px" }}>
          <Link to="/gallerytre" style={linkStyle}>
            <Card className="second-custome-card" style={cardStyle}>
              <Card.Img variant="top" src={Img3} />
              <Card.Body className="text-center">
                <Card.Text style={textStyle}>Imaginary Estate</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={3} className="mb-4" style={{ marginRight: "20px" }}>
          <Link to="/galleryquattro" style={linkStyle}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={Img4} />
              <Card.Body className="text-center">
                <Card.Text style={textStyle}>The Basement</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Gallery;
