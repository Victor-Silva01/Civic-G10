import { motion } from "motion/react";
import heroImg from "../../assets/civic-hero.jpg";
import { useTestDrive } from "./test-drive-context";

export function Hero() {
  const { open } = useTestDrive();

  return (
    <section
      id="top"
      className="relative isolate min-h-screen w-full overflow-hidden bg-[#02050e] text-white flex flex-col justify-between"
    >
      {/* Imagem de estúdio com reflexo de fundo cobrindo toda a área */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImg}
          alt="Honda Civic G10 em estúdio escuro com neon vermelho"
          className="w-full h-full object-cover object-center lg:object-[68%_center]"
          fetchPriority="high"
        />
        {/* Degradê escuro à esquerda para destacar perfeitamente os textos */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02050e] via-[#02050e]/90 to-transparent lg:w-[60%]" />
        {/* Efeito vinheta e gradientes suaves no topo e rodapé */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02050e]/80 via-transparent to-[#02050e]/90" />
        <div className="absolute inset-0 bg-[#02050e]/25" />
      </div>

      {/* Menu superior translúcido */}
      <header className="relative z-30 w-full pt-4 sm:pt-6">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <a
            href="#top"
            className="text-lg font-black italic tracking-wider uppercase"
          >
            CIVIC <span className="text-[#ff2b42]">G10</span>
          </a>

          <div className="hidden items-center gap-9 text-xs uppercase tracking-widest text-white/70 md:flex">
            <a href="#experience" className="transition hover:text-white">
              Experiência
            </a>
            <a href="#specs" className="transition hover:text-white">
              Specs
            </a>
            <a href="#interior" className="transition hover:text-white">
              Interior
            </a>
            <a href="#design" className="transition hover:text-white">
              Design
            </a>
          </div>

          <button
            onClick={open}
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm transition hover:border-[#ff2b42] hover:text-[#ff2b42]"
          >
            TEST DRIVE
          </button>
        </nav>
      </header>

      {/* Conteúdo principal sobreposto */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-0">
        <div className="w-full max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tagline */}
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 sm:w-10 bg-[#ff2b42]" />
              <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.35em] text-white/75">
                HONDA · DÉCIMA GERAÇÃO
              </span>
            </div>

            {/* Título CIVIC G10 */}
            <h1 className="font-black italic tracking-tighter leading-[0.82] select-none text-[clamp(4.2rem,10.5vw,9.5rem)]">
              <span className="block bg-gradient-to-b from-white via-[#f0f3f8] to-[#9aa3b5] bg-clip-text text-transparent drop-shadow-2xl">
                CIVIC
              </span>
              <span className="mt-2 block bg-gradient-to-b from-[#ff3b4e] to-[#d6132a] bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(255,43,66,0.5)]">
                G10
              </span>
            </h1>

            {/* Descrição */}
            <p className="mt-7 max-w-md text-sm sm:text-base leading-relaxed text-[#c3cad8]">
              Performance esportiva, design escultural e tecnologia de outro
              mundo. Uma máquina que redefine o que um sedã pode ser.
            </p>

            {/* Botões de Ação */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={open}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#ff2b42] to-[#eb1a32] text-white font-semibold text-sm sm:text-base shadow-[0_8px_30px_rgba(255,43,66,0.45)] hover:shadow-[0_8px_35px_rgba(255,43,66,0.65)] transition-shadow"
              >
                Agendar Test Drive
                <span className="transition-transform group-hover:translate-x-1 font-bold">
                  →
                </span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#experience"
                className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md text-white/90 text-sm sm:text-base font-medium hover:border-white/50 hover:bg-white/[0.08] transition-colors"
              >
                Explorar
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador inferior SCROLL */}
      <div className="relative z-20 pb-6 text-center">
        <a
          href="#experience"
          className="inline-flex flex-col items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.35em] text-white/60 hover:text-white transition-colors"
        >
          <span>SCROLL</span>
          <span className="text-xs font-mono">↓</span>
        </a>
      </div>
    </section>
  );
}