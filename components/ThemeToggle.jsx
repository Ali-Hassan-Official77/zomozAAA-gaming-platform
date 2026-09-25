"use client";
import {Moon,Sun} from "lucide-react";
import {useTheme} from "@/components/ThemeProvider";
export default function ThemeToggle(){const {theme,toggle}=useTheme();return <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme==="dark"?"light":"dark"} mode`} title={`Switch to ${theme==="dark"?"light":"dark"} mode`}>{theme==="dark"?<Sun size={17}/>:<Moon size={17}/>}<span>{theme==="dark"?"Light":"Dark"}</span></button>}
