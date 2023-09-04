function BotonNumerico( {numero, agregarNumero}) {
  return (
    <button className="boton-numerico"
     onClick={() => agregarNumero(numero)}
    > 
      {numero}
    </button>
  )
}

export default BotonNumerico;