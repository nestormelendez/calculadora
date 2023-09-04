import { useState } from "react";
import BotonNumerico from "./BotonNumerico";

const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
const signos = ["+", "-", "*"]

function App() {
  const [numeroIngresado, setNumeroIngresado] = useState("")
  const [valoresAcumulados, setValoresAcumulados] = useState([])

  function agregarNumero(numeroTexto) {
    if (numeroIngresado.length + 1 <=8) {
    setNumeroIngresado(numeroIngresado + numeroTexto)
    }
  }

    function borrarNumero() {
      const nuevoValor = numeroIngresado.substring(0, numeroIngresado.length - 1)
      setNumeroIngresado(nuevoValor)
    }

    function agregarOperacion(signo) {
      if (numeroIngresado !== ""){
        const nuevoValor = [
          ...valoresAcumulados,
          numeroIngresado,
          signo
        ]
        setValoresAcumulados(nuevoValor)
        setNumeroIngresado("")
        
      }
    }
    function calcular() {
      let index = 0
      let resultado = Number(valoresAcumulados[0])

      while (index < valoresAcumulados.length) {
        const elemento = valoresAcumulados[index]
        if (signos.includes(elemento)) {
          if (elemento === "+") {
            const siguienteElemento = valoresAcumulados[index + 1]
            if (siguienteElemento) {
              resultado = resultado + Number(siguienteElemento)
            } else {
              resultado = resultado + Number(numeroIngresado)
          }
        }
        if (elemento === "-") {
          const siguienteElemento = valoresAcumulados[index + 1]
          if (siguienteElemento) {
            resultado = resultado - Number(siguienteElemento)
          } else {
            resultado = resultado - Number(numeroIngresado)
          }
        }
        if (elemento === "*") {
          const siguienteElemento = valoresAcumulados[index + 1]
          if (siguienteElemento) {
            resultado = resultado * Number(siguienteElemento)
          } else {
            resultado = resultado * Number(numeroIngresado)
          }
        }
      }
      index = index + 1
    }
    setValoresAcumulados([])
    setNumeroIngresado(resultado.toString())

  }

  return (
    <div className="contendor">
      <div className="calculadora">
        <header className="titulo"> Calculadora</header>
        <section className="pantalla">
          <article className="valores-acumulados">{valoresAcumulados}</article>
          <article className="valor-ingresado">{numeroIngresado}</article>
        </section>
        <section className="botones">
          <button className="boton-numerico" onClick={() => agregarOperacion("+")}>+</button>
          <button className="boton-numerico" onClick={() => agregarOperacion("-")}>-</button>
          <button className="boton-numerico"onClick={() => agregarOperacion("*")}>*</button>
          {numeros.map(numero => <BotonNumerico key={numero} numero={numero} agregarNumero={agregarNumero} />)}
          <button
            className="boton-numerico"
            onClick={() => borrarNumero()}
           >
            B
          </button>
          <BotonNumerico numero="0" agregarNumero={agregarNumero}/>
          <button className="boton-numerico" onClick={() => calcular()}>=</button>
        </section>
      </div>
    </div>
  );
}

export default App;
