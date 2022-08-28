import './App.css';
import { BrowserRouber, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
