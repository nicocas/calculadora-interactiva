import React from 'react';
import '../stylesheets/clearButton.css'

/*Aqui puedo usar tambien sintaxis de desestructuración y pasar como parámetro { children } en lugar de props*/
const ClearButton = (props) => (
    <div
    className= 'boton-clear'>
        {props.children}
    </div>
);

export default ClearButton;