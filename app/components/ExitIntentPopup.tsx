"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse left the window from the top
      if (e.clientY <= 0) {
        // Changed to sessionStorage for easier testing/per-session display as requested
        const hasSeenPopup = sessionStorage.getItem("rb-exit-popup-seen");
        if (!hasSeenPopup) {
          setIsVisible(true);
          sessionStorage.setItem("rb-exit-popup-seen", "true");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!domLoaded || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 animate-in zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Visual Side (Optional - using pure code for now, could be an image) */}
          <div className="hidden md:block w-1/3 bg-brand-primary flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-primary-dark"></div>
            <div className="text-white text-4xl font-bold opacity-20 rotate-12 relative z-10">
              OFERTA
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-2/3 p-8 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-brand-primary uppercase bg-red-50 rounded-full border border-red-100">
              Oferta por Tiempo Limitado
            </div>

            <h2 className="text-3xl font-extrabold text-brand-secondary mb-2">
              ¡Espera! ¡No te vayas!
            </h2>
            <p className="text-gray-600 mb-6 font-medium">
              Obtén <span className="font-bold text-brand-primary">15% DCTO</span> en tu primer servicio si reservas hoy.
            </p>

            <div className="space-y-3">
              <button className="w-full py-3 px-6 text-white font-bold bg-brand-primary hover:bg-brand-primary-dark rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5" style={{ animation: 'pulseBtn 2s infinite' }}>
                Reclamar mi 15% de Descuento
              </button>

              <button
                onClick={closePopup}
                className="w-full py-2 text-sm text-gray-400 hover:text-gray-600 font-medium transition-colors"
              >
                No gracias, prefiero pagar precio completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
