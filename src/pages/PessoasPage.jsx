import { Campo, Conteudo, Fundo,Titulo } from "../styled/Layout";
import "../public.css"
import axios from "axios";
import { useState,useEffect } from "react";
import Pessoa from "../components/Pessoa.jsx";
import Navbar from "../components/Navbar";
function PessoasPage() {
  const [pessoas,setPessoas] = useState([]);
  const url = "https://randomuser.me/api/?results=10"
  useEffect(()=>{
    axios.get(url).then(res=>setPessoas(res.data.results))
    .catch("deu erro pra pegar os dados da API")
  },[])

  return (
    <Fundo>
        <Navbar/>
      <Titulo>Styled Components</Titulo>
      <Campo>
        {pessoas.map((p, index)=><Pessoa key={index} {...p}/>)}
      </Campo>
    </Fundo>
  );
}

export default PessoasPage;
