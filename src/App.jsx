import React, { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Article from './components/Article'


function App() {

  return (
    <>
      <Topbar />
      <Article title="My First Article" />
    </>
  )
}

export default App
