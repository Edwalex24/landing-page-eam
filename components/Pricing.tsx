import React from 'react';
import { SectionId } from '../types';
import { Check } from 'lucide-react';
import PricingCard from './PricingCard';

const Pricing: React.FC = () => {

  const plans = [
    {
      name: "Esencial",
      module: "Módulo 1: Facturación",
      description: "Para cumplir con la facturación de ley.",
      cta: "Cotizar Esencial",
      highlight: false,
      tiers: [
        { range: "1 - 500 máq", price: 1200 },
        { range: "501 - 1,500 máq", price: 900 },
        { range: "+1,501 máq", price: 700 },
      ],
      features: [
        { name: "Facturación Automatizada", included: true },
        { name: "Dashboard Ejecutivo Básico", included: true },
        { name: "Hosting + SSL + Backups", included: true },
        { name: "Soporte", value: "Correo (48h)", included: true }
      ]
    },
    {
      name: "Profesional",
      module: "Módulo 2: Trámites (+ Mod 1)",
      description: "Organiza el caos. Centraliza novedades.",
      cta: "Elegir Profesional",
      highlight: true,
      badge: "RECOMENDADO",
      tiers: [
        { range: "1 - 500 máq", price: 1500 },
        { range: "501 - 1,500 máq", price: 1200 },
        { range: "+1,501 máq", price: 900 },
      ],
      features: [
        { name: "Todo lo de Esencial", included: true },
        { name: "Portal de Trámites (Tickets)", included: true, bold: true },
        { name: "Trazabilidad Gestor/Aliado", included: true, bold: true },
        { name: "Hosting Premium", included: true },
        { name: "🛡️ Blindaje Regulatorio", included: true },
        { name: "Reportes de Producción", included: true },
        { name: "Usuarios Admin", value: "10", included: true },
        { name: "Soporte", value: "Prioritario (24h)", included: true }
      ]
    },
    {
      name: "Enterprise",
      module: "Módulo 3: Automatización (+ Mod 2)",
      description: "Máxima seguridad y protección anti-multas.",
      cta: "Contactar Ventas",
      highlight: false,
      tiers: [
        { range: "1 - 500 máq", price: 1800 },
        { range: "501 - 1,500 máq", price: 1400 },
        { range: "+1,501 máq", price: 1100 },
      ],
      features: [
        { name: "Todo lo de Profesional", included: true },
        { name: "🛡️ Blindaje Regulatorio Avanzado", included: true, bold: true },
        { name: "Reportes de Producción Automatizados", included: true, bold: true },
        { name: "API Access + Webhooks", included: true },
        { name: "Account Manager Dedicado", included: true },
        { name: "Usuarios", value: "Ilimitados", included: true },
        { name: "Soporte", value: "24/7 (4h respuesta)", included: true }
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.PRICING} className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Estrategia Modular</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Precios que escalan con tu operación
          </h3>
          <p className="text-slate-400 text-lg">
            Elige el plan que mejor se adapte a tu tamaño actual. Los descuentos se aplican automáticamente según tu volumen de máquinas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              tiers={plan.tiers}
              features={plan.features}
              onAction={scrollToContact}
            />
          ))}
        </div>

        {/* Investment Examples Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="bg-slate-800 p-4 border-b border-slate-700">
              <h4 className="text-white font-bold text-lg text-center uppercase tracking-wide">Ejemplos de Inversión Mensual</h4>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-sm text-brand-400 font-bold uppercase tracking-wider">Pequeña Operación</div>
                <div className="text-white font-medium">300 máquinas</div>
                <div className="text-xs text-slate-500 mb-2">(Plan Profesional)</div>
                <div className="text-slate-300 text-sm font-mono bg-slate-900/50 p-2 rounded border border-slate-700/50">
                  300 × $1,500
                </div>
                <div className="text-xl font-bold text-white">= $450,000 <span className="text-xs font-normal text-slate-500">COP/mes</span></div>
              </div>

              <div className="space-y-2 relative md:after:content-[''] md:after:absolute md:after:left-0 md:after:top-0 md:after:h-full md:after:w-px md:after:bg-slate-700 md:pl-8">
                <div className="text-sm text-brand-400 font-bold uppercase tracking-wider">Mediana Operación</div>
                <div className="text-white font-medium">800 máquinas</div>
                <div className="text-xs text-slate-500 mb-2">(Plan Profesional)</div>
                <div className="text-slate-300 text-sm font-mono bg-slate-900/50 p-2 rounded border border-slate-700/50">
                  500 × $1,500 + 300 × $1,200
                </div>
                <div className="text-xl font-bold text-white">= $1,110,000 <span className="text-xs font-normal text-slate-500">COP/mes</span></div>
              </div>

              <div className="space-y-2 relative md:after:content-[''] md:after:absolute md:after:left-0 md:after:top-0 md:after:h-full md:after:w-px md:after:bg-slate-700 md:pl-8">
                <div className="text-sm text-brand-400 font-bold uppercase tracking-wider">Gran Operación</div>
                <div className="text-white font-medium">2,000 máquinas</div>
                <div className="text-xs text-slate-500 mb-2">(Plan Enterprise)</div>
                <div className="text-slate-300 text-sm font-mono bg-slate-900/50 p-2 rounded border border-slate-700/50">
                  500×$1.8k + 1k×$1.4k + 500×$1.1k
                </div>
                <div className="text-xl font-bold text-white">= $2,850,000 <span className="text-xs font-normal text-slate-500">COP/mes</span></div>
              </div>
            </div>

            <div className="bg-slate-900/30 p-4 border-t border-slate-700 flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check size={16} className="text-brand-500" />
                <span>Sin cargos ocultos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check size={16} className="text-brand-500" />
                <span>Cancela cuando quieras</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check size={16} className="text-brand-500" />
                <span>Migración de datos incluida</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;