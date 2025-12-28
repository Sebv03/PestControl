"use client";
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Hero = () => {
    const { openContact } = useModal();

    return (
        <div className="relative bg-brand-secondary overflow-hidden pt-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-fade-in"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 py-16 lg:py-24 items-center">

                    {/* Text Content */}
                    <div className="lg:col-span-7 text-center lg:text-left animate-slide-up-fade">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-white text-sm font-bold mb-6 tracking-wide uppercase">
                            <ShieldCheck className="w-4 h-4 text-brand-primary" />
                            <span>Expertos Licenciados y Asegurados</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                            Hogar Libre de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-red-400">Plagas</span> <br className="hidden lg:block" />
                            <span className="relative">
                                Garantizado.
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99992C18.5039 3.23595 72.8687 -1.97966 197.962 3.48663" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                            Protege a tu familia con nuestros tratamientos avanzados y ecológicos.
                            Respuesta rápida, resultados efectivos y tranquilidad total.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={openContact}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-primary rounded-full hover:bg-brand-primary-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-primary/30 group"
                            >
                                Solicitar Inspección Gratis
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
                            >
                                Ver Servicios
                            </a>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-gray-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-brand-gold" />
                                <span>100% Satisfacción</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-brand-gold" />
                                <span>Seguro para Niños y Mascotas</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image / Graphic Placeholder for form or action shot - keeping simple for now */}
                    <div className="hidden lg:block lg:col-span-5 relative animate-slide-up-fade delay-200">
                        {/* We can put a lead form or just a visual here. For now, let's keep the visual but style it better */}
                        <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-2 shadow-2xl transform rotate-3 hover:rotate-1 transition-all duration-500">
                            <div className="bg-gray-900 rounded-xl overflow-hidden h-96 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-brand-secondary/50"></div>
                                <div className="relative text-center p-8 z-10">
                                    <ShieldCheck className="w-32 h-32 text-brand-primary opacity-80 mx-auto mb-6" />
                                    <div className="text-2xl font-bold text-white mb-2">Pest Control<span className="text-brand-primary">PRO</span> Standard</div>
                                    <p className="text-gray-400">Certified Protection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
