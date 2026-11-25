import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/login.jsx';
import Registro from './pages/registro.jsx';
import Error from './pages/error.jsx';
import Usuario from './pages/usuarios.jsx';
import RutasPrivadas from './pages/context/routes/RutasPrivadas.jsx';
import RutasPublicas from './pages/context/routes/RutasPublicas.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RutasPrivadas><Home/></RutasPrivadas>}/>
                <Route path='/login' element={<RutasPublicas><Login/></RutasPublicas>}/>
                <Route path='/registro' element={<RutasPublicas><Registro/></RutasPublicas>}/>
                <Route path='/usuario/:nombre' element={<RutasPrivadas><Usuario/></RutasPrivadas>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;