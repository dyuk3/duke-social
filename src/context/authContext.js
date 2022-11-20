import { createContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = () => {
    //to do
    setCurrentUser({
      id: 1,
      name: 'John Doe',
      profilePic:
        'https://images.pexels.com/photos/8059135/pexels-photo-8059135.jpeg?auto=compress&cs=tinysrgb&w=1600',
    });

    <Navigate to='/' />;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
