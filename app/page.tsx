import Hero from "@/components/Hero";
import Services from "@/components/Services";
import InteractiveReviews from "@/components/InteractiveReviews";
import HomeVideoSection from "@/components/HomeVideoSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Introduction Quote */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-primary italic leading-relaxed">
            "The natural healing force within each one of us is the greatest force in getting well."
          </h2>
          <p className="mt-4 text-muted-foreground font-medium">— Hippocrates</p>
        </div>
      </section>

      <Services />

      {/* Video Tour Section */}
      <HomeVideoSection />

      <InteractiveReviews />

      {/* Call to Action Bar */}
      <section className="py-20 bg-accent text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to start your healing journey?</h2>
          <p className="text-xl opacity-90 mb-8">
            Book your consultation today and take the first step towards holistic wellness.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
