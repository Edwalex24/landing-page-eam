import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck, Star } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Tabla de Decisión Simplificada</h2>
          <p className="text-slate-400">¿Qué plan se adapta mejor a su realidad operativa?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* Risk Scenario */}
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 relative overflow-hidden group hover:border-red-900/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertTriangle size={120} className="text-red-500" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-red-400">Escenario A:</span> Gestión Básica
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><XCircle className="text-red-500" size={20} /></div>
                <div>
                  <p className="text-slate-300 font-medium">¿Evitar multas de Coljuegos?</p>
                  <p className="text-sm text-slate-500 mt-1">NO. Arriesga multas de $20M+ por reportes manuales o tardíos.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1"><XCircle className="text-red-500" size={20} /></div>
                <div>
                  <p className="text-slate-300 font-medium">¿Gestión del Servidor?</p>
                  <p className="text-sm text-slate-500 mt-1">Usted compra y mantiene el servidor. Si falla el hardware o la luz, su operación se detiene.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1"><XCircle className="text-red-500" size={20} /></div>
                <div>
                  <p className="text-slate-300 font-medium">¿Visibilidad real?</p>
                  <p className="text-sm text-slate-500 mt-1">Limitada. Sin alertas en tiempo real sobre máquinas improductivas.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-red-400 font-semibold text-sm uppercase tracking-wide">Resultado: Plan Esencial (Local)</p>
            </div>
          </div>

          {/* Solution Scenario */}
          <div className="bg-brand-900/10 p-8 rounded-3xl border border-brand-500/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck size={120} className="text-brand-500" />
            </div>

            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-brand-400">Escenario B:</span> EAM Profesional (Nube)
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="text-accent-500" size={20} /></div>
                <div>
                  <p className="text-white font-medium">¿Evitar multas de Coljuegos?</p>
                  <p className="text-sm text-brand-200/70 mt-1">SÍ. Alertas automáticas y monitoreo 24/7. Tranquilidad total.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="text-accent-500" size={20} /></div>
                <div>
                  <p className="text-white font-medium">¿Gestión del Servidor?</p>
                  <p className="text-sm text-brand-200/70 mt-1">Nosotros nos encargamos. Nube de alta disponibilidad, backups y seguridad SSL.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="text-accent-500" size={20} /></div>
                <div>
                  <p className="text-white font-medium">¿Valor por inversión?</p>
                  <p className="text-sm text-brand-200/70 mt-1">Máximo. La diferencia de precio se paga sola al evitar una sola multa.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-500/20">
              <p className="text-accent-500 font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                <Star size={16} fill="currentColor" />
                Recomendado: Plan Profesional
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;