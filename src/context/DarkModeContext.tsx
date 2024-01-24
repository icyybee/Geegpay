"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };

    return (
      <DarkModeContext.Provider value={{ isDarkMode, toggleMode }}>
        {children}
      </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('error using the useDarkMode');
    }
    return context;
};