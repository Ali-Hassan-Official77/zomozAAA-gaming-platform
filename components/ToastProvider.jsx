"use client";
import {createContext,useContext,useState,useCallback} from "react";
import {CheckCircle2,Info,X} from "lucide-react";
const ToastContext=createContext(null);
export function useToast(){return useContext(ToastContext);}
export default function ToastProvider({children}){
 const [items,setItems]=useState([]);
 const push=useCallback((message,type="success")=>{
  const id=Date.now()+Math.random();setItems(v=>[...v,{id,message,type}]);
  setTimeout(()=>setItems(v=>v.filter(x=>x.id!==id)),2800);
 },[]);
 return <ToastContext.Provider value={{push}}>{children}<div className="toast-stack" aria-live="polite">{items.map(t=><div className={`toast ${t.type}`} key={t.id}><span>{t.type==="success"?<CheckCircle2 size={17}/>:<Info size={17}/>}</span><p>{t.message}</p><button onClick={()=>setItems(v=>v.filter(x=>x.id!==t.id))} aria-label="Dismiss"><X size={15}/></button></div>)}</div></ToastContext.Provider>
}
