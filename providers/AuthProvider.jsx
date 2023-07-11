import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
        fname: '',
        lname: '',
        mobile: '',
        picture: '',
        token: ''
    });

    const [userId, setUserId] = useState('');

    return (
        <AuthContext.Provider value={{
            userDetails,
            setUserDetails,
            userId,setUserId
        }}>
            { children }
        </AuthContext.Provider>
    );

}

export default AuthProvider;