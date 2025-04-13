
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Comic from './Comic';
import Shop from './Shop';
import About from './About';
import Header from './Header';
import './index.css';
import ProductPage from './ProductPage';
import Footer from './Footer';
import PayPalButton from './PayPalButton';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-mono cursor-ufocursor bg-stars">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comic" element={<Comic />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
