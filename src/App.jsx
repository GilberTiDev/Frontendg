import './components/Header/header-module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import ProductViewPage from './pages/ProductViewPage/ProductViewPage.jsx'
import ProductListingPage from './pages/ProductListingPage/ProductListingPage.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />}/>
      <Route path='produtosList' element={<ProductListingPage />} />
       <Route path='produtos'  element={<ProductViewPage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
