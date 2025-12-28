import React from 'react';
import { Search, SprayCan, ShieldCheck } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Inspección',
        description: 'Técnicos certificados revisan tu propiedad para identificar plagas y puntos de entrada.',
        icon: <Search className="w-6 h-6" />,
    },
    {
        id: 2,
        title: 'Tratamiento',
        description: 'Aplicamos tratamientos seguros y efectivos para eliminar plagas existentes, atacando nidos.',
        icon: <SprayCan className="w-6 h-6" />,
    },
    {
        id: 3,
        title: 'Prevención',
        description: 'Sellamos puntos de entrada y creamos una barrera protectora para que no vuelvan.',
        icon: <ShieldCheck className="w-6 h-6" />,
    },
];

const Process = () => {
    return (
        <section id="process" className="py-20 bg-brand-secondary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-16 animate-slide-up-fade">
                    <h2 className="text-sm text-brand-primary font-bold tracking-widest uppercase mb-3">Cómo Funciona</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-white">
                        Nuestro Proceso de 3 Pasos
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-gray-700/50 -z-10" />

                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <div key={step.id} className={`relative flex flex-col items-center text-center animate-slide-up-fade delay-${(index + 1) * 100}`}>
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-primary text-white text-2xl font-bold border-4 border-brand-secondary shadow-xl mb-6 z-10 transform hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {step.id}. {step.title}
                                </h3>
                                <p className="text-base text-gray-400 max-w-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center animate-slide-up-fade delay-300">
                    <a
                        href="#contact"
                        className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-brand-secondary bg-white hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Comenzar Ahora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Process;
