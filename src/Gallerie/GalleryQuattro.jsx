import React, { useState } from "react";
import { Container, Card, Row, Modal } from "react-bootstrap";
import TopBar from "../components/Topbar";
import Footer from "../components/Footer";
import Img1 from "../assets/The Suburbs/10. Lie Prov..jpeg";
import Img2 from "../assets/The Suburbs/4. Pretending.jpg";
import Img3 from "../assets/The Suburbs/9. Where Are We Now.jpeg";
import Img4 from "../assets/The Suburbs/IMG_5495.jpeg";
import Img5 from "../assets/The Suburbs/IMG_5598.jpeg";
import Img6 from "../assets/The Suburbs/IMG_5655.jpeg";
import Img7 from "../assets/The Suburbs/IMG_5664.jpeg";
import Img8 from "../assets/The Suburbs/IMG_6110.jpeg";
import Img9 from "../assets/The Suburbs/IMG_6234.jpeg";
import sfondo from "../assets/sfondoNeroCard.png";

const GalleryUno = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage("");
    setShowModal(false);
  };

  return (
    <>
      <div
        className="d-flex flex-column"
        style={{
          height: "100%",
          backgroundImage: `url(${sfondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <TopBar />

        <Container className="mt-5">
          {/* Prima riga */}
          <Row className=" justify-content-center" style={{ marginTop: "140px" }}>
            {[
              { src: Img1, alt: "Image 1" },
              { src: Img2, alt: "Image 2" },
              { src: Img3, alt: "Image 3" },
            ].map((image, index) => (
              <Card
                key={index}
                className="bg-transparent"
                style={{ width: "18rem", margin: "10px", border: "none", cursor: "pointer" }}
                onClick={() => handleOpenModal(image.src)}
              >
                <Card.Img variant="top" src={image.src} style={{ height: "200px", objectFit: "cover" }} />
              </Card>
            ))}
          </Row>

          {/* Seconda riga */}
          <Row className="mt-5 justify-content-center">
            {[
              { src: Img4, alt: "Image 4" },
              { src: Img5, alt: "Image 5" },
              { src: Img6, alt: "Image 6" },
            ].map((image, index) => (
              <Card
                key={index}
                className="border-0 bg-transparent"
                style={{ width: "18rem", margin: "10px", border: "none", cursor: "pointer" }}
                onClick={() => handleOpenModal(image.src)}
              >
                <Card.Img variant="top" src={image.src} style={{ height: "200px", objectFit: "cover" }} />
              </Card>
            ))}
          </Row>

          {/* Terza riga */}
          <Row className="mt-5 justify-content-center" style={{ marginBottom: "100px" }}>
            {[
              { src: Img7, alt: "Image 7" },
              { src: Img8, alt: "Image 8" },
              { src: Img9, alt: "Image 9" },
            ].map((image, index) => (
              <Card
                key={index}
                className="border-0 bg-transparent"
                style={{ width: "18rem", margin: "10px", border: "none", cursor: "pointer" }}
                onClick={() => handleOpenModal(image.src)}
              >
                <Card.Img variant="top" src={image.src} style={{ height: "200px", objectFit: "cover" }} />
              </Card>
            ))}
          </Row>
        </Container>

        <Footer />

        {/* Modal per visualizzare l'immagine intera */}
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
          <Modal.Body className="modal-dialog-scrollable text-center">
            <img src={selectedImage} alt="Full Size" className="img-fluid" />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default GalleryUno;
