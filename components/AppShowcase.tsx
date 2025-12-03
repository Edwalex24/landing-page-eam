
import React, { useState } from 'react';
import {
    BarChart3,
    FileText,
    CheckCircle2,
    AlertCircle,
    Clock,
    Search,
    Settings,
    Users,
    LayoutDashboard,
    Zap,
    ShieldCheck,
    MoreHorizontal
} from 'lucide-react';

const AppShowcase = () => {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'facturacion' | 'tramites' | 'automatizacion'>('dashboard');

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Control Total en Una Sola Plataforma
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Gestiona facturación, trámites y automatizaciones desde un panel centralizado.
                        Diseñado para la eficiencia y el cumplimiento normativo.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Item 1: Main Dashboard (Large - Spans 2 cols) */}
                    <div className="md:col-span-2 row-span-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 overflow-hidden hover:border-brand-500/50 transition-all duration-500 group flex flex-col">
                        <div className="flex items-center justify-between mb-6 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="bg-slate-800 px-3 py-1 rounded-full text-xs text-slate-400 font-mono">
                                dashboard.eam-gaming.com
                            </div>
                        </div>

                        {/* Interactive Main Dashboard UI */}
                        <div className="flex h-full gap-6 overflow-hidden">
                            {/* Sidebar */}
                            <div className="w-16 md:w-48 hidden md:flex flex-col gap-2 border-r border-slate-800/50 pr-4 shrink-0">
                                <button
                                    onClick={() => setActiveTab('dashboard')}
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${activeTab === 'dashboard' ? 'bg-brand-500/10 text-brand-400' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}`}
                                >
                                    <LayoutDashboard size={20} />
                                    <span className="font-medium hidden md:block">Dashboard</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('facturacion')}
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${activeTab === 'facturacion' ? 'bg-brand-500/10 text-brand-400' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}`}
                                >
                                    <FileText size={20} />
                                    <span className="font-medium hidden md:block">Facturación</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('tramites')}
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${activeTab === 'tramites' ? 'bg-brand-500/10 text-brand-400' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}`}
                                >
                                    <Users size={20} />
                                    <span className="font-medium hidden md:block">Trámites</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('automatizacion')}
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${activeTab === 'automatizacion' ? 'bg-brand-500/10 text-brand-400' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}`}
                                >
                                    <Zap size={20} />
                                    <span className="font-medium hidden md:block">Automatización</span>
                                </button>
                            </div>

                            {/* Main Content Area - Switches based on activeTab */}
                            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">

                                {activeTab === 'dashboard' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                                <p className="text-slate-400 text-xs mb-1">Total Empresas</p>
                                                <p className="text-2xl font-bold text-white">27</p>
                                            </div>
                                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                                <p className="text-slate-400 text-xs mb-1">Procesados Hoy</p>
                                                <p className="text-2xl font-bold text-brand-400">142</p>
                                            </div>
                                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                                <p className="text-slate-400 text-xs mb-1">Estado Sistema</p>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                    <p className="text-sm font-bold text-green-400">En Línea</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Graph Placeholder */}
                                        <div className="bg-slate-800/30 rounded-xl p-4 h-48 flex items-end justify-between gap-2 border border-slate-700/30">
                                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="w-full bg-brand-500/20 rounded-t-sm hover:bg-brand-500/40 transition-colors"
                                                    style={{ height: `${h}%` }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'facturacion' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h3 className="text-lg font-bold text-white mb-4">Gestión de Facturación</h3>
                                        <div className="space-y-3">
                                            {[
                                                { name: "Empresa Demo S.A.S", status: "Pagado", amount: "$4.2M", date: "Hoy" },
                                                { name: "Inversiones ABC", status: "Pendiente", amount: "$1.8M", date: "Ayer" },
                                                { name: "Grupo Empresarial", status: "Pagado", amount: "$12.5M", date: "Ayer" },
                                                { name: "Casino La Suerte", status: "Pagado", amount: "$3.1M", date: "28 Nov" },
                                                { name: "Juegos del Norte", status: "Error", amount: "$0.0M", date: "28 Nov" },
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                                    <div>
                                                        <p className="text-sm font-medium text-slate-200">{item.name}</p>
                                                        <div className="flex gap-2 text-xs text-slate-500">
                                                            <span>NIT: 900.XXX.XXX</span>
                                                            <span>• {item.date}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${item.status === 'Pagado' ? 'bg-green-500/20 text-green-400' :
                                                            item.status === 'Pendiente' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
                                                            }`}>
                                                            {item.status}
                                                        </span>
                                                        <p className="text-xs text-slate-400 mt-1">{item.amount}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'tramites' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h3 className="text-lg font-bold text-white mb-4">Solicitudes y Trámites</h3>
                                        <div className="space-y-3">
                                            {[
                                                { id: "TR-25-11-0016", type: "Reemplazo", status: "Completado", user: "Admin" },
                                                { id: "TR-25-11-0015", type: "Retiro", status: "En Revisión", user: "Gestor" },
                                                { id: "TR-25-11-0014", type: "Ingreso", status: "Nuevo", user: "Cliente" },
                                                { id: "TR-25-11-0012", type: "Cambio %", status: "Nuevo", user: "Cliente" },
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                                    <div className={`p-2 rounded-full ${item.status === 'Completado' ? 'bg-purple-500/20 text-purple-400' :
                                                        item.status === 'En Revisión' ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700 text-slate-400'
                                                        }`}>
                                                        {item.status === 'Completado' ? <CheckCircle2 size={16} /> :
                                                            item.status === 'En Revisión' ? <Search size={16} /> : <Clock size={16} />}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between">
                                                            <p className="text-sm font-medium text-slate-200">{item.id}</p>
                                                            <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded">{item.status}</span>
                                                        </div>
                                                        <div className="flex justify-between mt-1">
                                                            <p className="text-xs text-slate-400">{item.type} de Máquinas</p>
                                                            <p className="text-[10px] text-slate-600">Por: {item.user}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'automatizacion' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h3 className="text-lg font-bold text-white mb-4">Automatizaciones (Cron Jobs)</h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                                        <ShieldCheck size={20} />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-white">Monitor Coljuegos</p>
                                                        <p className="text-xs text-slate-400">Verificación de inventarios</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                    <span className="text-xs text-green-400 font-medium">Activo</span>
                                                </div>
                                            </div>

                                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                                        <FileText size={20} />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-white">Reportes Houndoc</p>
                                                        <p className="text-xs text-slate-400">Generación de PDFs</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                    <span className="text-xs text-green-400 font-medium">Activo</span>
                                                </div>
                                            </div>

                                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                                        <Clock size={20} />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-white">Sync Diaria</p>
                                                        <p className="text-xs text-slate-400">Próxima: 06:30 AM</p>
                                                    </div>
                                                </div>
                                                <div className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">
                                                    En Espera
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    {/* Item 2: Billing Module (Medium) - Clickable to switch tab */}
                    <div
                        onClick={() => setActiveTab('facturacion')}
                        className={`bg-slate-900/50 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 group relative overflow-hidden cursor-pointer ${activeTab === 'facturacion' ? 'border-brand-500 ring-1 ring-brand-500/50' : 'border-slate-800 hover:border-brand-500/50'}`}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FileText size={100} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <FileText className="text-brand-400" size={20} />
                            Gestión Facturación
                        </h3>
                        <p className="text-sm text-slate-400 mb-4">
                            Visualiza el estado de pagos de todos tus aliados en tiempo real.
                        </p>
                        <div className="text-xs text-brand-400 font-medium flex items-center gap-1">
                            Ver Detalles <MoreHorizontal size={14} />
                        </div>
                    </div>

                    {/* Item 3: Trámites Module (Medium) - Clickable to switch tab */}
                    <div
                        onClick={() => setActiveTab('tramites')}
                        className={`bg-slate-900/50 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 group relative overflow-hidden cursor-pointer ${activeTab === 'tramites' ? 'border-brand-500 ring-1 ring-brand-500/50' : 'border-slate-800 hover:border-brand-500/50'}`}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users size={100} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Users className="text-accent-400" size={20} />
                            Trámites y Solicitudes
                        </h3>
                        <p className="text-sm text-slate-400 mb-4">
                            Gestiona ingresos, retiros y cambios de máquinas de forma centralizada.
                        </p>
                        <div className="text-xs text-accent-400 font-medium flex items-center gap-1">
                            Ver Detalles <MoreHorizontal size={14} />
                        </div>
                    </div>

                    {/* Item 4: Automations (Wide) - Clickable to switch tab */}
                    <div
                        onClick={() => setActiveTab('automatizacion')}
                        className={`md:col-span-3 bg-slate-900/50 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer ${activeTab === 'automatizacion' ? 'border-brand-500 ring-1 ring-brand-500/50' : 'border-slate-800 hover:border-brand-500/50'}`}
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-brand-500/20 rounded-xl text-brand-400">
                                <Zap size={32} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Automatizaciones Activas</h3>
                                <p className="text-slate-400 text-sm">El sistema trabaja por ti 24/7</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 flex-1">
                            <div className="flex items-center gap-3 bg-slate-950/50 px-4 py-2 rounded-lg border border-slate-800">
                                <div className="relative">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                                </div>
                                <span className="text-sm text-slate-300">Monitor Coljuegos</span>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-950/50 px-4 py-2 rounded-lg border border-slate-800">
                                <div className="relative">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full animate-ping delay-75"></div>
                                </div>
                                <span className="text-sm text-slate-300">Reportes Houndoc</span>
                            </div>
                        </div>

                        <button className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-lg text-sm font-medium transition-colors">
                            Ver Logs
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
