"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ 
  phoneNumber = "+56976339700", // Número por defecto, puedes cambiarlo
  message = "Hola, me gustaría solicitar información sobre sus servicios de control de plagas."
}) => {
  // Formatear el número de teléfono (eliminar espacios, guiones, etc.)
  const formattedPhone = phoneNumber.replace(/[^0-9]/g, '');
  
  // Crear el enlace de WhatsApp
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group animate-bounce-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Escríbenos por WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppFloat;

