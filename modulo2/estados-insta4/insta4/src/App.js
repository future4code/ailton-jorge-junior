import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?random=4'}
          fotoPost={'https://picsum.photos/200/150?random=1'}
        />
         <Post
          nomeUsuario={'Isabela'}
          fotoUsuario={'https://picsum.photos/50/50?random=5'}
          fotoPost={'https://picsum.photos/200/150?random=2'}
        />
         <Post
          nomeUsuario={'Ana'}
          fotoUsuario={'https://picsum.photos/50/50?random=6'}
          fotoPost={'https://picsum.photos/200/150?random=3'}
        />
      </MainContainer>
    );
  }
}

export default App;
