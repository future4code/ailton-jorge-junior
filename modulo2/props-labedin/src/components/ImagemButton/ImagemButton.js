import React from 'react';
import './ImagemButton.css'
import {Botao} from './ImagemButton.Styled'

function ImagemButton(props) {
    return (
        <Botao>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </Botao>

    )
}

export default ImagemButton;