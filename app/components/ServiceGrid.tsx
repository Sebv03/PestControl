import React from 'react';
import { Bug, Rat, Droplets, ShieldAlert, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: <Rat />,
        title: "Control de Roedores",
        description: "Eliminación completa de ratones y ratas, incluyendo estrategias de prevención.",
    },
    {
        icon: <Bug />,
        title: "Exterminio de Insectos",
        description: "Tratamientos específicos para hormigas, cucarachas, arañas y otros insectos rastreros.",
    },
    {
        icon: <ShieldAlert />,
        title: "Protección de Termitas",
        description: "Detección avanzada y barreras para proteger la estructura de tu propiedad.",
    },
    {
        icon: <Droplets />,
        title: "Servicios de Desinfección",
        description: "Sanitización de grado hospitalario para eliminar bacterias y virus de áreas contaminadas.",
    },
];

const ServiceGrid = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-slide-up-fade">
                    <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-3">Nuestra Experiencia</h2>
                    <p className="text-3xl font-extrabold text-brand-secondary sm:text-4xl">
                        Manejo Integral de Plagas
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Usamos la última tecnología y métodos ecológicos para asegurar que tu entorno esté libre de plagas.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group bg-white p-6 rounded-xl shadow-soft border border-transparent hover:border-brand-primary/20 hover:shadow-hover hover:-translate-y-2 transition-all duration-300"
                        >
                            <div>
                                <span className="rounded-lg inline-flex p-3 bg-red-50 text-brand-primary ring-4 ring-white group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                    {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10" })}
                                </span>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                                    <Link href="#contact" className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {service.title}
                                    </Link>
                                </h3>
                                <p className="mt-3 text-base text-gray-500 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            <span className="pointer-events-none absolute top-6 right-6 text-gray-200 group-hover:text-brand-primary transition-colors duration-300" aria-hidden="true">
                                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
