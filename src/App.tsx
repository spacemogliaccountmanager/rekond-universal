import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tjanster" element={<Services />} />
        <Route path="/galleri" element={<Gallery />} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
      </Route>
    </Routes>
  );
}
