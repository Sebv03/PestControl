"use client";

import React, { useEffect, useState } from 'react';
import { X, Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const ContactModal = () => {
    const { isContactOpen, closeContact } = useModal();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeContact();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [closeContact]);

    // Prevent scrolling when open
    useEffect(() => {
        if (isContactOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isContactOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset after success
            setTimeout(() => {
                setIsSuccess(false);
                closeContact();
            }, 3000);
        }, 1500);
    };

    if (!isContactOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-secondary/90 backdrop-blur-sm animate-fade-in"
                onClick={closeContact}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-slide-up bg-grid-slate-100">

                {/* Close Button */}
                <button
                    onClick={closeContact}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-black/5 rounded-full text-gray-500 hover:text-brand-primary transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Left Side: Info & Branding */}
                <div className="w-full md:w-2/5 bg-brand-secondary text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Contáctanos</h2>
                        <p className="text-gray-300 text-lg mb-8">Estamos listos para resolver tu problema de plagas hoy mismo.</p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <Phone className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Emergencias 24/7</p>
                                    <p className="text-xl font-bold font-mono tracking-wide">+56 9 1234 5678</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <Mail className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Correo Electrónico</p>
                                    <p className="text-lg font-medium">contacto@rbpestcontrol.cl</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <MapPin className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Cobertura</p>
                                    <p className="text-lg font-medium">Toda la Región Metropolitana</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-12">
                        <blockquote className="border-l-4 border-brand-primary pl-4 italic text-gray-300">
                            "Rápido, efectivo y seguro. La mejor decisión para mi hogar."
                        </blockquote>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto bg-white">
                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Recibido!</h3>
                            <p className="text-gray-600">Un experto te contactará en breve.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Nombre</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Tu Nombre" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Teléfono</label>
                                    <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="+56 9..." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Correo Electrónico</label>
                                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="tu@email.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Tipo de Problema</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all bg-white">
                                    <option>Selecciona una opción...</option>
                                    <option>Roedores</option>
                                    <option>Insectos / Cucarachas</option>
                                    <option>Termitas</option>
                                    <option>Preventivo</option>
                                    <option>Otro</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Mensaje</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all resize-none" placeholder="Describe tu problema..."></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-brand-primary hover:bg-brand-primary-dark text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>Enviando...</>
                                ) : (
                                    <>
                                        Enviar Solicitud <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-4">
                                Tus datos están seguros. No compartimos tu información.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
