import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/components/Home'
import Toggle from './assets/components/Toggle'
import ProductList from './assets/components/ProductList'

function App() {

  return (
    <>
      <Home/>
      <Toggle/>
      <ProductList/>
    </>
  )
}

export default App
