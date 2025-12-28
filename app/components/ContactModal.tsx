"use client";

import React, { useEffect } from 'react';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import GoHighLevelForm from './GoHighLevelForm';
import { GOHIGHLEVEL_EMBED_CODE } from '../../lib/gohighlevel-config';

const ContactModal = () => {
    const { isContactOpen, closeContact } = useModal();

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

    if (!isContactOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-secondary/90 backdrop-blur-sm animate-fade-in"
                onClick={closeContact}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-slide-up bg-grid-slate-100">

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
                                    <p className="text-lg font-medium">contacto@pestcontrol.cl</p>
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
                <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                    <div className="mb-6 flex-shrink-0">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Envíanos un mensaje</h3>
                        <p className="text-gray-600 text-sm">Completa el formulario y te contactaremos pronto.</p>
                    </div>

                    {/* Formulario embebido de GoHighLevel */}
                    <div className="flex-1 min-h-[600px]">
                        <GoHighLevelForm 
                            embedCode={GOHIGHLEVEL_EMBED_CODE}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
