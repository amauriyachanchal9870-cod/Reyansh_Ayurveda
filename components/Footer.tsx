import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/20 bg-white">
                                <img src="/images/logo.png" alt="Reyansh Ayurveda Logo" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-accent">Reyansh Ayurveda</h3>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Healing naturally through authentic Ayurvedic treatments. Rejuvenate your body, mind, and soul with our holistic approach.
                        </p>
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/share/1BuA8qkC8h/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-[#1877F2] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#1877F2]/40 hover:-translate-y-1"
                                aria-label="Facebook"
                            >
                                <span className="absolute inset-0 bg-[#1877F2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                                <Facebook className="w-5 h-5 text-white/80 relative z-10 transition-colors duration-300 group-hover:text-white" />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/reyanshayurvedajpr?igsh=ZzFmc2dnanpwaXgw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-pink-500 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/40 hover:-translate-y-1"
                                aria-label="Instagram"
                            >
                                <span className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#bc1888] to-[#2f43f3] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                                <Instagram className="w-5 h-5 text-white/80 relative z-10 transition-colors duration-300 group-hover:text-white" />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919079909307"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/40 hover:-translate-y-1"
                                aria-label="WhatsApp"
                            >
                                <span className="absolute inset-0 bg-[#25D366] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                                <Phone className="w-5 h-5 text-white/80 relative z-10 transition-colors duration-300 group-hover:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-4 text-accent">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-white/80 hover:text-accent transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/services" className="text-white/80 hover:text-accent transition-colors text-sm">Our Services</Link></li>
                            <li><Link href="/doctor" className="text-white/80 hover:text-accent transition-colors text-sm">Meet the Doctor</Link></li>
                            <li><Link href="/gallery" className="text-white/80 hover:text-accent transition-colors text-sm">Gallery</Link></li>
                            <li><Link href="/contact" className="text-white/80 hover:text-accent transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-4 text-accent">Treatments</h4>
                        <ul className="space-y-2">
                            <li><Link href="/services" className="text-white/80 hover:text-accent transition-colors text-sm">Panchakarma</Link></li>
                            <li><Link href="/services" className="text-white/80 hover:text-accent transition-colors text-sm">Herbal Medicine</Link></li>
                            <li><Link href="/services" className="text-white/80 hover:text-accent transition-colors text-sm">Skin & Hair Care</Link></li>
                            <li><Link href="/services" className="text-white/80 hover:text-accent transition-colors text-sm">Joint Pain Relief</Link></li>
                            <li><Link href="/services" className="text-white/80 hover:text-accent transition-colors text-sm">Stress Management</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-4 text-accent">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                                <span className="text-white/80 text-sm">
                                    267/613, near Prem Mandir, Sector 26,<br />
                                    Pratap Nagar, Jaipur, Rajasthan 302033
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-accent" />
                                <span className="text-white/80 text-sm">+91 9079909307</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-accent" />
                                <span className="text-white/80 text-sm">amauriyachanchal9870@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-white/60 text-sm">
                        © {new Date().getFullYear()} Reyansh Ayurveda. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
