import React from 'react';
import { Award, Shield, Users, Star } from 'lucide-react';

const SocialProof = () => {
    return (
        <section className="bg-white py-10 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center opacity-90">

                    <div className="flex flex-col items-center justify-center gap-2 group animate-slide-up-fade">
                        <div className="p-3 bg-red-50 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                            <Shield className="w-8 h-8 text-brand-primary" />
                        </div>
                        <span className="text-sm font-bold text-gray-600 uppercase tracking-wider group-hover:text-brand-primary transition-colors">Certificado Seremi</span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 group animate-slide-up-fade delay-100">
                        <div className="p-3 bg-red-50 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                            <Users className="w-8 h-8 text-brand-primary" />
                        </div>
                        <span className="text-sm font-bold text-gray-600 uppercase tracking-wider group-hover:text-brand-primary transition-colors">+500 Hogares</span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 group animate-slide-up-fade delay-200">
                        <div className="p-3 bg-red-50 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                            <Award className="w-8 h-8 text-brand-primary" />
                        </div>
                        <span className="text-sm font-bold text-gray-600 uppercase tracking-wider group-hover:text-brand-primary transition-colors">Norma ISO 9001</span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 group animate-slide-up-fade delay-300">
                        <div className="p-3 bg-red-50 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                            <Star className="w-8 h-8 text-brand-primary" />
                        </div>
                        <span className="text-sm font-bold text-gray-600 uppercase tracking-wider group-hover:text-brand-primary transition-colors">Servicio 5 Estrellas</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SocialProof;
