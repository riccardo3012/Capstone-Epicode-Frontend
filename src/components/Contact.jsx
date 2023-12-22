import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import TopBar from "./Topbar";
import Footer from "./Footer";
import sfondo from "../assets/sfondoNeroCard.png";
import "../App.css";

const Contact = () => {
  return (
    <div
      style={{
        height: "100%",
        backgroundImage: `url(${sfondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <TopBar />
      <Container>
        <Row className="align-items-center">
          <Col
            className="text-white text-center"
            style={{
              marginTop: "160px",
              fontFamily: "Brush Script MT, Brush Script Std, cursive",
              fontSize: "80px",
            }}
          >
            Moon Dispatcher
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center d-flex flex-column align-items-center">
            <Button
              className="my-3"
              style={{
                background: "transparent",
                borderColor: "#E7E7BD",
                color: "#E7E7BD",
                borderRadius: "15px",
                borderWidth: "2.5px",
                fontWeight: "100px",
                fontSize: "25px",
              }}
            >
              Management
            </Button>
            <div
              className="my-3"
              style={{
                background: "transparent",
                borderColor: "#E7E7BD",
                color: "#E7E7BD",
                borderRadius: "15px",
                borderWidth: "2.5px",
                fontWeight: "100px",
                fontSize: "15px",
                fontFamily: "Lastica",
              }}
            >
              <Row style={{ marginLeft: "20px" }}>Nello Taver</Row>
              <Row>NelloTaver@gmail.com</Row>
            </div>
          </Col>
        </Row>

        {/* Seconda parte */}
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center d-flex flex-column align-items-center">
            <Button
              className="my-3"
              style={{
                background: "transparent",
                borderColor: "#E7E7BD",
                color: "#E7E7BD",
                borderRadius: "15px",
                borderWidth: "2.5px",
                fontWeight: "100px",
                fontSize: "25px",
              }}
            >
              Bookings
            </Button>
            <div
              className="my-3"
              style={{
                background: "transparent",
                borderColor: "#E7E7BD",
                color: "#E7E7BD",
                borderRadius: "15px",
                borderWidth: "2.5px",
                fontWeight: "100px",
                fontSize: "15px",
                fontFamily: "Lastica",
              }}
            >
              <Row style={{ marginLeft: "20px" }}>Nello Taver</Row>
              <Row>NelloTaver@gmail.com</Row>
            </div>
          </Col>
        </Row>

        {/* Terza parte */}
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center d-flex flex-column align-items-center">
            <Button
              className="my-3"
              style={{
                background: "transparent",
                borderColor: "#E7E7BD",
                color: "#E7E7BD",
                borderRadius: "15px",
                borderWidth: "2.5px",
                fontWeight: "100px",
                fontSize: "25px",
              }}
            >
              Press
            </Button>
            <div
              className="my-3"
              style={{
                background: "transparent",
                borderColor: "#E7E7BD",
                color: "#E7E7BD",
                borderRadius: "15px",
                borderWidth: "2.5px",
                fontWeight: "100px",
                fontSize: "15px",
                fontFamily: "",
              }}
            >
              <Row style={{ marginLeft: "45px" }}>Italy</Row>
              <Row style={{ marginLeft: "22px" }}>Nello Taver</Row>
              <Row style={{ marginBottom: "3px" }}>NelloTaver@gmail.com</Row>
            </div>
          </Col>
        </Row>

        {/* Quarta parte */}
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center d-flex flex-column align-items-center">
            <Button
              className="my-3"
              style={{
                background: "transparent",
                borderColor: "#E7E7BD",
                color: "#E7E7BD",
                borderRadius: "15px",
                borderWidth: "2.5px",
                fontWeight: "100px",
                fontSize: "25px",
              }}
            >
              Photographer
            </Button>
            <div
              className="my-3"
              style={{
                background: "transparent",
                borderColor: "#E7E7BD",
                color: "#E7E7BD",
                borderRadius: "15px",
                borderWidth: "2.5px",
                fontWeight: "100px",
                fontSize: "15px",
                fontFamily: "",
              }}
            >
              <Row style={{ marginLeft: "22px" }}>Simone Sabatucci</Row>
              <Row style={{ marginBottom: "5px" }}>SimoneSabatucci@gmail.com</Row>
              <Row>
                <a
                  style={{ marginBottom: "26px" }}
                  href="https://www.instagram.com/simone_sabatucci?igshid=NzZlODBkYWE4Ng=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="28px" height="28px" viewBox="0 0 200 200">
                    <defs>
                      <linearGradient id="gradient1" x1=".8" y1=".8" x2="0">
                        <stop offset="0" stopColor="#c92bb7" />
                        <stop offset="1" stopColor="#3051f1" />
                      </linearGradient>
                      <radialGradient id="gradient2" cx=".2" cy="1" r="1.2">
                        <stop offset="0" stopColor="#fcdf8f" />
                        <stop offset=".1" stopColor="#fbd377" />
                        <stop offset=".25" stopColor="#fa8e37" />
                        <stop offset=".35" stopColor="#f73344" />
                        <stop offset=".65" stopColor="#f73344" stopOpacity="0" />
                      </radialGradient>

                      <rect id="logoContainer" x="0" y="0" width="200" height="200" rx="50" ry="50" />
                    </defs>

                    <use href="#logoContainer" fill="url(#gradient1)" />
                    <use href="#logoContainer" fill="url(#gradient2)" />

                    <rect
                      x="35"
                      y="35"
                      width="130"
                      height="130"
                      rx="30"
                      ry="30"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="13"
                    />
                    <circle cx="100" cy="100" r="32" fill="none" stroke="#fff" strokeWidth="13" />

                    <circle cx="140" cy="62" r="9" fill="#fff" />
                  </svg>
                  <span style={{ marginLeft: "9px" }}>Instagram</span>
                </a>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
