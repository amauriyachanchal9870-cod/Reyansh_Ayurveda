import ServicesPageContent from "@/components/ServicesPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Reyansh Aayurveda",
    description: "Explore our range of Ayurvedic treatments including Panchakarma, Abhyanga, and herbal medicine.",
};

export default function ServicesPage() {
    return <ServicesPageContent />;
}
