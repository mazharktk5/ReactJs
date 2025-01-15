import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Assume Home component is inside the pages folder
// import ProductDetail from './pages/ProductDetail'; // Similarly, ProductDetail component
// import SignUp from './pages/SignUp'; // Similarly, SignUp component
// import Contact from './pages/Contact'; // Similarly, Contact component
// import About from './pages/About'; // Similarly, About component

function App() {
  return (
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
