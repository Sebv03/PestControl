"use client";
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const LocationMap = () => {
    const address = "Seminario 131, Providencia, Chile";
    const encodedAddress = encodeURIComponent(address);
    // Coordenadas aproximadas de Seminario 131, Providencia, Chile
    const lat = -33.4321;
    const lon = -70.6100;
    
    // URL de Google Maps embed
    const googleMapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    // URL de OpenStreetMap como alternativa
    const osmMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.01},${lat-0.01},${lon+0.01},${lat+0.01}&layer=mapnik&marker=${lat},${lon}`;
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    return (
        <section id="location" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-secondary mb-4">
                        Nuestra Ubicación
                    </h2>
                    <p className="text-lg text-gray-600">
                        Visítanos en nuestra oficina o contáctanos para una inspección gratuita
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Información de contacto */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-brand-secondary mb-6">
                            Información de Contacto
                        </h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-primary/10 rounded-lg flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Dirección</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        Seminario 131, Providencia
                                    </p>
                                    <a
                                        href={googleMapsLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-brand-primary hover:text-brand-primary-dark text-sm mt-2 inline-block"
                                    >
                                        Ver en Google Maps →
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-brand-primary/10 rounded-lg flex-shrink-0">
                                    <Phone className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                                    <a
                                        href="tel:+56976339700"
                                        className="text-lg font-semibold text-gray-900 hover:text-brand-primary transition-colors"
                                    >
                                        +56 9 7633 9700
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-brand-primary/10 rounded-lg flex-shrink-0">
                                    <Mail className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Correo Electrónico</p>
                                    <a
                                        href="mailto:contactoplagasryb@gmail.com"
                                        className="text-lg font-semibold text-gray-900 hover:text-brand-primary transition-colors"
                                    >
                                        contactoplagasryb@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <h4 className="font-bold text-brand-secondary mb-3">Horario de Atención</h4>
                            <div className="space-y-2 text-gray-600">
                                <p className="flex justify-between">
                                    <span>Lunes - Viernes</span>
                                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Sábados</span>
                                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Domingos</span>
                                    <span className="font-semibold">Cerrado</span>
                                </p>
                                <p className="text-sm text-brand-primary font-semibold mt-3">
                                    Emergencias 24/7 disponibles
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="w-full h-[500px] relative">
                            <iframe
                                src={googleMapUrl}
                                width="100%"
                                height="500"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                                title="Ubicación - Seminario 131, Providencia"
                            />
                            {/* Overlay con enlace como fallback */}
                            <div className="absolute bottom-4 right-4">
                                <a
                                    href={googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-primary-dark transition-colors shadow-lg"
                                >
                                    Abrir en Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;

