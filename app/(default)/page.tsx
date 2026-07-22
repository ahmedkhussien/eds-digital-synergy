export const metadata = {
  title: "EDS Echo — Elite Digital Synergy | Integrated Enterprise Operating Systems",
  description: "EDS Echo (Elite Digital Synergy) bridges all your digital assets—from cloud servers and ERP systems to AI tools, networks, and cybersecurity—into a single, unified enterprise operating system.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
