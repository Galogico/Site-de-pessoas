import React from 'react'
import { Conteudo } from '../styled/Layout'
import { Imagem } from '../styled/Layout';

function Pessoa(props) {
    const fullName = props.name.title + " " + props.name.first+ " " + props.name.last
    const imageLink = props.picture.large;
  return (
    <Conteudo>
      <Imagem src={imageLink}/>
      {fullName}
    </Conteudo>
  )
}

export default Pessoa