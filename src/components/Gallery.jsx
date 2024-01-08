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
      <TopBar />

      <div className="container">
        <div className="row d-flex justify-content-center custom-margin">
          <Col>
            <Link to="/galleryuno" style={{ textDecoration: "none" }}>
              <Card className="card mx-auto" style={cardStyle}>
                <Card.Img variant="top" src={Img2} />
                <Card.Body className="text-center">
                  <Card.Text style={textStyle}>Imaginary Estate</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/gallerydue" style={{ textDecoration: "none" }}>
              <Card className="card mx-auto" style={cardStyle}>
                <Card.Img variant="top" src={Img1} />
                <Card.Body className="text-center">
                  <Card.Text style={textStyle}>Answering Machine</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </div>

        <div className="row d-flex justify-content-center">
          <Col>
            <Link to="/gallerytre" style={{ textDecoration: "none" }}>
              <Card className="card mx-auto" style={cardStyle}>
                <Card.Img variant="top" src={Img3} />
                <Card.Body className="text-center">
                  <Card.Text style={textStyle}>Wilderness</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/galleryquattro" style={{ textDecoration: "none" }}>
              <Card className="card mx-auto" style={cardStyle}>
                <Card.Img variant="top" src={Img4} />
                <Card.Body className="text-center">
                  <Card.Text style={textStyle}>Confidential</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
