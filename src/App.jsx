import "./App.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import StudyInUsa from "./pages/StudyInUsa";
import StudyInUK from './pages/StudyInUK';
import StudyInCanada from './pages/StudyInCanada';
import StudyInAustralia from './pages/StudyInAustralia';
import StudyInIreland from './pages/StudyInIreland/StudyInIreland';
import StudyInGermany from './pages/StudyInGermany';
import StudyInJapan from './pages/StudyInJapan';
import AdmissionGuide from './pages/AdmissionGuide';
import Step1 from './pages/StepDetails/Step1';
import Step2 from './pages/StepDetails/Step2';
import Step3 from './pages/StepDetails/Step3';
import Step4 from './pages/StepDetails/Step4';
import Step5 from './pages/StepDetails/Step5';
import Step6 from './pages/StepDetails/Step6';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/study-in-usa" element={<StudyInUsa />} />
        <Route path="/study-in-uk" element={<StudyInUK />} />
        <Route path="/study-in-canada" element={<StudyInCanada />} />
        <Route path="/study-in-australia" element={<StudyInAustralia />} />
        <Route path="/study-in-ireland" element={<StudyInIreland />} />
        <Route path="/study-in-germany" element={<StudyInGermany />} />
        <Route path="/study-in-japan" element={<StudyInJapan />} />
        <Route path="/admission-guide" element={<AdmissionGuide />} />
        <Route path="/admission-guide/step-1" element={<Step1 />} />
        <Route path="/admission-guide/step-2" element={<Step2 />} />
        <Route path="/admission-guide/step-3" element={<Step3 />} />
        <Route path="/admission-guide/step-4" element={<Step4 />} />
        <Route path="/admission-guide/step-5" element={<Step5 />} />
        <Route path="/admission-guide/step-6" element={<Step6 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
