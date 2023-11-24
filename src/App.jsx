import { Suspense, lazy, useState } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Home from './home/Home';
import Blog from './blog/Blog';
import NavItems from './components/NavItems';
import Footer from './components/Footer';
// const Shop = lazy(() => import('./shop/Shop'));
import Shop from './shop/Shop';
import SingleProduct from './shop/SingleProduct';
import CartPage from './shop/CartPage';
import SingleBlog from './blog/SingleBlog';
import About from './about/About';
import Contact from './contactPage/Contact';
import LoginDemo from './components/LoginDemo';
import AuthProvider from './contexts/AuthProvider';


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <NavItems />
          <div className="min-vh-100">
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='blog' element={<Blog />} />
                <Route path='blog/:id' element={<SingleBlog />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='shop/:id' element={<SingleProduct />} />
                <Route path='cart-page' element={<CartPage />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='login' element={<LoginDemo />} />
              </Route>
          </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
