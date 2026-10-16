export default function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      
      {/* En-titre principal */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>
          🚀 DealFinder AI - Radar M&A Tech
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '16px' }}>
          • 12 Nouvelles opportunités détectées aujourd'hui par notre IA d'analyse prédictive.
        </p>
      </div>

      {/* Grille des sections */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '50px' }}>
        
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
        <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#f8fafc' }}>
            🧠 Thèse d'Investissement IA
          </h2>
          <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px' }}>
            SaaS autofinancé à forte rentabilité. Augmentation massive du trafic web (+80% en 6 mois) et absence d'investisseur institutionnel au capital. Opportunité idéale de rachat partiel ou total.
          </p>
          <button style={{ backgroundColor: '#0284c7', color: '#ffffff', padding: '10px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: '500', width: '100%' }}>
            Accéder au Rapport Complet (Pro)
          </button>
        </div>

      </div>

      {/* Section Tarifs / Abonnements */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>💎 Nos Offres d'Abonnement</h2>
        <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Choisissez la puissance de frappe adaptée à votre stratégie d'investissement M&A.</p>
        
        <div style={{ display: 'inline-block', backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', border: '1px solid #334155', textAlign: 'left', minWidth: '320px' }}>
          <h3 style={{ fontSize: '20px', color: '#38bdf8', marginBottom: '10px' }}>Plan Pro M&A</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '15px' }}>499 € <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 'normal' }}>/ mois</span></p>
          <ul style={{ color: '#cbd5e1', paddingLeft: '20px', lineHeight: '1.8', marginBottom: '25px', fontSize: '14px' }}>
            <li>Accès illimité aux cibles off-market</li>
            <li>Rapports d'évaluation générés par IA</li>
            <li>Contacts directs fondateurs & décisionnaires</li>
            <li>Alertes en temps réel</li>
          </ul>
          <button style={{ backgroundColor: '#16a34a', color: '#ffffff', padding: '12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
            Passer à l'action (S'abonner)
          </button>
        </div>
      </div>

    </div>
  )
}
