import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  // Estado para garantir que as animações só rodem após a hidratação do cliente
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const name = "Samuel Delphino"
  const role = "Desenvolvedor Front-end"
  const bio = "Transformo ideias complexas em interfaces de usuário limpas, modernas e interativas. Focado em performance, acessibilidade e na melhor experiência possível."

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Framer Motion", icon: "✨" },
  ]

  return (
    <>
      {/*Estilos CSS injetados para garantir que as animações funcionemsem precisar alterar o tailwind.config.js*/}

      {/* Container Principal com background super moderno (Dark Mode default fallback) */}
      <div className="relative min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-50 overflow-hidden font-sans flex flex-col justify-center transition-colors duration-300">

        {/* ELEMENTOS DE FUNDO (Bolas de luz com blur) */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-pulse-glow pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-pulse-glow pointer-events-none delay-500"></div>

        {/* CONTEÚDO PRINCIPAL */}
        <main className={`relative max-w-5xl mx-auto px-6 py-20 z-10 w-full ${isMounted ? 'visible' : 'invisible'}`}>

          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">

            {/* Textos - Lado Esquerdo */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="animate-fade-up">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide border border-indigo-200 dark:border-indigo-800/50 backdrop-blur-sm shadow-sm">
                  🚀 Disponível para novas oportunidades
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight animate-fade-up delay-100">
                Olá, eu sou <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  {name}
                </span>
              </h1>

              <h2 className="text-2xl sm:text-3xl font-medium text-slate-600 dark:text-slate-300 animate-fade-up delay-200">
                {role}
              </h2>

              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed animate-fade-up delay-300">
                {bio}
              </p>

              {/* Botões CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start animate-fade-up delay-400">
                <Link
                  to="/portfolio" // Adapte para a sua rota real
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Ver Projetos
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
                <Link
                  to="/contato" // Adapte para a sua rota real
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  Entrar em Contato
                </Link>
              </div>
            </div>

            {/* Avatar / Imagem - Lado Direito */}
            <div className="flex-shrink-0 animate-fade-up delay-200">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 animate-float">
                {/* Efeito de anel brilhante atrás do avatar */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2rem] rotate-6 opacity-70 blur-lg"></div>
                {/* Container do Avatar (Formato "Squircle") */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 rounded-[2rem] rotate-3 border border-slate-200 dark:border-slate-700/50 shadow-2xl flex items-center justify-center overflow-hidden">
                  {/* Coloque sua tag <img src="sua-foto.jpg" /> aqui! Usando emoji como placeholder */}
                  <span className="text-7xl sm:text-9xl transform -rotate-3">👨‍💻</span>
                </div>
              </div>
            </div>

          </div>

          {/* SEÇÃO DE SKILLS COM CARDS GLASSMORPHISM */}
          <div className="mt-24 pt-10 border-t border-slate-200/50 dark:border-slate-800/50 animate-fade-up delay-500">
            <p className="text-sm font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-6 text-center md:text-left">
              Tecnologias que domino
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 backdrop-blur-md shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 cursor-default"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </>
  )
}
