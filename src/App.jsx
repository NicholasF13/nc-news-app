import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import ArticleList from './Components/Articles/ArticleList'
import SingleArticle from './Components/Articles/SingleArticle'

function App() {

  return (
   <main>
    <Header/>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/articles" element={<ArticleList/>} />
        <Route path="/articles/:article_id" element={<SingleArticle/>} />
    </Routes>
   </main>
  )
}

export default App
