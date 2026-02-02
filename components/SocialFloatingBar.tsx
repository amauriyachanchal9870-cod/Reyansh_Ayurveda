"use client";

import { Facebook, Instagram, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function SocialFloatingBar() {
    const [isVisible, setIsVisible] = useState(true);

    // Mock links - replace with actual URLs
    const socialLinks = [
        {
            name: "WhatsApp",
            icon: Phone,
            href: "https://wa.me/919079909307",
            color: "bg-green-500",
            label: "Chat with us"
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/reyanshayurvedajpr?igsh=ZzFmc2dnanpwaXgw",
            color: "bg-pink-600",
            label: "Follow us"
        },
        {
            name: "Facebook",
            icon: Facebook,
            href: "https://www.facebook.com/share/1BuA8qkC8h/",
            color: "bg-blue-600",
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
                        whileHover={{ scale: 1.1, x: -5 }}
                        className={`p-3 rounded-full text-white shadow-lg ${social.color} hover:brightness-110 flex items-center group relative`}
                    >
                        <social.icon className="w-6 h-6" />

                        {/* Tooltip Label */}
                        <span className="absolute right-full mr-3 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
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
