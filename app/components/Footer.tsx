"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Footer = () => {
    const { openContact } = useModal();

    return (
        <footer className="bg-brand-secondary text-white pt-16 pb-8 border-t-4 border-brand-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-3xl font-extrabold text-white tracking-tight">R&B</span>
                            <span className="text-sm font-bold text-gray-400 border-l border-gray-600 pl-2 ml-2 uppercase">
                                Pest Control
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Servicios de control de plagas profesionales, seguros y efectivos para hogares y empresas.
                            Recuperando tu tranquilidad, un servicio a la vez.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-brand-primary transition-colors bg-white/10 p-2 rounded-full hover:bg-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-brand-primary transition-colors bg-white/10 p-2 rounded-full hover:bg-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-brand-primary transition-colors bg-white/10 p-2 rounded-full hover:bg-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Enlaces Rápidos</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-brand-primary transition-colors">Inicio</Link></li>
                            <li><Link href="#services" className="hover:text-brand-primary transition-colors">Nuestros Servicios</Link></li>
                            <li><Link href="#process" className="hover:text-brand-primary transition-colors">Cómo Funciona</Link></li>
                            <li>
                                <button onClick={openContact} className="hover:text-brand-primary transition-colors text-left">
                                    Cotizar
                                </button>
                            </li>
                            <li><Link href="#" className="hover:text-brand-primary transition-colors">Política de Privacidad</Link></li>
                        </ul>
                    </div>


                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Servicios</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-brand-primary transition-colors">Control de Roedores</Link></li>
                            <li><Link href="#" className="hover:text-brand-primary transition-colors">Exterminio de Insectos</Link></li>
                            <li><Link href="#" className="hover:text-brand-primary transition-colors">Prevención de Termitas</Link></li>
                            <li><Link href="#" className="hover:text-brand-primary transition-colors">Desinfección</Link></li>
                            <li><Link href="#" className="hover:text-brand-primary transition-colors">Servicios Comerciales</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contáctanos</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                <span>1234 Pest Control Ave,<br />Santiago, Chile</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                <a href="tel:+1234567890" className="hover:text-white transition-colors">(555) 123-4567</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                <a href="mailto:info@rbpest.com" className="hover:text-white transition-colors">info@rbpest.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} R&B Pest Control. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
