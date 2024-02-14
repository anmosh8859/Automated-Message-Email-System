import { createContext, useContext, useState } from "react"
import { authenticate } from "../apiconnections/LoginApiService"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    const valueToBeUsed = {token, username, isAuthenticated, login, logout}

    async function login(credentials){
        try{
            const response = await authenticate(credentials)

            console.log(response)

            if(response.status==200){

                const responseToken = 'Basic ' + response.data.token

                setAuthenticated(true)
                setUsername(username)
                setToken(responseToken)

                return true
            } else {
                logout()
                return false
            }
        } catch(error){
            console.log(error)
            logout()
            return false
        }
    }


    function logout(){
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    return(
        <AuthContext.Provider value={valueToBeUsed}>
         {children}
        </AuthContext.Provider> 
    )
}