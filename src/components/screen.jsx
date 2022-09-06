import React from 'react';
import '../stylesheets/screen.css';

/* Este tipo de sintaxis, arrow function, puede utilizarse para definir componentes funcionales. Especialmente utilizada para componentes sencillos*/
/* para las props, utilice sintaxis de desestructuración*/ 
const Pantalla = ({ input }) => (
    <div
    className= 'input'>
        {input}
    </div>
);

export default Pantalla;