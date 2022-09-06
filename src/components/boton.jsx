import React from 'react';
import '../stylesheets/boton.css'

function Boton (props) {
/* La función esOperador sirve unicamente para reconocer si la propiedad children es un operador */
  const esOperador = valor => {
    if (isNaN(valor) && (valor!== '.') && (valor!== '=')) {
      return true;
    };
  };

  return (
    <div
    /* aqui uso template literal para poder insertar js dentro del string */
    /* el método trimEnd remueve espacios vacios al final de una cadena */
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : '' }`.trimEnd()}>
      {/* children es un metodo de props cuya funcionalidad es tomar el valor definido dentro de las etiquetas de apertura y cierre del componente */}
      {props.children}
    </div>
  );
}

export default Boton;