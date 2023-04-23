import React, { createContext } from 'react';


export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const user = {displayName: 'Zoo Topia'}


    const authInfo = {
        user: <span>{user.displayName}</span>,
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;