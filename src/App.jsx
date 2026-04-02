import React, { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Article from './components/Article'


function App() {

  const [title, setTitle] = React.useState("My First Article")

  return (
    <>
      <Topbar />
      <Article title={title} />
    </>
  )
}

export default App
