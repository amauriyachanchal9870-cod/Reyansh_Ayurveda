"use client";

// ... imports
import { useState, useRef, useEffect } from "react";
import { Star, Quote, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ... initialReviews data ...
const initialReviews = [
    {
        id: 1,
        name: "Rajesh Kumar",
        rating: 5,
        comment: "An incredible experience. The doctors are very knowledgeable and the Panchakarma treatment completely rejuvenated me. Highly recommended!",
        initials: "RK"
    },
    {
        id: 2,
        name: "Anita Singh",
        rating: 5,
        comment: "I have been suffering from migraines for years. After just 3 weeks of treatment here, I see a huge difference. Authentic and caring staff.",
        initials: "AS"
    },
    {
        id: 3,
        name: "Michael D'Souza",
        rating: 4,
        comment: "A very peaceful environment. The Shirodhara therapy was exactly what I needed for my stress. Will visit again soon.",
        initials: "MD"
    },
    {
        id: 4,
        name: "Priya Sharma",
        rating: 5,
        comment: "Best Ayurvedic clinic in Jaipur. The doctor took the time to explain my Prakriti and diet plan clearly. Very happy!",
        initials: "PS"
    }
];

export default function InteractiveReviews() {
    const [reviews, setReviews] = useState(initialReviews);
    const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Auto-scroll refs
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;

        const scroll = () => {
            if (!isPaused && scrollContainer) {
                if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
                    // Reset to start if reached end (create a loop effect)
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 0.5; // Adjust speed here
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, reviews]); // Restart if reviews change to handle layout updates

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newReview.name || !newReview.comment) return;

        setIsSubmitting(true);

        // Instant update - Removed timeout
        const review = {
            id: Date.now(),
            name: newReview.name,
            rating: Number(newReview.rating),
            comment: newReview.comment,
            initials: newReview.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)
        };

        setReviews([review, ...reviews]);
        setNewReview({ name: "", rating: 5, comment: "" });
        setIsSubmitting(false);

        // Scroll to start to show new review
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-primary/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Review Form - Fixed on left/top */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/10">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-2">Share Your Story</h3>
                            <p className="text-muted-foreground text-sm mb-6">Had a great experience? Let us know!</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={newReview.name}
                                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                                        placeholder="E.g. John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Rating</label>
                                    <select
                                        value={newReview.rating}
                                        onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                                    >
                                        <option value="5">★★★★★ - Excellent</option>
                                        <option value="4">★★★★☆ - Good</option>
                                        <option value="3">★★★☆☆ - Average</option>
                                        <option value="2">★★☆☆☆ - Poor</option>
                                        <option value="1">★☆☆☆☆ - Terrible</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-1">Your Review</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={newReview.comment}
                                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm resize-none"
                                        placeholder="Tell us about your treatment..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-white font-medium py-2.5 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center disabled:opacity-70"
                                >
                                    {isSubmitting ? "Posting..." : <>Post Review <Send className="w-4 h-4 ml-2" /></>}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Horizontal Scrollable Review List */}
                    <div className="lg:col-span-2 flex flex-col justify-center">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Patient Stories</h2>
                            <p className="text-lg text-muted-foreground">
                                Read what our community has to say about their healing journeys.
                            </p>
                        </div>

                        {/* Scroll Container */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <div
                                ref={scrollContainerRef}
                                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                <AnimatePresence mode="popLayout" initial={false}>
                                    {reviews.map((review) => (
                                        <motion.div
                                            key={review.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4 }}
                                            className="min-w-[300px] md:min-w-[350px] snap-start"
                                        >
                                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col relative hover:shadow-md transition-shadow">
                                                <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" />

                                                <div className="flex text-yellow-500 mb-4">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>

                                                <p className="text-muted-foreground mb-6 italic text-sm leading-relaxed flex-1">
                                                    "{review.comment}"
                                                </p>

                                                <div className="flex items-center mt-auto">
                                                    <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-xs font-bold text-white shadow-inner">
                                                        {review.initials}
                                                    </div>
                                                    <div className="ml-3">
                                                        <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
                                                        <p className="text-xs text-muted-foreground">Verified Patient</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                            {/* Gradient fade effect on right */}
                            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none md:block hidden" />
                        </div>

                        <p className="text-xs text-muted-foreground mt-2 text-center lg:text-left flex items-center">
                            <span className="inline-block w-20 h-0.5 bg-gray-300 mr-2"></span>
                            Scroll to see more reviews
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
