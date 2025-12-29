import "./App.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import StudyInUsa from "./pages/StudyInUsa";
import StudyInUK from './pages/StudyInUK/StudyInUK';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/study-in-usa" element={<StudyInUsa />} />
        <Route path="/study-in-uk" element={<StudyInUK />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
