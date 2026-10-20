'use client';

import React, { useState } from 'react';
import { UserButton } from '@clerk/nextjs';

const initialDeals = [
  {
    id: 'TARGET-402',
    name: 'CloudMetrics SaaS',
    sector: 'B2B Analytics',
    arr: '850 000 €',
    mrr: '70 800 €',
    growth: '+42% YoY',
    ebitda: '32%',
    score: 91,
    status: 'Off-Market',
    trigger: 'Changement de CTO & Stagnation R&D',
    valuation: '3.4M€ - 3.8M€',
    summary: 'Plateforme B2B de suivi de performance d’infrastructure. Rétention nette de 112%. Fort potentiel d’optimisation pricing.'
  },
  {
    id: 'TARGET-318',
    name: 'HR-Pulse Tech',
    sector: 'HR Tech / SIRH',
    arr: '420 000 €',
    mrr: '35 000 €',
    growth: '+18% YoY',
    ebitda: '28%',
    score: 84,
    status: 'Confidentiel',
    trigger: 'Associé fondateur sortant',
    valuation: '1.6M€ - 1.9M€',
    summary: 'Solution de gestion des congés et du temps de travail pour PME. Faible Churn (1.2% / mois).'
  },
  {
    id: 'TARGET-209',
    name: 'SecureFlow AI',
    sector: 'Cybersecurity / Compliance',
    arr: '1 200 000 €',
    mrr: '100 000 €',
    growth: '+65% YoY',
    ebitda: '22%',
    score: 95,
    status: 'Exclusif',
    trigger: 'Levée non renouvelée / Pivots stratégiques',
    valuation: '5.2M€ - 6.0M€',
    summary: 'Audit automatique de conformité RGPD & ISO27001 par IA. Portefeuille de 120 clients Grands Comptes.'
  },
  {
    id: 'TARGET-115',
    name: 'DeskFlow Workspace',
    sector: 'Productivity B2B',
    arr: '290 000 €',
    mrr: '24 100 €',
    growth: '+12% YoY',
    ebitda: '40%',
    score: 79,
    status: 'Off-Market',
    trigger: 'Recherche de relai de croissance',
    valuation: '950k€ - 1.1M€',
    summary: 'Gestionnaire de tâches collaboratif avec forte intégration Slack/Teams. Modèle 100% Bootstrap très rentable.'
  }
];

export default function Dashboard() {
  const [selectedDeal, setSelectedDeal] = useState(initialDeals[0]);
  const [filterSector, setFilterSector] = useState('All');

  const filteredDeals = filterSector === 'All' 
    ? initialDeals 
    : initialDeals.filter(d => d.sector.includes(filterSector));

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0D14', color: '#F3F4F6', fontFamily: 'sans-serif' }}>
      
      {/* HEADER BAR */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', borderBottom: '1px solid #1F2937', backgroundColor: '#111827' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#6366F1' }}></div>
          <span style={{ fontWeight: 'bold', fontSize: '18px', letterSpacing: '0.5px' }}>DEALFINDER <span style={{ color: '#818CF8' }}>AI</span></span>
          <span style={{ backgroundColor: '#374151', color: '#9CA3AF', fontSize: '11px', padding: '2px 8px', borderRadius: '12px', marginLeft: '8px' }}>PRO INVESTOR TERMINAL</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '14px', color: '#9CA3AF' }}>Espace Membre Accrédité</span>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div style={{ display: 'flex', padding: '24px', gap: '24px', maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* LEFT COLUMN: LIST OF DEALS */}
        <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* FILTERS */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111827', padding: '16px', borderRadius: '12px', border: '1px solid #1F2937' }}>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>Sourcing Off-Market ({filteredDeals.length} Cibles)</span>
            <select 
              value={filterSector} 
              onChange={(e) => setFilterSector(e.target.value)}
              style={{ backgroundColor: '#1F2937', color: '#E5E7EB', border: '1px solid #374151', borderRadius: '6px', padding: '6px 12px', fontSize: '13px' }}
            >
              <option value="All">Tous les secteurs</option>
              <option value="Analytics">B2B Analytics</option>
              <option value="HR">HR Tech</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Productivity">Productivity</option>
            </select>
          </div>

          {/* DEAL CARDS */}
          {filteredDeals.map((deal) => {
            const isSelected = selectedDeal.id === deal.id;
            return (
              <div 
                key={deal.id}
                onClick={() => setSelectedDeal(deal)}
                style={{
                  backgroundColor: isSelected ? '#1E1B4B' : '#111827',
                  border: isSelected ? '1px solid #6366F1' : '1px solid #1F2937',
                  borderRadius: '12px',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#818CF8', fontWeight: '600' }}>{deal.id} • {deal.status}</span>
                  <div style={{ backgroundColor: deal.score >= 90 ? '#065F46' : '#92400E', color: deal.score >= 90 ? '#34D399' : '#FBBF24', fontSize: '12px', fontWeight: 'bold', padding: '2px 8px', borderRadius: '6px' }}>
                    Score M&A : {deal.score}/100
                  </div>
                </div>

                <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 4px 0' }}>{deal.name}</h3>
                <p style={{ fontSize: '12px', color: '#9CA3AF', margin: '0 0 12px 0' }}>Secteur : {deal.sector}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', backgroundColor: '#0A0D14', padding: '8px 12px', borderRadius: '8px', fontSize: '12px' }}>
                  <div><span style={{ color: '#6B7280' }}>ARR:</span> <strong style={{ color: '#F3F4F6' }}>{deal.arr}</strong></div>
                  <div><span style={{ color: '#6B7280' }}>Croissance:</span> <strong style={{ color: '#10B981' }}>{deal.growth}</strong></div>
                  <div><span style={{ color: '#6B7280' }}>Marge EBITDA:</span> <strong style={{ color: '#F3F4F6' }}>{deal.ebitda}</strong></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: DETAILED MEMORANDUM */}
        <div style={{ flex: '1.8', backgroundColor: '#111827', border: '1px solid #1F2937', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ borderBottom: '1px solid #1F2937', pb: '16px', paddingBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#6366F1', fontWeight: 'bold' }}>ANALYSE PRÉDICTIVE DATAPULSE</span>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '4px 0' }}>{selectedDeal.name}</h2>
              <span style={{ fontSize: '13px', color: '#9CA3AF' }}>{selectedDeal.id} — {selectedDeal.sector}</span>
            </div>
            <button 
              onClick={() => alert(`Demande de mise en relation transmise pour ${selectedDeal.name}. Un token d'échange sécurisé a été émis.`)}
              style={{ backgroundColor: '#4F46E5', color: '#FFF', border: 'none', padding: '10px 18px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Initier le Contact Confidentiel
            </button>
          </div>

          {/* KEY METRICS GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px' }}>
            <div style={{ backgroundColor: '#1F2937', padding: '12px', borderRadius: '8px' }}>
              <span style={{ fontSize: '11px', color: '#9CA3AF' }}>ARR (Annuel)</span>
              <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0 0 0' }}>{selectedDeal.arr}</p>
            </div>
            <div style={{ backgroundColor: '#1F2937', padding: '12px', borderRadius: '8px' }}>
              <span style={{ fontSize: '11px', color: '#9CA3AF' }}>MRR (Mensuel)</span>
              <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0 0 0' }}>{selectedDeal.mrr}</p>
            </div>
            <div style={{ backgroundColor: '#1F2937', padding: '12px', borderRadius: '8px' }}>
              <span style={{ fontSize: '11px', color: '#9CA3AF' }}>EBITDA</span>
              <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0 0 0', color: '#34D399' }}>{selectedDeal.ebitda}</p>
            </div>
            <div style={{ backgroundColor: '#1F2937', padding: '12px', borderRadius: '8px' }}>
              <span style={{ fontSize: '11px', color: '#9CA3AF' }}>Valo Est. IA</span>
              <p style={{ fontSize: '16px', fontWeight: 'bold', margin: '4px 0 0 0', color: '#818CF8' }}>{selectedDeal.valuation}</p>
            </div>
          </div>

          {/* TRIGGER EVENT & ANALYSIS */}
          <div style={{ backgroundColor: '#1E1B4B', border: '1px solid #3730A3', padding: '16px', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#A5B4FC' }}>⚡ Signal Détecté par l'Algorithme (Trigger Event)</h4>
            <p style={{ margin: 0, fontSize: '14px', color: '#E0E7FF' }}>{selectedDeal.trigger}</p>
          </div>

          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#D1D5DB' }}>Synthèse d'Évaluation & Memorandum M&A</h4>
            <p style={{ fontSize: '14px', color: '#9CA3AF', lineHeight: '1.6', margin: 0 }}>
              {selectedDeal.summary}
            </p>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #1F2937', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#6B7280' }}>Document sécurisé DealFinder AI - Usage exclusif réservé aux abonnés.</span>
            <button 
              onClick={() => alert(`Téléchargement du Memorandum PDF pour ${selectedDeal.name}...`)}
              style={{ backgroundColor: '#374151', color: '#F3F4F6', border: '1px solid #4B5563', padding: '8px 14px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer' }}
            >
              📄 Exporter le Memorandum PDF
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
