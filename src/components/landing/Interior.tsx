import { motion } from "motion/react";
import { useState } from "react";
import interiorImg from "../../assets/civic-interior.jpg";

const hotspots = [
  {
    id: "cluster",
    x: 72, y: 38,
    title: "Cluster Digital 7\"",
    desc: "Painel de instrumentos digital totalmente customizável.",
  },
  {
    id: "wheel",
    x: 52, y: 55,
    title: "Volante Multifuncional",
    desc: "Couro perfurado com controles para áudio, telefone e cruise control.",
  },
  {
    id: "ambient",
    x: 22, y: 30,
    title: "Iluminação Ambiente",
    desc: "LED vermelho contornando o painel — pura atmosfera esportiva.",
  },
  {
    id: "start",
    x: 85, y: 70,
    title: "Start/Stop",
    desc: "Ignição por botão com partida instantânea.",
  },
];

export function Interior() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="interior" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary">Interior</span>
          <h2 className="mt-6 text-5xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            Um cockpit
            <br />
            <span className="text-gradient-neon">pensado para você.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Passe o mouse sobre os pontos para descobrir cada detalhe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden border border-border group"
        >
          <img
            src={interiorImg}
            alt="Interior do Honda Civic G10 com iluminação ambiente vermelha"
            className="w-full h-auto"
            loading="lazy"
            width={1600}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

          {hotspots.map((h) => (
            <button
              key={h.id}
              onMouseEnter={() => setActive(h.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(h.id)}
              onBlur={() => setActive(null)}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group/dot"
              aria-label={h.title}
            >
              <span className="relative flex items-center justify-center w-5 h-5">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                <span className="relative w-3 h-3 rounded-full bg-primary glow-primary" />
              </span>

              <motion.div
                initial={false}
                animate={{
                  opacity: active === h.id ? 1 : 0,
                  y: active === h.id ? 0 : 8,
                  scale: active === h.id ? 1 : 0.95,
                }}
                transition={{ duration: 0.25 }}
                className="absolute top-7 left-1/2 -translate-x-1/2 w-64 p-4 rounded-2xl bg-card/95 backdrop-blur-xl border border-border text-left pointer-events-none z-10"
              >
                <div className="text-sm font-semibold">{h.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{h.desc}</div>
              </motion.div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}