import { Link } from "react-router-dom";

export default function ArticlesNavBar() {
  return (
    <nav className="articles-nav-bar">
        <Link to="/articles">All Topics</Link>
        <Link to="/articles/cooking">Cooking</Link>
        <Link to="/articles/coding">Coding</Link>
        <Link to="/articles/football">Football</Link>
    </nav>
  )
}