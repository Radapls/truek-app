// Components
// Funcion que retorna un HATML simple, tambien puede retornar Css o JS

// Props
// Atributos, por ejemplo un titulo, se puedne interpolar variabeles, etc

// State
// Información que el componente va a manipular. Informaciones mantenidas por el componente //TODO(Concepto: Inmutabilidad)

import { useState } from "react";
import Header from "./Header";

function App() {

  let [counter, setCounter] = useState(0)

  function incrementCounter(){
    setCounter( counter + 1)
  }
  return (
    <>
    <h1> Contador: {counter}</h1>
    <button onClick={incrementCounter}>Incrementar</button>

    <Header title="das"/>
    </>
  );
}

export default App;
