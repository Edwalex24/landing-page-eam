import React, { useState } from 'react';
import Button from './Button';
import { Mail, Phone, Building } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-slate-800 p-8 rounded-2xl border border-accent-500/50 text-center animate-in fade-in zoom-in">
        <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="text-accent-500 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Recibido!</h3>
        <p className="text-slate-400">Un especialista de EAM Gaming te contactará en breve para agendar tu demostración.</p>
        <button 
          onClick={() => setStatus('idle')} 
          className="mt-6 text-brand-400 hover:text-brand-300 underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
      <h3 className="text-2xl font-bold text-white mb-6">Agenda una Demo</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-slate-400 text-sm mb-1">Nombre Completo</label>
          <input 
            type="text" 
            required
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
            placeholder="Juan Pérez"
          />
        </div>
        
        <div>
          <label className="block text-slate-400 text-sm mb-1">Empresa / Casino</label>
          <div className="relative">
            <Building className="absolute left-3 top-3.5 text-slate-500 w-5 h-5" />
            <input 
              type="text" 
              required
              className="w-full bg-slate-900 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
              placeholder="Gran Casino S.A.S"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-400 text-sm mb-1">Email Corporativo</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-slate-500 w-5 h-5" />
              <input 
                type="email" 
                required
                className="w-full bg-slate-900 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                placeholder="juan@empresa.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-slate-400 text-sm mb-1">Teléfono</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 text-slate-500 w-5 h-5" />
              <input 
                type="tel" 
                required
                className="w-full bg-slate-900 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                placeholder="+57 300 ..."
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-slate-400 text-sm mb-1">Mensaje (Opcional)</label>
          <textarea 
            rows={3}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
            placeholder="Cuéntanos cuántas salas o máquinas operas..."
          ></textarea>
        </div>

        <Button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full mt-2"
          size="lg"
        >
          {status === 'submitting' ? 'Enviando...' : 'Solicitar Demostración'}
        </Button>
        <p className="text-xs text-slate-500 text-center mt-4">
          Tus datos están seguros. No compartimos información con terceros.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;