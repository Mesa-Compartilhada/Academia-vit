import { useEffect, useState } from "react";
import ListaTreinos from "./components/listaTreinos";
import FormAddTreinos from "./components/formAddTreinos";

export default function Treinamentos(){
  let dados = JSON.parse(localStorage.getItem("nome"))

  const [trainings, setTrainings] = useState([])

  useEffect(() => {
    async function fetchTrainings() {
      try {
        const response = await fetch("http://localhost:8080/api/trainings", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let data = await response.json();
        data = data.trainings
        data = data.filter((item) => item.user_id === dados.id)
        setTrainings(data);
      } catch (error) {
        console.error("Erro ao buscar os treinos:", error);
      }
    }

    fetchTrainings();
  }, []);

  if (dados.role === "Treinador"){
    return(
      <div>
        <FormAddTreinos />
      </div>
    )
  } else if(dados.role === "Aluno"){
    return(
      <div>
        <ListaTreinos trainings={trainings} />
      </div>
    )
  }
  
}