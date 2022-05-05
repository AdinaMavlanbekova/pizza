import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Main from './pages/main/Main';
import NavSlider from './components/slider/NavSlider';
import MinSlider from './components/min-slider/MinSlider';
import { Component, useEffect } from 'react';
import Admin from './pages/admin/Admin';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import CreatePizza from './pages/create-pizza/CreatePizza.jsx';
import { useDispatch, useSelector } from "react-redux"
import { getPizzaAC } from './redux/actionCreators.js';

const PrivateRoute = ( { Component } ) => {
  const auth = useSelector( (state) => state.auth.data?.token);

  if(!auth) {
    return <Navigate to="/admin" />
  } else {
    return <Component />
  }
}


const PablicRoute = ( { Component } ) => {
  const auth = useSelector( (state) => state.auth.data?.token);

  if(auth) {
    return <Navigate to="/dashboard" />
  } else {
    return <Component />
  }
}


function App() {
  const pending = useSelector((state) => state.pizza.pending)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzaAC())
  }, [])

  if (pending) {
    return <h1>...Loading...</h1>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <NavSlider />

        <MinSlider />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/admin" element={<PablicRoute Component={Admin} />} />
          <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
          <Route path="/create-pizza" element={<PrivateRoute Component={CreatePizza} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
