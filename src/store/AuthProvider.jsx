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
  const initToken = localStorage.getItem('token');
  const initEmail = localStorage.getItem('email');

  const [token, setToken] = useState(initToken);
  const [email, setEmail] = useState(initEmail);

  const isLoggedIn = !!token;
  // const isLoggedIn = true;

  function login(gotEmail, gotToken) {
    setToken(gotToken);
    setEmail(gotEmail);
    localStorage.setItem('token', gotToken);
    localStorage.setItem('email', gotEmail);
  }

  function logout() {
    setEmail('');
    setToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
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
