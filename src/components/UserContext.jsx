import React, { createContext, useState, useContext } from 'react';

// Create a Context for User State
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <UserContext.Provider value={{ isSignedUp, setIsSignedUp }}>
      {children}
    </UserContext.Provider>
  );
};
