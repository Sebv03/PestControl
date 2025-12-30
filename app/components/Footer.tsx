"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Footer = () => {
    const { openContact } = useModal();

    return (
        <footer className="bg-brand-secondary text-white pt-16 pb-8 border-t-4 border-brand-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <Link href="#" className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/logo.png"
                                    alt="Pest Control Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Servicios de control de plagas profesionales, seguros y efectivos para hogares y empresas.
                            Recuperando tu tranquilidad, un servicio a la vez.
                        </p>
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
                                <span>Seminario 131, Providencia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                <a href="tel:+56976339700" className="hover:text-white transition-colors">+56 9 7633 9700</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                <a href="mailto:contactoplagasryb@gmail.com" className="hover:text-white transition-colors">contactoplagasryb@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Pest Control. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
