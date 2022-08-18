import './App.css';
import TelaInicial from './components/TelaInicial';
import TelaMatches from './components/TelaMatches';
import Header from './components/Header';
import React, {useState} from "react";




function App() {

  const [tela, setTelas] = useState(true);
  

  const mudarTela = () =>{
    if (tela === true) {
      return <TelaInicial />
    } else if (tela === false){
      return <TelaMatches />
    }
  }
  const onClickMudarTela = () => {
    setTelas(!tela)
  };
  return (
   
    <div id="base" style={{fontFamily: 'Spartan'}}>

      <div id="App">
          <Header onClickMudarTela={onClickMudarTela} tela={tela}/>

        {mudarTela()}
      </div>

    </div>
  );
}
export default App;