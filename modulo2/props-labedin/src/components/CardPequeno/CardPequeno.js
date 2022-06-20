import React from 'react';
import './CardPequeno.css'
import { Pequeno } from './CardPequeno.Styled';

function CardPequeno(props) {
    return (
        <Pequeno>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </Pequeno>
    )
}

export default CardPequeno;