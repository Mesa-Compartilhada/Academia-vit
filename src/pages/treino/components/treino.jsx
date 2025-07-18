import React, { useState } from 'react';

export default function Treino() {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('');
  const [exercises, setExercises] = useState('');
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch("http://localhost:8080/api/trainings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          frequency,
          exercises,
          user_id: userId
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao criar rotina');
      }

      setSuccess('Rotina criada com sucesso!');
      setName('');
      setFrequency('');
      setExercises('');
      setUserId('');
      console.log(data)
    } catch (err) {
      setError(err.message);
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#0f172a] p-8 rounded-lg shadow-lg w-96 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">Criar Rotina</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-400 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-2 w-full bg-gray-900 border border-blue-700 rounded-md text-white placeholder-gray-400"
              placeholder="Nome da rotina"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-300">Frequência</label>
            <input
              id="frequency"
              type="text"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="mt-2 p-2 w-full bg-gray-900 border border-blue-700 rounded-md text-white placeholder-gray-400"
              placeholder="Ex: 3x por semana"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exercises" className="block text-sm font-medium text-gray-300">Exercícios</label>
            <textarea
              id="exercises"
              value={exercises}
              onChange={(e) => setExercises(e.target.value)}
              className="mt-2 p-2 w-full bg-gray-900 border border-blue-700 rounded-md text-white placeholder-gray-400"
              placeholder="Descrição dos exercícios"
              rows={3}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="userId" className="block text-sm font-medium text-gray-300">ID do Usuário</label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="mt-2 p-2 w-full bg-gray-900 border border-blue-700 rounded-md text-white placeholder-gray-400"
              placeholder="ID do usuário"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-700 hover:bg-blue-600 transition text-white font-bold rounded-md"
          >
            Criar Rotina
          </button>
        </form>
      </div>
    </div>
  );
}
