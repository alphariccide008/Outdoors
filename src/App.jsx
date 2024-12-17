import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {  Home } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="product" element={<Product />} /> */}
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
