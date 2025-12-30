"use client";
import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Phone } from 'lucide-react';
import GoHighLevelForm from './GoHighLevelForm';
import { GOHIGHLEVEL_EMBED_CODE } from '../../lib/gohighlevel-config';

const LeadCapture = () => {

    return (
        <section id="contact" className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">

                    {/* Left Content */}
                    <div className="mb-12 lg:mb-0 animate-slide-up-fade">
                        <h2 className="text-3xl font-extrabold text-brand-secondary sm:text-4xl mb-6">
                            Obtén tu Evaluación Gratuita <br />
                            <span className="text-brand-primary">Antes de que se Multipliquen.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            No dejes que las plagas se tomen tu propiedad. Nuestros expertos están listos para darte un plan integral para restaurar la seguridad de tu hogar.
                        </p>

                        <ul className="space-y-5 mb-10">
                            {[
                                "Técnicos Licenciados y Certificados",
                                "Opciones Ecológicas y Seguras para Mascotas",
                                "Garantía de Satisfacción 100%",
                                "Respuesta de Emergencia el Mismo Día"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="p-6 bg-white rounded-xl shadow-soft border border-gray-100 max-w-sm">
                            <div className="flex items-center gap-4">
                                <div className="bg-red-50 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium h mb-1">¿Prefieres llamarnos?</p>
                                    <a href="tel:+56976339700" className="text-xl font-bold text-brand-secondary hover:text-brand-primary transition-colors">
                                        +56 9 7633 9700
                                    </a>
                                </div>
                            </div>
                            {/* Imagen del ratón */}
                            <div className="mt-4 flex justify-center">
                                <Image
                                    src="/raton.png"
                                    alt="Ratón"
                                    width={350}
                                    height={350}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="relative animate-slide-up-fade delay-200">
                        <div className="absolute inset-0 bg-brand-primary transform rotate-3 rounded-2xl opacity-10 hidden lg:block" />

                        <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100 w-full" style={{ height: '900px' }}>
                            <div className="mb-4 sm:mb-6 lg:mb-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-brand-secondary">Solicitar Cotización</h3>
                                <p className="text-gray-500 mt-1 text-sm sm:text-base">Completa el formulario y te contactaremos en 15 mins.</p>
                            </div>

                            {/* Formulario embebido de GoHighLevel */}
                            <div className="w-full">
                                <GoHighLevelForm 
                                    embedCode={GOHIGHLEVEL_EMBED_CODE}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadCapture;
