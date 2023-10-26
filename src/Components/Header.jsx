import { useUser } from "./Users/UserContext"
import { Link } from "react-router-dom"

export default function Header (){
    const {user, logout} = useUser()
    return (
      <div className="main-header-container">
      <h1 className="main-header-title">NC News</h1>
      {user ? (
        <div className="user-info">
          <p>
            Currently logged in as: {user}
            <button onClick={logout}>Logout</button>
          </p>
        </div>
      ) : (
        <div className="user-info">
          <p>
            <Link to="/" className="login-link">Login</Link>
          </p>
        </div>
      )}
    </div>
    )
}