import './App.css';
import TelaDetalhada from './components/TelaDetalhada';
import TelaInicial from './components/TelaInicial';
import React from 'react';

class App extends React.Component {
  state={
    escolhetela:'telainicial'
  }
  mudaTela1 = () => {    
      return this.setState ({escolhetela: 'teladetalhada'
      })
      
  }
  mudaTela2 = () => {    
    return this.setState ({escolhetela: 'telainicial'
    })
    
}
  render(){
  return (
    <div>
      {this.state.escolhetela === 'telainicial' ? <TelaInicial mudaTela1 = {this.mudaTela1}/> : <TelaDetalhada mudaTela2 = {this.mudaTela2}/>}
     
    </div>
  );
  }
}

export default App;
