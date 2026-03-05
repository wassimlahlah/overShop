import {  Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home"; // حرف H كبير
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import "./App.css";
import Footer from "./component/Footer";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    
     <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Navbar />

      {/* المحتوى يملأ الفراغ */}
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Auth' element={<Auth />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
    
  );
}

export default App;