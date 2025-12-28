"use client";

import { useEffect, useState } from "react";
import { X, Clock, Zap } from "lucide-react";

export default function FlashSalePopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

    useEffect(() => {
        // Check if we've already shown this
        const hasSeenFlashSale = sessionStorage.getItem("rb-flash-sale-seen");
        if (hasSeenFlashSale) return;

        // Trigger after 15 seconds (reduced for easier testing/interaction than 60)
        const timer = setTimeout(() => {
            // Also check if Exit Popup is already open to avoid stacking (simple check via DOM or state management if avail)
            // For now, we'll just show it.
            setIsVisible(true);
            sessionStorage.setItem("rb-flash-sale-seen", "true");
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    // Countdown timer logic
    useEffect(() => {
        if (!isVisible || timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isVisible, timeLeft]);

    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
            <div
                className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-brand-gold animate-in zoom-in-95 duration-300 transform"
                role="dialog"
                aria-modal="true"
            >
                {/* Animated Header */}
                <div className="bg-brand-gold p-3 text-center animate-pulse">
                    <span className="text-brand-secondary font-black tracking-widest uppercase flex items-center justify-center gap-2">
                        <Zap className="w-5 h-5 fill-brand-secondary" /> OFERTA RELÁMPAGO
                    </span>
                </div>

                {/* Close Button */}
                <button
                    onClick={closePopup}
                    className="absolute top-14 right-4 p-2 text-gray-400 hover:text-brand-primary transition-colors rounded-full hover:bg-gray-100"
                    aria-label="Close popup"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-8 text-center pt-10">
                    <div className="mb-6 inline-flex p-4 rounded-full bg-red-50 mb-4 ring-4 ring-red-100">
                        <Clock className="w-10 h-10 text-brand-primary animate-spin-slow" />
                    </div>

                    <h2 className="text-3xl font-extrabold text-brand-secondary mb-2">
                        ¡Oferta Especial Desbloqueada!
                    </h2>
                    <p className="text-gray-600 mb-6 font-medium">
                        Agenda tu inspección en los próximos <span className="font-bold text-brand-primary">5 minutos</span> y obtén <span className="font-bold text-brand-primary">20% DCTO</span>.
                    </p>

                    {/* Countdown Display */}
                    <div className="text-4xl font-black text-brand-secondary mb-8 font-mono tracking-wider bg-gray-100 py-3 rounded-lg border border-gray-200">
                        {formatTime(timeLeft)}
                    </div>

                    <form className="space-y-3">
                        <input
                            type="email"
                            placeholder="Ingresa tu email para asegurar precio"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none"
                        />
                        <button className="w-full py-4 px-6 text-white font-bold bg-brand-primary hover:bg-brand-primary-dark rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-lg uppercase tracking-wide">
                            Reclamar 20% Descuento
                        </button>
                    </form>

                    <button
                        onClick={closePopup}
                        className="mt-4 text-xs text-gray-400 hover:text-gray-600 font-medium underline"
                    >
                        No gracias, pagaré precio completo
                    </button>
                </div>
            </div>
        </div>
    );
}
