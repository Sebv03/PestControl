"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "¿Es seguro el tratamiento para mascotas y niños?",
        answer: "Sí, absolutamente. Nos adherimos estrictamente a los protocolos de manejo integrado de plagas (MIP). Usamos productos ecológicos y de baja toxicidad. Para tratamientos específicos que requieran controles más fuertes, te guiaremos sobre las medidas de seguridad, como vaciar el área por un corto período."
    },
    {
        question: "¿Qué tan rápido pueden venir a mi propiedad?",
        answer: "Ofrecemos servicio de emergencia el mismo día para situaciones urgentes. Para inspecciones estándar, generalmente podemos agendarte dentro de 24-48 horas."
    },
    {
        question: "¿Ofrecen garantía en sus servicios?",
        answer: "Sí, respaldamos nuestro trabajo. La mayoría de nuestros planes de tratamiento vienen con una garantía de satisfacción de 30 días a 1 año. Si las plagas regresan entre visitas programadas, volveremos sin cargo adicional."
    },
    {
        question: "¿Qué áreas cubren?",
        answer: "Atendemos toda la zona metropolitana y alrededores. Contáctanos para verificar si tu ubicación específica está dentro de nuestro rango."
    },
    {
        question: "¿Necesito salir de mi casa durante el tratamiento?",
        answer: "En la mayoría de los casos, no necesitas salir. Sin embargo, para ciertos tratamientos intensivos como fumigación o control de pulgas, podemos recomendar salir por 2-4 horas para permitir que los productos se asienten de manera segura."
    }
];

const FAQ = () => {
    // Basic state for accordion - keeping it simple for now (one open at a time optional, but independent is fine)
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-brand-secondary">Preguntas Frecuentes</h2>
                    <p className="mt-4 text-lg text-gray-500">Dudas comunes sobre nuestros servicios y seguridad.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left focus:outline-none"
                                onClick={() => toggle(index)}
                            >
                                <span className="font-bold text-lg text-brand-secondary">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`px-5 text-gray-600 bg-gray-50 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 py-5 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
