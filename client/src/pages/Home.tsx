import { Check, Shield, ChevronDown, Star, Award, Clock, Users, Flame, ArrowRight, BadgeCheck, Lock, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function SectionReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

  const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/hero-brazilian-woman-beach-9eQAB7vNJdcRfYGS3pCMqo.webp";

  const testimonials = [
    {
      name: "María García",
      location: "Buenos Aires, Argentina",
      story: "Mamá de dos hijos",
      text: "Después de la gravidez no me reconocía. Traté de todo pero nada funcionaba. Cuando descubrí este método pensé qué tengo que perder. En 4 semanas transformé mi cuerpo de una manera que nunca imaginé posible! Ahora me veo al espejo y veo a la mujer que era. Mi marido no puede creer el cambio.",
      imageBefore: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTES-PriscilaSantos_da380afd.jpg",
      imageAfter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPOIS-PriscilaSantos_c6495f16.jpg",
      lost: "14 kg"
    },
    {
      name: "Rosa López",
      location: "Lima, Perú",
      story: "Salió de la depresión",
      text: "Pesaba 95 kg y estaba deprimida. No me reconocía en el espejo. Pensé que nunca volvería a sentirme hermosa. Pero con este método perdí 30 kg y mi cuerpo se definió de una manera que nunca esperé. Lo mejor: fue mucho menos esfuerzo de lo que imaginaba. Hoy me siento como una diosa, sin culpa, sin restricción. Volví a vivir!",
      imageBefore: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTESFERNANDACOSTA_3b99cbc5.jpg",
      imageAfter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPPOIS-FERNANDACOSTA_131d17d5.jpg",
      lost: "30 kg"
    },
    {
      name: "Sofía Martínez",
      location: "Ciudad de México, México",
      story: "Mujer de 48 años",
      text: "A los 48 años pensé que era tarde. Que mi cuerpo ya no respondería. Que los malos hábitos de años no se podían cambiar. Pero en 5 semanas transformé mi cuerpo de una manera que mis amigas no creían. Ahora me siento más sexy que cuando tenía 30. Mis hijos dicen mamá, qué te hiciste? Esto cambió mi vida!",
      imageBefore: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTES-BeatrizOliveira_32a7742e.jpg",
      imageAfter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPOIS-BeatrizOliveira_351ffd7f.jpg",
      lost: "18 kg"
    }
  ];

  const bonuses = [
    { icon: <Flame className="w-7 h-7" />, title: "Musculación Casera", desc: "10-20 min/día. Sin equipamiento.", num: "01" },
    { icon: <Users className="w-7 h-7" />, title: "Grupo VIP", desc: "+5000 mujeres. Apoyo diario.", num: "02" },
    { icon: <Sparkles className="w-7 h-7" />, title: "Mounjaro Natural", desc: "Bebidas termogénicas efectivas.", num: "03" },
    { icon: <Star className="w-7 h-7" />, title: "Planificador", desc: "Rastrea tu progreso semanal.", num: "04" },
    { icon: <BadgeCheck className="w-7 h-7" />, title: "WhatsApp VIP", desc: "Apoyo en tiempo real.", num: "05" },
    { icon: <Award className="w-7 h-7" />, title: "Jugos Detox", desc: "Regula hormonas femeninas.", num: "06" }
  ];

  const faqItems = [
    { q: "¿Es restrictiva?", a: "No. Es estrategia, no restricción. Come lo que quieras con inteligencia." },
    { q: "¿Cuándo veo resultados?", a: "Cambios en 2-3 semanas. Resultados visibles en 4-6 semanas." },
    { q: "¿Pierdo mis curvas?", a: "No. Mantienes y realzas tus curvas mientras pierdes grasa." },
    { q: "¿Necesito gimnasio?", a: "No. Ejercicios en casa de 15-20 minutos. Opcional ir al gym." },
    { q: "¿Sin tiempo?", a: "Lecciones de 5-10 min. Ejercicios de 15-20 min. A tu ritmo." },
    { q: "¿Garantía?", a: "60 días dinero de vuelta. 100% garantizado. Sin preguntas." }
  ];

  const methodSteps = [
    {
      title: "El trío brasileño",
      text: "Arroz integral + feijão negro + 1 cucharadita de aceite de coco. Se come a las 13:00, mantiene la cintura y rellena el glúteo de volumen limpio."
    },
    {
      title: "El \"café da tarde\"",
      text: "Café pequeño + 2 galletas de polvilho a las 16:00. Corta la subida de insulina de la tarde y evitas el ataque a la bolsa de chips."
    },
    {
      title: "El plazo de 21 días",
      text: "El cuerpo necesita exactamente tres semanas para cambiar el chip: de \"almacenar\" a \"usar\". La báscula baja 2-4 kg, el pantalón va más suelto."
    },
    {
      title: "La regla del 80/20",
      text: "80% comida de verdade, 20% lo que te apetece. Así puedes aceptar la invitación del fin de semana sin plan culinario de arrepentimiento."
    }
  ];

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBenefits = () => {
    document.getElementById("metodo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* ═══════════════════ HERO — FULLSCREEN DARK ═══════════════════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Mujer brasileña fitness"
            className="w-full h-full object-cover object-top"
            loading="eager"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1518611505868-48510c2e022b?w=1200&h=800&fit=crop'; }}
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
                +5,000 mujeres ya transformadas
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
            La Dieta de las{" "}
            <span className="text-gradient-gold">Brasileñas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed font-light"
          >
            Come lo que quieras. Mantén tus curvas. Pierde peso de verdad.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed"
          >
            Descubre cómo las mujeres brasileñas mantienen glúteos grandes, cintura fina y curvas femeninas sin dietas extremas, sin culpa, sin fracaso.
          </motion.p>

          {/* Bullet points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-3 items-center max-w-md mx-auto"
          >
            {[
              "+5,000 mujeres transformadas",
              "Promedio: Perder entre 1 y 3 kg por semana",
              "97% de satisfacción garantizada por nuestras alumnas"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm px-4 py-2.5 w-full">
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
              <p className="text-2xl md:text-4xl font-black text-gradient-gold" style={{ fontFamily: '"Playfair Display", serif' }}>
                <AnimatedCounter target={5000} suffix="+" />
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">Mujeres Transformadas</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-black text-gradient-emerald" style={{ fontFamily: '"Playfair Display", serif' }}>
                <AnimatedCounter target={97} suffix="%" />
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">Satisfacción</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-black text-gradient-gold" style={{ fontFamily: '"Playfair Display", serif' }}>
                60
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">Días de Garantía</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PAIN POINTS ═══════════════════ */}
      <section className="py-14 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionReveal>
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">¿Te sientes así?</p>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              ¿Te Sientes <span className="text-gradient-gold">Identificada</span>?
            </h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
              Miles de mujeres como tú enfrentan estos mismos desafíos todos los días.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              { text: "Ciclos yo-yo: pierdes, recuperas, frustración", icon: "🔄" },
              { text: "Presión social: comparación constante", icon: "📱" },
              { text: "Culpa por comer: no puedes disfrutar", icon: "😔" },
              { text: "Miedo al fracaso: 'esta vez será diferente'", icon: "😰" },
              { text: "Sin tiempo: vida ocupada, cuerpo descuidado", icon: "⏰" },
              { text: "Comida emocional: estrés = ataque a la nevera", icon: "🍫" }
            ].map((pain, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="card-premium p-4 md:p-5 rounded-sm flex items-start gap-4 group">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{pain.icon}</span>
                  <div>
                    <p className="text-foreground font-medium text-sm md:text-base leading-snug">{pain.text}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="py-14 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionReveal>
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">Resultados reales</p>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Historias de <span className="text-gradient-gold">Transformación</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
              Mujeres reales. Resultados reales. Sin filtro, sin mentiras.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.12}>
                <div className="testimonial-card rounded-sm overflow-hidden h-full flex flex-col">
                  {/* Before/After Images */}
                  <div className="relative flex">
                    <div className="relative w-1/2">
                      <img src={t.imageBefore} alt="Antes" className="w-full h-48 md:h-56 object-cover" loading="lazy" />
                      <div className="label-antes absolute bottom-2 left-2 text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase">Antes</div>
                    </div>
                    <div className="relative w-1/2">
                      <img src={t.imageAfter} alt="Después" className="w-full h-48 md:h-56 object-cover" loading="lazy" />
                      <div className="label-despues absolute bottom-2 right-2 text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase">Después</div>
                    </div>
                    {/* Weight lost badge */}
                    <div className="absolute top-3 right-3 badge-gold px-3 py-1 rounded-sm text-xs font-black">
                      -{t.lost}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs uppercase tracking-wider text-emerald font-bold">{t.story}</span>
                      <BadgeCheck className="w-4 h-4 text-emerald" />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/70 flex-grow mb-4">{t.text}</p>
                    <div className="border-t border-white/5 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-sm">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.location}</p>
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
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">El método</p>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              La Dieta de las Brasileñas{" "}
              <span className="text-gradient-gold">(21 días)</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
              Cómo las cariocas, paulistanas y baianas comen arroz, feijão y un pedacito de chocolate sin que el culito se entere.
            </p>
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
                      <p className="text-xs text-gold uppercase tracking-widest font-semibold mb-2">Paso {i + 1}</p>
                      <h3 className="font-bold text-lg md:text-xl mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>{step.title}</h3>
                      <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          <SectionReveal delay={0.4}>
            <p className="text-foreground/50 italic text-sm md:text-base mt-10 text-center leading-relaxed">
              No hay té de perejil, no hay pollo hervido, no hay app de contar calorías. Solo el reloj del estómago y el sabor que ya conoces.
            </p>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════ BONUSES ═══════════════════ */}
      <section className="py-14 md:py-24">
        <div className="container px-4 md:px-6">
          <SectionReveal>
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">Incluido gratis</p>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Acceso Vitalicio + <span className="text-gradient-gold">6 Bônus</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
              Valor total: <span className="price-old inline-block">$147</span> — Hoy todo por <span className="text-gold font-bold">$14</span>
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {bonuses.map((b, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="card-premium p-5 md:p-6 rounded-sm group relative overflow-hidden">
                  {/* Number badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground/30 font-bold">{b.num}</span>

                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-emerald/10 flex items-center justify-center text-emerald mb-4 group-hover:bg-emerald/20 transition-colors">
                    {b.icon}
                  </div>
                  <p className="font-bold text-base md:text-lg mb-1">{b.title}</p>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
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
          <SectionReveal>
            <div className="max-w-lg mx-auto">
              {/* Card elevada */}
              <div className="relative border border-gold/20 rounded-sm overflow-hidden">
                {/* Top ribbon */}
                <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-light py-3 text-center">
                  <p className="text-xs md:text-sm text-black font-black uppercase tracking-widest">Oferta Especial — Tiempo Limitado</p>
                </div>

                <div className="p-6 md:p-10 text-center bg-gradient-to-b from-[#141414] to-[#0F0F0F]">
                  <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                    Comienza Tu Transformación
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mb-8">
                    Acceso de por vida + 6 bônus exclusivos
                  </p>

                  {/* Pricing */}
                  <div className="mb-8">
                    <p className="text-muted-foreground text-sm mb-1">De: <span className="price-old inline-block text-lg">$147</span></p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-muted-foreground font-medium">Por apenas</span>
                    </div>
                    <p className="text-6xl md:text-7xl font-black text-gradient-gold mt-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                      $14
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">Pago único. Sin mensualidades. Acceso vitalicio.</p>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                    {[
                      "Método completo de 21 días",
                      "6 bônus exclusivos incluidos",
                      "Acceso vitalicio (sin renovación)",
                      "Grupo VIP + soporte WhatsApp",
                      "Garantía de 60 días",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-emerald flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => { }}
                    className="w-full cta-shimmer text-white px-8 py-5 rounded-sm font-black text-lg md:text-xl hover:brightness-110 transition-all active:scale-[0.97] animate-pulse-glow flex items-center justify-center gap-3"
                  >
                    Acceder Ahora
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Trust micro-badges */}
                  <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      <span className="text-[10px] md:text-xs">Pago Seguro</span>
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
            <p className="text-xs md:text-sm text-gold uppercase tracking-[0.2em] font-semibold mb-3 text-center">Dudas</p>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-12" style={{ fontFamily: '"Playfair Display", serif' }}>
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
                          <p className="text-foreground/60 text-sm md:text-base leading-relaxed">{item.a}</p>
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
              <h3 className="text-2xl md:text-4xl font-black mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                Garantía de <span className="text-gradient-gold">60 Días</span>
              </h3>
              <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-md mx-auto">
                Si no ves resultados en 60 días, devolvemos el 100% de tu dinero. Sin preguntas. Sin letra pequeña. Tu satisfacción es nuestra prioridad absoluta.
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
            <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              ¿Lista para tu <span className="text-gradient-gold">transformación</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Únete a +5,000 mujeres que ya cambiaron su relación con su cuerpo.
            </p>
            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto cta-shimmer text-white px-10 md:px-12 py-5 rounded-sm font-black text-lg md:text-xl hover:brightness-110 transition-all active:scale-[0.97] animate-pulse-glow inline-flex items-center justify-center gap-3"
            >
              Acceder Ahora – $14
              <ArrowRight className="w-5 h-5" />
            </button>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="py-8 md:py-12 border-t border-white/5">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-xs md:text-sm text-muted-foreground mb-3">
            © 2026 La Dieta de las Brasileñas. Todos los derechos reservados.
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-6 text-xs text-muted-foreground/60">
            <a href="#" className="hover:text-foreground/80 transition-colors">Política de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground/80 transition-colors">Términos de Servicio</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground/80 transition-colors">Contacto</a>
          </div>
          <div className="flex items-center justify-center gap-3 mt-4 text-muted-foreground/40">
            <Lock className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase tracking-widest">Sitio 100% seguro</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
