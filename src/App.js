import './App.css';
import FreeCodeCampLogo from './images/freecodecamp-logo.png';
import Boton from './components/boton.jsx';
import Pantalla from './components/screen.jsx';
import ClearButton from './components/clearButton.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

/* evaluate es un paquete externo que instalo mediante el node package manager npm*/ 
/* mathjs es una libreria de funciones matematicas para javasccript y node js*/ 
/* si vamos a package.json podremos ver en la lista de dependencias a mathjs,
 una vez que ejecutemos el comando 'npm install mathjs'*/
function App() {

  /*inputState es el estado del componente, setInput es para actualizar dicho estado, 
  el valor que le paso a useState será el primer estado que tenga inputState*/
  const[inputState, setInput] = useState('');

  const restartingClic = () => {
    setInput('');
  };

  const addInput = val => {
    setInput(inputState + val);
  };

  const getResult = () => {
    if (inputState) {
      setInput(evaluate(inputState))
    } else alert('por favor ingresa valores validos para poder darte un resultado');
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={ FreeCodeCampLogo }
        className='freecodecamp-logo'
        alt='logo de FreeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        {/* aqui le digo al componente pantalla que el valor del parametro input que recibe
         sera el del estado inputState*/}
        <Pantalla input={inputState}/>
        <div className='fila'>
          {/* Lo encerrado por las etiquetas de Boton será el valor que tome la propiedad children. Ver el archivo jsx de boton*/}
          {/* El prop manejarClic que paso a cada componente Boton es para pasar como prop la funcion addInput que invocaré dentro de c/ componente*/}
          <Boton manejarClic={addInput}>1</Boton>
          <Boton manejarClic={addInput}>2</Boton>
          <Boton manejarClic={addInput}>3</Boton>
          <Boton manejarClic={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>4</Boton>
          <Boton manejarClic={addInput}>5</Boton>
          <Boton manejarClic={addInput}>6</Boton>
          <Boton manejarClic={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>7</Boton>
          <Boton manejarClic={addInput}>8</Boton>
          <Boton manejarClic={addInput}>9</Boton>
          <Boton manejarClic={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={getResult}>=</Boton>
          <Boton manejarClic={addInput}>0</Boton>
          <Boton manejarClic={addInput}>.</Boton>
          <Boton manejarClic={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <ClearButton manejarClic={restartingClic}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
