import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
const products = [
  { id: 1, name: "Product 1", description: "Description of Product 1", price: 100 },
  { id: 2, name: "Product 2", description: "Description of Product 2", price: 150 },
  { id: 3, name: "Product 3", description: "Description of Product 3", price: 200 },
];

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product/:productId" element={<ProductDetails products={products} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
