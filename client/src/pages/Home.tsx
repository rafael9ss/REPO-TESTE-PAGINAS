import { Button } from "@/components/ui/button";
import { Check, Heart, Shield, Users, Zap, Gift } from "lucide-react";

export default function Home() {
  const heroImage = "https://private-us-east-1.manuscdn.com/sessionFile/zgylrs2zKMrTx4s4pF5UI0/sandbox/3FNxqMAY9aEBRu6Qx58PIR-img-1_1770756210000_na1fn_aGVyby1icmF6aWxpYW4tYmlraW5p.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvemd5bHJzMnpLTXJUeDRzNHBGNVVJMC9zYW5kYm94LzNGTnhxTUFZOWFFQlJ1NlF4NThQSVItaW1nLTFfMTc3MDc1NjIxMDAwMF9uYTFmbl9hR1Z5YnkxaWNtRjZhV3hwWVc0dFltbHJhVzVwLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=buHHLvAqlm8iEpBEaj7h7RXd4en39WWDCirFYKb6fiKoRbUEG04c5g62TyejJQ9aFGpG2pvefu1fyCSZKp7xBqMwAJNvlylFGe-FVNgNj07SC3HiH0vROwyj7rh9WDK8CTXocQgZ7SP7Q8lEoSiHwlYN6kMicbJJSaiQBsllK7spDAKC~4sF8W8-BAO6eb4cAFAA2rWVHyd8TpuJWZgaV9tkYeqCTYWtGYM7Uj3bt0ezFpIH8sTPs9KeYNgg~lc9-Wkfmajxbb1X8dYfkSl3yAkGrEpCZLjwc4g9CiRt-7TvwdHirkRNP8h3NmY9LprlddYYepiZagdIiDxUcgm-ww__";
  
  const gymImage = "https://private-us-east-1.manuscdn.com/sessionFile/zgylrs2zKMrTx4s4pF5UI0/sandbox/3FNxqMAY9aEBRu6Qx58PIR-img-2_1770756213000_na1fn_Z3ltLXdvcmtvdXQtYnJhemlsaWFu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvemd5bHJzMnpLTXJUeDRzNHBGNVVJMC9zYW5kYm94LzNGTnhxTUFZOWFFQlJ1NlE4NThQSVItaW1nLTJfMTc3MDc1NjIxMzAwMF9uYTFmbl9aM2x0TFhkdmNtdHZkWFF0WW5KaGVtbHNhV0Z1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=P7Ug~-FKsspUE-o~EHOJcK4Syk4FIG8DR0bDGncuVhS3J5F3h-LetukVc1JGjj-~jpYAoJ991Fvw-4R6BdMRbVtac8p3NOSA1CSlLb72z~fj41RJuW3PvTtlZaNWIj3Jc2bVQehBM0e4LCzCtYTHtM3E9U~eoqIMFIQ7hgQm7xmQ7nrlbKfI3CeEkAiTf1FyDzJmxW3DOvzmsw~U1lIDQ3DRki3QlRh~3iOLTYvNWOkPmhnA3UHFP6o0onGlEdJiU0Rw85W-D3CzQI2JW4N0cWk4m4PuQy~EAgibDqS8s9QDsDsnXHLVbv89d9HNBJJ4PRAs52oFmDM-vmKfcrD7cQ__";

  const testimonials = [
    {
      name: "Priscila Santos",
      location: "São Paulo, Brasil",
      story: "Mamá de dos hijos",
      text: "Después de ser mamá, pensé que nunca volvería a tener mi cuerpo. Descubrí que no necesito dietas extremas, solo estrategia. Perdí 14 kg en 3 meses y mantuve mis curvas. ¡Mi marido no me reconocía!",
      imageBefore: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTES-PriscilaSantos_da380afd.jpg",
      imageAfter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPOIS-PriscilaSantos_c6495f16.jpg"
    },
    {
      name: "Fernanda Costa",
      location: "Rio de Janeiro, Brasil",
      story: "Ex-obesa, transformación completa",
      text: "Pesaba 95 kg y pensé que nunca saldría de ese ciclo. La dieta de las brasileñas me mostró que puedo comer lo que me gusta con inteligencia. Hoy peso 68 kg y me siento una diosa. ¡Sin restricción, sin culpa!",
      imageBefore: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTESFERNANDACOSTA_3b99cbc5.jpg",
      imageAfter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPPOIS-FERNANDACOSTA_131d17d5.jpg"
    },
    {
      name: "Beatriz Oliveira",
      location: "Belo Horizonte, Brasil",
      story: "Mujer de 48 años que quiere sentirse sexy nuevamente",
      text: "Con 48 años, pensé que había perdido mi oportunidad. Pero descubrí que la edad no es excusa. Perdí 11 kg, mi cuerpo se tonificó y me siento más sexy que nunca. ¡Mis hijos no creen que sea yo!",
      imageBefore: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/ANTES-BeatrizOliveira_32a7742e.jpg",
      imageAfter: "https://d2xsxph8kpxj0f.cloudfront.net/310519663112717840/bYJ2TcDAKWqnjC7oQDvgfm/DEPOIS-BeatrizOliveira_351ffd7f.jpg"
    }
  ];

  const bonuses = [
    {
      icon: "💪",
      title: "Programa de Musculación Casera",
      description: "Rutina de ejercicios diarios de 10-20 minutos. Sin equipamiento. Sin excusas. Resultados garantizados en 4 semanas."
    },
    {
      icon: "👯",
      title: "Grupo VIP Exclusivo",
      description: "Comunidad privada con +5000 mujeres. Apoyo diario, motivación, recetas compartidas y amistades que duran toda la vida."
    },
    {
      icon: "🍵",
      title: "Guía del Mounjaro Natural",
      description: "Recetas de bebidas termogénicas que simulan el efecto del Mounjaro. Acelera metabolismo naturalmente. Recetas deliciosas que querrás beber todos los días."
    },
    {
      icon: "📊",
      title: "Planificador de Progreso Semanal",
      description: "Rastrea tu progreso, mide resultados reales, celebra pequeñas victorias. Psicología de la transformación incluida."
    },
    {
      icon: "🎁",
      title: "Acceso al Grupo de WhatsApp VIP",
      description: "Apoyo directo, preguntas respondidas en tiempo real, motivación diaria, desafíos semanales con premios."
    },
    {
      icon: "🥤",
      title: "Guía de Jugos Detox",
      description: "Recetas de jugos que desinflamam el cuerpo y regulan los hormonas femeninos. Recetas deliciosas que transforman tu salud desde adentro."
    }
  ];

  const faqItems = [
    {
      question: "¿Es una dieta restrictiva?",
      answer: "Absolutamente no. La Dieta de las Brasileñas es sobre estrategia, no restricción. Aprendes a comer lo que te gusta con inteligencia. Sin culpa. Sin privación."
    },
    {
      question: "¿Cuánto tiempo tarda en ver resultados?",
      answer: "Sientes cambios en 2-3 semanas (más energía, ropa suelta). Resultados visibles en 4-6 semanas. Transformación completa en 12 semanas."
    },
    {
      question: "¿Voy a perder mis curvas?",
      answer: "No. El programa fue creado específicamente para mantener y realzar tus curvas mientras pierdes grasa. Te ves más sexy, no más delgada."
    },
    {
      question: "¿Necesito ir al gimnasio?",
      answer: "No es obligatorio. Los ejercicios se pueden hacer en casa en 15-20 minutos por día. Pero si quieres ir al gimnasio, te enseñamos exactamente qué hacer."
    },
    {
      question: "¿Y si no tengo tiempo?",
      answer: "El programa fue creado para mujeres ocupadas. Lecciones de 5-10 minutos, ejercicios de 15-20 minutos. Haces a tu ritmo, cuando tengas tiempo."
    },
    {
      question: "¿Cuál es la garantía?",
      answer: "Si no ves resultados en 60 días, devolvemos el 100% de tu dinero. Sin preguntas. Tu satisfacción es nuestra prioridad."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Headline + Copy */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3">
                <h1 style={{ fontFamily: '"Playfair Display", serif' }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  La Dieta de las Brasileñas
                </h1>
                <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-xl md:text-2xl text-primary font-semibold">
                  Come lo que quieras. Mantén tus curvas. Pierde peso de verdad.
                </p>
              </div>

              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Descubre el secreto que las mujeres brasileñas usan para mantener glúteos grandes, cintura fina y curvas femeninas mientras pierden peso. Sin dietas extremas. Sin culpa. Sin fracaso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base h-14 rounded-lg"
                  onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Quiero Acceder Ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold text-base h-14 rounded-lg"
                  onClick={() => document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Beneficios
                </Button>
              </div>

              {/* Social Proof */}
              <div className="pt-6 space-y-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-foreground">+5,000 mujeres transformadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-foreground">Promedio de pérdida: 12 kg en 12 semanas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-foreground">97% de satisfacción garantizada</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <img
                src={heroImage}
                alt="Mujer brasileña confiada"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg font-semibold text-sm md:text-base">
                ¡Comienza tu transformación hoy!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS IT SECTION */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              La Dieta de las Brasileñas (21 días)
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
              <p style={{ fontFamily: '"Poppins", sans-serif' }}>
                <strong>Cómo las cariocas, las paulistanas y las baianas comen arroz, feijão y un pedacito de chocolate sin que el culito se entere.</strong>
              </p>

              <p style={{ fontFamily: '"Poppins", sans-serif' }}>
                Dentro del cuaderno de 21 días encontrarás:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-card rounded-lg border border-border">
                  <p style={{ fontFamily: '"Poppins", sans-serif' }} className="font-semibold mb-2">
                    El trío brasileño: arroz integral + feijão negro + 1 cucharadita de aceite de coco.
                  </p>
                  <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-foreground/70">
                    Se come a las 13:00, mantiene la cintura y rellena el glúteo de volumen limpio.
                  </p>
                </div>

                <div className="p-4 bg-card rounded-lg border border-border">
                  <p style={{ fontFamily: '"Poppins", sans-serif' }} className="font-semibold mb-2">
                    El "café da tarde": café pequeño + 2 galletas de polvilho a las 16:00.
                  </p>
                  <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-foreground/70">
                    Corta la subida de insulina de la tarde y evitas el ataque a la bolsa de chips.
                  </p>
                </div>

                <div className="p-4 bg-card rounded-lg border border-border">
                  <p style={{ fontFamily: '"Poppins", sans-serif' }} className="font-semibold mb-2">
                    El plazo de 21 días: el cuerpo necesita exactamente tres semanas para cambiar el chip: de "almacenar" a "usar".
                  </p>
                  <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-foreground/70">
                    La báscula baja 2-4 kg, el pantalón va más suelto y el bikini queda mejor que nunca.
                  </p>
                </div>

                <div className="p-4 bg-card rounded-lg border border-border">
                  <p style={{ fontFamily: '"Poppins", sans-serif' }} className="font-semibold mb-2">
                    La regla del 80/20: 80% comida de verdade, 20% lo que te apetece.
                  </p>
                  <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-foreground/70">
                    Así puedes aceptar la invitación del fin de semana sin plan culinario de arrepentimiento.
                  </p>
                </div>
              </div>

              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-primary font-semibold">
                No hay té de perejil, no hay pollo hervido, no hay app de contar calorías.
              </p>
              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-primary font-semibold">
                Solo el reloj del estómago y el sabor que ya conoces.
              </p>
              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-primary font-semibold italic">
                ¿Te animas a probar la próxima semana y sentir cómo se afina la cintura sin que el cuerpo lo note como dieta?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Historias Reales de Transformación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1">
                      <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-xs text-foreground/60 mb-1">Antes</p>
                      <img
                        src={testimonial.imageBefore}
                        alt="Antes"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-xs text-foreground/60 mb-1">Después</p>
                      <img
                        src={testimonial.imageAfter}
                        alt="Después"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold text-foreground">{testimonial.name}</h3>
                  <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-foreground/60">{testimonial.location}</p>
                  <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-primary font-semibold mt-1">{testimonial.story}</p>
                </div>
                <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/80 italic leading-relaxed mb-4">"{testimonial.text}"</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUSES SECTION */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            6 Bonificaciones Exclusivas (Valor: $150)
          </h2>
          <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Recibes todo esto HOY cuando te inscribas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonuses.map((bonus, idx) => (
              <div key={idx} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{bonus.icon}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold text-lg text-foreground mb-2">{bonus.title}</h3>
                <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/70 text-sm">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section id="oferta" className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tu Oferta Especial
            </h2>
            <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/70">
              Acceso completo al programa + 6 bonificaciones exclusivas
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-2xl border-2 border-primary bg-primary/5 shadow-lg">
              <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold text-2xl text-foreground mb-2 text-center">
                Acceso Completo
              </h3>
              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/70 text-sm mb-6 text-center">
                Todo lo que necesitas para transformar tu cuerpo y tu vida
              </p>

              <div className="mb-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  $14
                </div>
                <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/60 text-sm">Pago único • Acceso de por vida</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Acceso de por vida al programa completo",
                  "12 semanas de lecciones en vídeo HD",
                  "Programa de musculación casera (10-20 min/día)",
                  "Menús personalizados con 100+ recetas",
                  "Comunidad privada con +5000 mujeres",
                  "Grupo VIP de WhatsApp con apoyo directo",
                  "Guía del Mounjaro Natural con bebidas termogénicas",
                  "Planificador de progreso semanal",
                  "Garantía de 60 días (100% devolución de dinero)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 rounded-lg text-base"
              >
                Quiero Acceder Ahora - Solo $14
              </Button>

              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-center text-foreground/60 text-xs mt-4">
                Acceso instantáneo. Sin tarjeta de crédito recurrente. Sin sorpresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Garantía de 60 Días
            </h2>
            <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/70 mb-6 leading-relaxed">
              Si en 60 días no ves resultados, devolvemos el 100% de tu dinero. Sin preguntas. Sin complicaciones.
            </p>
            <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/70">
              Creemos tanto en este programa que estamos dispuestos a apostar nuestro dinero en él. Tu satisfacción es nuestra prioridad número uno.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className="group p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
              >
                <summary style={{ fontFamily: '"Playfair Display", serif' }} className="flex items-center justify-between font-bold text-lg text-foreground">
                  {item.question}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p style={{ fontFamily: '"Poppins", sans-serif' }} className="mt-4 text-foreground/70 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center">
          <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold mb-6">
            Tu Transformación Comienza Ahora
          </h2>
          <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90">
            No esperes más. Cada día que pasa es un día que no estás viviendo tu mejor vida. Por solo $14, tienes acceso a todo lo que necesitas para transformar tu cuerpo y tu vida.
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold text-lg h-14 rounded-lg px-8"
          >
            Acceder Ahora - Garantía de 60 Días
          </Button>
          <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm mt-6 opacity-75">
            Acceso instantáneo. Sin tarjeta de crédito recurrente. Sin compromiso de renovación.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-foreground/5 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold text-foreground mb-4">La Dieta de las Brasileñas</h3>
              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/60 text-sm">Transformando vidas de mujeres en todo el mundo.</p>
            </div>
            <div>
              <h4 style={{ fontFamily: '"Poppins", sans-serif' }} className="font-semibold text-foreground mb-4">Programa</h4>
              <ul style={{ fontFamily: '"Poppins", sans-serif' }} className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary">Cómo Funciona</a></li>
                <li><a href="#" className="hover:text-primary">Beneficios</a></li>
                <li><a href="#" className="hover:text-primary">Testimonios</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: '"Poppins", sans-serif' }} className="font-semibold text-foreground mb-4">Legal</h4>
              <ul style={{ fontFamily: '"Poppins", sans-serif' }} className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary">Términos</a></li>
                <li><a href="#" className="hover:text-primary">Privacidad</a></li>
                <li><a href="#" className="hover:text-primary">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: '"Poppins", sans-serif' }} className="font-semibold text-foreground mb-4">Síguenos</h4>
              <ul style={{ fontFamily: '"Poppins", sans-serif' }} className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary">Instagram</a></li>
                <li><a href="#" className="hover:text-primary">TikTok</a></li>
                <li><a href="#" className="hover:text-primary">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/60 text-sm">
              © 2026 La Dieta de las Brasileñas. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
