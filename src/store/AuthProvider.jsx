import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({
  email: '',
  token: '',
  isLoggedIn: false,
  // eslint-disable-next-line no-unused-vars
  login(gotEmail, gotToken) {},
  logout() {},
});

AuthContext.displayName = 'Auth';

export default function AuthProvider(props) {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  const isLoggedIn = !!token;

  function login(gotEmail, gotToken) {
    setToken(gotToken);
    setEmail(gotEmail);
  }

  function logout() {
    setEmail('');
    setToken('');
  }

  const ctx = {
    token: token,
    email: email,
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
  };

  return (
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
}

// custom hook
// turi prasideti zodeliu 'use'
// tiesiog funkcija kuri gali naudoti hooks
// daznai grazina reikme
export function useAuth() {
  return useContext(AuthContext);
}
