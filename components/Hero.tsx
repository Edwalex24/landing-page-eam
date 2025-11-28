import React from 'react';
import Button from './Button';
import { SectionId } from '../types';
import { ArrowRight, BarChart3, Clock, TrendingUp, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id={SectionId.HERO} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/50 border border-brand-500/30 text-brand-400 text-sm font-medium mb-6">
              <ShieldCheck size={14} className="text-brand-400" />
              <span>Para Gestores de Concesión y Redes Federadas</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Control total sobre tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">Aliados Comerciales</span> y cero multas.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              La plataforma que blinda tu operación ante Coljuegos. Detecta diferencias de inventario al instante y genera evidencia probatoria automática para tus Aliados.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto gap-2">
                Solicitar Propuesta <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById(SectionId.PRICING)?.scrollIntoView({ behavior: 'smooth'})}>
                Ver Planes y Precios
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-800 pt-6">
              <div className="text-left">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-xl">
                  <TrendingUp size={20} />
                  <span>100%</span>
                </div>
                <p className="text-slate-500 text-sm">Control de Aliados</p>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-xl">
                  <Clock size={20} />
                  <span>1 Hora</span>
                </div>
                <p className="text-slate-500 text-sm">Tiempo de Facturación</p>
              </div>
              <div className="text-left hidden md:block">
                <div className="flex items-center gap-2 text-accent-500 font-bold text-xl">
                  <BarChart3 size={20} />
                  <span>+$20M</span>
                </div>
                <p className="text-slate-500 text-sm">Ahorro en Multas</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative hidden lg:block">
            {/* Abstract UI representation */}
            <div className="relative rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl p-2 transform rotate-2 hover:rotate-0 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent rounded-2xl pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                alt="Dashboard EAM Gaming" 
                className="rounded-xl shadow-inner border border-slate-600 opacity-90"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-800 border border-slate-600 p-4 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 font-bold text-lg">✓</span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase">Inventario Coljuegos</p>
                  <p className="text-white font-bold">Sin diferencias</p>
                </div>
              </div>

               {/* ROI Floating Badge */}
               <div className="absolute -top-6 -right-6 bg-slate-800 border border-slate-600 p-4 rounded-xl shadow-xl flex flex-col items-center">
                <p className="text-xs text-slate-400 uppercase mb-1">Trámites Aliados</p>
                <p className="text-accent-500 font-extrabold text-xl">Centralizados</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;