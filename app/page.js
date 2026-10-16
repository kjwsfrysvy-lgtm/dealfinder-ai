export default function Home() {
  const stripePaymentUrl = "https://buy.stripe.com/test_9B68wP7aI3k1dxu8LR9ws00";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-10 pb-4 border-b border-slate-800">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          🚀 DealFinder AI - Radar M&A Tech
        </h1>
        <span className="bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/20 font-medium">
          • 12 Nouvelles opportunités détectées
        </span>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne de gauche : Liste des opportunités */}
        <div className="md:col-span-1 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
          <h2 className="text-lg font-semibold mb-4 text-slate-200">
            Cibles Off-Market Qualifiées
          </h2>
          <div className="space-y-3">
            <div className="p-4 bg-slate-800/80 border border-indigo-500/30 rounded-lg cursor-pointer hover:border-indigo-500 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-indigo-300">CloudSync Pro</h3>
                  <p className="text-xs text-slate-400">SaaS B2B / DevOps</p>
                </div>
                <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                  Score : 94/100
                </span>
              </div>
              <div className="mt-3 flex gap-4 text-xs text-slate-400">
                <span>ARR : <strong>4,2 M€</strong></span>
                <span>Croissance : <strong className="text-emerald-400">+52%</strong></span>
                <span>Effectifs : <strong>28 sal.</strong></span>
              </div>
            </div>

            <div className="p-4 bg-slate-800/40 border border-slate-800 rounded-lg opacity-80">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-300">DataPulse Analytics</h3>
                  <p className="text-xs text-slate-500">IA / Business Intelligence</p>
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  Score : 88/100
                </span>
              </div>
              <div className="mt-3 flex gap-4 text-xs text-slate-500">
                <span>ARR : <strong>2,8 M€</strong></span>
                <span>Croissance : <strong className="text-emerald-500/80">+68%</strong></span>
                <span>Effectifs : <strong>19 sal.</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne de droite : Détails de la cible & Bouton Stripe */}
        <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start border-b border-slate-800 pb-4 mb-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-100">CloudSync Pro</h2>
                <p className="text-sm text-indigo-400 mt-1">SaaS B2B / DevOps</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                Thèse d'investissement IA
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                SaaS autofinancé à forte rentabilité. Augmentation massive du trafic web (+80% en 6 mois) et aucun investisseur institutionnel au capital.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <a
              href={stripePaymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto"
            >
              <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-indigo-600/20 active:scale-95 cursor-pointer">
                Accéder au Rapport Complet (Abonnement Pro)
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
