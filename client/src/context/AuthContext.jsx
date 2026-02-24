import { createContext, useEffect, useState } from "react";

export const Authcontext = createContext();
export const AuthcontextProvider = ({children})=>{
    // const [currentUser,setCurrentUser]=useState(
    //     JSON.parse(localStorage.getItem("user"))|| null
    // )
    const [currentUser, setCurrentUser] = useState(() => {
        const user = localStorage.getItem("user");
        
        // Check if user exists and isn't the literal string "undefined"
        if (user && user !== "undefined") {
            try {
                return JSON.parse(user);
            } catch (e) {
                return null; // Fallback if JSON is malformed
            }
        }
        return null;
    });
    const updateUser = (data)=>{
        setCurrentUser(data)
    }
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])
    return(
        <Authcontext.Provider value={{currentUser,updateUser}}>{children}</Authcontext.Provider>
    )
}