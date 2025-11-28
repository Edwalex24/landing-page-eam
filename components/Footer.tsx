import React from 'react';
import { Gamepad2, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center">
                <Gamepad2 className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white">EAM Gaming</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              La solución tecnológica líder en Colombia para la gestión integral de operaciones de juegos de suerte y azar. Optimizamos su negocio para que usted se enfoque en crecer.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Plataforma</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Seguridad</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Integraciones</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Precios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Soporte</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500">
            © {new Date().getFullYear()} EAM Gaming. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;