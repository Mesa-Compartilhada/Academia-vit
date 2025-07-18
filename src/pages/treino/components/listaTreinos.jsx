export default function ListaTreinos({ trainings }) {

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Treinos do Aluno</h1>

        {!trainings ? (
          <p className="text-gray-600">Lista vazia</p>
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
                {trainings.map((training, index) => (
                  <tr key={training.id || index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{training.user_id}</td>
                    <td className="py-2 px-4 border-b">{training.name}</td>
                    <td className="py-2 px-4 border-b">{training.trainings}</td>
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
