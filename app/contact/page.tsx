import AppointmentForm from "@/components/AppointmentForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Us | Reyansh Aayurveda",
    description: "Book an appointment or visit Reyansh Aayurveda clinic in New Delhi.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-primary py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
                <p className="text-white/80 text-lg max-w-2xl mx-auto px-4">
                    We are here to help you on your path to wellness. Reach out to schedule a consultation.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Contact Info Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-8">Get into Touch</h2>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold text-foreground mb-1">Clinic Address</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        267/613, near Prem Mandir, Sector 26,<br />
                                        Pratap Nagar, Jaipur, Rajasthan 302033
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold text-foreground mb-1">Phone Number</h4>
                                    <p className="text-muted-foreground">+91 9079909307</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold text-foreground mb-1">Email Address</h4>
                                    <p className="text-muted-foreground">amauriyachanchal9870@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold text-foreground mb-1">Working Hours</h4>
                                    <p className="text-muted-foreground">Mon, Wed-Sun: 9:00 AM - 7:00 PM</p>
                                    <p className="text-muted-foreground">Tuesday: 9:00 AM - 7:30 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 h-64 bg-gray-100 rounded-xl overflow-hidden relative shadow-md border border-gray-200">
                            <iframe
                                title="Clinic Location"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=267%2F613%2C+near+Prem+Mandir%2C+Sector+26%2C+Pratap+Nagar%2C+Jaipur%2C+Rajasthan+302033&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Appointment Form */}
                    <div className="relative">
                        <AppointmentForm />
                    </div>

                </div>
            </div>
        </div>
    );
}
