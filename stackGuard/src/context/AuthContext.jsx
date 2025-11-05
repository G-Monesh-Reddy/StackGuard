import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [configKey, setConfigKey] = useState(null);

    const signIn = (email, password) => {
        if (email && password) {
            setUser({ email });
            return true;
        }
        return false;
    };

    const signUp = (email, password) => {
        if (email && password) {
            setUser({ email });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        setConfigKey(null);
    };

    return (
        <AuthContext.Provider
            value={{ user, signIn, signUp, logout, configKey, setConfigKey }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
