import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import parallaxImg from "../../assets/civic-parallax.jpg";

export function Parallax() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.05, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative h-[120vh] w-full overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={parallaxImg}
          alt="Honda Civic G10 em alta velocidade à noite"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </motion.div>

      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <motion.div style={{ y: textY }} className="text-center max-w-4xl">
          <span className="text-xs uppercase tracking-[0.4em] text-primary">
            Experiência
          </span>
          <h2 className="mt-6 text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-gradient">
            Cada curva
            <br />
            <span className="text-gradient-neon">é uma promessa.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Suspensão multilink, direção elétrica progressiva e um chassi rígido
            criado para devorar o asfalto com elegância cirúrgica.
          </p>
        </motion.div>
      </div>
    </section>
  );
}