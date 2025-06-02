import { createContext, useContext } from "react";

export const themeContext=createContext({
    theme:'light',
    changeMode:()=>{}
});

export const ThemeProvider=themeContext.Provider;

export const useTheme=()=>useContext(themeContext);