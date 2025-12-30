"use client";
import React from 'react';
import Image from 'next/image';
import { Feather, Leaf, Building2, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const PigeonControl = () => {
    const { openContact } = useModal();

    const features = [
        {
            icon: <Feather className="w-8 h-8" />,
            title: "Efectividad Real",
            description: "El instinto natural de las rapaces ahuyenta a las palomas de raíz, evitando que regresen."
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "100% Ecológico",
            description: "Sin venenos, ruidos molestos ni métodos invasivos que dañen tu fachada."
        },
        {
            icon: <Building2 className="w-8 h-8" />,
            title: "Ideal para Grandes Espacios",
            description: "La solución perfecta para industrias, condominios, centros logísticos y áreas comerciales."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-brand-secondary via-brand-secondary/95 to-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            {/* Águila Background Image */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 md:opacity-30">
                <div className="relative w-full h-full max-w-5xl mx-auto aspect-square">
                    <Image
                        src="/aguila.png"
                        alt="Águila rapaz"
                        fill
                        className="object-contain object-center"
                        priority
                        quality={90}
                    />
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 animate-slide-up-fade">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-white text-sm font-bold mb-6 tracking-wide uppercase">
                        <Feather className="w-4 h-4 text-brand-primary" />
                        <span>Servicio de Élite</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        Control Biológico de Palomas:{' '}
                        <span className="text-brand-primary">La Solución que la Naturaleza Diseñó</span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                        Somos de las contadísimas empresas que ofrecen este servicio de élite. Olvídate de químicos y trampas; utilizamos aves rapaces entrenadas para erradicar la plaga de forma definitiva y ecológica.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/20 border border-brand-primary/30 mb-6 mx-auto">
                                <div className="text-brand-primary">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 text-center">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 text-center leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button
                        onClick={openContact}
                        className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-brand-primary rounded-full hover:bg-brand-primary-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 group"
                    >
                        Cotizar Servicio Exclusivo
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PigeonControl;

