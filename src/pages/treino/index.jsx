import Exercises from "./components/exercicios";
import Treino from "./components/treino";

export default function Treinamentos(){
  let dados = localStorage.getItem("nome")
  if (JSON.parse(dados).role === "Treinador"){
    return(
      <div>
        <Treino></Treino>
      </div>
    )
  } else{
    return(
      <div>
        <Exercises></Exercises>
      </div>
    )
  }
  
}