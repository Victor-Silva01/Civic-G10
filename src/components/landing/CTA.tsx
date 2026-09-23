import { motion } from "motion/react";
import { useTestDrive } from "./test-drive-context";

export function CTA() {
  const { open } = useTestDrive();
  return (
    <section id="cta" className="relative min-h-[570px] flex items-center py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-primary/10 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-primary">
          Sua vez
        </span>
        <h2 className="mt-6 text-5xl md:text-[4.5rem] font-black tracking-tighter leading-[0.9] text-gradient">
          Pronto para
          <br />
          <span className="text-gradient-neon glow-text">sentir o G10?</span>
        </h2>
        <p className="mt-8 text-lg md:text-[1.05rem] text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Agende seu test drive sem compromisso ou fale com um especialista
          agora mesmo via WhatsApp.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto sm:max-w-none">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={open}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#ff2f3f] text-white font-semibold shadow-[0_0_30px_rgba(255,47,63,0.45)] hover:bg-[#ff3d4d] transition-colors w-full sm:w-auto"
          >
            Agendar Test Drive
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-border bg-card/40 backdrop-blur hover:border-foreground transition-colors font-semibold w-full sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.4 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
            WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}