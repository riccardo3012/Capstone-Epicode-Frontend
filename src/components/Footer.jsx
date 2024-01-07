import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "../App.css";
import validator from "validator";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const socialIconStyle = {
    width: 40,
    height: 40,
    margin: 7,
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(newEmail.includes("@"));
    setIsValidEmail(newEmail.includes("gmail"));
    setIsValidEmail(newEmail.includes("tiscali"));
    setIsValidEmail(newEmail.includes("outlook"));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    const isValidEmail = validator.isEmail(email);
    const validDomains = ["gmail.com", "outlook.com", "tiscali.com"];

    if (isValidEmail) {
      const atIndex = email.indexOf("@");
      const domain = email.substring(atIndex + 1);

      if (validDomains.includes(domain.toLowerCase())) {
        console.log("Email is valid:", email);

        // Mostra un alert quando l'email è valida
        alert("Thank you for subscribing to the newsletter!");
      } else {
        console.log("Invalid domain");
        alert("Please enter a valid email address with one of the allowed domains");
      }
    } else {
      console.log("Email is not valid");
      alert("Please enter a valid email address");
    }
  };

  return (
    <footer className="text-center" style={{ backgroundColor: "#181818", color: "white" }}>
      <Container>
        <section>
          <SocialIcon url="https://tiktok.com/" style={socialIconStyle} />
          <SocialIcon url="https://instagram.com/" style={socialIconStyle} />
          <SocialIcon url="https://facebook.com/" style={socialIconStyle} />
          <SocialIcon url="https://spotify.com/" style={socialIconStyle} />
          <SocialIcon url="https://x.com/" style={socialIconStyle} />
        </section>

        <section className="">
          <Form onSubmit={handleSubscribe}>
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs="auto" className="mb-2">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </Col>

              <Col xs="auto" className="mb-2">
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  onChange={handleEmailChange}
                  value={email}
                  style={{ width: "650px" }}
                />
              </Col>

              <Col xs="auto" className="mb-2">
                <button className="buttonSub">Subscribe</button>
              </Col>
            </Row>
          </Form>
        </section>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2023 Copyright:
        <a className="text-white" href="#">
          Moon Dispatcher.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
