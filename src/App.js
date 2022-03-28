import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Image from './components/Image';

import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './components/Error';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/image" element={<Image />} />
          <Route path="*" element={<Error />} />

        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
