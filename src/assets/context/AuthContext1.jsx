import { createContext } from "react";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export default AuthProvider;
