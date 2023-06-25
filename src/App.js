import React, { useContext, createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import CartModal from './Pages/CartModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const cartContext = createContext();

const App = () => {
  const [cartItems, setCartItems] = useState([]); 
  console.log(cartItems);
  const [showModal, setShowModal] = useState(false);
 
  return (
    <div>
      <cartContext.Provider value={{ cartItems, setCartItems, showModal, setShowModal }}> 
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cartmodal" element={<CartModal />} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </div>
  );
};

export default App;
