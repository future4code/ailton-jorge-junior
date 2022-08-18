import React from 'react';
import axios from 'axios';
 
class TelaInicial extends React.Component {
  state={
    usuario:'',
    email:''
    
  }
  novoUsuario = (event) => {
    this.setState({
      usuario: event.target.value
    })
  }
  novoEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  criarUsuario = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.usuario,
      email:this.state.email
    }

    axios
      .post(url,body,
        {
          headers: {
            Authorization: "jorge-junior-ailton"

          }
        }
      )
      .then((response) => {
        alert("Usuário(a) cadastrado(a) com sucesso!")
            this.setState({usuario: "", email: ""})
      })
      .catch((error) => {
        alert("Erro!! Tente novamento")
      });
  };

  render(){
  return (
    <div>

        <h1>Tela Inicial</h1>    
        <button onClick={this.props.mudaTela1}>Troca de Tela</button>
        
        
        <div>
            <input placeholder='nome' value={this.state.usuario} onChange = {this.novoUsuario}/>
            <input placeholder='email' value={this.state.email} onChange = {this.novoEmail}/>
            <button onClick={this.criarUsuario}>Criar Usuário</button>
        </div>
    </div>
  );
  }
}

export default TelaInicial;
