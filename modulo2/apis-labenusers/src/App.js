import './App.css';
import TelaDetalhada from './components/TelaDetalhada';
import TelaInicial from './components/TelaInicial';
import React from 'react';

class App extends React.Component {
  state={
    escolhetela:'telainicial'
  }
  mudaTela = () => {    
      return this.setState ({escolhetela: 'teladetalhada'
      })
      
  }
  render(){
  return (
    <div>
      {this.state.escolhetela === 'telainicial' ? <TelaInicial mudaTela = {this.mudaTela}/> : <TelaDetalhada mudaTela = {this.mudaTela}/>}
     
    </div>
  );
  }
}

export default App;
