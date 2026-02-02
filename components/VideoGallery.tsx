"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
    {
        id: 1,
        title: "Clinic Tour",
        thumbnail: "/images/hero_background.png", // Using existing image as thumbnail
        duration: "2:30"
    },
    {
        id: 2,
        title: "Panchakarma Procedure",
        thumbnail: "/images/panchakarma.png",
        duration: "4:15"
    },
    {
        id: 3,
        title: "Dr. Consultation",
        thumbnail: "/images/nadi_pariksha.png",
        duration: "1:45"
    },
    {
        id: 4,
        title: "Herbal Garden Walkthrough",
        thumbnail: "/images/hero_background.png",
        duration: "3:20"
    }
];

export default function VideoGallery() {
    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    return (
        <section className="py-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Video Tour</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((video) => (
                    <motion.div
                        key={video.id}
                        whileHover={{ scale: 1.02 }}
                        className="relative group rounded-2xl overflow-hidden shadow-lg aspect-video cursor-pointer bg-black/10"
                        onClick={() => setActiveVideo(video.id)}
                    >
                        {/* Thumbnail */}
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-xl group-hover:scale-110 transition-transform">
                                <Play className="w-6 h-6 text-primary fill-primary" />
                            </div>
                        </div>

                        {/* Info Badge */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                            <div>
                                <h3 className="text-white font-bold text-lg shadow-black/50 drop-shadow-md">{video.title}</h3>
                            </div>
                            <span className="bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                                {video.duration}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal - For now just a placeholder for the actual video player */}
            <AnimatePresence>
                {activeVideo !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setActiveVideo(null)}
                    >
                        <div className="bg-background rounded-xl p-8 max-w-2xl w-full text-center relative" onClick={e => e.stopPropagation()}>
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                            >
                                Close
                            </button>
                            <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center text-white/50">
                                <Play className="w-16 h-16 opacity-50" />
                                <span className="sr-only">Video Player Placeholder</span>
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">
                                {videos.find(v => v.id === activeVideo)?.title}
                            </h3>
                            <p className="text-muted-foreground">
                                This is a placeholder. You can link your actual video files or YouTube embeds here.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
