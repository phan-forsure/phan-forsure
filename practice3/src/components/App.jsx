import React from 'react'
import Header from './Header'
import { Route, Routes } from "react-router-dom";
import Home from './Home/Home'
import Login from './Login/Login';
import Footer from './Footer';
import Cart from './Cart/Cart';
import ProductsPage from './Products/ProductsPage';

const App = () => {
    return (
        <div className="app">
            <Header logo='دلع كرشك'/>
            <Routes>
                {['Home', ''].map((path) => <Route key={path} path={path} element={<Home />} />)}
                <Route path='/Login' element={<Login />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/Products' element={<ProductsPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App

// to start project: (navigate to terminal)
// if not in directory/folder of the project: cd '.\react apps\practice3\' 
// then: npm start, wait a few seconds and the application will run on browser