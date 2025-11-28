import React, { useState } from 'react';
import Button from './Button';
import { SectionId } from '../types';
import { Check, X, Server, Cloud, AlertTriangle, Star, Info, Users } from 'lucide-react';

type VolumeTier = 0 | 1 | 2; // 0: 1-500, 1: 501-2500, 2: +2501

const Pricing: React.FC = () => {
  const [isCloud, setIsCloud] = useState(true);
  const [volumeTier, setVolumeTier] = useState<VolumeTier>(1); // Default to Expansion (middle tier)

  // Pricing Matrix
  // Tier 0: 1-500
  // Tier 1: 501-2500
  // Tier 2: +2501
  const prices = {
    cloud: {
      0: { esencial: 2200, profesional: 2800, enterprise: 3500 },
      1: { esencial: 1500, profesional: 1900, enterprise: 2400 },
      2: { esencial: 850, profesional: 1050, enterprise: 1300 },
    },
    local: {
      // ~$100 discount logic for local
      0: { esencial: 2100, profesional: 2700, enterprise: 3400 },
      1: { esencial: 1400, profesional: 1800, enterprise: 2300 },
      2: { esencial: 750, profesional: 950, enterprise: 1200 },
    }
  };

  const currentPrices = isCloud ? prices.cloud[volumeTier] : prices.local[volumeTier];

  const plans = [
    {
      name: "Esencial",
      module: "Módulo 1: Facturación",
      price: currentPrices.esencial,
      description: "Para cumplir con la facturación de ley.",
      features: [
        { name: "Facturación Automatizada", included: true },
        { name: "Dashboard Ejecutivo Básico", included: true },
        { name: "Hosting + SSL + Backups", included: isCloud },
        { name: "Portal de Trámites (Tickets)", included: false },
        { name: "Trazabilidad Gestor/Aliado", included: false },
        { name: "🛡️ Blindaje Regulatorio", included: false },
        { name: "Reportes de Producción", included: false },
        { name: "Soporte", value: "Correo (48h)" }
      ],
      cta: "Cotizar Esencial",
      highlight: false
    },
    {
      name: "Profesional",
      module: "Módulo 2: Trámites (+ Mod 1)",
      price: currentPrices.profesional,
      description: "Organiza el caos. Centraliza las novedades.",
      features: [
        { name: "Todo lo de Facturación", included: true },
        { name: "Portal de Trámites (Tickets)", included: true, bold: true, info: "Gestiona Ingresos, Retiros y Cambios sin WhatsApp" },
        { name: "Trazabilidad Gestor/Aliado", included: true, bold: true },
        { name: "Hosting Premium", included: isCloud },
        { name: "🛡️ Blindaje Regulatorio", included: false },
        { name: "Reportes de Producción", included: false },
        { name: "Usuarios Admin", value: "10" },
        { name: "Soporte", value: "Prioritario (24h)" }
      ],
      cta: "Elegir Profesional",
      highlight: true,
      badge: "RECOMENDADO"
    },
    {
      name: "Enterprise",
      module: "Módulo 3: Automatización (+ Mod 2)",
      price: currentPrices.enterprise,
      description: "Máxima seguridad y protección anti-multas.",
      features: [
        { name: "Todo lo de Profesional", included: true },
        { name: "🛡️ Blindaje Regulatorio", included: true, bold: true, info: "Auditoría de inventarios vs Coljuegos" },
        { name: "Reportes de Producción", included: true, bold: true, info: "Soporte probatorio legal" },
        { name: "API Access + Webhooks", included: true },
        { name: "Account Manager Dedicado", included: true },
        { name: "Usuarios", value: "Ilimitados" },
        { name: "Soporte", value: "24/7 (4h respuesta)" }
      ],
      cta: "Contactar Ventas",
      highlight: false
    }
  ];

  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.PRICING} className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Estrategia Modular</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Precios que escalan con tu operación
          </h3>
          
          {/* Volume Selector */}
          <div className="bg-slate-800/50 p-2 rounded-xl inline-flex flex-col sm:flex-row gap-2 mb-8 border border-slate-700">
             <button
                onClick={() => setVolumeTier(0)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${volumeTier === 0 ? 'bg-brand-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
             >
                <div className="flex items-center gap-2 justify-center">
                    <Users size={16} />
                    <span>Nivel Inicial</span>
                </div>
                <div className="text-xs opacity-80 mt-1">1 - 500 máq</div>
             </button>
             <button
                onClick={() => setVolumeTier(1)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${volumeTier === 1 ? 'bg-brand-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
             >
                <div className="flex items-center gap-2 justify-center">
                    <Users size={16} />
                    <span>Nivel Expansión</span>
                </div>
                <div className="text-xs opacity-80 mt-1">501 - 2,500 máq</div>
             </button>
             <button
                onClick={() => setVolumeTier(2)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${volumeTier === 2 ? 'bg-brand-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
             >
                <div className="flex items-center gap-2 justify-center">
                    <Users size={16} />
                    <span>Nivel Consolidado</span>
                </div>
                <div className="text-xs opacity-80 mt-1">+2,501 máq</div>
             </button>
          </div>

          <div className="block">
            {/* Cloud vs Local Toggle */}
            <div className="inline-flex bg-slate-800 p-1 rounded-xl border border-slate-700 relative mb-4">
                <button 
                onClick={() => setIsCloud(true)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${isCloud ? 'bg-brand-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                <Cloud size={18} />
                Servidor Nube (Gestionado)
                </button>
                <button 
                onClick={() => setIsCloud(false)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${!isCloud ? 'bg-slate-700 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                <Server size={18} />
                Servidor Local (Cliente)
                </button>
            </div>
          </div>
          
          {!isCloud && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-200 p-4 rounded-lg text-sm flex items-center justify-center gap-3 animate-in fade-in max-w-2xl mx-auto">
              <AlertTriangle size={20} className="text-yellow-500 shrink-0" />
              <span>Advertencia: El descuento de ~$100 COP no justifica el riesgo. En modo Local, usted responde por backups y caídas.</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 flex flex-col ${
                plan.highlight 
                  ? 'bg-slate-800/80 border-brand-500 shadow-2xl shadow-brand-900/20 scale-105 z-10' 
                  : 'bg-slate-900/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-500 to-accent-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <p className="text-brand-400 text-xs font-bold uppercase mb-2 tracking-wider">{plan.module}</p>
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <p className="text-slate-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-slate-400 text-lg">$</span>
                  <span className="text-4xl font-extrabold text-white">{plan.price.toLocaleString()}</span>
                  <span className="text-slate-500 text-sm">COP / máq / mes</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm group/item relative">
                    {feature.included ? (
                      <Check size={18} className="text-accent-500 shrink-0 mt-0.5" />
                    ) : (
                      <X size={18} className="text-slate-600 shrink-0 mt-0.5" />
                    )}
                    <span className={`${feature.bold ? 'font-bold text-white' : 'text-slate-300'} ${!feature.included && 'text-slate-600'}`}>
                      {feature.name} {feature.value && <span className="text-brand-400 font-semibold">• {feature.value}</span>}
                    </span>
                    {/* Simple Tooltip-like info */}
                    {feature.info && (
                        <div className="hidden group-hover/item:block absolute bottom-full left-0 w-full bg-slate-950 text-xs text-slate-300 p-2 rounded border border-slate-700 mb-1 z-20 shadow-xl">
                            {feature.info}
                        </div>
                    )}
                  </div>
                ))}
              </div>

              <Button 
                onClick={scrollToContact}
                variant={plan.highlight ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h4 className="text-white font-bold mb-2">¿Cómo escalar?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-4">
              <div className="px-4 border-l-2 border-slate-500">
                <div className="text-lg font-bold text-white mb-1">Paso 1: Cumplir</div>
                <div className="text-sm text-slate-400">Plan Esencial para automatizar la facturación.</div>
              </div>
              <div className="px-4 border-l-2 border-brand-500">
                <div className="text-lg font-bold text-white mb-1">Paso 2: Ordenar</div>
                <div className="text-sm text-slate-400">Plan Profesional para gestionar Aliados (Tickets).</div>
              </div>
              <div className="px-4 border-l-2 border-accent-500">
                <div className="text-lg font-bold text-white mb-1">Paso 3: Blindar</div>
                <div className="text-sm text-slate-400">Plan Enterprise para evitar multas de Coljuegos.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;