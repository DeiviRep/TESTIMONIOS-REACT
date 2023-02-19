import React from "react";
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
        src={require(`../image/M${props.imagen}.png`)}
        alt='Foto de Emma'
      />
      <div className="contenedor-texto-textimonio">
        <p className="nombre"><strong>{props.nombre}</strong> in {props.pais}</p>
        <p className="cargo">{props.cargo} at <strong>{props.empresa}</strong></p>
        <p className="texto">"{props.testimonio}<strong>{props.freecodecamp}</strong>{props.testimonio2}"</p>
      </div>
    </div>
  );
}
export default Testimonio;
