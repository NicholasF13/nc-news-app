import { createContext, useContext, useState, useEffect } from "react";
import { fetchUsers } from "../../apis";



const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [validUsernames, setValidUsernames] = useState([])
  const [loadingUsernames, setLoadingUsernames] = useState(true)


  const login = (username) => {
    if (validUsernames.includes(username)) {
      setUser(username)
    } else {
      setUser(null)
    }
  }

  const logout = () => {
    setUser(null)
  }

  
  useEffect(() => {
    fetchUsers()
    .then(({users}) => {
        const usernames = users.map((user) => user.username)
        setValidUsernames(usernames)
        setLoadingUsernames(false)
    })
    .catch((err) => {
      setLoadingUsernames(false)
        console.log(err)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, login, logout, loadingUsernames}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}