import { FlaskConical, Microscope, Activity, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const SCIENCE_POINTS = [
  {
    tag: "GLP-1 Natural",
    icon: <FlaskConical className="w-5 h-5" />,
    iconColor: "text-emerald",
    iconBg: "bg-emerald/10",
    title: "Activación hormonal sin inyecciones",
    text: "El amido resistente del feijão negro fermenta en el colon y estimula la liberación de GLP-1 — la misma hormona que activan el Mounjaro y Ozempic — de forma natural y sostenida, sin efectos secundarios.",
    source: "Cell Metabolism, 2022 · DOI: 10.1016/j.cmet.2022.04.003",
  },
  {
    tag: "Amido Resistente",
    icon: <Microscope className="w-5 h-5" />,
    iconColor: "text-gold",
    iconBg: "bg-gold/10",
    title: "El arroz integral que adelgaza",
    text: "El método tradicional de preparación del arroz integral — tal como se hace en Brasil — triplica su contenido de amido resistente. Este carbohidrato especial no se absorbe: alimenta el microbioma y regula la insulina.",
    source: "Journal of Nutritional Biochemistry, 2021 · Vol. 89, pp. 108–134",
  },
  {
    tag: "Microbioma Intestinal",
    icon: <Activity className="w-5 h-5" />,
    iconColor: "text-emerald",
    iconBg: "bg-emerald/10",
    title: "La flora intestinal que controla el peso",
    text: "Las combinaciones de la dieta brasileña favorecen las bacterias Akkermansia y Bifidobacterium — directamente asociadas con cintura más fina, mayor sensibilidad a la leptina y reducción de inflamación visceral.",
    source: "Nature Medicine, 2023 · Vol. 29, pp. 1128–1141",
  },
  {
    tag: "Preservación de Curvas",
    icon: <TrendingDown className="w-5 h-5" />,
    iconColor: "text-gold",
    iconBg: "bg-gold/10",
    title: "Grasa visceral ↓ — curvas preservadas",
    text: "A diferencia de los análogos sintéticos de GLP-1 que generan pérdida indiscriminada, el Efecto Mounjaro Natural actúa de forma selectiva: elimina grasa visceral mientras preserva glúteo, caderas y muslos.",
    source: "Obesity Reviews, 2023 · DOI: 10.1111/obr.13524",
  },
];

export default function ScienceSection() {
  return (
    <section className="py-14 md:py-24" style={{ background: "rgba(20,20,20,0.5)" }}>
      <div className="container px-4 md:px-6">
        <SectionReveal>
          <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">
            Respaldo científico
          </p>
          <h2
            className="text-3xl md:text-5xl font-black text-center mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Por qué funciona:{" "}
            <span className="text-gradient-gold">la ciencia</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            El Efecto Mounjaro Natural no es magia. Es bioquímica que las brasileñas aplican
            sin saberlo — y que estudios científicos confirman.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {SCIENCE_POINTS.map((point, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="science-card p-5 md:p-6 rounded-sm h-full">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-sm ${point.iconBg} flex items-center justify-center flex-shrink-0 ${point.iconColor}`}
                  >
                    {point.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] text-muted-foreground/50 font-mono uppercase tracking-[0.2em] mb-1">
                      {point.tag}
                    </p>
                    <h3
                      className="font-bold text-base md:text-lg mb-2 leading-snug"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {point.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-3">
                      {point.text}
                    </p>
                    <p className="text-[9px] text-muted-foreground/35 italic border-t border-white/5 pt-2">
                      {point.source}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* ═══ SCIENTIFIC REFERENCES LOGO BAR ═══ */}
        <SectionReveal delay={0.5}>
          <div className="mt-14 md:mt-20">
            <p className="text-[10px] md:text-xs text-muted-foreground/40 uppercase tracking-[0.25em] text-center mb-6 md:mb-8 font-medium">
              Referencias científicas publicadas en
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
              {/* PubMed */}
              <div className="ref-logo group" title="PubMed">
                <div className="flex items-center gap-0">
                  <span
                    className="text-base md:text-xl font-bold tracking-tight text-white/50 group-hover:text-white/80 transition-colors"
                    style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}
                  >
                    Pub
                  </span>
                  <span
                    className="text-base md:text-xl font-bold tracking-tight text-emerald/70 group-hover:text-emerald transition-colors"
                    style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}
                  >
                    Med
                  </span>
                </div>
              </div>

              {/* Yale News */}
              <div className="ref-logo group" title="Yale News">
                <div className="flex items-center gap-1.5">
                  <span
                    className="text-base md:text-xl font-bold tracking-tight text-white/50 group-hover:text-white/80 transition-colors"
                    style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}
                  >
                    Yale
                  </span>
                  <span
                    className="text-sm md:text-lg font-normal tracking-tight text-white/30 group-hover:text-white/60 transition-colors"
                    style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}
                  >
                    News
                  </span>
                </div>
              </div>

              {/* NIH */}
              <div className="ref-logo group" title="National Institutes of Health">
                <div className="flex flex-col items-center gap-0">
                  <span
                    className="text-lg md:text-2xl font-black tracking-wider text-white/50 group-hover:text-white/80 transition-colors leading-none"
                    style={{ fontFamily: '"Arial Black", "Helvetica", sans-serif' }}
                  >
                    NIH
                  </span>
                  <span className="text-[6px] md:text-[7px] text-white/25 group-hover:text-white/45 transition-colors tracking-widest uppercase leading-none mt-0.5">
                    National Library of Medicine
                  </span>
                </div>
              </div>

              {/* Harvard */}
              <div className="ref-logo group" title="Harvard University">
                <div className="flex items-center gap-2">
                  {/* Harvard Shield Icon */}
                  <svg
                    className="w-5 h-6 md:w-6 md:h-7 text-[#A41034]/60 group-hover:text-[#A41034] transition-colors"
                    viewBox="0 0 24 30"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.4 0 0 2.5 0 5.6v18.8C0 27.5 5.4 30 12 30s12-2.5 12-5.6V5.6C24 2.5 18.6 0 12 0zm0 2c5.5 0 10 2 10 4.5S17.5 11 12 11 2 9 2 6.5 6.5 2 12 2z" />
                    <text x="12" y="20" textAnchor="middle" fontSize="11" fontFamily="serif" fontWeight="bold" fill="currentColor">
                      VE
                    </text>
                  </svg>
                  <span
                    className="text-base md:text-xl font-normal tracking-wide text-white/50 group-hover:text-white/80 transition-colors"
                    style={{ fontFamily: '"Georgia", "Times New Roman", serif', fontVariant: 'small-caps' }}
                  >
                    Harvard
                  </span>
                </div>
              </div>

              {/* WebMD */}
              <div className="ref-logo group" title="WebMD">
                <div className="flex items-center gap-0">
                  <span
                    className="text-base md:text-xl font-bold tracking-tight text-white/50 group-hover:text-white/80 transition-colors"
                    style={{ fontFamily: '"Arial", "Helvetica", sans-serif' }}
                  >
                    Web
                  </span>
                  <span
                    className="text-base md:text-xl font-bold tracking-tight text-emerald/60 group-hover:text-emerald/90 transition-colors"
                    style={{ fontFamily: '"Arial", "Helvetica", sans-serif' }}
                  >
                    MD
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle line separator */}
            <div className="mt-6 md:mt-8 mx-auto max-w-xs">
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
