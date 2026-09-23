import { motion } from "motion/react";
import heroImg from "../../assets/civic-hero.jpg";
import { useTestDrive } from "./test-drive-context";

export function Hero() {
  const { open } = useTestDrive();
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden grain">
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Honda Civic G10 em estúdio escuro com iluminação vermelha e azul"
          className="w-full h-full object-cover object-center sm:object-[center_35%]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background sm:from-background/40 sm:via-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/50 sm:from-background/80 sm:via-transparent sm:to-background/40" />
      </motion.div>

      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-28 sm:pt-40 pb-16 sm:pb-24 min-h-screen flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center gap-3 mb-4 sm:mb-6"
        >
          <span className="h-px w-8 sm:w-12 bg-primary" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-muted-foreground font-medium">
            Honda · Décima Geração
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.75rem,13vw,11rem)] font-black leading-[0.9] sm:leading-[0.85] tracking-tighter"
        >
          <span className="block text-gradient">CIVIC</span>
          <span className="block text-gradient-neon glow-text">G10</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-5 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Performance esportiva, design escultural e tecnologia de outro mundo.
          Uma máquina que redefine o que um sedan pode ser.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={open}
            className="group relative inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#ff2f3f] text-white font-semibold shadow-[0_0_30px_rgba(255,47,63,0.45)] hover:bg-[#ff3d4d] transition-colors w-full sm:w-auto text-sm sm:text-base"
          >
            Agendar Test Drive
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </motion.button>
          <a
            href="#experience"
            className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-border hover:border-foreground transition-colors w-full sm:w-auto text-sm sm:text-base"
          >
            Explorar
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}