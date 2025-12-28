"use client";
import React from 'react';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';

const LeadCapture = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call / Webhook
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after showing success message
        setTimeout(() => setIsSuccess(false), 5000);
    };

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
                                    <a href="tel:+1234567890" className="text-xl font-bold text-brand-secondary hover:text-brand-primary transition-colors">
                                        (555) 123-4567
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="relative animate-slide-up-fade delay-200">
                        <div className="absolute inset-0 bg-brand-primary transform rotate-3 rounded-2xl opacity-10 hidden lg:block" />

                        <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-brand-secondary">Solicitar Cotización</h3>
                                <p className="text-gray-500 mt-1">Completa el formulario y te contactaremos en 15 mins.</p>
                            </div>

                            {isSuccess ? (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-in fade-in zoom-in duration-300">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-800 mb-2">¡Solicitud Recibida!</h3>
                                    <p className="text-green-700">
                                        Hemos recibido tus datos. Un técnico te llamará en breve para confirmar tu cita.
                                    </p>
                                </div>
                            ) : (
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="col-span-1">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                                            <input
                                                required
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder-gray-400 hover:border-gray-300"
                                                placeholder="Juan Pérez"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                            <input
                                                required
                                                type="tel"
                                                id="phone"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder-gray-400 hover:border-gray-300"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder-gray-400 hover:border-gray-300"
                                            placeholder="juan@ejemplo.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="pest-type" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Plaga</label>
                                        <select
                                            id="pest-type"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all bg-white text-gray-700 hover:border-gray-300"
                                        >
                                            <option value="">Selecciona un tipo...</option>
                                            <option value="rodents">Roedores (Ratones/Ratas)</option>
                                            <option value="insects">Insectos (Hormigas/Cucarachas)</option>
                                            <option value="termites">Termites</option>
                                            <option value="bedbugs">Chinches</option>
                                            <option value="other">Otro / No sé</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Dirección (Opcional)</label>
                                        <textarea
                                            id="address"
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder-gray-400 hover:border-gray-300"
                                            placeholder="Av. Principal 123..."
                                        />
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className={`w-full flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform transition-all text-lg gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-brand-primary-dark hover:-translate-y-0.5'}`}
                                        style={!isSubmitting ? { animation: 'pulseBtn 2s infinite' } : {}}
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Solicitar Inspección Gratis'}
                                        {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                                    </button>

                                    <p className="text-xs text-center text-gray-400 mt-4">
                                        Al enviar, aceptas nuestra política de privacidad. Tus datos están seguros.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadCapture;
