import { Link } from "react-router-dom";
import { useUser } from "./Users/UserContext";

export default function Nav () {

    return (
        <div className="navigation-bar">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
        </nav>
        </div>
    )
}