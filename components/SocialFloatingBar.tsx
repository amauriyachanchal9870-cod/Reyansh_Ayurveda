"use client";

import { Facebook, Instagram, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function SocialFloatingBar() {
    const [isVisible, setIsVisible] = useState(true);

    type SocialLink = {
        name: string;
        icon: React.ElementType;
        href: string;
        color: string;
        gradient?: string;
        label: string;
    };

    // Mock links - replace with actual URLs
    const socialLinks: SocialLink[] = [
        {
            name: "WhatsApp",
            icon: Phone,
            href: "https://wa.me/919079909307",
            color: "bg-[#25D366]",
            label: "Chat with us"
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/reyanshayurvedajpr?igsh=ZzFmc2dnanpwaXgw",
            color: "bg-pink-600",
            gradient: "bg-gradient-to-tr from-[#f09433] via-[#bc1888] to-[#2f43f3]",
            label: "Follow us"
        },
        {
            name: "Facebook",
            icon: Facebook,
            href: "https://www.facebook.com/share/1BuA8qkC8h/",
            color: "bg-[#1877F2]",
            label: "Like our page"
        },
    ];

    if (!isVisible) return null;

    return (
        <div className="fixed right-4 bottom-24 z-50 flex flex-col gap-3 items-end">
            <AnimatePresence>
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-x-1 hover:shadow-xl"
                    >
                        {/* Fill Animation */}
                        <span className={`absolute inset-0 ${social.gradient || social.color} translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out`}></span>

                        {/* Icon */}
                        <social.icon className="w-5 h-5 text-primary group-hover:text-white relative z-10 transition-colors duration-300" />

                        {/* Tooltip Label */}
                        <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
                            {social.label}
                        </span>
                    </motion.a>
                ))}
            </AnimatePresence>

            {/* Close / Minimize Button (Optional, good for UX) */}
            <button
                onClick={() => setIsVisible(false)}
                className="mt-2 text-xs text-muted-foreground hover:text-foreground underline"
            >
                Hide
            </button>
        </div>
    );
}
