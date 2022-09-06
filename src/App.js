import './App.css';
import FreeCodeCampLogo from './images/freecodecamp-logo.png';
import Boton from './components/boton.jsx';
import Pantalla from './components/screen.jsx';
import ClearButton from './components/clearButton.jsx';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={ FreeCodeCampLogo }
        className='freecodecamp-logo'
        alt='logo de FreeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla/>
        <div className='fila'>
          {/* Lo encerrado por las etiquetas de Boton será el valor que tome la propiedad children. Ver el archivo jsx de boton*/}
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <ClearButton>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
