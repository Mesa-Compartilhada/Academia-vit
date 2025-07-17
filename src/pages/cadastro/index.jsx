import React, { useState } from 'react';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !role) {
      setError("Todos os campos são obrigatórios!");
      return;
    }

    await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password, role }),
    });

    setSuccess(true);
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#0f172a] p-8 rounded-lg shadow-lg w-96 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">Cadastro</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-400 text-center mb-4">Cadastro realizado com sucesso!</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-2 w-full bg-gray-900 border border-blue-700 rounded-md text-white placeholder-gray-400"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-300">Role</label>
            <input
              id="role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-2 p-2 w-full bg-gray-900 border border-blue-700 rounded-md text-white placeholder-gray-400"
              placeholder="Digite seu cargo"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-2 w-full bg-gray-900 border border-blue-700 rounded-md text-white placeholder-gray-400"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-2 w-full bg-gray-900 border border-blue-700 rounded-md text-white placeholder-gray-400"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-700 hover:bg-blue-600 transition text-white font-bold rounded-md"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
