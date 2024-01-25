import './App.css';
import './api/Metodos.js';
import BarraDeNavegacion from './componentes/barra-navegacion/BarraDeNavegacion.js';
import Consejos from './paginas/Consejos/Consejos.js';
import Cursos from './paginas/Cursos/Cursos.js';
import VideoPlayer from './paginas/VideoPlayer/videoPlayer.js';
import PaginaPrincipal from './paginas/paginaPrincipal/paginaprincipal.js';
import VistaBlog from './paginas/vistaBlog/VistaBlog.js';
import VistaCurso from './paginas/vistaCurso/vistaCurso.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <Router>
      
    <div className="App">
      <BarraDeNavegacion />
      <Routes>
        <Route exact path="/" element={<PaginaPrincipal />} />
        <Route exact path="/Consejos" element={<Consejos />} />
        <Route exact path="/Cursos" element={<Cursos />} />
        <Route exact path="/Reproductor/:cursoID/:videoID" element={<VideoPlayer/>} />
        <Route exact path="/VistaCurso/:cursoID" element={<VistaCurso />} />
        <Route path="/VistaConsejo/:consejoID" element={<VistaBlog />} />

        {/* Otros rutas */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
