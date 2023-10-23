import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <div className="navigation-bar">
        <nav>
            <Link to="/">Home</Link>
        </nav>
        </div>
    )
}