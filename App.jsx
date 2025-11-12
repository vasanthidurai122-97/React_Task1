import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './assets/components/Home'
import Toggle from './assets/components/Toggle'
import ProductList from './assets/components/ProductList'

function App() {

  return (
    <>
       <Router>
      <Header/>
      <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/Toggle" element ={<Toggle/>}/>
           <Route path = "/ProductList" element = {<ProductList/>}/>
      
      </Routes>
      </Router>
    </>
  )
}

export default App
