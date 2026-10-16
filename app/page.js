export default function Home() {
  const proPaymentUrl = "https://buy.stripe.com/test_9B68wP7aI3k1dxu8LR9ws00";
  const investorPaymentUrl = "https://buy.stripe.com/test_aFa14ncv25s9bpm8LR9ws01";

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

      <main className="max-w-6xl mx-auto space-y-12">
        {/* Section Dashboard Actuel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          {/* Colonne de droite : Détails de la cible */}
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
                href={proPaymentUrl}
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
        </div>

        {/* Section Tarifs / Pricing Table */}
        <div className="pt-12 border-t border-slate-800">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Nos Offres d'Abonnement</h2>
            <p className="text-slate-400 mt-2">Choisissez la puissance de frappe adaptée à votre stratégie d'investissement M&A.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Pro */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white">Plan Pro</h3>
                <p className="text-slate-400 text-sm mt-1">Idéal pour les investisseurs indépendants et fondateurs.</p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white">49 €</span>
                  <span className="text-slate-400 text-sm"> / mois</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">✅ Accès aux rapports de cibles off-market</li>
                  <li className="flex items-center gap-2">✅ Scores de matching IA standard</li>
                  <li className="flex items-center gap-2">✅ Mises à jour hebdomadaires</li>
                </ul>
              </div>
              <a href={proPaymentUrl} target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-all cursor-pointer">
                  Souscrire au Plan Pro
                </button>
              </a>
            </div>

            {/* Plan Pro Investor */}
            <div className="bg-gradient-to-b from-indigo-950/40 to-slate-900 border-2 border-indigo-500/50 rounded-2xl p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Exclusif
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Pro Investor</h3>
                <p className="text-slate-400 text-sm mt-1">Pour les fonds, family offices et acquéreurs institutionnels.</p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white">2 990 €</span>
                  <span className="text-slate-400 text-sm"> / mois</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2">⚡ Sourcing prioritaire en temps réel</li>
                  <li className="flex items-center gap-2">⚡ Données financières & contacts directs</li>
                  <li className="flex items-center gap-2">⚡ Accompagnement deal-flow sur-mesure</li>
                </ul>
              </div>
              <a href={investorPaymentUrl} target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 cursor-pointer">
                  Souscrire à Pro Investor
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
