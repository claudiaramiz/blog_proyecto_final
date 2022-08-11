import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userCredentials) => {
        setUser({ id: 1, name: 'Luis', email:'luis@gmail.com' });
    }
    
    const logout = () => setUser(null);

    const isLogged = () => !!user;

    const contextValue = { user, isLogged, login, logout, };

    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}