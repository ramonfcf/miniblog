import './App.css';
import { BrowserRouber, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='countainer'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
