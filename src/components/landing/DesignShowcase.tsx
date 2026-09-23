import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import designImg from "../../assets/civic-design.jpg";

export function DesignShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const hue = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const filter = useTransform(hue, (h) => `hue-rotate(${h}deg)`);

  return (
    <section id="design" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/15 blur-[160px]"
      />
      <motion.div
        style={{ opacity }}
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[140px]"
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary">Design</span>
          <h2 className="mt-6 text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            Escultura
            <br />
            <span className="text-gradient-neon glow-text">em movimento.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg">
            Linhas tensas, faróis em LED com assinatura própria e proporções
            esportivas. Cada detalhe foi esculpido para cortar o ar e
            capturar olhares.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
            {["Faróis Full LED", "Rodas 17\"", "Aerodinâmica Cd 0.28", "Spoiler Integrado"].map(
              (t) => (
                <div
                  key={t}
                  className="p-4 rounded-xl border border-border bg-card/40 backdrop-blur text-sm"
                >
                  {t}
                </div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter }}
          className="relative rounded-3xl overflow-hidden border border-border"
        >
          <img
            src={designImg}
            alt="Honda Civic G10 com iluminação dramática vermelha e azul"
            className="w-full h-auto"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}