import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ToursSection } from "@/components/landing/ToursSection";
import { RideTypes } from "@/components/landing/RideTypes";
import { KiteTransferBand } from "@/components/landing/KiteTransferBand";
import { WhyUs } from "@/components/landing/WhyUs";
import { BeyondRoutes } from "@/components/landing/BeyondRoutes";
import { ReadyCTA } from "@/components/landing/ReadyCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ToursSection />
      <RideTypes />
      <KiteTransferBand />
      <WhyUs />
      <BeyondRoutes />
      <ReadyCTA />
      <Footer />
    </main>
  );
}
