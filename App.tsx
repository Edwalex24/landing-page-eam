import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SalesAssistant from './components/SalesAssistant';
import Pricing from './components/Pricing';
import { SectionId } from './types';
import { Check } from 'lucide-react';

import AppShowcase from './components/AppShowcase';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-brand-500 selection:text-white">
      <Header />

      <main>
        <Hero />

        {/* Trusted By / Stats strip */}
        {/* <div className="bg-slate-950 border-b border-slate-800 py-10">
          <div className="container mx-auto px-6">
            <p className="text-center text-slate-500 text-sm font-medium mb-6 uppercase tracking-wider">Confían en nosotros</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-white font-bold">C</div>
                <span className="text-xl font-bold text-slate-300">CASINO <span className="text-brand-500">ROYAL</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-white font-bold">B</div>
                <span className="text-xl font-bold text-slate-300">BINGO <span className="text-accent-500">MASTER</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-white font-bold">L</div>
                <span className="text-xl font-bold text-slate-300">LUCKY <span className="text-brand-400">SLOTS</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-white font-bold">C</div>
                <span className="text-xl font-bold text-slate-300">COLJUEGOS <span className="text-slate-500">COMPLIANT</span></span>
              </div>
            </div>
          </div>
        </div> */}

        <AppShowcase />

        <Features />

        <Pricing />

        <div id={SectionId.SOLUTIONS}>
          <Comparison />
        </div>

        {/* Call To Action / Contact Section */}
        <section id={SectionId.CONTACT} className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-900/10 blur-3xl -z-10"></div>

          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-white mb-6">
                  ¿Listo para modernizar tu operación?
                </h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Únete a los líderes de la industria en Colombia que ya han automatizado su gestión con EAM Gaming. Reduce costos, evita multas y duerme tranquilo.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-500/20 p-1 rounded-full"><Check className="text-brand-400 w-4 h-4" /></div>
                    <span className="text-slate-300">Implementación asistida por expertos (Garantizada)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-500/20 p-1 rounded-full"><Check className="text-brand-400 w-4 h-4" /></div>
                    <span className="text-slate-300">Migración de datos históricos incluida</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-500/20 p-1 rounded-full"><Check className="text-brand-400 w-4 h-4" /></div>
                    <span className="text-slate-300">Soporte técnico 24/7 en español</span>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <p className="italic text-slate-400 mb-4">
                    "La diferencia entre el plan Esencial y Profesional se pagó sola en el primer mes al detectar máquinas improductivas que nos costaban dinero."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-300">
                      CR
                    </div>
                    <div>
                      <p className="text-white font-semibold">Carlos Ramírez</p>
                      <p className="text-xs text-brand-400">Gerente de Operaciones</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* AI Assistant Widget */}
      <SalesAssistant />
    </div>
  );
}

export default App;