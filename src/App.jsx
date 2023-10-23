import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import ArticleList from './Components/Articles/ArticleList'

function App() {

  return (
   <main>
    <Header/>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/articles" element={<ArticleList/>} />
    </Routes>
   </main>
  )
}

export default App
