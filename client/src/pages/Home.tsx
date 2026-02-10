import { Button } from "@/components/ui/button";
import { Check, Heart, Shield, Users, Zap } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  const heroImage = "https://private-us-east-1.manuscdn.com/sessionFile/zgylrs2zKMrTx4s4pF5UI0/sandbox/cP8F4lInJUkhb6AUeuGWoD-img-1_1770754495000_na1fn_aGVyby1icmF6aWxpYW4td29tYW4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvemd5bHJzMnpLTXJUeDRzNHBGNVVJMC9zYW5kYm94L2NQOEY0bEluSlVraGI2QVVldUdXb0QtaW1nLTFfMTc3MDc1NDQ5NTAwMF9uYTFmbl9hR1Z5YnkxaWNtRjZhV3hwWVc0dGQyOXRZVzQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MdCSoJjAm180MGjyp5mZgY18BRrEI6aZIHQvL-bFqQJ0WVJEgHljO~qpAYTo6aNci2RDPfV~kablTYBo8Kt~UyErYkjCYKYGEOVbEE-dUDz-sBx2v~QGcUyo80hEwu-ZG7kSo4DdLA8dFpNoWjMVuWDuh37eRtKOCtBUUs8JL6X6W4jH3HYohBiRtpAVcYZis9SAnbFFYpnY9JsUQFuSF1FwtRj8y8XJ0eq9D6VWGAFNt516MFhxJsLcmJRRk1W0Fsoh3wBV7hvOA6qWF032j7rZArjSGxZLHilZSeLoEHubq7tXgKtmkTOEXOk70ZErd4b7Ev6HuL731-4kGdh-UQ__";
  
  const beforeAfterImage = "https://private-us-east-1.manuscdn.com/sessionFile/zgylrs2zKMrTx4s4pF5UI0/sandbox/cP8F4lInJUkhb6AUeuGWoD-img-2_1770754495000_na1fn_YmVmb3JlLWFmdGVyLXRyYW5zZm9ybWF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvemd5bHJzMnpLTXJUeDRzNHBGNVVJMC9zYW5kYm94L2NQOEY0bEluSlVraGI2QVVldUdXb0QtaW1nLTJfMTc3MDc1NDQ5NTAwMF9uYTFmbl9ZbVZtYjNKbExXRm1kR1Z5TFhSeVlXNXpabTl5YldGMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YbcL9~qfPJ9-ty08IvdAwWjoGTKcOVFDypuoJz-50oeoNJqOI7wjJjFiUfWQeOk5CG-iT-9vjxGWIXmz3jMeD5ZivNQxy5YVTCfVawpCJCZGFt0mPgALAGe4s5HU-9Tlewuckdxi~3kAPPlOhA0qyRQutsLiQU~q7ZTyatKDnKbs8ow3QutWnJmagE-v7oyVPs~AAqBxrG2i4L8BQwHf~-YpOaO3kPaUMiyqVS6hhYxyI03rYvKtozY4redGWF6fAjToJ-2k-RcdTejtoLioiHXM-FtM7eIfmkXz4aXzaM1cUGMgNbfc9PGJa0nnzTlR~z9IvD~vJg7SUJf79hx9gg__";
  
  const communityImage = "https://private-us-east-1.manuscdn.com/sessionFile/zgylrs2zKMrTx4s4pF5UI0/sandbox/cP8F4lInJUkhb6AUeuGWoD-img-3_1770754484000_na1fn_Y29tbXVuaXR5LWNlbGVicmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvemd5bHJzMnpLTXJUeDRzNHBGNVVJMC9zYW5kYm94L2NQOEY0bEluSlVraGI2QVVldUdXb0QtaW1nLTNfMTc3MDc1NDQ4NDAwMF9uYTFmbl9ZMjl0YlhWdWFYUjVMV05sYkdWaWNtRjBhVzl1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SRaJPo4p5APBLf9aZ7gX4F9DzAAhYWqIgXxOJeS5dzgTRkXpS-paVNqwt-t~JidVOyXqeBADkNMTQNbEPG-wmsTQSByOTqBmRVUdMhDFRsxLZ7WFzkiBcfkbaO-oN-xG3Z0SrNkwMQgk78Hg3SUJKVLsauE18yXyzHaAvHiYdp4b6kMXsNvqFzDZG-pe6wsZXuAMVq4dV90-Y8BkXVC3ow5Cc1ZNloYNKHkCRRdOgOPlxKhhW5ghfYOoSiwBxVA0lzRPT0-~088NpVuxcSqLXtM1IIogy~MqHX1g-L32Z93Uga3c48Ir3IfgICpINevejP8F~F8EndTyvzGur8S5zw__";

  const testimonials = [
    {
      name: "María García",
      location: "México",
      text: "Después de 10 años de ciclos yo-yo, finalmente encontré algo que funciona. No es una dieta extrema, es un estilo de vida. Perdí 15 kg y mantuve mis curvas. ¡Estoy enamorada de mi cuerpo!",
      image: "👩‍🦱"
    },
    {
      name: "Sofia Rodríguez",
      location: "España",
      text: "Lo que más me gustó fue que no sentí culpa por comer. Aprendí a disfrutar la comida mientras perdía peso. Mi confianza subió más que mi peso bajó.",
      image: "👩‍🦳"
    },
    {
      name: "Alejandra López",
      location: "Colombia",
      text: "La comunidad fue lo que me salvó. Tener hermanas que entienden mis luchas hizo toda la diferencia. Perdí 12 kg en 4 meses sin sentirme privada.",
      image: "👩"
    }
  ];

  const faqItems = [
    {
      question: "¿Es una dieta restrictiva?",
      answer: "No. La Dieta de las Brasileñas se basa en pequeños cambios sostenibles, no en restricción extrema. Aprendes a equilibrar comidas que amas con nutrición inteligente."
    },
    {
      question: "¿Cuánto tiempo tarda en ver resultados?",
      answer: "La mayoría de nuestras estudiantes ven cambios en 2-3 semanas (más energía, ropa más suelta) y resultados visibles en 4-6 semanas. Pero esto varía según tu punto de partida."
    },
    {
      question: "¿Perderé mis curvas?",
      answer: "No. El programa está diseñado específicamente para mantener y realzar tus curvas mientras reduces grasa en áreas específicas. Es sobre transformación inteligente, no desaparición."
    },
    {
      question: "¿Necesito ir al gimnasio?",
      answer: "No es obligatorio. El programa incluye ejercicios simples que puedes hacer en casa. Pero si quieres ir al gimnasio, te enseñamos exactamente qué hacer."
    },
    {
      question: "¿Qué pasa si tengo poco tiempo?",
      answer: "El programa está diseñado para mujeres ocupadas. Las lecciones son de 5-10 minutos, los entrenamientos de 15-20 minutos. Puedes hacerlo en tu horario."
    },
    {
      question: "¿Hay garantía?",
      answer: "Sí. Si no ves resultados en 60 días, te devolvemos el 100% de tu dinero. Sin preguntas. Tu satisfacción es nuestra prioridad."
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  La Dieta de las Brasileñas
                </h1>
                <p className="text-xl md:text-2xl text-primary font-semibold">
                  Curvas femeninas, glúteos grandes y cintura fina sin dietas extremas
                </p>
              </div>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Descubre cómo las mujeres brasileñas mantienen sus curvas mientras pierden peso de forma sostenible. Sin culpa. Sin restricción. Sin fracaso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base h-14 rounded-lg"
                  onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Acceder Ahora
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
                  <span className="text-sm text-foreground">+5,000 mujeres transformadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Promedio de pérdida: 12 kg en 12 semanas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">97% de satisfacción garantizada</span>
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
                ¡Transforma tu cuerpo hoy!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS SECTION */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Te suena familiar?
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Sabemos exactamente por qué las dietas no funcionan para ti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ciclos Yo-Yo Infinitos",
                description: "Pierdes 10 kg, recuperas 15. Es un ciclo que nunca termina y que destruye tu confianza."
              },
              {
                title: "Culpa y Restricción",
                description: "Sientes culpa cada vez que comes algo que disfrutas. Las dietas extremas no son sostenibles."
              },
              {
                title: "Miedo al Fracaso",
                description: "Ya intentaste todo. ¿Por qué esta vez sería diferente? El miedo te paraliza."
              },
              {
                title: "Presión Social",
                description: "Comparación constante con otras mujeres. Nunca te sientes 'suficientemente buena'."
              },
              {
                title: "Falta de Tiempo",
                description: "Tienes una vida ocupada. No puedes pasar horas en el gimnasio o cocinando."
              },
              {
                title: "Pérdida de Curvas",
                description: "Pierdes peso pero también pierdes lo que te hace sentir femenina y sexy."
              }
            ].map((pain, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-playfair font-bold text-lg text-foreground mb-2">{pain.title}</h3>
                <p className="text-foreground/70 text-sm">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION IMAGE */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transformaciones Reales
            </h2>
            <p className="text-base md:text-lg text-foreground/70">
              Mujeres como tú que decidieron cambiar su vida
            </p>
          </div>
          <img
            src={beforeAfterImage}
            alt="Transformación antes y después"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="beneficios" className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lo Que Recibirás
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Un programa completo diseñado específicamente para mujeres que quieren resultados reales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Método Brasileño Probado",
                description: "Sistema de 12 semanas basado en cómo las mujeres brasileñas realmente pierden peso sin sacrificar sus curvas."
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Nutrición Inteligente",
                description: "Aprende a comer comidas que amas mientras pierdes peso. Nada de conteo obsesivo de calorías."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Comunidad de Apoyo",
                description: "Únete a +5,000 mujeres que se entienden mutuamente. Comparte victorias, desafíos y motivación diaria."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Entrenamientos en Casa",
                description: "Ejercicios de 15-20 minutos que puedes hacer en tu sala. No necesitas gimnasio ni equipamiento."
              },
              {
                icon: <Check className="w-6 h-6" />,
                title: "Menús Personalizados",
                description: "Recetas deliciosas adaptadas a tus preferencias. Come lo que te gusta, pierde peso consistentemente."
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Soporte Emocional",
                description: "Acceso a coaching sobre mentalidad, autoestima y relación con tu cuerpo. Transformación integral."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS IT SECTION */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Qué es exactamente La Dieta de las Brasileñas?
              </h2>
              <p className="text-base md:text-lg text-foreground/70 mb-4 leading-relaxed">
                Es un programa de 12 semanas que te enseña el secreto de cómo las mujeres brasileñas mantienen curvas femeninas, glúteos grandes y cintura fina sin dietas extremas.
              </p>
              <p className="text-base md:text-lg text-foreground/70 mb-4 leading-relaxed">
                No es una dieta restrictiva. No es un programa de ejercicio extremo. Es un sistema completo que combina nutrición inteligente, entrenamientos eficientes y transformación mental.
              </p>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                Aprenderás exactamente qué comer, cuándo comerlo, cómo entrenar y cómo mantener tu peso para siempre. Sin culpa. Sin fracaso.
              </p>
            </div>
            <img
              src={communityImage}
              alt="Comunidad de mujeres"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* FOR WHOM SECTION */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            ¿Para quién es este programa?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Mujeres que están cansadas de ciclos yo-yo",
              "Las que quieren perder peso sin sacrificar sus curvas",
              "Mujeres ocupadas que no tienen tiempo para dietas complicadas",
              "Las que quieren comunidad y apoyo emocional",
              "Mujeres que quieren libertad con la comida",
              "Las que están listas para cambiar su vida de verdad"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-poppins text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-primary/10 rounded-xl border-2 border-primary/20">
            <p className="text-center text-foreground">
              <span className="font-bold">Nota:</span> Este programa NO es para mujeres que buscan una solución mágica o que no están dispuestas a hacer cambios. Requiere compromiso, pero los resultados valen cada esfuerzo.
            </p>
          </div>
        </div>
      </section>

      {/* MECHANISM SECTION */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Cómo Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Semanas 1-3: Fundación",
                description: "Aprende los principios de nutrición inteligente y comienza entrenamientos simples. Establece nuevos hábitos."
              },
              {
                step: "2",
                title: "Semanas 4-8: Aceleración",
                description: "Intensifica entrenamientos, optimiza nutrición. Ves cambios visibles. Confianza aumenta exponencialmente."
              },
              {
                step: "3",
                title: "Semanas 9-12: Transformación",
                description: "Consolida resultados, aprende manutenimiento. Te conviertes en tu mejor versión."
              },
              {
                step: "∞",
                title: "Vida: Mantenimiento",
                description: "Mantén tu peso para siempre con los hábitos que aprendiste. Libertad total."
              }
            ].map((phase, idx) => (
              <div key={idx} className="relative p-6 bg-card rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="font-playfair font-bold text-lg text-foreground mb-2">{phase.title}</h3>
                <p className="text-foreground/70 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION SECTION */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Por Qué Somos Diferentes
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-bold text-foreground">Característica</th>
                  <th className="text-center py-4 px-4 font-bold text-primary">La Dieta de las Brasileñas</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground/50">Otras Dietas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Restricción de comida", ours: "❌ No", others: "✅ Sí" },
                  { feature: "Mantiene curvas", ours: "✅ Sí", others: "❌ No" },
                  { feature: "Comunidad de apoyo", ours: "✅ Sí", others: "❌ No" },
                  { feature: "Entrenamientos en casa", ours: "✅ Sí", others: "❌ No" },
                  { feature: "Menús personalizados", ours: "✅ Sí", others: "❌ No" },
                  { feature: "Coaching emocional", ours: "✅ Sí", others: "❌ No" },
                  { feature: "Garantía de resultados", ours: "✅ Sí (60 días)", others: "❌ No" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-primary/5">
                    <td className="py-4 px-4 font-semibold text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-primary font-bold">{row.ours}</td>
                    <td className="py-4 px-4 text-center text-foreground/50">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Lo Que Dicen Nuestras Estudiantes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{testimonial.image}</span>
                  <div>
                    <h3 className="font-playfair font-bold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-foreground/60">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-foreground/80 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section id="oferta" className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tu Oferta Especial
            </h2>
            <p className="text-base md:text-lg text-foreground/70">
              Acceso completo al programa + bonos exclusivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Offer */}
            <div
              className={`p-8 rounded-2xl border-2 transition-all cursor-pointer ${
                selectedOffer === "standard"
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-border bg-card hover:border-primary/50"
              }`}
              onClick={() => setSelectedOffer("standard")}
            >
              <h3 className="font-playfair font-bold text-2xl text-foreground mb-2">Acceso Estándar</h3>
              <p className="text-foreground/70 text-sm mb-6">Lo esencial para transformarte</p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-primary mb-2">
                  $47
                </div>
                <p className="text-foreground/60 text-sm">Pago único</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Acceso de por vida al programa",
                  "12 semanas de lecciones en video",
                  "Entrenamientos en casa (15-20 min)",
                  "Menús personalizados",
                  "Comunidad privada de apoyo",
                  "Garantía de 60 días"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-poppins text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 rounded-lg"
              >
                Acceder Ahora
              </Button>
            </div>

            {/* Premium Offer */}
            <div
              className={`p-8 rounded-2xl border-2 transition-all cursor-pointer relative ${
                selectedOffer === "premium"
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-primary/30 bg-card hover:border-primary/50"
              }`}
              onClick={() => setSelectedOffer("premium")}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                  MÁS POPULAR
                </span>
              </div>

              <h3 className="font-playfair font-bold text-2xl text-foreground mb-2">Acceso VIP</h3>
              <p className="text-foreground/70 text-sm mb-6">Transformación completa + coaching</p>

              <div className="mb-8">
                <div className="text-4xl font-bold text-primary mb-2">
                  $97
                </div>
                <p className="text-foreground/60 text-sm">Pago único</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Todo del Acceso Estándar +",
                  "Coaching personal (4 sesiones)",
                  "Menús personalizados avanzados",
                  "Entrenamientos personalizados",
                  "Acceso prioritario a comunidad",
                  "Bonus: Guía de recetas (PDF)",
                  "Bonus: Meditaciones de confianza",
                  "Garantía de 60 días"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-poppins text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 rounded-lg"
              >
                Acceder Ahora
              </Button>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="mt-16 p-8 bg-card rounded-xl border-2 border-primary/20 max-w-2xl mx-auto">
            <h3 className="font-playfair font-bold text-2xl text-foreground mb-6 text-center">
              Bonos Exclusivos (Valor $150)
            </h3>
            <div className="space-y-4">
              {[
                "📚 Guía Completa de Recetas Brasileñas (PDF)",
                "🧘 5 Meditaciones para Autoestima y Confianza",
                "📊 Planificador de Progreso (Imprimible)",
                "💬 Acceso a Grupo Privado de WhatsApp",
                "🎁 Bonus: Descuento 30% en coaching futuro"
              ].map((bonus, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                  <span className="text-lg flex-shrink-0">{bonus.split(" ")[0]}</span>
                  <span className="font-poppins text-foreground text-sm">{bonus.substring(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Garantía de 60 Días
            </h2>
            <p className="text-base md:text-lg text-foreground/70 mb-6 leading-relaxed">
              Si después de 60 días de seguir el programa no ves resultados, te devolvemos el 100% de tu dinero. Sin preguntas. Sin complicaciones.
            </p>
            <p className="text-base md:text-lg text-foreground/70">
              Creemos tanto en este programa que estamos dispuestos a respaldar cada promesa que hacemos. Tu satisfacción es nuestra prioridad número uno.
            </p>
          </div>
        </div>
      </section>

      {/* OBJECTION HANDLING */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className="group p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
              >
                <summary className="flex items-center justify-between font-bold text-lg text-foreground">
                  {item.question}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-foreground/70 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu Transformación Comienza Hoy
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90">
            No esperes más. Cada día que esperas es un día que no estás viviendo tu mejor vida. Únete a +5,000 mujeres que ya transformaron sus cuerpos y sus vidas.
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold text-lg h-14 rounded-lg px-8"
          >
            Acceder Ahora - Garantía de 60 Días
          </Button>
          <p className="text-sm mt-6 opacity-75">
            Acceso instantáneo. Sin tarjeta de crédito. Sin compromiso de renovación.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-foreground/5 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-playfair font-bold text-foreground mb-4">La Dieta de las Brasileñas</h3>
              <p className="text-foreground/60 text-sm">Transformando vidas de mujeres en todo el mundo.</p>
            </div>
            <div>
              <h4 className="font-poppins font-semibold text-foreground mb-4">Programa</h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary">Cómo Funciona</a></li>
                <li><a href="#" className="hover:text-primary">Beneficios</a></li>
                <li><a href="#" className="hover:text-primary">Testimonios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary">Términos</a></li>
                <li><a href="#" className="hover:text-primary">Privacidad</a></li>
                <li><a href="#" className="hover:text-primary">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-semibold text-foreground mb-4">Síguenos</h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary">Instagram</a></li>
                <li><a href="#" className="hover:text-primary">TikTok</a></li>
                <li><a href="#" className="hover:text-primary">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-foreground/60 text-sm">
              © 2026 La Dieta de las Brasileñas. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
