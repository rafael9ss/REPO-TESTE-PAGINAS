import {
  Check,
  Shield,
  ChevronDown,
  Star,
  Award,
  Clock,
  Users,
  Flame,
  ArrowRight,
  BadgeCheck,
  Lock,
  Sparkles,
  AlertTriangle,
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import UrgencyBar from "@/components/UrgencyBar";
import SocialProofToast from "@/components/SocialProofToast";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ScienceSection from "@/components/ScienceSection";
import { useCountdown } from "@/hooks/useCountdown";

// Set VITE_CHECKOUT_URL in your .env file to activate the checkout button
const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL || "";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
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

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { h, m, s } = useCountdown();

  const heroImage =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/hero-brazilian-woman-beach-9eQAB7vNJdcRfYGS3pCMqo.webp";

  const handleCheckout = () => {
    if (CHECKOUT_URL) {
      window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
    } else {
      document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      name: "María García",
      location: "Buenos Aires, Argentina",
      story: "Mamá de dos hijos",
      text: "Después de la gravidez no me reconocía. Traté de todo pero nada funcionaba. Cuando descubrí este método pensé qué tengo que perder. En 4 semanas transformé mi cuerpo de una manera que nunca imaginé posible! Ahora me veo al espejo y veo a la mujer que era. Mi marido no puede creer el cambio.",
      imageBefore:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTES-PriscilaSantos_da380afd.jpg",
      imageAfter:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPOIS-PriscilaSantos_c6495f16.jpg",
      lost: "14 kg",
      weeks: "4 semanas",
    },
    {
      name: "Rosa López",
      location: "Lima, Perú",
      story: "Salió de la depresión",
      text: "Pesaba 95 kg y estaba deprimida. No me reconocía en el espejo. Pensé que nunca volvería a sentirme hermosa. Pero con este método perdí 30 kg y mi cuerpo se definió de una manera que nunca esperé. Lo mejor: fue mucho menos esfuerzo de lo que imaginaba. Hoy me siento como una diosa, sin culpa, sin restricción. Volví a vivir!",
      imageBefore:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTESFERNANDACOSTA_3b99cbc5.jpg",
      imageAfter:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPPOIS-FERNANDACOSTA_131d17d5.jpg",
      lost: "30 kg",
      weeks: "12 semanas",
    },
    {
      name: "Sofía Martínez",
      location: "Ciudad de México, México",
      story: "Mujer de 48 años",
      text: "A los 48 años pensé que era tarde. Que mi cuerpo ya no respondería. Que los malos hábitos de años no se podían cambiar. Pero en 5 semanas transformé mi cuerpo de una manera que mis amigas no creían. Ahora me siento más sexy que cuando tenía 30. Mis hijos dicen mamá, qué te hiciste? Esto cambió mi vida!",
      imageBefore:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTES-BeatrizOliveira_32a7742e.jpg",
      imageAfter:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPOIS-BeatrizOliveira_351ffd7f.jpg",
      lost: "18 kg",
      weeks: "5 semanas",
    },
  ];

  const bonuses = [
    {
      icon: <Flame className="w-7 h-7" />,
      title: "Musculación Casera",
      desc: "10-20 min/día. Sin equipamiento. Tonifica glúteos, piernas y abdomen desde tu sala.",
      num: "01",
      value: "$47",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Grupo VIP",
      desc: "+5000 mujeres. Apoyo diario. Motivación real de mujeres que están en el mismo camino.",
      num: "02",
      value: "$37",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Mounjaro Natural",
      desc: "Las bebidas termogénicas que potencian el Efecto Mounjaro Natural. Con la misma lógica de combinación exacta que el protocolo principal — pero en versión líquida, rápida y deliciosa.",
      num: "03",
      value: "$27",
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: "Planificador",
      desc: "Rastrea tu progreso semanal. Visualiza cada avance y mantén el foco en tu transformación.",
      num: "04",
      value: "$17",
    },
    {
      icon: <BadgeCheck className="w-7 h-7" />,
      title: "WhatsApp VIP",
      desc: "Apoyo en tiempo real. Respuestas directas cuando más lo necesitas.",
      num: "05",
      value: "$27",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Jugos Detox",
      desc: "Regula hormonas femeninas. Recetas que aceleran la desinflamación y potencian tus curvas naturales.",
      num: "06",
      value: "$17",
    },
  ];

  const faqItems = [
    {
      q: "¿Es restrictiva?",
      a: "No. Es estrategia, no restricción. Come lo que quieras con inteligencia. El Efecto Mounjaro Natural se activa con la combinación exacta de alimentos — no con privación.",
    },
    {
      q: "¿Cuándo veo resultados?",
      a: "Cambios en 2-3 semanas. Resultados visibles en 4-6 semanas. El protocolo de 21 días reprograma tu señal de saciedad natural para que tu cuerpo queme grasa y preserve curvas.",
    },
    {
      q: "¿Pierdo mis curvas?",
      a: "No. A diferencia de las inyecciones sintéticas que funden todo por igual, el Efecto Mounjaro Natural preserva músculo y curvas mientras elimina grasa visceral. Cintura fina + curvas definidas.",
    },
    {
      q: "¿Necesito gimnasio?",
      a: "No. Ejercicios en casa de 15-20 minutos. Opcional ir al gym. El bônus de Musculación Casera complementa el protocolo perfecto.",
    },
    {
      q: "¿Sin tiempo?",
      a: "Lecciones de 5-10 min. Ejercicios de 15-20 min. A tu ritmo. El mapa está diseñado para la vida real de una mujer ocupada.",
    },
    {
      q: "¿Garantía?",
      a: "60 días dinero de vuelta. 100% garantizado. Sin preguntas. Nosotras asumimos todo el riesgo.",
    },
  ];

  const methodSteps = [
    {
      title: "El trío brasileño",
      text: "Arroz integral + feijão negro + 1 cucharadita de aceite de coco. Se come a las 13:00, mantiene la cintura y rellena el glúteo de volumen limpio.",
      piece:
        "Esta es la Peça 1 del mapa — la combinación exacta. El guía revela las cantidades precisas.",
    },
    {
      title: 'El "café da tarde"',
      text: "Café pequeño + 2 galletas de polvilho a las 16:00. Corta la subida de insulina de la tarde y evitas el ataque a la bolsa de chips.",
      piece:
        "Esta es la Peça 2 del mapa — la cantidad precisa. El guía revela los gramos exactos que activan la señal de saciedad natural.",
    },
    {
      title: "El plazo de 21 días",
      text: "El cuerpo necesita exactamente tres semanas para cambiar el chip: de \"almacenar\" a \"usar\". La báscula baja 2-4 kg, el pantalón va más suelto.",
      piece:
        "Esta es la Peça 3 del mapa — el secreto de preparación tradicional. El guía revela el paso que multiplica por 3x el amido resistente activo.",
    },
    {
      title: "La regla del 80/20",
      text: "80% comida de verdade, 20% lo que te apetece. Así puedes aceptar la invitación del fin de semana sin plan culinario de arrepentimiento.",
      piece:
        "Las 3 peças juntas activan el Efecto Mounjaro Natural. Sin las tres, no funciona. El mapa completo está en el guía.",
    },
  ];

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ═══ URGENCY BAR ═══ */}
      <UrgencyBar />

      {/* ═══════════════════ HERO — FULLSCREEN DARK ═══════════════════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Mujer brasileña fitness"
            className="w-full h-full object-cover object-top"
            loading="eager"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1518611505868-48510c2e022b?w=1200&h=800&fit=crop";
            }}
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 md:px-6 text-center py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6 md:mb-8">
              <BadgeCheck className="w-4 h-4 text-emerald" />
              <span className="text-xs md:text-sm font-medium text-foreground/80 tracking-wide uppercase">
                +5,000 mujeres ya activaron el Efecto Mounjaro Natural
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 leading-[0.95] tracking-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Comen carbohidratos{" "}
            <span className="text-gradient-gold">todos los días</span>
            <br />
            <span
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic text-foreground/70"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              ...y nunca pierden las curvas. ¿Por qué?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-2xl mx-auto mb-4 md:mb-5 leading-relaxed font-light"
          >
            Las brasileñas comen tapioca, açaí, feijão y guaraná todos los días. La ciencia
            descubrió que esa combinación cultural activa en el intestino{" "}
            <strong className="text-foreground/90">
              el mismo efecto hormonal que las inyecciones de Mounjaro
            </strong>{" "}
            — pero de forma 100% natural.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm sm:text-base md:text-lg text-gold/90 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium"
          >
            Cintura fina + curvas definidas. Sin agujas. Sin receta. Sin $500 al mes.
            <br />
            <span className="text-foreground/50 font-normal">
              Pero solo si sabes la combinación exacta.
            </span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8"
          >
            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto cta-shimmer text-white px-10 md:px-12 py-5 rounded-sm font-black text-lg md:text-xl hover:brightness-110 transition-all active:scale-[0.97] animate-pulse-glow inline-flex items-center justify-center gap-3"
            >
              Quiero activar el Efecto Mounjaro hoy
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Bullet points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-3 items-center max-w-md mx-auto"
          >
            {[
              "+5,000 mujeres ya activaron el mapa",
              "Promedio: Perder entre 1 y 3 kg por semana",
              "97% de satisfacción · 60 días de garantía",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm px-4 py-2.5 w-full"
              >
                <Check className="w-4 h-4 text-emerald flex-shrink-0" />
                <span className="text-sm md:text-base text-foreground/80">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-foreground/30" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ SOCIAL PROOF BAR ═══════════════════ */}
      <section className="py-6 md:py-8 border-y border-white/5 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            <div>
              <p
                className="text-2xl md:text-4xl font-black text-gradient-gold"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                <AnimatedCounter target={5000} suffix="+" />
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
                Mujeres Transformadas
              </p>
            </div>
            <div>
              <p
                className="text-2xl md:text-4xl font-black text-gradient-emerald"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                <AnimatedCounter target={97} suffix="%" />
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
                Satisfacción
              </p>
            </div>
            <div>
              <p
                className="text-2xl md:text-4xl font-black text-gradient-gold"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                60
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
                Días de Garantía
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PAIN POINTS ═══════════════════ */}
      <section className="py-14 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionReveal>
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">
              ¿Te sientes así?
            </p>
            <h2
              className="text-3xl md:text-5xl font-black text-center mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              ¿Te Sientes <span className="text-gradient-gold">Identificada</span>?
            </h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
              No eres tú. No es falta de voluntad. Es que nadie te enseñó la combinación correcta.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              {
                text: "Ciclos yo-yo: pierdes 3 kg, recuperas 5. La báscula se ríe de ti cada lunes.",
                icon: "🔄",
              },
              {
                text: "Presión social: ves los cuerpos en Instagram y sientes que algo está mal contigo.",
                icon: "📱",
              },
              {
                text: "Culpa por comer: cada bocado viene con un juicio. No puedes disfrutar ni un postre sin el peso de la culpa.",
                icon: "😔",
              },
              {
                text: 'Miedo al fracaso: "esta vez será diferente"... pero en el fondo ya no crees.',
                icon: "😰",
              },
              {
                text: "Sin tiempo: entre el trabajo, los hijos y la casa, tu cuerpo siempre queda al final de la lista.",
                icon: "⏰",
              },
              {
                text: "Comida emocional: estrés, tristeza, ansiedad = ataque directo a la nevera. Y después, más culpa.",
                icon: "🍫",
              },
            ].map((pain, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="card-premium p-4 md:p-5 rounded-sm flex items-start gap-4 group">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{pain.icon}</span>
                  <div>
                    <p className="text-foreground font-medium text-sm md:text-base leading-snug">
                      {pain.text}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* ═══ ENEMY BOX — Mounjaro/Ozempic como falsa solução ═══ */}
          <SectionReveal delay={0.5}>
            <div className="enemy-box mt-10 p-6 md:p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangle className="w-6 h-6 text-[#ff4444] flex-shrink-0" />
                <h3
                  className="text-lg md:text-xl font-bold text-[#ff4444]"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  "¿Y las inyecciones de Mounjaro y Ozempic?"
                </h3>
              </div>
              <p className="text-foreground/60 text-sm mb-5">
                Parece la solución rápida. Pero mira lo que no te cuentan:
              </p>
              <div className="space-y-3">
                {[
                  'Más de $500/mes para siempre — el peso vuelve al parar la aguja',
                  '"Cara de Ozempic": piel flácida, arrugas prematuras, cara envejecida',
                  'Pierdes el glúteo, caderas y muslos — el cuerpo "recto" que ninguna latina quiere',
                  "Náuseas, vómitos y fatiga desde la primera dosis",
                  "Rebote brutal: recuperas todo el doble al parar",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-[#ff4444] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* ═══ BRIDGE PARAGRAPH ═══ */}
          <SectionReveal delay={0.6}>
            <div className="mt-8 text-center max-w-2xl mx-auto">
              <p
                className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                ¿Y si tu cuerpo pudiera activar{" "}
                <span className="text-gradient-gold">ese mismo efecto</span> de forma natural,
                desde tu cocina, con ingredientes que ya conoces?
              </p>
              <p className="text-sm text-foreground/50 mt-3">
                Sin agujas. Sin receta médica. Sin $500 al mes. Solo la combinación exacta que las
                brasileñas conocen de madre a hija.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════ SCIENCE SECTION ═══════════════════ */}
      <ScienceSection />

      <div className="section-divider" />

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="py-14 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionReveal>
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">
              Resultados reales
            </p>
            <h2
              className="text-3xl md:text-5xl font-black text-center mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Mujeres que ya activaron <span className="text-gradient-gold">el mapa</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
              Ninguna hizo dieta de restricción. Todas aprendieron la combinación exacta.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.12}>
                <div className="testimonial-card rounded-sm overflow-hidden h-full flex flex-col">
                  {/* Before/After Images */}
                  <div className="relative flex">
                    <div className="relative w-1/2">
                      <img
                        src={t.imageBefore}
                        alt="Antes"
                        className="w-full h-48 md:h-56 object-cover"
                        loading="lazy"
                      />
                      <div className="label-antes absolute bottom-2 left-2 text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase">
                        Antes
                      </div>
                    </div>
                    <div className="relative w-1/2">
                      <img
                        src={t.imageAfter}
                        alt="Después"
                        className="w-full h-48 md:h-56 object-cover"
                        loading="lazy"
                      />
                      <div className="label-despues absolute bottom-2 right-2 text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase">
                        Después
                      </div>
                    </div>
                    {/* Weight lost badge */}
                    <div className="absolute top-3 right-3 badge-gold px-3 py-1 rounded-sm text-xs font-black">
                      -{t.lost}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs uppercase tracking-wider text-emerald font-bold">
                        {t.story}
                      </span>
                      <BadgeCheck className="w-4 h-4 text-emerald" />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/70 flex-grow mb-4">
                      {t.text}
                    </p>
                    <div className="border-t border-white/5 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-sm">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.location}</p>
                          <p className="text-[10px] text-emerald/70 mt-0.5">
                            ✓ Verificado · {t.weeks}
                          </p>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════ MÉTODO — TIMELINE ═══════════════════ */}
      <section id="metodo" className="py-14 md:py-24">
        <div className="container px-4 md:px-6 max-w-3xl">
          <SectionReveal>
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">
              El método
            </p>
            <h2
              className="text-3xl md:text-5xl font-black text-center mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              El mapa en acción:{" "}
              <span className="text-gradient-gold">un día normal en Brasil</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-10">
              Cómo las cariocas, paulistanas y baianas comen arroz, feijão y un pedacito de
              chocolate sin que el culito se entere.
            </p>
          </SectionReveal>

          {/* ═══ WARNING BOX ═══ */}
          <SectionReveal delay={0.1}>
            <div className="warning-box p-5 md:p-6 rounded-sm mb-10">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#ff4444] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#ff4444] text-sm md:text-base mb-2">
                    ⚠️ Antes de intentarlo sola — lee esto
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    No intentes replicar estas combinaciones por tu cuenta sin el protocolo
                    completo. Comer estos ingredientes sin la proporción exacta y el secreto de
                    preparación tradicional puede generar el efecto contrario: pico de insulina,
                    inflamación y más peso.{" "}
                    <strong className="text-foreground/90">
                      El mapa completo está en el guía.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald via-emerald/30 to-transparent" />

            <div className="space-y-6 md:space-y-8">
              {methodSteps.map((step, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="relative pl-12 md:pl-16">
                    {/* Dot */}
                    <div className="absolute left-2.5 md:left-4 top-1 w-3 h-3 rounded-full bg-emerald border-2 border-emerald-dark shadow-[0_0_12px_rgba(13,124,61,0.5)]" />

                    <div className="card-premium p-5 md:p-6 rounded-sm">
                      <p className="text-xs text-gold uppercase tracking-widest font-semibold mb-2">
                        Paso {i + 1}
                      </p>
                      <h3
                        className="font-bold text-lg md:text-xl mb-2"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-3">
                        {step.text}
                      </p>
                      <p className="text-xs text-gold/80 italic border-t border-white/5 pt-3 mt-2">
                        {step.piece}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          <SectionReveal delay={0.4}>
            <p className="text-foreground/50 italic text-sm md:text-base mt-10 text-center leading-relaxed">
              No hay té de perejil, no hay pollo hervido, no hay app de contar calorías. Solo el
              reloj del estómago y el sabor que ya conoces.
            </p>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════ BONUSES ═══════════════════ */}
      <section className="py-14 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionReveal>
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">
              Incluido gratis
            </p>
            <h2
              className="text-3xl md:text-5xl font-black text-center mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Acceso Vitalicio + <span className="text-gradient-gold">6 Bônus</span>
              <br />
              <span
                className="text-lg md:text-2xl font-light text-foreground/60"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                para acelerar tu resultado
              </span>
            </h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
              Valor total:{" "}
              <span className="price-old inline-block">$172</span> — Hoy todo por{" "}
              <span className="text-gold font-bold">$14</span>
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {bonuses.map((b, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="card-premium p-5 md:p-6 rounded-sm group relative overflow-hidden">
                  {/* Number badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground/30 font-bold">
                    {b.num}
                  </span>

                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-emerald/10 flex items-center justify-center text-emerald mb-4 group-hover:bg-emerald/20 transition-colors">
                    {b.icon}
                  </div>
                  <p className="font-bold text-base md:text-lg mb-1">{b.title}</p>
                  <p className="text-sm text-muted-foreground mb-3">{b.desc}</p>
                  <p className="text-xs text-gold/70 font-medium">
                    (Valor: {b.value} — incluido gratis hoy)
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════ OFFER / PRICING ═══════════════════ */}
      <section id="oferta" className="py-14 md:py-24">
        <div className="container px-4 md:px-6">
          {/* ═══ 3 COMPARISON CARDS ═══ */}
          <SectionReveal>
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">
              Compara y decide
            </p>
            <h2
              className="text-3xl md:text-5xl font-black text-center mb-10"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              La misma señal hormonal.{" "}
              <span className="text-gradient-gold">Sin la aguja.</span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {/* Card 1 — Mounjaro */}
              <div className="comparison-card comparison-card--red p-5 md:p-6 rounded-sm text-center">
                <span className="text-3xl mb-3 block">💉</span>
                <p className="font-bold text-base mb-1 text-[#ff4444]">Mounjaro / Ozempic</p>
                <p
                  className="text-2xl font-black text-foreground/90"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  $500
                  <span className="text-sm font-normal text-muted-foreground">/mes</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Para siempre · Rebote al parar
                </p>
              </div>
              {/* Card 2 — Nutricionista */}
              <div className="comparison-card comparison-card--gray p-5 md:p-6 rounded-sm text-center">
                <span className="text-3xl mb-3 block">🥗</span>
                <p className="font-bold text-base mb-1 text-foreground/60">Nutricionista</p>
                <p
                  className="text-2xl font-black text-foreground/90"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  $120
                  <span className="text-sm font-normal text-muted-foreground">/consulta</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Múltiples sesiones · Sin garantía
                </p>
              </div>
              {/* Card 3 — La Dieta (destaque) */}
              <div className="comparison-card comparison-card--green p-5 md:p-6 rounded-sm text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald via-emerald-light to-emerald" />
                <span className="text-3xl mb-3 block">✅</span>
                <p className="font-bold text-base mb-1 text-emerald">La Dieta de las Brasileñas</p>
                <p
                  className="text-2xl font-black text-gradient-gold"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  $14
                  <span className="text-sm font-normal text-muted-foreground"> · pago único</span>
                </p>
                <p className="text-xs text-emerald/80 mt-2 font-medium">
                  Acceso vitalicio · 60 días garantía
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Transition text */}
          <SectionReveal delay={0.2}>
            <p className="text-center text-foreground/60 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
              Misma señal hormonal. Sin la aguja. Sin la factura mensual. Sin perder las curvas.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="max-w-lg mx-auto">
              {/* Card elevada */}
              <div className="relative border border-gold/20 rounded-sm overflow-hidden">
                {/* Top ribbon */}
                <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-light py-3 text-center">
                  <p className="text-xs md:text-sm text-black font-black uppercase tracking-widest">
                    Oferta Especial — Tiempo Limitado
                  </p>
                </div>

                <div className="p-6 md:p-10 text-center bg-gradient-to-b from-[#141414] to-[#0F0F0F]">
                  <h2
                    className="text-2xl md:text-3xl font-black mb-2"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    El Mapa Completo es Tuyo
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mb-6">
                    Acceso de por vida al protocolo + 6 bônus exclusivos
                  </p>

                  {/* Countdown Timer */}
                  <div className="countdown-box mb-5 p-4 rounded-sm">
                    <p className="text-xs text-muted-foreground mb-3 text-center uppercase tracking-widest">
                      ⏳ Precio especial termina en:
                    </p>
                    <div className="flex justify-center gap-3 md:gap-4">
                      {[
                        { value: h, label: "Horas" },
                        { value: m, label: "Min" },
                        { value: s, label: "Seg" },
                      ].map((item) => (
                        <div key={item.label} className="text-center">
                          <div className="bg-black/40 border border-white/10 rounded-sm px-3 py-2 min-w-[52px]">
                            <p className="text-2xl md:text-3xl font-black font-mono text-gold leading-none">
                              {item.value}
                            </p>
                          </div>
                          <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mt-1.5">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scarcity */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">Accesos tomados esta semana</span>
                      <span className="text-gold font-bold">73%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "73%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full"
                      />
                    </div>
                    <p className="text-[10px] text-muted-foreground/50 mt-1.5 text-right">
                      🔥 47 mujeres compraron en las últimas 24h
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <p className="text-muted-foreground text-sm mb-1">
                      De: <span className="price-old inline-block text-lg">$147</span>
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-muted-foreground font-medium">Por apenas</span>
                    </div>
                    <p
                      className="text-6xl md:text-7xl font-black text-gradient-gold mt-2"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      $14
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Pago único. Sin mensualidades. Acceso vitalicio.
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                    {[
                      "El protocolo completo de 21 días (la combinación exacta)",
                      "Lista de compras adaptada a tu país",
                      "Los 6 bônus exclusivos",
                      "Acceso vitalicio sin renovación",
                      "Garantía de 60 días sin preguntas",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-emerald flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={handleCheckout}
                    className="w-full cta-shimmer text-white px-8 py-5 rounded-sm font-black text-lg md:text-xl hover:brightness-110 transition-all active:scale-[0.97] animate-pulse-glow flex items-center justify-center gap-3"
                  >
                    Quiero el mapa completo ahora
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Payment methods */}
                  <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                    {["💳 Visa", "💳 Mastercard", "💳 Amex", "🏦 PIX", "💵 PayPal"].map((m) => (
                      <span
                        key={m}
                        className="text-[10px] text-muted-foreground/50 bg-white/5 px-2 py-1 rounded-sm border border-white/5"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Trust micro-badges */}
                  <div className="flex items-center justify-center gap-4 mt-5 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      <span className="text-[10px] md:text-xs">Pago Seguro SSL</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      <span className="text-[10px] md:text-xs">60 Días Garantía</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[10px] md:text-xs">Acceso Inmediato</span>
                    </div>
                  </div>

                  {/* Guarantee box */}
                  <div className="guarantee-box mt-8 p-5 rounded-sm text-left">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-sm text-emerald mb-1">
                          🛡️ Garantía Riesgo Cero — 60 días
                        </p>
                        <p className="text-xs text-foreground/60 leading-relaxed">
                          Si no ves resultados, te devolvemos el 100% de tu dinero. Sin preguntas.
                          Sin burocracia. Nosotras asumimos todo el riesgo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="py-14 md:py-24">
        <div className="container px-4 md:px-6 max-w-2xl">
          <SectionReveal>
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">
              Dudas
            </p>
            <h2
              className="text-3xl md:text-5xl font-black text-center mb-12"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Preguntas <span className="text-gradient-gold">Frecuentes</span>
            </h2>
          </SectionReveal>

          <div className="space-y-2 md:space-y-3">
            {faqItems.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="card-premium rounded-sm overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                  >
                    <p className="font-bold text-left text-sm md:text-base">{item.q}</p>
                    <motion.div
                      animate={{ rotate: expandedFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6">
                          <div className="w-8 h-px bg-emerald mb-3" />
                          <p className="text-foreground/60 text-sm md:text-base leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════ GUARANTEE ═══════════════════ */}
      <section className="py-14 md:py-20">
        <div className="container px-4 md:px-6 text-center">
          <SectionReveal>
            <div className="max-w-lg mx-auto">
              {/* Gold seal */}
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full badge-gold flex items-center justify-center">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-black" />
              </div>
              <h3
                className="text-2xl md:text-4xl font-black mb-4"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Garantía de <span className="text-gradient-gold">60 Días</span>
              </h3>
              <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-md mx-auto">
                Si no ves resultados en 60 días, devolvemos el 100% de tu dinero. Sin preguntas.
                Sin letra pequeña. Tu satisfacción es nuestra prioridad absoluta.
              </p>
              <p className="text-sm text-foreground/40 mt-4">
                El Efecto Mounjaro Natural funciona. Pero si por cualquier razón no te convence,
                tu dinero vuelve a ti. Nosotras asumimos todo el riesgo.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="py-14 md:py-20">
        <div className="container px-4 md:px-6 text-center">
          <SectionReveal>
            <h2
              className="text-3xl md:text-5xl font-black mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              El mapa ya existe.{" "}
              <span className="text-gradient-gold">¿Vas a usarlo?</span>
            </h2>
            <p className="text-muted-foreground mb-3 max-w-md mx-auto">
              Las brasileñas no tienen ningún secreto guardado. Solo tienen la combinación correcta.
            </p>
            <p className="text-foreground/50 text-sm mb-8 max-w-md mx-auto">
              Por $14, ese mapa es tuyo hoy. Cintura fina + curvas definidas. Sin agujas. Sin
              receta. Sin $500 al mes.
            </p>
            <button
              onClick={handleCheckout}
              className="w-full sm:w-auto cta-shimmer text-white px-10 md:px-12 py-5 rounded-sm font-black text-lg md:text-xl hover:brightness-110 transition-all active:scale-[0.97] animate-pulse-glow inline-flex items-center justify-center gap-3"
            >
              Quiero el mapa completo ahora
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-muted-foreground/50 mt-4">
              🔒 Pago seguro SSL · Acceso inmediato · 60 días garantía sin preguntas
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="py-8 md:py-12 border-t border-white/5">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-xs md:text-sm text-muted-foreground mb-3">
            © 2026 La Dieta de las Brasileñas. Todos los derechos reservados.
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-6 text-xs text-muted-foreground/60 flex-wrap">
            <a href="#" className="hover:text-foreground/80 transition-colors">
              Política de Privacidad
            </a>
            <span>|</span>
            <a href="#" className="hover:text-foreground/80 transition-colors">
              Términos de Servicio
            </a>
            <span>|</span>
            <a href="#" className="hover:text-foreground/80 transition-colors">
              Contacto
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 mt-4 text-muted-foreground/40">
            <Lock className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase tracking-widest">Sitio 100% seguro · SSL</span>
          </div>
          <p className="text-[9px] text-muted-foreground/25 mt-4 max-w-lg mx-auto leading-relaxed">
            Este produto não é destinado a diagnosticar, tratar, curar ou prevenir nenhuma doença.
            Os resultados podem variar. Consulte um profissional de saúde antes de iniciar qualquer
            programa alimentar.
          </p>
        </div>
      </footer>

      {/* ═══ FLOATING ELEMENTS ═══ */}
      <StickyMobileCTA />
      <SocialProofToast />
    </div>
  );
}
