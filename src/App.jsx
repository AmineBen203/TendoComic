import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Comic from './Comic';
import Shop from './Shop';
import About from './About';
import Header from './Header';
import './index.css';
import ProductPage from './ProductPage';
import Footer from './Footer';
import PayPalButton from './PayPalButton';
import Broadcast from './Broadcast';
import ComicPage from './ComicPage'

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-mono cursor-ufocursor bg-stars">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic" element={<Comic />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/broadcast" element={<Broadcast />} />
        <Route path="/comic/:id" element={<ComicPage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
