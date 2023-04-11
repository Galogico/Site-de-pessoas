import React from 'react'
import { Conteudo } from '../styled/Layout'
import { Imagem } from '../styled/Layout';
import { DivFlex } from '../styled/Layout';
import { Info } from '../styled/Layout';

function Pessoa(props) {
    const fullName = props.name.title + " " + props.name.first+ " " + props.name.last
    const imageLink = props.picture.large;
  return (
    <Conteudo>
      <DivFlex>
        <Imagem src={imageLink}/>
        <info>
          {fullName}
        </info>
      </DivFlex>
    </Conteudo>
  )
}

export default Pessoa