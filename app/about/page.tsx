import { Leaf, Award, Users, History } from "lucide-react";

export const metadata = {
    title: "About Us | Reyansh Aayurveda",
    description: "Learn about the mission, vision, and Ayurvedic philosophy of Reyansh Aayurveda clinic.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <div className="bg-primary py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">About Reyansh Aayurveda</h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto px-4">
                    Dedicated to restoring health and harmony through authentic Ayurveda.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                To provide authentic, compassionate, and personalized Ayurvedic healthcare that addresses the root cause of ailments. We strive to empower individuals to take charge of their health through natural healing, lifestyle education, and preventative care.
                            </p>
                            <div className="flex items-center space-x-4 text-primary font-medium">
                                <Leaf className="w-6 h-6" />
                                <span>100% Natural & Herbal</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Philosophy</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Ayurveda is not just a system of medicine, but a way of life. We believe in the balance of the three doshas—Vata, Pitta, and Kapha—as the key to optimal health. Our treatments are designed to restore this delicate balance using time-tested methods passed down through generations.
                            </p>
                        </div>
                    </div>

                    {/* Clinic Interior Section */}
                    <div className="mb-16 rounded-xl overflow-hidden relative h-64 md:h-96 w-full shadow-lg group">
                        <img
                            src="/images/hero_background.png"
                            alt="Reyansh Aayurveda Clinic Interior"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-2">A Sanctuary for Healing</h3>
                            <p className="text-white/90 max-w-xl">
                                Step into a space designed for tranquility. Our clinic combines traditional aesthetics with modern comfort to ensure your healing journey begins the moment you walk in.
                            </p>
                        </div>
                    </div>

                    {/* Stats / Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-100 pt-12">
                        <div className="text-center">
                            <Users className="w-10 h-10 text-secondary mx-auto mb-3" />
                            <div className="text-3xl font-bold text-foreground">5000+</div>
                            <div className="text-sm text-muted-foreground">Patients Healed</div>
                        </div>
                        <div className="text-center">
                            <History className="w-10 h-10 text-secondary mx-auto mb-3" />
                            <div className="text-3xl font-bold text-foreground">15+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <Award className="w-10 h-10 text-secondary mx-auto mb-3" />
                            <div className="text-3xl font-bold text-foreground">100%</div>
                            <div className="text-sm text-muted-foreground">Authentic Therapy</div>
                        </div>
                        <div className="text-center">
                            <Leaf className="w-10 h-10 text-secondary mx-auto mb-3" />
                            <div className="text-3xl font-bold text-foreground">50+</div>
                            <div className="text-sm text-muted-foreground">Herbal Formulas</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
