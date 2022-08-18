import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`
class TelaDetalhada extends React.Component {
  state={
    usuarios: [],
    usuarioProc:""
  }

  selcionaUsuario = (event) => {
    this.setState({
      usuarioProc: event.target.value
    })
  }
  componentDidMount() {
    this.buscarUsuario();
  }
  buscarUsuario = async() => {
    try {
        const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "jorge-junior-ailton"
            }
        })

        this.setState({ usuarios: res.data })
    } catch (err) {
        alert("Ocorreu um problema, tente novamente")
    }
}


pesquisaUsuario = async() => {
  const body = {
    name: this.state.usuarioProc
  }
  try {
      const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body, {
          headers: {
              Authorization: "jorge-junior-ailton"
          }
      })

      this.setState({ usuarios: res.data })
  } catch (err) {
      alert("Ocorreu um problema, tente novamente")
  }
}

deletarUsuario = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
          Authorization: "jorge-junior-ailton"
      }
  })
      .then((res) => {
          alert("Usuário(a) deletado(a) com sucesso!")
          this.buscarUsuario()
      })
      .catch((err) => {
          alert("Ocorreu um erro, tente novamente")
      })
}
 render(){
  const listaUsuarios = this.state.usuarios.map((user) => {
    return (
        <CardUsuario key={user.id}>
            {user.name}
            <button onClick={() => this.deletarUsuario(user.id)}>X</button>
        </CardUsuario>
    )
})
  return (
    <div>
         <h1>Tela de detalhes:</h1>    
        <button onClick={this.props.mudaTela2}>Troca de Tela</button>
        {listaUsuarios}
        <div>
            <p>Procurar Usuário</p>
            <input placeholder='Nome para busca' value={this.state.usuarioProc} onChange={this.pesquisaUsuario}/>
            <button>Salvar Edição</button>
        </div>
      
    </div>
  );
  }
}

export default TelaDetalhada;
