import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
    title: "Gallery | Reyansh Aayurveda",
    description: "View images of our clinic, therapy rooms, herbal garden, and happy patients.",
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-primary/5 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Healing Space</h1>
                    <p className="text-lg text-muted-foreground">
                        Glimpses of our serene clinic environment, authentic therapies, and medicinal herbs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <GalleryGrid />
            </div>
        </div>
    );
}
