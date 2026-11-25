import Contexto from "../Contexto.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
const RutasPublicas = ({children}) => {
    const {usuario} = useContext(Contexto);
    return (!usuario ? <>{children}</> : <Navigate to="/"/>)
}
export default RutasPublicas;