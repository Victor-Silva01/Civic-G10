import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

const specs = [
  { value: 173, suffix: " cv", label: "Potência Máxima", desc: "Motor 1.5 Turbo VTEC" },
  { value: 220, suffix: " Nm", label: "Torque", desc: "Resposta instantânea" },
  { value: 7, suffix: ".4s", label: "0 a 100 km/h", desc: "Aceleração esportiva" },
  { value: 14, suffix: " km/l", label: "Eficiência", desc: "Estrada combinada" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    suffix.includes(".") ? v.toFixed(1) : Math.round(v).toString()
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, count, to]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix.replace(/[\d.]/g, "")}</span>
    </span>
  );
}

export function Specs() {
  return (
    <section id="specs" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary">
            Especificações
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-black tracking-tighter leading-[0.95]">
            Engenharia
            <br />
            <span className="text-gradient-neon">de precisão.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-5xl md:text-6xl font-black tracking-tighter text-gradient-neon">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-6 text-sm font-semibold uppercase tracking-wider">
                  {s.label}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}