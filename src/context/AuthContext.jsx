import { Children, createContext } from "react";

const AuthContext = createContext(null);

function AuthProvider() {
  return <AuthContext.Provider>{Children}</AuthContext.Provider>;
}

export default AuthProvider;
