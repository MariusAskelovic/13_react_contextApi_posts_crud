import { useContext } from 'react';
import { createContext, useState } from 'react';

export const AuthContext = createContext({
  email: '',
  token: '',
  isUserLoggedIn: false,
  // eslint-disable-next-line no-unused-vars
  login(email) {},
  logout() {},
});

AuthContext.displayName = 'Auth';

export default function AuthProvider(props) {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  const isLoggedIn = !!token;

  function login() {}

  function logout() {}

  const ctx = {
    token: token,
    email: email,
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
  };
  // const ctx2 = {
  //   token,
  //   email,
  //   login,
  //   logout,
  //   isLoggedIn,
  // };
  // ctx === ctx2, jeigu A = B galima rasyti viena zodi

  ctx.login();
  return (
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
}

// custom hook
// turi prasideti zodeliu 'use'
// toliau CamelCase jo pavadinimas

// tiesiog funkcija kuri gali naudoti hooks
// daznai grazina reiksme
export function useAuth() {
  return useContext(AuthContext);
}
