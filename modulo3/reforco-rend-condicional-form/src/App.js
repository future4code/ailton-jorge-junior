import React, {useState} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";


function App() {

  const [etapa,setEtapa] = useState(1)

  renderizaEtapa = () => {
    switch (setEtapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Final />;
    }
  };
  proximaEtapa= () =>{
    setEtapa({setEtapa:etapa+1})
  }
  return (
    <div >
      {renderizaEtapa()}
        <br />
        {etapa !== 4 && (
          <button onClick={proximaEtapa}>Próxima etapa</button>
        )}
    </div>
  );
}

export default App;
