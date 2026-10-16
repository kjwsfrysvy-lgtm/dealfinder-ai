'use client'

export default function Home() {

  const handleSubscribe = async (priceId) => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert("Erreur lors de la redirection vers le paiement.")
      }
    } catch (error) {
      console.error(error)
      alert("Une erreur est survenue.")
    }
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      
      {/* Hero Header */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px' }}>
          🚀 DealFinder AI - Intelligence M&A & Sourcing Off-Market
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
          Détectez les meilleures opportunités de rachat SaaS & Tech avant tout le monde grâce à notre algorithme d'analyse prédictive.
        </p>
      </div>

      {/* Grille des Opportunités */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '60px' }}>
        
        {/* Cibles Off-Market */}
        <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#f8fafc' }}>
            🎯 Cibles Off-Market Qualifiées
          </h2>
          
          <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #334155' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#38bdf8' }}>CloudSync Pro</h3>
            <p style={{ fontSize: '14px', color: '#94a3b8', margin: '4px 0' }}>SaaS B2B / DevOps</p>
            <p style={{ fontSize: '14px', color: '#f1f5f9', margin: '4px 0' }}>Score M&A : <strong>94/100</strong></p>
            <p style={{ fontSize: '14px', color: '#4ade80', margin: '4px 0' }}>ARR : 4,2 M€ | Croissance : +52%</p>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#38bdf8' }}>DataPulse Analytics</h3>
            <p style={{ fontSize: '14px', color: '#94a3b8', margin: '4px 0' }}>IA / Business Intelligence</p>
            <p style={{ fontSize: '14px', color: '#f1f5f9', margin: '4px 0' }}>Score M&A : <strong>88/100</strong></p>
            <p style={{ fontSize: '14px', color: '#4ade80', margin: '4px 0' }}>ARR : 2,8 M€ | Croissance : +68%</p>
          </div>
        </div>

        {/* Thèse d'investissement IA */}
        <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#f8fafc' }}>
              🧠 Thèse d'Investissement Générée par IA
            </h2>
            <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px' }}>
              Société SaaS autofinancée à forte rentabilité. Augmentation constante du trafic web (+80% sur 6 mois) sans investisseur institutionnel au capital. Opportunité idéale de rachat partiel ou de build-up stratégique.
            </p>
          </div>
          <button style={{ backgroundColor: '#0284c7', color: '#ffffff', padding: '12px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
            Accéder aux Rapports Complets (Abonnés)
          </button>
        </div>

      </div>

      {/* Grille Tarifaire Stratégique */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>💎 Tarifs & Plans d'Accès</h2>
        <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Sélectionnez le plan adapté à votre capacité d'investissement M&A.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
          
          {/* Plan Pro */}
          <div style={{ backgroundColor: '#1e293b', padding: '32px', borderRadius: '12px', border: '1px solid #334155', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '22px', color: '#38bdf8', marginBottom: '8px' }}>Plan Pro M&A</h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>Idéal pour investisseurs indépendants & repreneurs.</p>
              <p style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>149 € <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 'normal' }}>/ mois</span></p>
              <ul style={{ color: '#cbd5e1', paddingLeft: '20px', lineHeight: '2', marginBottom: '30px', fontSize: '14px' }}>
                <li>Accès aux fiches cibles off-market</li>
                <li>Scores de matching & valorisations IA</li>
                <li>Mises à jour des dossiers chaque semaine</li>
                <li>Export des rapports synthétiques</li>
              </ul>
            </div>
            <button 
              onClick={() => handleSubscribe('price_1URD2hH1RZqAaUpN0SQvBJV2')}
              style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '14px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
              Souscrire au Plan Pro (149€)
            </button>
          </div>

          {/* Plan Pro Investor */}
          <div style={{ backgroundColor: '#1e293b', padding: '32px', borderRadius: '12px', border: '2px solid #0284c7', textAlign: 'left', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ backgroundColor: '#0284c7', color: '#ffffff', fontSize: '12px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '12px', position: 'absolute', top: '16px', right: '16px' }}>
                EXCLUSIF
              </span>
              <h3 style={{ fontSize: '22px', color: '#f8fafc', marginBottom: '8px' }}>Pro Investor</h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>Pour fonds d'investissement & Family Offices.</p>
              <p style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>2 990 € <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 'normal' }}>/ mois</span></p>
              <ul style={{ color: '#cbd5e1', paddingLeft: '20px', lineHeight: '2', marginBottom: '30px', fontSize: '14px' }}>
                <li>Sourcing prioritaire en temps réel</li>
                <li>Contacts directs des fondateurs & dirigeants</li>
                <li>Accès illimité aux données financières brutes</li>
                <li>Accompagnement deal-flow sur-mesure</li>
              </ul>
            </div>
            <button 
              onClick={() => handleSubscribe('price_1UQvYxH1RZqAaUpNfCFsE5pM')}
              style={{ backgroundColor: '#16a34a', color: '#ffffff', padding: '14px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
              Souscrire à Pro Investor (2 990€)
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}
