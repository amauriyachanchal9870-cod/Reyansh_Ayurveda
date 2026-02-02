"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-primary/20 z-0">
                <Image
                    src="/images/hero_background.png"
                    alt="Ayurvedic Therapy Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                {/* Overlay / Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-primary/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center mb-6">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/30 shadow-2xl bg-white/10 backdrop-blur-sm">
                            <Image
                                src="/images/hero_icon.png"
                                alt="Ayurveda Symbol"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-md">
                        Reyansh Aayurveda
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto drop-shadow-sm">
                        Healing Naturally Through Ancient Wisdom. Restore Balance to Your Body, Mind, & Soul.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full transition-all transform hover:scale-105 shadow-lg text-lg font-medium"
                        >
                            Book Appointment
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full transition-all text-lg font-medium"
                        >
                            Explore Therapies
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
