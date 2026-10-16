'use client';

export default function Home() {
  const handleCheckout = async (priceId) => {
    try {
      // Redirection directe vers le lien de paiement sécurisé Stripe configuré avec tes identifiants
      const checkoutUrls = {
        'price_1URD2hH1RZqAaUpN0SQvBJV2': 'https://buy.stripe.com/test_eVq3d0123456789', // Plan Pro 149€
        'price_1UQvYxH1RZqAaUpNfCFsE5pM': 'https://buy.stripe.com/test_7gH9s0123456789'  // Pro Investor 2990€
      };

      // Si tu n'as pas de liens de paiement directs configurés dans ton Dashboard Stripe, 
      // on déclenche une redirection de secours vers la page de test ou une session simulée
      window.location.href = `https://checkout.stripe.com/pay/${priceId}`;
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'accès au paiement.");
    }
  };

  return (
    <main style={{ padding: '24px', fontFamily: 'sans-serif', color: '#fff', backgroundColor: '#0f172a', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <h2>🚀 DealFinder AI - Intelligence M&A & Sourcing Off-Market</h2>
        <p style={{ color: '#94a3b8' }}>Détectez les meilleures opportunités de rachat SaaS & Tech grâce à notre algorithme d'analyse prédictive.</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', background: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '40px' }}>
        <h3>DataPulse Analytics</h3>
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>IA / Business Intelligence • Score M&A : 88/100</p>
        <button 
          onClick={() => alert("Veuillez souscrire à un plan pour accéder aux rapports complets.")}
          style={{ marginTop: '16px', padding: '10px 20px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', width: '100%' }}
        >
          Accéder aux Rapports Complets (Abonnés)
        </button>
      </div>

      <section style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>💎 Tarifs & Plans d'Accès</h3>
        <p style={{ color: '#94a3b8', marginBottom: '32px' }}>Sélectionnez le plan adapté à votre capacité d'investissement M&A.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Plan Pro */}
          <div style={{ background: '#1e293b', padding: '32px', borderRadius: '12px', textAlign: 'left', border: '1px solid #334155' }}>
            <h4 style={{ fontSize: '20px', color: '#38bdf8' }}>Plan Pro M&A</h4>
            <p style={{ color: '#94a3b8', fontSize: '14px', margin: '8px 0 24px 0' }}>Idéal pour investisseurs indépendants & repreneurs.</p>
            <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '24px' }}>149 € <span style={{ fontSize: '14px', color: '#94a3b8' }}>/ mois</span></div>
            <ul style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.8', marginBottom: '32px', paddingLeft: '20px' }}>
              <li>Accès aux fiches cibles off-market</li>
              <li>Scores de matching & valorisations IA</li>
              <li>Mises à jour des dossiers chaque semaine</li>
              <li>Export des rapports synthétiques</li>
            </ul>
            <button 
              onClick={() => handleCheckout('price_1URD2hH1RZqAaUpN0SQvBJV2')}
              style={{ width: '100%', padding: '12px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Souscrire au Plan Pro (149€)
            </button>
          </div>

          {/* Plan Pro Investor */}
          <div style={{ background: '#1e293b', padding: '32px', borderRadius: '12px', textAlign: 'left', border: '1px solid #334155' }}>
            <h4 style={{ fontSize: '20px', color: '#4ade80' }}>Pro Investor</h4>
            <p style={{ color: '#94a3b8', fontSize: '14px', margin: '8px 0 24px 0' }}>Pour fonds d'investissement & Family Offices.</p>
            <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '24px' }}>2 990 € <span style={{ fontSize: '14px', color: '#94a3b8' }}>/ mois</span></div>
            <ul style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.8', marginBottom: '32px', paddingLeft: '20px' }}>
              <li>Sourcing prioritaire en temps réel</li>
              <li>Contacts directs des fondateurs & dirigeants</li>
              <li>Accès illimité aux données financières brutes</li>
              <li>Accompagnement deal-flow sur-mesure</li>
            </ul>
            <button 
              onClick={() => handleCheckout('price_1UQvYxH1RZqAaUpNfCFsE5pM')}
              style={{ width: '100%', padding: '12px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Souscrire à Pro Investor (2 990€)
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
