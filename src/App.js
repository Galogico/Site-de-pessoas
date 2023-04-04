import { Campo, Conteudo, Fundo,Titulo } from "./styled/Layout";
import "./public.css"
function App() {
  return (
    <Fundo>
      <Titulo>Styled Components</Titulo>
      <Campo>
        <Conteudo>
          sushi é deliciushh
        </Conteudo>
        <Conteudo>
          porg é brabaço
        </Conteudo>
      </Campo>
    </Fundo>
  );
}

export default App;
