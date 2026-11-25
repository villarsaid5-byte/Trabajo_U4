import Contexto from "./Contexto";
import { useReducer } from "react";
import MiReducer from "./MiReducer";
import type from "./type";

const inicio = () =>{
    const user = localStorage.getItem("usuario");
    return {
        logged:!!user,
        usuario:user ? JSON.parse(user) : null
    }
}
const Provider = ({children}) => {
    const [logeado,dispatch] = useReducer(MiReducer,{},inicio);
    const login = (sesion) =>{
        const action = {
            type:type.login,
            payload:sesion
        }
        localStorage.setItem('usuario',JSON.stringify(sesion));
        dispatch(action);
    }
    const cerrar_sesion = () =>{
        const action = {
            type:type.logout,
            payload:null
        }
        localStorage.removeItem('usuario');
        dispatch(action);
    }
    return (
        <Contexto.Provider value={{ ... logeado,login,cerrar_sesion}}>
            {children}
        </Contexto.Provider>
    )
}
export default Provider;
