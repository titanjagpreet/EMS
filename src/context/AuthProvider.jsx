import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

export default function AuthProvider({children}) {

    const [userData, setUserData] = useState(null);
    const {employees, admins} = getLocalStorage();

    useEffect(() => {
      setUserData({employees, admins});
    }, []);
    

    return (
        <>
            <div>
                <AuthContext.Provider value={userData}>
                    {children}
                </AuthContext.Provider>
            </div>
        </>
    )
}

