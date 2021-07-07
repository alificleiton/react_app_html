import React from 'react';
import './Title.css';

const Title = (props) => {
  return (
    <div>
       <h1>Olá {props.nome} Seja Bem Vindo!!!</h1>
    </div>
  )
}

export default Title;
