import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import TopBar from "./Topbar";
import Footer from "./Footer";
import ImgDisco from "../assets/moon dispatcher.jpg";
import ImgPoster1 from "../assets/Answering Machine/IMG_2794.jpeg";
import ImgPoster2 from "../assets/Imaginary Estate/IMG_5951.jpeg";
import ImgPoster3 from "../assets/The Suburbs/IMG_5655.jpeg";
import sfondo from "../assets/sfondoNeroCard.png";
import { ShoppingCart } from "lucide-react";
import "../App.css";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    email: "",
    phoneNumber: "",
  });

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((item, i) => i !== index));
    setCartCount((prevCount) => prevCount - 1);
  };

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
    setShowPurchaseForm(false);
  };

  const handleShowPurchaseForm = () => {
    setShowPurchaseForm(true);
  };

  const handlePurchase = () => {
    // Controlla se il carrello è vuoto
    if (cartItems.length === 0) {
      alert("Il carrello è vuoto. Aggiungi degli articoli prima di procedere all'acquisto.");
      return;
    }

    // Controlla se tutti i campi del form dell'utente sono stati compilati
    const isUserInfoIncomplete = Object.values(userInfo).some((value) => value === "");
    if (isUserInfoIncomplete) {
      alert("Completa tutti i campi del form prima di procedere all'acquisto.");
      return;
    }

    // Se il carrello non è vuoto e tutti i campi del form sono compilati, procedi con l'acquisto
    alert("Ordine effettuato!");
    setUserInfo({
      firstName: "",
      lastName: "",
      city: "",
      address: "",
      email: "",
      phoneNumber: "",
    });
    setCartItems([]);
    setCartCount(0);
    setShowPurchaseForm(false);
    setShowCart(false);
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${sfondo})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <TopBar />

        <Container>
          {/* Prima riga con una sola card */}
          <Row>
            <Col>
              <Card className="disco-card" style={{ width: "18rem", marginTop: "200px" }} bg="dark" text="light">
                <Card.Img variant="top" src={ImgDisco} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Unspecified Pictures</Card.Title>
                  <Card.Text>Disco</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart({ name: "Unspecified Pictures - Disco", price: 9.99 })}
                    className="btn-fade"
                  >
                    9.99€
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Seconda riga con tre card */}
          <Row style={{ marginTop: "40px", marginBottom: "50px" }}>
            <Col>
              <Card style={{ width: "18rem" }} bg="dark" text="light">
                <Card.Img variant="top" src={ImgPoster1} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Poster</Card.Title>
                  <Card.Text>Some of our best shots</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart({ name: "Poster - Shot 1", price: 4.99 })}
                    className="btn-fade"
                  >
                    4.99 €
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} bg="dark" text="light">
                <Card.Img variant="top" src={ImgPoster2} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Poster</Card.Title>
                  <Card.Text>Some of our best shots</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart({ name: "Poster - Shot 2", price: 4.99 })}
                    className="btn-fade"
                  >
                    4.99€
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} bg="dark" text="light">
                <Card.Img variant="top" src={ImgPoster3} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Poster</Card.Title>
                  <Card.Text>Some of our best shots</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart({ name: "Poster - Shot 3", price: 4.99 })}
                    className="btn-fade"
                  >
                    4.99€
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Icona del carrello in fondo alla pagina */}
          <Row className="justify-content-center mb-5">
            <Col xs="auto">
              <div
                style={{
                  cursor: "pointer",
                  transition: "color 0.3s",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handleShowCart}
                onMouseEnter={(e) => (e.target.style.color = "#4CAF50")}
                onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
              >
                <ShoppingCart size={46} color="#ffffff" onClick={handleShowCart} />
                {cartCount > 0 && <span style={{ color: "white", marginLeft: "5px" }}>{cartCount}</span>}
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />

        {/* Modal per mostrare il carrello e il form */}
        <Modal show={showCart} onHide={handleCloseCart}>
          <Modal.Header closeButton>
            <Modal.Title>Carrello</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {cartItems.map((item, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center">
                <div>
                  <p>{item.name}</p>
                  <p>{item.price}€</p>
                </div>
                <Button variant="danger" onClick={() => handleRemoveFromCart(index)}>
                  Rimuovi
                </Button>
              </div>
            ))}
            <p>Somma totale: {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}€</p>

            {/* Button to show purchase form */}
            <Button variant="success" onClick={handleShowPurchaseForm}>
              Procedi all'acquisto
            </Button>
          </Modal.Body>

          {/* User information form */}
          <Modal.Footer>
            {showPurchaseForm && (
              <Container>
                {/* Prima riga */}
                <Row className="mb-3">
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        value={userInfo.firstName}
                        onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        value={userInfo.lastName}
                        onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Seconda riga */}
                <Row className="mb-3">
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Group controlId="formCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your city"
                        value={userInfo.city}
                        onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Group controlId="formAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        value={userInfo.address}
                        onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Terza riga */}
                <Row className="mb-3">
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Group controlId="formPhoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        value={userInfo.phoneNumber}
                        onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3 justify-content-center">
                  <Button variant="success" onClick={handlePurchase}>
                    Acquista
                  </Button>
                </Row>
              </Container>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Shop;
