import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// for creating toast
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//context
import ProductsContextProvider from './global/ProductsContextProvider';
import CartContextProvider from './global/CartContextProvider';
//components
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductCart from './components/ProductCart';
import PathNotFound from './components/PathNotFound';

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' exact element={<Products />} />
              <Route path='/cart' exact element={<ProductCart />} />
              <Route path='*' element={<PathNotFound />} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
      <ToastContainer/>
    </div>
  );
}

export default App;
