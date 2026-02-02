"use client";

import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Patient Stories</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Hear from those who have experienced healing and transformation with Reyansh Aayurveda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm relative">
                            <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                            <div className="flex text-yellow-500 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-6 italic">
                                "An incredible experience. The doctors are very knowledgeable and the Panchakarma treatment completely rejuvenated me. Highly recommended!"
                            </p>
                            <div className="flex items-center">
                                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                                    {i === 1 ? 'RK' : i === 2 ? 'AS' : 'MD'}
                                </div>
                                <div className="ml-3">
                                    <h4 className="font-bold text-foreground text-sm">Patient Name {i}</h4>
                                    <p className="text-xs text-muted-foreground">Detailed Treatment</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
