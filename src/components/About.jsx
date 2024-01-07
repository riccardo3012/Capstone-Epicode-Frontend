import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./Topbar";
import Footer from "./Footer";
import sfondoNero from "../assets/sfondoNeroCard.png";
import { Container } from "react-bootstrap";
import React from "react";
import "../App.css";

const About = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        height: "100%",
        backgroundImage: `url(${sfondoNero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <TopBar />

      <Container className="about-container text-center">
        <p className="about-column ">
          Based in Rome, Italy, Moon Dispatcher’s world only exists in a vacuum. The parallel reality of Unspecified
          Pictures, the first full-length record of the project, is a mosaic of dreamlike lives always too ephemeral to
          be grasped but at the same time as real and as rough as they can get.
        </p>
        <p className="about-column ">
          Heavily influenced by the work of Radiohead, Jeff Buckley, Philip Glass and David Bowie, Unspecified Pictures
          is a journey that takes place in a fugacious highway, completely manufactured by both the listener and the
          artist as the record progresses. The chaotic harmonies and the falling piano of Intro (Beloved the One Who
          Sits Down) are the frail departure of this trip that seamlessly paints different states of mind and real-life
          experiences, fluidly combining Lynchian dreams and raw emotions like love, self-doubt and loneliness. It is
          entirely what the title suggests: a picture of a naked human soul, unspecified because it’s continually
          changing and evolving into something different, to a degree where it is sometimes not able to recognize what
          it was before.
        </p>
        <p className="about-column ">
          Moon Dispatcher’s respect for old-fashioned songwriting is reimagined with a touch of emotional art rock,
          creating a wide variety of songs with unique structures and sometimes radically different vibes, yet somehow
          still deeply connected to each other. Unspecified Pictures is White Walls’ lushy and grandeur orchestra, but
          it’s also Pretending’s furious and hasty guitars; it can be a drunken monologue like Imaginary Estate or a
          desperate cry for help like Lie and Somebody; it can be Strangers’ hypnotic groove but also Where Are We
          Now?’s roller coaster-like structure. Every element from the lyrics to the arrangement choices and the sound
          design serves the purpose of communicating something that in real life is often impossible to convey: the most
          sincere and unfiltered emotions that some of us struggle to even accept, to the point that they might be
          unable to voice them out loud.
        </p>
        <p className="about-column ">
          Founded by singer songwriter Edoardo Certelli, partnered with guitarist and producer Claudio Cossu and with
          photographer Simone Sabatucci, Moon Dispatcher’s mission is to be a safe shelter for people going through
          tough times, remembering them that it’s okay to feel lonely and stuck; even when there’s not even the will to
          go on. And even if that feeling never seems to go away, we still have each other; we can still walk together,
          simply accepting the fact that we may never figure it out.
        </p>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
