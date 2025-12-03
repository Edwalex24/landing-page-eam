import React from 'react';
import { Check, Star } from 'lucide-react';
import Button from './Button';
import { Feature } from '../types';

interface Tier {
    range: string;
    price: number;
}

interface PricingCardProps {
    plan: {
        name: string;
        module: string;
        description: string;
        badge?: string;
        highlight?: boolean;
        cta: string;
    };
    tiers: Tier[];
    features: { name: string; included: boolean; bold?: boolean; info?: string; value?: string }[];
    onAction: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, tiers, features, onAction }) => {
    const basePrice = tiers[0].price;

    return (
        <div
            className={`relative rounded-2xl p-8 border transition-all duration-300 flex flex-col ${plan.highlight
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

            <div className="mb-6">
                <div className="flex items-baseline gap-1">
                    <span className="text-slate-400 text-sm">Desde</span>
                    <span className="text-slate-400 text-lg">$</span>
                    <span className="text-4xl font-extrabold text-white">{basePrice.toLocaleString()}</span>
                    <span className="text-slate-500 text-sm">/ máq / mes</span>
                </div>
            </div>

            <div className="mb-8 bg-slate-950/30 p-4 rounded-lg border border-slate-800">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    🎯 Escala Automática:
                </h5>
                <ul className="space-y-2">
                    {tiers.map((tier, index) => (
                        <li key={index} className="flex justify-between text-sm">
                            <span className="text-slate-400">{tier.range}</span>
                            <span className="text-slate-200 font-medium">${tier.price.toLocaleString()}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-1 space-y-4 mb-8">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm group/item relative">
                        <div className={`mt-0.5 p-0.5 rounded-full ${feature.included ? 'bg-brand-500/10' : ''}`}>
                            <Check size={14} className={feature.included ? "text-brand-400" : "text-slate-600"} />
                        </div>
                        <span className={`${feature.bold ? 'font-bold text-white' : 'text-slate-300'} ${!feature.included && 'text-slate-600'}`}>
                            {feature.name} {feature.value && <span className="text-brand-400 font-semibold">• {feature.value}</span>}
                        </span>
                        {feature.info && (
                            <div className="hidden group-hover/item:block absolute bottom-full left-0 w-full bg-slate-950 text-xs text-slate-300 p-2 rounded border border-slate-700 mb-1 z-20 shadow-xl">
                                {feature.info}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <Button
                onClick={onAction}
                variant={plan.highlight ? 'primary' : 'outline'}
                className="w-full"
            >
                {plan.cta}
            </Button>
        </div>
    );
};

export default PricingCard;
