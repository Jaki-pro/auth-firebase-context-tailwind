import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './../firebase/firebase.config';
const auth = getAuth(app);

const Authproviders = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
Authproviders.propTypes;
export default Authproviders;