import Contexto from "../Contexto.jsx";
import { useContext } from "react";
import {Navigate} from "react-router-dom";
const RutasPrivadas = ({children}) => {
    const {usuario} = useContext(Contexto);
    return ( usuario ? <>{children}</> : <Navigate to="/login"/> )
}
export default RutasPrivadas;