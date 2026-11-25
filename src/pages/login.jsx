import { useForm } from "react-hook-form";
import { NavLink,useNavigate } from "react-router-dom";
import Contexto from "./context/Contexto.jsx";
import { useContext } from "react";
import Swal from "sweetalert2";

const Login = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const {login} = useContext(Contexto);
    const navegacion = useNavigate();
    const validacion = {
        usuario:{
            required:"El campo usuario es requerido!"
        },
        password:{
            required:"El campo contraseña es requerido!"
        }
    }

    const onSubmit = async ({usuario}) =>{
        login({usuario});
        await Swal.fire("Acceso de demostración", "Estas siendo redirigido...", "success");
        navegacion("/",{replace:true});
    }
    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="row justify-content-center">
                <div className="col-md-5">
                    {errors.usuario && <p>{errors.usuario.message}</p>}
                    <label htmlFor="usuario">usuario</label>
                    <input {... register("usuario",validacion.usuario)} type="text" className="form-control mb-3" placeholder="usuario"/>
                    {errors.password && <p>{errors.password.message}</p>}
                    <label htmlFor="password">password</label>
                    <input {... register("password",validacion.password)} type="password" className="form-control mb-3" placeholder="password"/>
                    <button type="submit" className="btn btn-primary mb-3 w-100">Iniciar Sesion</button>
                    <NavLink to="/registro" className="btn btn-primary mb-3 w-100">Registrarse</NavLink>
                </div>
            </form>
        </div>
    )
}
export default Login;