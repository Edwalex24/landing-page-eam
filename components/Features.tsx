import React from 'react';
import { 
  FileCheck, 
  Receipt, 
  LayoutDashboard, 
  BellRing,
  ShieldCheck, 
  Ticket
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
      title: "🛡️ Blindaje Regulatorio",
      description: "Consultamos diariamente el inventario de contratos y generamos comparativos. El sistema activa alarmas ante cambios de inventario, evitando multas por fallos en la transmisión diaria de contadores a Coljuegos."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-blue-400" />,
      title: "Reportes de Producción y Soporte",
      description: "Envío automático de producción diaria a tus Aliados (basado en Proveedores Online). Sirve como soporte probatorio ante reclamos o visitas de Coljuegos: si multan por falta de transmisión, tendrás la evidencia de la notificación."
    },
    {
      icon: <Ticket className="w-8 h-8 text-accent-500" />,
      title: "Gestión de Trámites (Tickets)",
      description: "Portal administrativo para gestionar Ingresos, Retiros y Cambios de máquinas. Elimina el desorden de WhatsApp y centraliza la auditoría de movimientos de tus Aliados Comerciales."
    },
    {
      icon: <Receipt className="w-8 h-8 text-purple-400" />,
      title: "Facturación Avanzada",
      description: "Cálculos automáticos basados en contadores. Gestión del ciclo completo de facturación adaptado a la normativa colombiana para Gestores y Aliados."
    },
    {
      icon: <BellRing className="w-8 h-8 text-orange-400" />,
      title: "Alertas Inteligentes",
      description: "Monitoreo 24/7. Recibe notificaciones inmediatas si una máquina deja de reportar o si un Aliado realiza un movimiento no autorizado."
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-pink-400" />,
      title: "Dashboard & BI",
      description: "Visualiza tus KPIs en tiempo real. Toma decisiones basadas en datos consolidados de toda tu red federada."
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-900/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Características Operativas</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Diseñado para la realidad del Gestor de Concesión
          </h3>
          <p className="text-slate-400 text-lg">
            EAM Gaming no es solo software, es tu defensa legal y operativa. Centralizamos la relación con tus Aliados y aseguramos el cumplimiento normativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/20"
            >
              <div className="bg-slate-900/80 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-slate-600">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;