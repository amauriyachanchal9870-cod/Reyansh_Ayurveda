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
                            <a href="https://www.facebook.com/share/1BuA8qkC8h/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all group">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/reyanshayurvedajpr?igsh=ZzFmc2dnanpwaXgw" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all group">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/919079909307" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all group">
                                <Phone className="w-5 h-5" />
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
