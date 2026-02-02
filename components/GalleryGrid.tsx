"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Placeholder data since we don't have real images
// Fallback real images using what we have generated/uploaded so far
const images = [
    { id: 1, title: "Clinic Reception", type: "Interior", src: "/images/hero_background.png" },
    { id: 2, title: "Clinic Entrance", type: "Interior", src: "/images/hero_background.png" },
    { id: 3, title: "Panchakarma", type: "Therapy", src: "/images/panchakarma.png" },
    { id: 4, title: "Nadi Pariksha", type: "Therapy", src: "/images/nadi_pariksha.png" },
    { id: 5, title: "Abhyanga Massage", type: "Therapy", src: "/images/abhyanga.png" },
    { id: 6, title: "Shirodhara", type: "Therapy", src: "/images/shirodhara.png" },
    { id: 7, title: "Skin Care", type: "Wellness", src: "/images/skin_care.png" },
    { id: 8, title: "Joint Pain Relief", type: "Therapy", src: "/images/joint_pain.png" },
];

export default function GalleryGrid() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...new Set(images.map(img => img.type))];
    const filteredImages = filter === "All" ? images : images.filter(img => img.type === filter);

    return (
        <div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                            ? "bg-primary text-white shadow-md"
                            : "bg-white text-muted-foreground hover:bg-primary/5"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredImages.map((img, index) => (
                    <motion.div
                        key={img.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200"
                    >
                        <img
                            src={img.src}
                            alt={img.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-medium text-lg font-serif">{img.title}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
