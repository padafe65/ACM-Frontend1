import './App.css';
import Btn from './components/btn.jsx';
import FlipCard from './components/FlipCard.jsx';
import { React, useState } from "react";

function App() {
  const [mostrarCartas, setMostrarCartas] = useState(false);

  const [texto, setTexto] = useState("Entrar");
  const [contador, setContador] = useState(0);


  const handleClick = () => {
    console.log("Botón clickeado", mostrarCartas);
    setMostrarCartas(!mostrarCartas); // alterna entre true y false
    setTexto(mostrarCartas ? "Entrar" : "Salir");
    console.log("Botón clickeado", mostrarCartas);
  };


   const handleClickCounter = () => {
    console.log("Botón clickeado", mostrarCartas);
    setContador(contador + 1);
    console.log("Contador:", contador);
  };


  return (
    <div className="app-container">
      {!mostrarCartas && (
        <Btn texto="Entrar" onClick={handleClick}>
          <img src="../public/img/grifo.gif" alt="entrar" />
        </Btn>
      )}

      {mostrarCartas && (
        <div className="cartas-container">
          

          <h2>Imagen generada aleatoriamente</h2>

          <div className="cartas">
            <FlipCard
              frontImage="https://picsum.photos/220/300?random=10"
              backImage="https://picsum.photos/220/300?random=20"
              frontText="Frente 1"
              backText="Reverso 1"
            />
            <Btn texto="Salir" onClick={handleClick}>
              <img src="../public/img/salida.gif" alt="salir"/>
            </Btn>
            <Btn texto="El Contador va en" onClick={handleClickCounter} children={contador}mostrarCartas={mostrarCartas}>             
            </Btn>
            
          </div>
          
        </div>
      )}
    </div>
  );
}

export default App;
