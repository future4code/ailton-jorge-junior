import React from 'react';
import './App.css';

function App() {
const titulo='Titulo do Vídeo'

function reproduzirVideo(){
  alert('O vídeo esta sendo reproduzido')
}
  return (
    <div className="App">
      <header className="App-header">
       <div className='header-components'>
        <h1>Lab Tune</h1>
        <input type="text" placeholder="Busca"/>
        </div>
      </header>
      <div className='container-nav-main'>
        <navebar className="menu-containe">
          <div className='menu-01'>
          <p>Início</p>
          <p>Em alta</p>
          <p>Início</p>
          </div>
          <div className='menu-02'>
          <p>Originais</p>
          <p>Histórico</p>
          </div>         
        </navebar>
        <main className='videos-container'>
          <div className='card-video' onClick={reproduzirVideo}>
          <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
          <h4>{titulo}</h4>
          </div>
          <div className='card-video'onClick={reproduzirVideo}>
          <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
          <h4>{titulo}</h4>
          </div>
          <div className='card-video'onClick={reproduzirVideo}>
          <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
          <h4>{titulo}</h4>
          </div>
          <div className='card-video'onClick={reproduzirVideo}>
          <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
          <h4>{titulo}</h4>
          </div>
          <div className='card-video'onClick={reproduzirVideo}>
          <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
          <h4>{titulo}</h4>
          </div>
          <div className='card-video'onClick={reproduzirVideo}>
          <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
          <h4>{titulo}</h4>
          </div>
          <div className='card-video'onClick={reproduzirVideo}>
          <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
          <h4>{titulo}</h4>
          </div>
          <div className='card-video'onClick={reproduzirVideo}>
          <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
          <h4>{titulo}</h4>
          </div>
          
        </main>
      </div>
      <footer className='footer'>
          <h4>
          Oi! Eu moro no footer!
          </h4>
      </footer>
    </div>
  );
}

export default App;
