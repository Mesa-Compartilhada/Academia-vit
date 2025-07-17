import React from 'react';

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,dark')"
        }}
      ></div>

      {/* Conteúdo sobre a imagem */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 drop-shadow-lg">
            Bem-vindo ao Meu Projeto
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            Este é um exemplo de layout com imagem de fundo, cores escuras e estilo moderno.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition">
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  );
};

