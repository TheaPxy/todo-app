import { createContext, useContext, useState } from "react";

// create a context 
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// share the created context with other component 

export default function AuthProvider({children}) {
    // put some state in the context

    const [isAuthenticated, setAuthenticated] = useState(false)

    // setInterval(() => setNumber(number+1), 10000)

    function login(username, password) {
        if(username==='theapeng' && password==='123456'){
            setAuthenticated(true)
            return true
        }else{
            setAuthenticated(false)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value = {{isAuthenticated, setAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
} 
