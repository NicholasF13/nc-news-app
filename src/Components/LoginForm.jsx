import { useState, useEffect } from "react";
import { useUser } from "./Users/UserContext";

export default function LoginForm () {

    const { user, login, loadingUsernames} = useUser()
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    const handleLogin = () => {

         if (loadingUsernames) {
        setMessage("Please wait...");
        return;
      }
        const loggedInUser = login(username);
        
        if (!loggedInUser) {
          setMessage("User not found");
        }
      }

      useEffect(() => {     
          if (user) {
            setMessage(`Welcome ${user}!`)
            setUsername("")
          } else {
            setMessage("")
            setUsername("")
          }
      }, [user])

      
  return (
    <div>
      {user ? (
        <p>{message}</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p className="login-message">{message}</p>
        </div>
      )}
    </div>
  );
}