import "./App.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import StudyInUsa from "./pages/StudyInUsa";
import StudyInUK from './pages/StudyInUK';
import StudyInCanada from './pages/StudyInCanada';
import StudyInAustralia from './pages/StudyInAustralia';
import StudyInIreland from './pages/StudyInIreland/StudyInIreland';

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
        <Route path="/study-in-canada" element={<StudyInCanada />} />
        <Route path="/study-in-australia" element={<StudyInAustralia />} />
        <Route path="/study-in-ireland" element={<StudyInIreland />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
