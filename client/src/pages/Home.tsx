import { Check, Heart, Shield, Users, Zap, Gift, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const heroImage = "https://private-us-east-1.manuscdn.com/sessionFile/zgylrs2zKMrTx4s4pF5UI0/sandbox/3FNxqMAY9aEBRu6Qx58PIR-img-1_1770756210000_na1fn_aGVyby1icmF6aWxpYW4tYmlraW5p.png?x-oss-process=image/resize,w_600,h_600/format,webp/quality,q_75";

  const testimonials = [
    {
      name: "Priscila Santos",
      location: "Buenos Aires, Argentina",
      story: "Mamá de dos hijos",
      text: "Perdí 14 kg en 3 meses y mantuve mis curvas. ¡Mi marido no me reconocía!",
      imageBefore: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTES-PriscilaSantos_da380afd.jpg",
      imageAfter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPOIS-PriscilaSantos_c6495f16.jpg"
    },
    {
      name: "Fernanda Costa",
      location: "Lima, Perú",
      story: "Ex-obesa, transformación completa",
      text: "Pesaba 95 kg. Hoy peso 68 kg y me siento una diosa. ¡Sin restricción, sin culpa!",
      imageBefore: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTESFERNANDACOSTA_3b99cbc5.jpg",
      imageAfter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPPOIS-FERNANDACOSTA_131d17d5.jpg"
    },
    {
      name: "Beatriz Oliveira",
      location: "Ciudad de México, México",
      story: "Mujer de 48 años",
      text: "Perdí 11 kg y me siento más sexy que nunca. ¡Mis hijos no creen que sea yo!",
      imageBefore: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTES-BeatrizOliveira_32a7742e.jpg",
      imageAfter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPOIS-BeatrizOliveira_351ffd7f.jpg"
    }
  ];

  const bonuses = [
    { icon: "💪", title: "Musculación Casera", desc: "10-20 min/día. Sin equipamiento." },
    { icon: "👯", title: "Grupo VIP", desc: "+5000 mujeres. Apoyo diario." },
    { icon: "🍵", title: "Mounjaro Natural", desc: "Bebidas termogénicas efectivas." },
    { icon: "📊", title: "Planificador", desc: "Rastrea tu progreso semanal." },
    { icon: "💬", title: "WhatsApp VIP", desc: "Apoyo en tiempo real." },
    { icon: "🥤", title: "Jugos Detox", desc: "Regula hormonas femeninas." }
  ];

  const faqItems = [
    { q: "¿Es restrictiva?", a: "No. Es estrategia, no restricción. Come lo que quieras con inteligencia." },
    { q: "¿Cuándo veo resultados?", a: "Cambios en 2-3 semanas. Resultados visibles en 4-6 semanas." },
    { q: "¿Pierdo mis curvas?", a: "No. Mantienes y realzas tus curvas mientras pierdes grasa." },
    { q: "¿Necesito gimnasio?", a: "No. Ejercicios en casa de 15-20 minutos. Opcional ir al gym." },
    { q: "¿Sin tiempo?", a: "Lecciones de 5-10 min. Ejercicios de 15-20 min. A tu ritmo." },
    { q: "¿Garantía?", a: "60 días dinero de vuelta. 100% garantizado. Sin preguntas." }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO - MOBILE OPTIMIZED */}
      <section className="relative pt-8 pb-12 md:pt-16 md:pb-24 bg-gradient-to-b from-background to-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left: Headline */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                La Dieta de las Brasileñas
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-primary mb-6">
                Come lo que quieras. Mantén tus curvas. Pierde peso de verdad.
              </p>
              <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
                Descubre cómo las mujeres brasileñas mantienen glúteos grandes, cintura fina y curvas femeninas sin dietas extremas, sin culpa, sin fracaso.
              </p>
              
              {/* Social Proof - Compact */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base">+5,000 mujeres transformadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base">Promedio: 12 kg en 5 semanas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base">97% de satisfacción garantizada</span>
                </div>
              </div>

              {/* CTA Buttons - Stacked on mobile */}
              <div className="flex flex-col md:flex-row gap-3">
                <button className="w-full md:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all active:scale-95">
                  Acceder Ahora - $14
                </button>
                <button className="w-full md:w-auto border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/5 transition-all">
                  Ver Beneficios
                </button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-sm">
                <img 
                  src={heroImage} 
                  alt="Mujer brasileña fitness" 
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                  ¡Comienza hoy!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS - MOBILE OPTIMIZED */}
      <section className="py-12 md:py-20 bg-background/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", serif' }}>
            ¿Te Sientes Identificada?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              "Ciclos yo-yo: pierdes, recuperas, frustración",
              "Presión social: comparación constante",
              "Culpa por comer: no puedes disfrutar",
              "Miedo al fracaso: 'esta vez será diferente'",
              "Sin tiempo: vida ocupada, cuerpo descuidado",
              "Comida emocional: estrés = ataque a la nevera"
            ].map((pain, i) => (
              <div key={i} className="bg-red-50 p-4 md:p-6 rounded-lg border-l-4 border-primary">
                <p className="text-foreground font-medium">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - CAROUSEL MOBILE */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", serif' }}>
            Historias Reales de Transformación
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-0 h-64 md:h-72">
                  <img src={t.imageBefore} alt="Antes" className="w-full h-full object-cover" loading="lazy" />
                  <img src={t.imageAfter} alt="Después" className="w-full h-full object-cover" loading="lazy" />
                </div>
                
                {/* Testimonial Text */}
                <div className="p-4 md:p-6">
                  <p className="text-xs md:text-sm text-primary font-bold mb-2">{t.story}</p>
                  <p className="text-sm md:text-base font-semibold mb-3 text-foreground">{t.text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm md:text-base">{t.name}</p>
                      <p className="text-xs md:text-sm text-foreground/60">{t.location}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS IT - SIMPLE & CLEAR */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
            La Dieta de las Brasileñas (21 días)
          </h2>
          
          <div className="space-y-6 text-base md:text-lg">
            <p className="font-semibold text-primary text-lg">
              Cómo las cariocas, las paulistanas y las baianas comen arroz, feijão y un pedacito de chocolate sin que el culito se entere.
            </p>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
              <p className="font-bold mb-2">El trío brasileño:</p>
              <p>Arroz integral + feijão negro + 1 cucharadita de aceite de coco. Se come a las 13:00, mantiene la cintura y rellena el glúteo de volumen limpio.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
              <p className="font-bold mb-2">El "café da tarde":</p>
              <p>Café pequeño + 2 galletas de polvilho a las 16:00. Corta la subida de insulina de la tarde y evitas el ataque a la bolsa de chips.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
              <p className="font-bold mb-2">El plazo de 21 días:</p>
              <p>El cuerpo necesita exactamente tres semanas para cambiar el chip: de "almacenar" a "usar". La báscula baja 2-4 kg, el pantalón va más suelto.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
              <p className="font-bold mb-2">La regla del 80/20:</p>
              <p>80% comida de verdade, 20% lo que te apetece. Así puedes aceptar la invitación del fin de semana sin plan culinario de arrepentimiento.</p>
            </div>

            <p className="text-foreground/80 italic">
              No hay té de perejil, no hay pollo hervido, no hay app de contar calorías. Solo el reloj del estómago y el sabor que ya conoces.
            </p>
          </div>
        </div>
      </section>

      {/* BONUSES - GRID MOBILE */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Acceso Vitalicio + 6 Bônus Exclusivos
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Valor total: $147. Hoy: Solo $14 (incluye todo de por vida)
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {bonuses.map((b, i) => (
              <div key={i} className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
                <div className="text-4xl mb-3">{b.icon}</div>
                <p className="font-bold text-lg mb-2">{b.title}</p>
                <p className="text-sm text-foreground/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER - PROMINENT CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comienza Tu Transformación Hoy
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Acceso de por vida + 6 bônus exclusivos
          </p>
          
          <div className="mb-8">
            <p className="text-5xl md:text-6xl font-bold mb-2">$14</p>
            <p className="text-lg opacity-90">Pago único. Acceso vitalicio.</p>
          </div>

          <button className="w-full md:w-auto bg-white text-primary px-12 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all active:scale-95 shadow-lg">
            Acceder Ahora
          </button>

          <p className="text-sm mt-6 opacity-75">
            Garantía de 60 días. Dinero de vuelta si no estás satisfecha.
          </p>
        </div>
      </section>

      {/* FAQ - ACCORDION MOBILE */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", serif' }}>
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-background/50 transition-colors"
                >
                  <p className="font-bold text-left text-base md:text-lg">{item.q}</p>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform flex-shrink-0 ${expandedFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {expandedFaq === i && (
                  <div className="px-6 py-4 bg-background/30 border-t border-border">
                    <p className="text-foreground/80 text-base">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="container px-4 md:px-6 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Garantía de 60 Días</h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Si no ves resultados en 60 días, devolvemos el 100% de tu dinero. Sin preguntas. Tu satisfacción es nuestra prioridad.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Lista para tu transformación?
          </h2>
          <button className="w-full md:w-auto bg-primary text-primary-foreground px-12 py-5 rounded-lg font-bold text-xl hover:opacity-90 transition-all active:scale-95 shadow-lg">
            Acceder Ahora - $14
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 md:py-12 bg-background/50 border-t border-border">
        <div className="container px-4 md:px-6 text-center text-sm text-foreground/60">
          <p>© 2026 La Dieta de las Brasileñas. Todos los derechos reservados.</p>
          <p className="mt-2">Política de Privacidad | Términos de Servicio | Contacto</p>
        </div>
      </footer>
    </div>
  );
}
