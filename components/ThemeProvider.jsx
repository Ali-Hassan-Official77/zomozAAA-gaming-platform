"use client";
import {createContext,useContext,useEffect,useState} from "react";
const ThemeContext=createContext(null);
export function useTheme(){return useContext(ThemeContext);}
export default function ThemeProvider({children}){
 const [theme,setTheme]=useState("dark");
 useEffect(()=>{const saved=localStorage.getItem("zomo-theme")||"dark";setTheme(saved);document.documentElement.dataset.theme=saved;},[]);
 function toggle(){const next=theme==="dark"?"light":"dark";setTheme(next);localStorage.setItem("zomo-theme",next);document.documentElement.dataset.theme=next;}
 return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
}
