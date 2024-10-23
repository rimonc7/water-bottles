import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Bottles from './component/Bottles/Bottles'

function App() {

  return (
    <>
    <Header></Header>
    <Bottles></Bottles>
    </>
  )
}

export default App
