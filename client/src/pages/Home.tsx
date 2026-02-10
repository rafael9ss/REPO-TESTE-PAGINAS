import { Button } from "@/components/ui/button";
import { Check, Heart, Shield, Users, Zap, Gift } from "lucide-react";

export default function Home() {
  const heroImage = "https://private-us-east-1.manuscdn.com/sessionFile/zgylrs2zKMrTx4s4pF5UI0/sandbox/3FNxqMAY9aEBRu6Qx58PIR-img-1_1770756210000_na1fn_aGVyby1icmF6aWxpYW4tYmlraW5p.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvemd5bHJzMnpLTXJUeDRzNHBGNVVJMC9zYW5kYm94LzNGTnhxTUFZOWFFQlJ1NlF4NThQSVItaW1nLTFfMTc3MDc1NjIxMDAwMF9uYTFmbl9hR1Z5YnkxaWNtRjZhV3hwWVc0dFltbHJhVzVwLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=buHHLvAqlm8iEpBEaj7h7RXd4en39WWDCirFYKb6fiKoRbUEG04c5g62TyejJQ9aFGpG2pvefu1fyCSZKp7xBqMwAJNvlylFGe-FVNgNj07SC3HiH0vROwyj7rh9WDK8CTXocQgZ7SP7Q8lEoSiHwlYN6kMicbJJSaiQBsllK7spDAKC~4sF8W8-BAO6eb4cAFAA2rWVHyd8TpuJWZgaV9tkYeqCTYWtGYM7Uj3bt0ezFpIH8sTPs9KeYNgg~lc9-Wkfmajxbb1X8dYfkSl3yAkGrEpCZLjwc4g9CiRt-7TvwdHirkRNP8h3NmY9LprlddYYepiZagdIiDxUcgm-ww__";
  
  const gymImage = "https://private-us-east-1.manuscdn.com/sessionFile/zgylrs2zKMrTx4s4pF5UI0/sandbox/3FNxqMAY9aEBRu6Qx58PIR-img-2_1770756213000_na1fn_Z3ltLXdvcmtvdXQtYnJhemlsaWFu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvemd5bHJzMnpLTXJUeDRzNHBGNVVJMC9zYW5kYm94LzNGTnhxTUFZOWFFQlJ1NlF4NThQSVItaW1nLTJfMTc3MDc1NjIxMzAwMF9uYTFmbl9aM2x0TFhkdmNtdHZkWFF0WW5KaGVtbHNhV0Z1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=P7Ug~-FKsspUE-o~EHOJcK4Syk4FIG8DR0bDGncuVhS3J5F3h-LetukVc1JGjj-~jpYAoJ991Fvw-4R6BdMRbVtac8p3NOSA1CSlLb72z~fj41RJuW3PvTtlZaNWIj3Jc2bVQehBM0e4LCzCtYTHtM3E9U~eoqIMFIQ7hgQm7xmQ7nrlbKfI3CeEkAiTf1FyDzJmxW3DOvzmsw~U1lIDQ3DRki3QlRh~3iOLTYvNWOkPmhnA3UHFP6o0onGlEdJiU0Rw85W-D3CzQI2JW4N0cWk4m4PuQy~EAgibDqS8s9QDsDsnXHLVbv89d9HNBJJ4PRAs52oFmDM-vmKfcrD7cQ__";

  const testimonials = [
    {
      name: "Priscila Santos",
      location: "São Paulo, Brasil",
      story: "Mãe de dois filhos",
      text: "Depois de ser mãe, pensei que nunca mais teria meu corpo de volta. Descobri que não preciso de dietas extremas, só de estratégia. Perdi 14 kg em 3 meses e mantive minhas curvas. Meu marido não me reconhecia!",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/zgylrs2zKMrTx4s4pF5UI0/sandbox/D4H4naGT8vUJBxpXYyVCaj-img-1_1770756146000_na1fn_dGVzdGltb25pYWwtYmxhY2std29tYW4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvemd5bHJzMnpLTXJUeDRzNHBGNVVJMC9zYW5kYm94L0Q0SDRuYUdUOHZVSkJ4cFhZeVZDYWotaW1nLTFfMTc3MDc1NjE0NjAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0WW14aFkyc3RkMjl0WVc0LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l7CzFGmraE5~rsP8U0-CWnRF6rkCRssh8jfIBLZkX0vfF5LeE4~J4btgJK9kLH5WK-zZnAVwZgufprOIBAcMBtCXGoQwKoZPS2CwX1ws5sSSqJSnlVpqES-g-YQ1NfVG9FR1pjntAKuua1b5hBZ1D3ibFkPngPIHNfuT4BMPhY1kTfyN4zbB1-kQlQjmqvil7~-wIgAjJbb8L6a2~gH7DRvIjETJ12dPqXj-OXh~cyHAiYwIkOUzrHs4bVcgojzB0HzC8JC4nmPT0UcNAkGDvL4PcHZHEF-f1vYm9bDN6GSnp~qgyTnh7883cWxy8n7hAtMkt8MsgawpasFWRaIBKg__"
    },
    {
      name: "Fernanda Costa",
      location: "Rio de Janeiro, Brasil",
      story: "Ex-obesa, transformação completa",
      text: "Pesava 95 kg e achava que nunca sairia daquele ciclo. A dieta das brasileiras me mostrou que posso comer o que gosto com inteligência. Hoje peso 68 kg e me sinto uma deusa. Sem restrição, sem culpa!",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/zgylrs2zKMrTx4s4pF5UI0/sandbox/D4H4naGT8vUJBxpXYyVCaj-img-2_1770756147000_na1fn_dGVzdGltb25pYWwtbW9yZW5hLXdvbWFu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvemd5bHJzMnpLTXJUeDRzNHBGNVVJMC9zYW5kYm94L0Q0SDRuYUdUOHZVSkJ4cFhZeVZDYWotaW1nLTJfMTc3MDc1NjE0NzAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0Ylc5eVpXNWhMWGR2YldGdS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NLWBJXsE~j5lecU0rpvvEOyziLHnMSBUyvfaDHjC2IXBqU3rzpKf9MYKyllbmoO7ukb1kcXUGQ55NZgBMqurX3kv~ny5JVxGWRK41~dpjRYX5BGlX3D76p6UpIltI06xfRiiKUCiLpanJSxThz~0lp6aqFH1SqR9AjNEgUznyGNxes2r4BN9SGXGIXM0oRMtTEuyILpQPHacWiKdIgc6sjSOFCiqOZlLfwV4yhrU~cSEzQKXv2NP~6521avH2MUzIRxfFuJoDrtHNQZ7pH3f8BDCl9pbuXPLB3buatCDZ6xP3lwMjLkeY~dfLiL4ZnqrSI6pkQ98AkO20LSYtVYi3g__"
    },
    {
      name: "Beatriz Oliveira",
      location: "Belo Horizonte, Brasil",
      story: "Mulher de 48 anos que quer se sentir sexy novamente",
      text: "Com 48 anos, pensei que tinha perdido minha chance. Mas descobri que a idade não é desculpa. Perdi 11 kg, meu corpo ficou tonificado e me sinto mais sexy do que nunca. Meus filhos não acreditam que sou eu!",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/zgylrs2zKMrTx4s4pF5UI0/sandbox/D4H4naGT8vUJBxpXYyVCaj-img-3_1770756157000_na1fn_dGVzdGltb25pYWwtYmxvbmRlLXdvbWFu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvemd5bHJzMnpLTXJUeDRzNHBGNVVJMC9zYW5kYm94L0Q0SDRuYUdUOHZVSkJ4cFhZeVZDYWotaW1nLTNfMTc3MDc1NjE1NzAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3d0WW14dmJtUmxMWGR2YldGdS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NT-yDIVqA2~DOMYL6RH6Rc7tyo4qcHcblzqxt0t8i6yQpdn-J20m6hAkdqXtuvBl~xM7g7LwAy6DzzhYWaZOTqttQF6l-XQw2eB9iDp5VAf6rJV58kGsAUtpGef~r9TYjMMTDpvUMp8TDUu2oRgOhTUjn1LonDqPWt8JgMSvmvyIaP28gynf9pOCCPIJVqyLXHNmoBAh6Z18x81tP5xtsM6uI176vTa8r7WkD3E~l56oCbGFpXa-EXfPzXgfbGQJ3pdmn2F0gXYY3T0GaSAzSTTTG2JZjJXejLWXbhW2G3QQ7un2XqT5HCAM1zpBwj2VyM4cgvLCiIwqXQYu5066RQ__"
    }
  ];

  const bonuses = [
    {
      icon: "💪",
      title: "Programa de Musculação Caseira",
      description: "Rotina de exercícios diários de 10-20 minutos. Sem equipamento. Sem desculpas. Resultados garantidos em 4 semanas."
    },
    {
      icon: "👯",
      title: "Grupo VIP Exclusivo",
      description: "Comunidade privada com +5000 mulheres. Suporte diário, motivação, receitas compartilhadas e amizades que duram para a vida toda."
    },
    {
      icon: "🍵",
      title: "Guia de Chás Termogênicos",
      description: "Receitas de chás que simulam o efeito do Mounjaro. Acelera metabolismo naturalmente. Receitas deliciosas que você vai querer beber todos os dias."
    },
    {
      icon: "📊",
      title: "Planificador de Progresso Semanal",
      description: "Rastreie seu progresso, meça resultados reais, celebre vitórias pequenas. Psicologia da transformação incluída."
    },
    {
      icon: "🎁",
      title: "Acesso ao Grupo de WhatsApp VIP",
      description: "Suporte direto, dúvidas respondidas em tempo real, motivação diária, desafios semanais com prêmios."
    },
    {
      icon: "📚",
      title: "Guia Completo de Receitas Brasileiras",
      description: "100+ receitas deliciosas que mantêm você em déficit calórico sem sentir que está fazendo dieta. Comida de verdade."
    }
  ];

  const faqItems = [
    {
      question: "Isso é uma dieta restritiva?",
      answer: "Absolutamente não. A Dieta das Brasileiras é sobre estratégia, não restrição. Você aprende a comer o que gosta com inteligência. Sem culpa. Sem privação."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Você sente mudanças em 2-3 semanas (mais energia, roupas folgadas). Resultados visíveis em 4-6 semanas. Transformação completa em 12 semanas."
    },
    {
      question: "Vou perder minhas curvas?",
      answer: "Não. O programa foi criado especificamente para manter e realçar suas curvas enquanto você perde gordura. Você fica mais sexy, não mais fina."
    },
    {
      question: "Preciso ir ao ginásio?",
      answer: "Não é obrigatório. Os exercícios podem ser feitos em casa em 15-20 minutos por dia. Mas se quiser ir ao ginásio, te ensinamos exatamente o que fazer."
    },
    {
      question: "E se eu não tiver tempo?",
      answer: "O programa foi criado para mulheres ocupadas. Lições de 5-10 minutos, exercícios de 15-20 minutos. Você faz no seu ritmo, quando tiver tempo."
    },
    {
      question: "Qual é a garantia?",
      answer: "Se não ver resultados em 60 dias, devolvemos 100% do seu dinheiro. Sem perguntas. Sua satisfação é nossa prioridade."
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
                  A Dieta das Brasileiras
                </h1>
                <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-xl md:text-2xl text-primary font-semibold">
                  Come o que quiser. Mantém suas curvas. Perde peso de verdade.
                </p>
              </div>

              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Descubra o segredo que as mulheres brasileiras usam para manter glúteos grandes, cintura fina e curvas femininas enquanto perdem peso. Sem dietas extremas. Sem culpa. Sem fracasso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base h-14 rounded-lg"
                  onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Quero Acessar Agora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold text-base h-14 rounded-lg"
                  onClick={() => document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Benefícios
                </Button>
              </div>

              {/* Social Proof */}
              <div className="pt-6 space-y-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-foreground">+5,000 mulheres transformadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-foreground">Média de perda: 12 kg em 12 semanas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm text-foreground">97% de satisfação garantida</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <img
                src={heroImage}
                alt="Mulher brasileira confiante"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg font-semibold text-sm md:text-base">
                Comece sua transformação hoje!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS SECTION */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Você está cansada de...
            </h2>
            <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Ciclos infinitos que não funcionam. Dietas que roubam sua alegria. Promessas vazias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ciclos Yo-Yo Infinitos",
                description: "Perde 10 kg, recupera 15. É um ciclo que destrói sua confiança e sua saúde mental."
              },
              {
                title: "Culpa e Restrição",
                description: "Dietas que proíbem tudo. Você sente culpa ao comer. Isso não é vida, é prisão."
              },
              {
                title: "Perder Suas Curvas",
                description: "Emagrece mas perde o que te faz sentir mulher. Quer estar magra, mas não desejável."
              },
              {
                title: "Falta de Tempo",
                description: "Vida ocupada. Não pode passar horas no ginásio ou cozinhando receitas complicadas."
              },
              {
                title: "Medo de Fracasso",
                description: "Já tentou tudo. Por que desta vez seria diferente? O medo te paralisa."
              },
              {
                title: "Pressão Social",
                description: "Comparação constante. Nunca se sente 'suficientemente boa'. Insegurança permanente."
              }
            ].map((pain, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold text-lg text-foreground mb-2">{pain.title}</h3>
                <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/70 text-sm">{pain.description}</p>
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
              <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                O Que é a Dieta das Brasileiras?
              </h2>
              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/70 mb-4 leading-relaxed">
                É um método de 12 semanas que te ensina o segredo de como as mulheres brasileiras comem o que querem e ainda assim perdem peso mantendo suas curvas.
              </p>
              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/70 mb-4 leading-relaxed">
                Não é sobre restrição. Não é sobre sofrer. É sobre estratégia inteligente. Você aprende exatamente o que comer, quando comer, como treinar e como manter seu peso para sempre.
              </p>
              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/70 leading-relaxed">
                A diferença? Você come de verdade. Você desfruta de verdade. E você emagrece de verdade. Sem culpa. Sem fracasso. Sem restrição.
              </p>
            </div>
            <img
              src={gymImage}
              alt="Mulher em academia"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="beneficios" className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Você Recebe
            </h2>
            <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              Um programa completo que te transforma por dentro e por fora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Método Comprovado",
                description: "Sistema de 12 semanas baseado em como as mulheres brasileiras realmente emagrecem sem sacrificar suas curvas."
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Coma o Que Quiser",
                description: "Aprenda a comer comidas que ama enquanto perde peso. Nada de contagem obsessiva de calorias."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Comunidade de Apoio",
                description: "Junte-se a +5000 mulheres que se entendem. Compartilhe vitórias, desafios e motivação diária."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Exercícios em Casa",
                description: "Rotinas de 15-20 minutos que você faz em casa. Sem ginásio. Sem equipamento caro."
              },
              {
                icon: <Check className="w-6 h-6" />,
                title: "Menús Personalizados",
                description: "Receitas deliciosas adaptadas ao seu gosto. Coma o que gosta, perca peso consistentemente."
              },
              {
                icon: <Gift className="w-6 h-6" />,
                title: "6 Bônus Exclusivos",
                description: "Programa de musculação, guia de chás termogênicos, grupo VIP e muito mais (valor total: $150)."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/70 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Histórias Reais de Transformação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
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
            6 Bônus Exclusivos (Valor: $150)
          </h2>
          <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Você recebe tudo isso HOJE quando se inscrever
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
              Sua Oferta Especial
            </h2>
            <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/70">
              Acesso completo ao programa + 6 bônus exclusivos
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-2xl border-2 border-primary bg-primary/5 shadow-lg">
              <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold text-2xl text-foreground mb-2 text-center">
                Acesso Completo
              </h3>
              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/70 text-sm mb-6 text-center">
                Tudo que você precisa para transformar seu corpo e sua vida
              </p>

              <div className="mb-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  $14
                </div>
                <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/60 text-sm">Pago único • Acesso de por vida</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Acesso de por vida ao programa completo",
                  "12 semanas de lições em vídeo HD",
                  "Programa de musculação caseira (10-20 min/dia)",
                  "Menús personalizados com 100+ receitas",
                  "Comunidade privada com +5000 mulheres",
                  "Grupo VIP de WhatsApp com suporte direto",
                  "Guia de chás termogênicos tipo Mounjaro",
                  "Planificador de progresso semanal",
                  "Garantia de 60 dias (100% dinheiro de volta)"
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
                Quero Acessar Agora - Apenas $14
              </Button>

              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-center text-foreground/60 text-xs mt-4">
                Acesso instantâneo. Sem cartão de crédito recorrente. Sem surpresas.
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
              Garantia de 60 Dias
            </h2>
            <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/70 mb-6 leading-relaxed">
              Se em 60 dias você não ver resultados, devolvemos 100% do seu dinheiro. Sem perguntas. Sem complicações.
            </p>
            <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg text-foreground/70">
              Acreditamos tanto neste programa que estamos dispostos a apostar nosso dinheiro nele. Sua satisfação é nossa prioridade número um.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Perguntas Frequentes
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
            Sua Transformação Começa Agora
          </h2>
          <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Não espere mais. Cada dia que passa é um dia que você não está vivendo sua melhor vida. Por apenas $14, você tem acesso a tudo que precisa para transformar seu corpo e sua vida.
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold text-lg h-14 rounded-lg px-8"
          >
            Acessar Agora - Garantia de 60 Dias
          </Button>
          <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-sm mt-6 opacity-75">
            Acesso instantâneo. Sem cartão de crédito recorrente. Sem compromisso de renovação.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-foreground/5 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold text-foreground mb-4">A Dieta das Brasileiras</h3>
              <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/60 text-sm">Transformando vidas de mulheres em todo o mundo.</p>
            </div>
            <div>
              <h4 style={{ fontFamily: '"Poppins", sans-serif' }} className="font-semibold text-foreground mb-4">Programa</h4>
              <ul style={{ fontFamily: '"Poppins", sans-serif' }} className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary">Como Funciona</a></li>
                <li><a href="#" className="hover:text-primary">Benefícios</a></li>
                <li><a href="#" className="hover:text-primary">Depoimentos</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: '"Poppins", sans-serif' }} className="font-semibold text-foreground mb-4">Legal</h4>
              <ul style={{ fontFamily: '"Poppins", sans-serif' }} className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary">Termos</a></li>
                <li><a href="#" className="hover:text-primary">Privacidade</a></li>
                <li><a href="#" className="hover:text-primary">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: '"Poppins", sans-serif' }} className="font-semibold text-foreground mb-4">Siga-nos</h4>
              <ul style={{ fontFamily: '"Poppins", sans-serif' }} className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary">Instagram</a></li>
                <li><a href="#" className="hover:text-primary">TikTok</a></li>
                <li><a href="#" className="hover:text-primary">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p style={{ fontFamily: '"Poppins", sans-serif' }} className="text-foreground/60 text-sm">
              © 2026 A Dieta das Brasileiras. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
