"use client";

import { motion } from "framer-motion";

type Video = {
    id: number;
    title: string;
} & (
        | { type: "local"; src: string; poster?: string }
        | { type: "youtube"; youtubeId: string }
    );

const videos: Video[] = [
    {
        id: 1,
        title: "Therapeutic Atmosphere",
        type: "local",
        src: "/videos/therapeutic_atmosphere.mp4",
        poster: "/images/hero_background.png"
    },
    {
        id: 2,
        title: "Authentic Care",
        type: "local",
        src: "/videos/reyanshayurvedajpr_20260202_1.mp4",
        poster: "/images/panchakarma.png"
    },
    {
        id: 3,
        title: "Holistic Healing",
        type: "local",
        src: "/videos/reyanshayurvedajpr_20260202_3.mp4",
        poster: "/images/shirodhara.png"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 15
        }
    }
};

export default function HomeVideoSection() {
    return (
        <section className="py-24 bg-primary/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Experience the Calm</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Take a visual journey through our healing spaces and authentic procedures.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {videos.map((video) => (
                        <motion.div
                            key={video.id}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.03 }}
                            className="relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white group"
                        >
                            {video.type === "local" ? (
                                <video
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster={video.poster}
                                >
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.youtubeId}&playsinline=1`}
                                    title={video.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 pointer-events-none border-inner border-black/10 mix-blend-multiply"></div>

                            <div className="absolute bottom-6 left-6 right-6 pointer-events-none z-10">
                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-white font-serif font-bold text-xl drop-shadow-md bg-black/20 backdrop-blur-md inline-block px-4 py-2 rounded-lg border border-white/10"
                                >
                                    {video.title}
                                </motion.h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-muted-foreground italic bg-white/50 inline-block px-6 py-2 rounded-full border border-primary/10 shadow-sm">
                        * Videos play automatically to give you a glimpse of our serene environment.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
