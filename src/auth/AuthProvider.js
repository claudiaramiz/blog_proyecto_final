import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const contextValue = { user, };

    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}