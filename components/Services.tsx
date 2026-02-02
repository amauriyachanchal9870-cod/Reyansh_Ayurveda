"use client";

import Link from "next/link";
import { MoveRight, Sparkles, HeartPulse, Flower2, Activity } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Panchakarma Therapy",
        description: "Deep cleansing and rejuvenation therapies to detoxify the body and restore doshic balance.",
        icon: Sparkles,
        href: "/services",
    },
    {
        title: "Ayurvedic Consultation",
        description: "Personalized health assessment by our expert doctors using Nadi Pariksha (Pulse Diagnosis).",
        icon: Activity,
        href: "/services",
    },
    {
        title: "Herbal Medicine",
        description: "Authentic, plant-based remedies custom-formulated to treat the root cause of ailments.",
        icon: Flower2,
        href: "/services",
    },
    {
        title: "Chronic Disease Care",
        description: "Holistic management for arthritis, diabetes, skin disorders, and digestive issues.",
        icon: HeartPulse,
        href: "/services",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function Services() {
    return (
        <section className="py-24 bg-[#F4F9F5] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mt-24 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -mr-48 -mb-24 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Healing Services</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Experience the holistic touch of Ayurveda with our comprehensive range of treatments designed for your well-being.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/5 group relative overflow-hidden"
                            style={{ transition: "box-shadow 0.3s ease" }}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-primary/10"></div>

                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10 group-hover:rotate-[360deg]">
                                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-serif font-bold text-foreground mb-3 relative z-10">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 text-sm leading-relaxed relative z-10">
                                {service.description}
                            </p>

                            <Link
                                href={service.href}
                                className="inline-flex items-center text-primary font-bold text-sm tracking-wide uppercase hover:text-primary-dark transition-colors relative z-10"
                            >
                                Learn more <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
