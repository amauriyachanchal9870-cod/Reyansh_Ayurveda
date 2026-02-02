import Link from "next/link";
import { GraduationCap, Award, Stethoscope, Clock } from "lucide-react";

export const metadata = {
    title: "Our Doctor | Reyansh Aayurveda",
    description: "Meet Dr. [Name], our expert Ayurvedic specialist with over 15 years of experience.",
};

export default function DoctorPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-primary/5 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Meet Our Specialist</h1>
                    <p className="text-lg text-muted-foreground">Expert care guided by years of experience and compassionate healing.</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Doctor Image Placeholder */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200">
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-primary font-serif italic text-2xl">
                            [Dr. Profile Image]
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl font-serif font-bold text-foreground mb-2">Dr. Reyansh Kumar</h2>
                        <p className="text-xl text-primary font-medium mb-6">B.A.M.S, M.D. (Ayurveda)</p>

                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Dr. Reyansh Kumar is a renowned Ayurvedic practitioner with a deep understanding of ancient healing traditions. With over 15 years of clinical experience, he specializes in treating chronic lifestyle disorders, autoimmune conditions, and stress-related ailments through personalized Panchakarma therapies and herbal formulations.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start">
                                <GraduationCap className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                <div className="ml-3">
                                    <h4 className="font-bold text-foreground">Qualification</h4>
                                    <p className="text-sm text-muted-foreground">B.A.M.S from Delhi University<br />M.D. in Panchakarma</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Award className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                <div className="ml-3">
                                    <h4 className="font-bold text-foreground">Experience</h4>
                                    <p className="text-sm text-muted-foreground">15+ Years Clinical Practice<br />Ex-Senior Resident at AIIMS</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Stethoscope className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                <div className="ml-3">
                                    <h4 className="font-bold text-foreground">Specialization</h4>
                                    <p className="text-sm text-muted-foreground">Panchakarma, Nadi Pariksha,<br />Skin Disorders, Joint Pain</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Clock className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                <div className="ml-3">
                                    <h4 className="font-bold text-foreground">Availability</h4>
                                    <p className="text-sm text-muted-foreground">Mon - Sun: 9:00 AM - 7:00 PM<br />(Tue: until 7:30 PM)</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors font-medium">
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
