/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import produto from '../produtos.json';

class Product extends Component{

  vendasRealizadas(vendas){
    return produto.filter( 
      item => {
      if(item.vendeu == vendas){ return item}
    })
  }

  render(){
    return(
      <div>
        <h1>Vendas Realizadas</h1>
        <ul>
            {
              this.vendasRealizadas('Sim').map((p, index)=>{
                return <li>{p.nomeProduto}</li>
              })
            }
        </ul>

        <h1>Vendas Não Realizadas</h1>
        <ul>
            {
              this.vendasRealizadas('Não').map((p, index)=>{
                return <li>{p.nomeProduto}</li>
              })
            }
        </ul>
      </div>

    )
  }
}

export default Product;