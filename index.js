import React, { useState } from 'react';

const mockTargets = [
  {
    id: '1',
    name: 'CloudSync Pro',
    category: 'B2B SaaS / DevOps',
    arrEstimate: '4.2M €',
    growthYoY: '+52%',
    employeeCount: 28,
    dealScore: 94,
    summary: 'SaaS bootstrapped à forte rentabilité. Augmentation massive du trafic web (+80% en 6 mois) et aucun investisseur institutionnel au capital.'
  },
  {
    id: '2',
    name: 'DataPulse Analytics',
    category: 'AI / Business Intelligence',
    arrEstimate: '2.8M €',
    growthYoY: '+68%',
    employeeCount: 19,
    dealScore: 88,
    summary: 'Signal fort : Recrutement accéléré de cadres Enterprise Sales. Opportunité de Build-Up idéale pour fonds Mid-Market.'
  }
];

export default function Home() {
  const [selectedTarget, setSelectedTarget] = useState(mockTargets[0]);

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', padding: '24px' }}>
      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>🚀 DealFinder AI - Radar M&A Tech</h1>
        <span style={{ backgroundColor: '#065f46', color: '#34d399', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
          • 12 Nouvelles opportunités détectées
        </span>
      </header>

      <div style={{ display: 'flex', gap: '24px' }}>
        {/* Liste des cibles */}
        <div style={{ width: '50%' }}>
          <h2>Cibles Off-Market Qualifiées</h2>
          {mockTargets.map((target) => (
            <div 
              key={target.id}
              onClick={() => setSelectedTarget(target)}
              style={{
                backgroundColor: selectedTarget.id === target.id ? '#1e293b' : '#0f172a',
                border: selectedTarget.id === target.id ? '2px solid #6366f1' : '1px solid #334155',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '16px',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={{ margin: 0, fontSize: '18px' }}>{target.name}</h3>
                <span style={{ color: '#818cf8', fontWeight: 'bold' }}>Score: {target.dealScore}/100</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '14px', margin: '8px 0' }}>{target.category}</p>
              <div style={{ display: 'flex', gap: '16px', fontSize: '12px', marginTop: '12px', borderTop: '1px solid #334155', paddingTop: '8px' }}>
                <div>ARR: <strong>{target.arrEstimate}</strong></div>
                <div>Croissance: <strong style={{ color: '#34d399' }}>{target.growthYoY}</strong></div>
                <div>Effectifs: <strong>{target.employeeCount} p.</strong></div>
              </div>
            </div>
          ))}
        </div>

        {/* Détails IA */}
        <div style={{ width: '50%', backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h2 style={{ marginTop: 0 }}>{selectedTarget.name}</h2>
          <p style={{ color: '#818cf8' }}>{selectedTarget.category}</p>
          <hr style={{ borderColor: '#334155', margin: '16px 0' }} />
          <h3>Thèse d'investissement IA</h3>
          <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>{selectedTarget.summary}</p>
          <button style={{ backgroundColor: '#4f46e5', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '16px' }}>
            Accéder au Rapport Complet (Abonnement Pro)
          </button>
        </div>
      </div>
    </div>
  );
}
