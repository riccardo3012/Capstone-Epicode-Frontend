import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import GalleryUno from "./Gallerie/GalleryUno";
import GalleryDue from "./Gallerie/GalleryDue";
import GalleryTre from "./Gallerie/GalleryTre";
import GalleryQuattro from "./Gallerie/GalleryQuattro";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Diary from "./components/Diary";

function App() {
  useEffect(() => {
    document.title = "Moon Dispatcher";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/galleryuno" element={<GalleryUno />} />
        <Route path="/gallerydue" element={<GalleryDue />} />
        <Route path="/gallerytre" element={<GalleryTre />} />
        <Route path="/galleryquattro" element={<GalleryQuattro />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
