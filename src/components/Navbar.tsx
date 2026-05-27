import { Link } from '@tanstack/react-router'

export function Navbar() {
  return (
    // Container fixo no topo, centralizando o menu
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none px-4">
      
      {/* O menu em si (Pílula) */}
      <nav className="pointer-events-auto flex items-center gap-1 p-1.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-full shadow-lg shadow-slate-200/50 dark:shadow-black/20 transition-all">
        
        <Link
          to="/"
          activeOptions={{ exact: true }}
          className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          activeProps={{
            // Estilo aplicado apenas quando a rota está ativa
            className: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold shadow-sm',
          }}
        >
          Início
        </Link>
        
        <Link
          to="/about"
          className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          activeProps={{
            className: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold shadow-sm',
          }}
        >
          Sobre
        </Link>

        {/* Adicione mais rotas conforme o seu projeto cresce */}
        <Link
          to="/projetos"
          className="px-5 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          activeProps={{
            className: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold shadow-sm',
          }}
        >
          Projetos
        </Link>
      </nav>
      
    </div>
  )
}