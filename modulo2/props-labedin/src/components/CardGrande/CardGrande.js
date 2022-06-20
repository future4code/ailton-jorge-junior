import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';
import {Grande} from './CardGrande.Styled'


function CardGrande(props) {
    return (
        <Grande>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </Grande>
    )
}

export default CardGrande;