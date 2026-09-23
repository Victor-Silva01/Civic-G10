import { Hero } from "./Hero";
import { Parallax } from "./Parallax";
import { Specs } from "./Specs";
import { Interior } from "./Interior";
import { DesignShowcase } from "./DesignShowcase";
import { CTA } from "./CTA";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { TestDriveModal } from "./TestDriveModal";
import { TestDriveProvider, useTestDrive } from "./test-drive-context";

export function LandingPage() {
  return (
    <TestDriveProvider>
      <ScrollProgress />
      <main className="relative min-h-screen bg-background text-foreground antialiased overflow-hidden">
        <Hero />
        <Parallax />
        <Specs />
        <Interior />
        <DesignShowcase />
        <CTA />
        <Footer />
      </main>
      <FloatingWhatsApp />
      <ModalMount />
    </TestDriveProvider>
  );
}

function ModalMount() {
  const { isOpen, close } = useTestDrive();
  return <TestDriveModal open={isOpen} onClose={close} />;
}