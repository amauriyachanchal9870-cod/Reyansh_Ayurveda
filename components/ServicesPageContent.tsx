"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const servicesList = [
    {
        title: "Panchakarma Therapy",
        description: "A five-step detoxification process to cleanse the body of toxins (ama) and restore youthful vitality. Includes Vamana, Virechana, Basti, Nasya, and Raktamokshana.",
        image: "/images/panchakarma.png"
    },
    {
        title: "Nadi Pariksha (Pulse Diagnosis)",
        description: "An ancient non-invasive diagnostic technique that accurately detects imbalances in the body and mind by analyzing the pulse.",
        image: "/images/nadi_pariksha.png"
    },
    {
        title: "Abhyanga (Full Body Massage)",
        description: "A traditional warm oil massage that improves circulation, muscle tone, and sleep quality while reducing stress and anxiety.",
        image: "/images/abhyanga.png"
    },
    {
        title: "Shirodhara",
        description: "A deeply relaxing therapy involving the continuous pouring of warm medicated oil on the forehead. Excellent for insomnia, stress, and migraines.",
        image: "/images/shirodhara.png"
    },
    {
        title: "Skin & Hair Care",
        description: "Herbal treatments for acne, eczema, psoriasis, hair fall, and dandruff using natural pastes and oils.",
        image: "/images/skin_care.png"
    },
    {
        title: "Joint Pain & Arthritis",
        description: "Specialized potli massage and oil treatments to reduce inflammation, stiffness, and pain in joints.",
        image: "/images/joint_pain.png"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function ServicesPageContent() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-primary/5 py-20 px-4 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">Holistic Treatments</h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Rediscover balance with our comprehensive range of traditional Ayurvedic therapies, tailored to your unique Prakriti.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-primary/5 flex flex-col"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col relative">
                                <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                                    {service.description}
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center text-primary font-bold tracking-wide uppercase text-xs hover:text-primary-dark mt-auto group/btn"
                                >
                                    Book Therapy
                                    <span className="ml-2 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                                        <ArrowRight className="w-3 h-3" />
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
