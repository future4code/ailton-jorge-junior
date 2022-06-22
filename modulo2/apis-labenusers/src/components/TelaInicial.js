import React from 'react';
import App from '../App';

class TelaInicial extends React.Component {
  state={

  }
  render(){
  return (
    <div>
        <h1>Tela Inicial</h1>    
        <button>Troca de Tela</button>
        <div>
            <input/>
            <input/>
            <button onClick={this.props.mudaTela}>Criar Usuário</button>
        </div>
    </div>
  );
  }
}

export default TelaInicial;
