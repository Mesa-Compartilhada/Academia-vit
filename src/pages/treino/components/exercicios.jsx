import { useEffect, useState } from "react";

export default function Exercises({ lista }) {
  const [exercises, setExercises] = useState(null);

  useEffect(() => {
    async function fetchTrainings() {
      try {
        const response = await fetch("http://localhost:8080/api/trainings", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data.trainings);
        setExercises(data.trainings);
      } catch (error) {
        console.error("Erro ao buscar os treinos:", error);
      }
    }

    fetchTrainings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Exercícios do Aluno</h1>

        {!exercises ? (
          <p className="text-gray-600">Carregando exercícios...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="py-3 px-4 border-b">Aluno</th>
                  <th className="py-3 px-4 border-b">Nome</th>
                  <th className="py-3 px-4 border-b">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise, index) => (
                  <tr key={exercise.id || index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{exercise.user_id}</td>
                    <td className="py-2 px-4 border-b">{exercise.name}</td>
                    <td className="py-2 px-4 border-b">{exercise.exercises}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
