import './App.css';
import { BrowserRouber, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from './context/AuthContext';

import { useState, useEffect } from 'react';

import { useAuthentication } from './hooks/useAuthentication';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) <p>Carregando...</p>

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <div className='container'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/posts/create' element={<CreatePost />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}


export default App;
