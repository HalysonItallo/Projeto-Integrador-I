import React, { createContext } from 'react'

import useAuth from './hooks/useAuth'

const Context = createContext()

function AuthProvider({ children }) {
  const { authenticated, handleLogin, handleLogout, token, userId, userType } =
    useAuth()

  return (
    <Context.Provider
      value={{
        authenticated,
        handleLogin,
        handleLogout,
        token,
        userId,
        userType,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }
