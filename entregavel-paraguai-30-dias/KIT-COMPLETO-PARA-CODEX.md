# PARAGUAI EM 30 DIAS — ARQUIVO COMPLETO PARA O CODEX

## INSTRUÇÕES DE EXECUÇÃO (leia antes de tudo)

Este arquivo contém: (1) o PROMPT MESTRE com as regras de produção e identidade visual e (2) a
especificação completa, página por página, dos 6 materiais e dos 6 bônus do kit.

Regras de execução:
1. Siga o PROMPT MESTRE para tudo. Modo padrão: MODO A (guia visual). Só use o MODO B se eu
   pedir explicitamente.
2. **Produza UM material por vez**, na ordem deste arquivo. Ao terminar cada um, entregue o PDF e
   **pare e aguarde minha aprovação** antes de começar o próximo. Não tente produzir tudo de uma vez.
3. Nunca resuma, pule ou reescreva páginas por causa do tamanho deste arquivo. Cada página
   listada aqui deve existir no material final, com o texto literal.
4. A Planilha de Custos (Material 5) já existe como arquivo .xlsx separado. Não gere planilha.
   Gere apenas a capa opcional descrita na seção do Material 5.
5. PRIMEIRA TAREFA (teste): produza apenas a PÁGINA 1 (Capa) e a PÁGINA 18 (Taxas oficiais) do
   Material 1 — Guia Prático, no MODO A. Entregue e aguarde minha aprovação do estilo.

---

# PROMPT MESTRE — cole isto primeiro no Codex

> Copie tudo a partir da linha "INÍCIO DO PROMPT" até "FIM DO PROMPT".

---

INÍCIO DO PROMPT

Você vai produzir o kit digital **"Paraguai em 30 Dias"**, um infoproduto em português do Brasil
para brasileiros que querem planejar a mudança e a residência legal no Paraguai.

Vou te enviar, um por vez, arquivos com a especificação de cada material, página por página. Cada
página vem neste formato:

```
### PÁGINA N — Nome da página
TIPO: (capa | abertura de capítulo | conteúdo | tabela | checklist | fluxograma | encerramento)
LAYOUT: descrição da composição
TEXTO (literal):
... texto exato que deve aparecer ...
ARTE: descrição/prompt da imagem a gerar (quando houver)
```

## REGRA Nº 1 — TEXTO É SAGRADO

- Use o bloco "TEXTO (literal)" **exatamente** como está. Não resuma, não reescreva, não
  "melhore", não traduza, não acrescente frases, dados, números, links ou nomes que não estão no
  arquivo.
- Mantenha acentos e cedilhas. Mantenha números exatamente como escritos (ex.: Gs 2.341.540).
- Se um texto não couber no layout, **reduza o tamanho da fonte ou divida em duas páginas** e me
  avise. Nunca corte conteúdo sem avisar.
- Se perceber algo que parece erro no texto, **não corrija sozinho**: liste no final da entrega
  como "Dúvidas para revisão".

## REGRA Nº 2 — MODO DE PRODUÇÃO

**MODO A (padrão, use este) — GUIA VISUAL:**
Este kit é um **guia visual**, não um documento de texto. O cliente deve sentir que está folheando
uma revista ou um infográfico, nunca lendo uma apostila. Regras obrigatórias de visual:
- **Toda página tem pelo menos um elemento visual forte**: ilustração, infográfico, ícones grandes,
  linha do tempo, fluxograma, cartões coloridos ou tabela estilizada. Nenhuma página só com texto.
- Páginas com campo "ARTE" levam a ilustração gerada ocupando de 30% a 60% da página.
- Páginas sem campo "ARTE" ganham ícones (gerados pelo GPT Image, estilo do kit) ao lado de cada
  item, bloco ou etapa, e fundos com textura suave.
- Transforme listas em **cartões com ícone**, etapas em **trilhas numeradas**, comparações em
  **tabelas coloridas** e números importantes (taxas, prazos, dias) em **destaques grandes**.
- Pouco texto por bloco, muito espaço em branco, hierarquia clara (título grande → destaque →
  texto curto).

Produção:
1. Monte cada material como um documento **HTML + CSS** (uma `<section class="page">` por página,
   tamanho A4 retrato 210 × 297 mm, margens de 18 mm).
2. Use o modelo de imagem (GPT Image) **somente** para: capas, ilustrações de abertura de
   capítulo, ícones, mapas estilizados e texturas de fundo. **Nenhum texto dentro das imagens
   geradas**, exceto quando o arquivo pedir explicitamente.
3. Exporte cada material para PDF A4 com Playwright/Chromium (`page.pdf({ format: 'A4',
   printBackground: true })`). Links devem ficar clicáveis.
4. Estrutura de pastas de saída:
   ```
   saida/
     01-guia-pratico/        index.html, assets/, guia-pratico.pdf
     02-cronograma/          ...
     03-checklists/          checklist-1-brasil.pdf, checklist-2-entrada.pdf, checklist-3-residencia.pdf
     04-mapa-processo/
     05-roteiro-viagem/
     06-bonus-01 ... 11-bonus-06/
   ```
5. Reaproveite um único arquivo `estilo.css` para todos os materiais (consistência visual).

**MODO B (só se eu pedir explicitamente "Modo B"):** cada página vira uma imagem 1024×1536
(retrato) gerada pelo GPT Image, com o texto embutido. Neste modo:
- no máximo ~70 palavras por imagem; se a página tiver mais, gere a arte sem texto e sobreponha o
  texto depois via HTML;
- depois de gerar, leia a imagem e compare letra por letra com o texto literal; refaça se houver
  qualquer diferença;
- monte o PDF final juntando as imagens em páginas A4.

## IDENTIDADE VISUAL

Conceito: **"passaporte organizado"** — sensação de clareza, ordem e confiança, com calor humano.
Nada de visual de "governo", nada de visual de "golpe/enriquecimento rápido".

Paleta (use como variáveis CSS):
- `--azul: #0B3C8C` (títulos, faixas, elementos principais — remete ao azul da bandeira)
- `--vermelho: #C8102E` (destaques, alertas, números de etapa — usar com moderação)
- `--creme: #FBF8F3` (fundo de página)
- `--areia: #EFE6D8` (caixas, tabelas zebradas)
- `--tinta: #1C2230` (texto corrido)
- `--erva: #3F7D4E` (itens "ok", dicas positivas — remete à erva-mate do tereré)
- `--ambar: #E0A526` (caixas "atenção")

Tipografia (Google Fonts):
- Títulos: **Montserrat** 700/800
- Texto: **Inter** 400/600, corpo 11 pt, entrelinha 1,5
- Números grandes (dias, etapas): Montserrat 800

Componentes padrão (crie como classes CSS reutilizáveis):
- `.box-dica` — fundo erva 10%, borda esquerda erva, ícone de folha. Título "DICA".
- `.box-atencao` — fundo âmbar 15%, borda esquerda âmbar, ícone de triângulo. Título "ATENÇÃO".
- `.box-erro` — fundo vermelho 8%, borda esquerda vermelha, ícone X. Título "ERRO COMUM".
- `.box-oficial` — fundo azul 8%, borda esquerda azul, ícone de prédio. Título "FONTE OFICIAL".
- `.checkbox-item` — quadrado vazio de 5 mm para marcar à mão + texto.
- `.etapa` — círculo vermelho com número branco + título em azul.
- Tabelas: cabeçalho azul com texto branco, linhas zebradas areia/creme.
- Rodapé de todas as páginas (menos capa): à esquerda "Paraguai em 30 Dias", à direita o número
  da página, linha fina azul acima.

Ilustrações (estilo único para TODO o kit):
- Ilustração editorial plana (flat) com leve textura de papel, traço limpo, paleta acima,
  pessoas brasileiras diversas (idades, tons de pele), expressões calmas e confiantes.
- Cenários paraguaios reconhecíveis sem clichê: ruas arborizadas com lapachos floridos (rosa e
  amarelo), cuia de tereré, ônibus urbano, fachadas coloniais de Assunção, rio Paraná.
- Proibido nas imagens: bandeiras oficiais em destaque, brasões, logotipos de órgãos públicos,
  dinheiro voando, pessoas em pânico, armas, carimbos de "aprovado" (sugere garantia de resultado).

Prompt-base para TODAS as artes (acrescente ao prompt específico de cada página):
> "Flat editorial illustration with subtle paper texture, clean lines, limited palette of deep
> blue #0B3C8C, warm red #C8102E, cream #FBF8F3, sand #EFE6D8, herb green #3F7D4E and amber
> #E0A526. Calm, hopeful, trustworthy mood. No text, no letters, no logos, no flags, no
> watermarks."

## TOM E ACESSIBILIDADE

- O texto já está escrito no tom certo (claro, direto, honesto). Não adicione exclamações,
  emojis ou frases motivacionais.
- Contraste mínimo AA. Nunca texto sobre foto sem caixa de fundo.
- Os PDFs imprimíveis (cronograma, checklists) devem funcionar em impressão preto e branco:
  não dependa só de cor para transmitir informação.

## ENTREGA DE CADA MATERIAL

Ao terminar cada material, me entregue:
1. O PDF.
2. A lista de imagens geradas com o prompt usado em cada uma.
3. "Dúvidas para revisão" (se houver).

Confirme que entendeu e aguarde o primeiro arquivo.

FIM DO PROMPT


---

# MATERIAL 1 — GUIA PRÁTICO DE IMIGRAÇÃO (PDF digital, 26 páginas)

> Cole no Codex depois do prompt mestre. Instrução ao Codex: "Produza o Material 1 seguindo
> o prompt mestre, Modo A."

---

### PÁGINA 1 — Capa
TIPO: capa
LAYOUT: ilustração ocupando 65% superior. Faixa creme na parte inferior com título em azul, subtítulo em tinta e selo pequeno vermelho "Kit Digital — Material 1". Sem rodapé.
TEXTO (literal):
PARAGUAI EM 30 DIAS
Guia Prático de Imigração
O passo a passo para planejar sua mudança, entender a residência e organizar os procedimentos legais.
Kit Digital — Material 1
Conteúdo verificado em outubro de 2026
ARTE: Uma família brasileira (casal de uns 40 anos e uma adolescente) caminhando de costas por uma avenida arborizada de Assunção com lapachos rosa floridos, ao entardecer, carregando uma mala e uma pasta de documentos organizada. Ao fundo, silhueta suave de prédios baixos e uma fachada colonial. Sensação de recomeço calmo, não de fuga.

---

### PÁGINA 2 — Aviso importante
TIPO: conteúdo
LAYOUT: página limpa, ícone de escudo no topo, texto centralizado em coluna estreita, caixa `.box-oficial` no final.
TEXTO (literal):
Antes de começar

Este guia é um material educativo de organização e planejamento. Ele não é assessoria jurídica e não substitui a orientação de um advogado ou gestor habilitado no Paraguai.

As regras migratórias, as taxas e os documentos exigidos podem mudar a qualquer momento por decisão da Dirección Nacional de Migraciones (DNM). Todo o conteúdo foi verificado em outubro de 2026, com base em fontes oficiais.

A aprovação da sua residência depende exclusivamente da análise das autoridades paraguaias. Apresentar todos os documentos não garante a aprovação — e nenhum guia, gestor ou advogado pode garantir isso.

[box-oficial] Sempre confirme antes de pagar ou viajar:
Dirección Nacional de Migraciones — migraciones.gov.py
Sede central: Caballero nº 201, esquina Eligio Ayala — Assunção
Telefone: +595 21 411 2000 · E-mail: migraciones@migraciones.gov.py
Atendimento: segunda a sexta, das 7h às 14h30, por ordem de chegada.
ARTE: ícone simples de escudo com folha de erva-mate (sem texto).

---

### PÁGINA 3 — Como usar este kit
TIPO: conteúdo
LAYOUT: grade de 6 cartões (2 colunas × 3 linhas), cada cartão com ícone, nome do material e uma linha de função. Abaixo, faixa azul com a ordem recomendada.
TEXTO (literal):
Como usar este kit

Você recebeu 6 materiais principais. Cada um tem uma função:

1. Guia Prático (este documento) — entender como tudo funciona.
2. Cronograma de 30 Dias — saber o que fazer em cada dia.
3. 3 Checklists de Documentação — não esquecer nenhum papel.
4. Mapa do Processo de Residência — enxergar o caminho completo, do Brasil à residência permanente.
5. Planilha de Custos — saber quanto você precisa ter antes de ir.
6. Roteiro de Viagem e Protocolo — chegar à Migraciones preparado.

Ordem recomendada:
Leia este guia inteiro (cerca de 1 hora) → preencha a planilha → imprima o cronograma e os checklists → comece o Dia 1.
ARTE: 6 ícones flat na paleta: livro aberto, calendário, prancheta com check, mapa com caminho pontilhado, planilha, mala com passaporte.

---

### PÁGINA 4 — Sumário
TIPO: conteúdo
LAYOUT: lista numerada com números grandes em vermelho e títulos em azul, linha pontilhada até o número da página.
TEXTO (literal):
Sumário

1. A verdade antes da mudança ........................ 5
2. Os termos que você precisa entender ................ 7
3. As duas rotas de residência para brasileiros ....... 8
4. A linha do tempo real .............................. 10
5. Documentos que você prepara no Brasil .............. 11
6. A entrada no Paraguai .............................. 14
7. O protocolo na Migraciones ......................... 16
8. Quanto custa ....................................... 18
9. Depois da residência: os primeiros registros ....... 20
10. Da temporária à permanente ........................ 22
11. Os 10 erros que mais atrasam a residência ......... 23
12. Gestor, advogado ou você mesmo? ................... 24
Próximos passos ...................................... 25
Fontes oficiais e contatos ........................... 26

---

### PÁGINA 5 — Capítulo 1: A verdade antes da mudança
TIPO: abertura de capítulo + conteúdo
LAYOUT: número "01" gigante em vermelho no canto superior esquerdo, título em azul, ilustração pequena à direita, texto em coluna única.
TEXTO (literal):
01
A verdade antes da mudança

Mudar de país é uma das decisões mais importantes da sua vida. Por isso, este guia começa pelo que quase ninguém conta.

O que o Paraguai pode oferecer:
• Um processo de residência simples para brasileiros, graças ao Acordo de Residência do Mercosul.
• Um sistema tributário com alíquotas baixas e regras mais simples que as do Brasil.
• Proximidade com o Brasil: idioma parecido, cultura próxima e viagem curta para visitar a família.
• Uma economia que vem crescendo e atraindo empresas e investimentos.

O que o Paraguai não faz por você:
• Não garante emprego. Os salários locais, em geral, são mais baixos que os do Brasil.
• Não é automaticamente barato. Em 2026, o guaraní se valorizou frente ao real e ao dólar, e alguns bairros de Assunção têm aluguel comparável ao de capitais brasileiras.
• Não é igual em todo lugar. Segurança, infraestrutura e custo mudam muito de uma cidade para outra.
• Não elimina a burocracia. Ela é menor, mas existe — e exige presença física, paciência e documentos corretos.

[box-atencao] A mudança funciona melhor para quem chega com renda definida (trabalho remoto, negócio, aposentadoria ou emprego já conversado) e com reserva financeira para pelo menos 6 meses.
ARTE: ilustração pequena de uma balança equilibrada com uma mala de um lado e uma casa do outro.

---

### PÁGINA 6 — Capítulo 1 (continuação): Você está pronto?
TIPO: checklist
LAYOUT: título, frase de introdução, 8 itens com `.checkbox-item`, caixa de resultado no final.
TEXTO (literal):
Teste rápido: você está pronto para começar?

Marque o que já é verdade para você hoje:

☐ Sei de onde virá minha renda nos primeiros 6 meses no Paraguai.
☐ Tenho reserva financeira para a mudança e para pelo menos 6 meses de custo de vida.
☐ Meu RG (emitido há menos de 10 anos) ou meu passaporte está válido.
☐ Não tenho processos criminais que impeçam a emissão de uma certidão de antecedentes limpa.
☐ Já conversei com todas as pessoas da família que vão comigo.
☐ Sei em qual cidade quero morar (ou tenho até 2 opções).
☐ Consigo ficar pelo menos 2 semanas no Paraguai na primeira viagem.
☐ Entendo que a residência leva tempo para ser concluída e que não existe prazo garantido.

Resultado:
7 ou 8 marcados — você pode começar o Dia 1 do cronograma hoje.
4 a 6 marcados — comece o cronograma, mas resolva os itens em aberto na Semana 1.
0 a 3 marcados — use as próximas semanas para planejar renda e reserva antes de iniciar a contagem dos 30 dias.

---

### PÁGINA 7 — Capítulo 2: Os termos que você precisa entender
TIPO: conteúdo (glossário)
LAYOUT: título com "02" em vermelho; glossário em 2 colunas, cada termo em negrito azul seguido da explicação.
TEXTO (literal):
02
Os termos que você precisa entender

DNM — Dirección Nacional de Migraciones. Órgão que recebe e decide os pedidos de residência.

Residência temporária — primeira residência concedida ao estrangeiro. Pela rota Mercosul, vale 2 anos.

Residência permanente — residência por tempo indeterminado, solicitada antes do vencimento da temporária.

Residente precário — situação de quem já protocolou o pedido e aguarda a decisão. Permite estudar, trabalhar legalmente e sair e voltar ao país durante o trâmite.

Carnet de residente — documento emitido pela DNM que comprova a residência concedida.

Cédula de identidad — documento de identidade paraguaio, emitido pelo Departamento de Identificaciones da Policía Nacional depois que a residência é concedida.

Apostila de Haia — certificação feita em cartório no Brasil que torna um documento brasileiro válido no Paraguai.

Antecedentes — certidões que mostram que você não tem registros criminais. Você precisa de uma do Brasil e de uma emitida no Paraguai.

Certificado de radicación — documento da DNM que comprova que você é residente. Pode ser pedido por bancos e empresas.

Arancel — taxa oficial cobrada pela DNM em cada procedimento.

Guaraní (Gs ou ₲) — moeda do Paraguai.

---

### PÁGINA 8 — Capítulo 3: As duas rotas de residência para brasileiros
TIPO: tabela
LAYOUT: título com "03"; tabela comparativa de 2 colunas (Rota Mercosul destacada com selo "a mais usada por brasileiros"); caixa de dica abaixo.
TEXTO (literal):
03
As duas rotas de residência para brasileiros

Como brasileiro, você pode pedir a residência temporária por dois caminhos:

| | Rota Mercosul | Rota geral (Lei 6.984/2022) |
|---|---|---|
| Para quem | Cidadãos de países do Acordo de Residência do Mercosul, incluindo o Brasil | Qualquer estrangeiro |
| Validade | 2 anos, não prorrogável | Até 2 anos, prorrogável por igual período |
| Documentos | Lista reduzida | Lista maior: inclui certidão da Interpol e declarações juradas de atividade e domicílio |
| Taxa oficial (jul/2026) | Gs 2.341.540 (em dinheiro) | Gs 2.926.925 (em dinheiro) |
| Documentos em português | Documentos do Brasil dispensam tradução | Verifique no atendimento se a tradução será exigida |
| Próximo passo | Permanente Mercosul, pedida nos 90 dias antes do vencimento | Permanente por mudança de categoria, ou prorrogação da temporária |

[box-dica] Para a maioria dos brasileiros, a Rota Mercosul é a mais simples e mais barata. Este guia usa a Rota Mercosul como padrão e indica as diferenças da rota geral quando forem importantes.

---

### PÁGINA 9 — Capítulo 3 (continuação): Qual rota escolher?
TIPO: fluxograma
LAYOUT: fluxograma vertical com losangos de pergunta (azul) e retângulos de resposta (erva para Mercosul, areia para geral). Caixa de atenção no rodapé.
TEXTO (literal):
Qual rota escolher?

Pergunta 1: Você é brasileiro nato ou naturalizado, com documento brasileiro válido?
→ Não: a Rota Mercosul pode não se aplicar. Procure orientação na DNM.
→ Sim: siga para a pergunta 2.

Pergunta 2: Você tem certeza de que vai pedir a residência permanente antes de completar 2 anos?
→ Sim: Rota Mercosul.
→ Não sei / quero mais tempo para decidir: considere a rota geral, que pode ser prorrogada por mais 2 anos (com taxa de prorrogação de Gs 1.287.847).

Pergunta 3: Você tem filhos ou cônjuge paraguaios, ou vai investir por meio do SUACE?
→ Sim: existem caminhos específicos que podem dispensar a residência temporária. Consulte a DNM ou um advogado.
→ Não: siga a rota escolhida acima.

[box-atencao] Na Rota Mercosul, se você perder o prazo de pedido da permanente, perde os direitos do acordo e passa a depender das regras gerais. Marque a data no calendário no mesmo dia em que receber o carnet.

---

### PÁGINA 10 — Capítulo 4: A linha do tempo real
TIPO: fluxograma horizontal (linha do tempo)
LAYOUT: linha do tempo com 6 marcos em círculos numerados; abaixo de cada marco, quanto tempo leva. Caixa vermelha de destaque no final.
TEXTO (literal):
04
A linha do tempo real

1. Dias 1 a 20 — Preparação no Brasil
Documentos, apostila, orçamento, logística.

2. Dia 21 — Entrada no Paraguai
Registro de entrada com carimbo ou tarjeta migratória.

3. Dias 22 a 30 — Protocolo
Antecedentes locais e entrega do pedido na DNM. A partir daqui, você é residente precário.

4. Semanas ou meses depois — Residência temporária concedida
Retirada do carnet. A DNM não publica um prazo oficial de análise.

5. Depois da residência — Cédula paraguaia
Emitida pelo Departamento de Identificaciones da Policía Nacional.

6. Até 2 anos depois — Residência permanente
Pedido feito nos 90 dias antes do vencimento da temporária.

[box-atencao] O que os 30 dias entregam: você chega ao Dia 30 com o pedido de residência protocolado, os documentos organizados e o status de residente precário — que já permite trabalhar e estudar legalmente. A aprovação final depende da análise da DNM e não tem prazo garantido.

---

### PÁGINA 11 — Capítulo 5: Documentos que você prepara no Brasil
TIPO: abertura de capítulo + tabela
LAYOUT: "05" em vermelho; tabela com 4 colunas (Documento, Onde emitir, Precisa de apostila?, Observação).
TEXTO (literal):
05
Documentos que você prepara no Brasil

| Documento | Onde emitir | Apostila? | Observação |
|---|---|---|---|
| RG (emitido há menos de 10 anos), CIN ou passaporte válido | Órgão de identificação do estado / Polícia Federal | Não | Leve o original e cópias. O passaporte facilita bancos e viagens. |
| Certidão de nascimento | Cartório de Registro Civil onde você foi registrado, ou online pelo portal oficial dos cartórios | Sim | Peça uma via recente. Muitos atendimentos preferem emissão de até 90 dias. |
| Certidão de casamento ou de divórcio (se houver) | Cartório de Registro Civil | Sim | Necessária para comprovar o estado civil. |
| Certidão de antecedentes criminais | Polícia Federal (site gov.br) | Sim | Gratuita e online. Emita perto da data da apostila: a validade costuma ser de 90 dias. |
| Documentos dos filhos menores | Cartório / Polícia Federal | Sim (certidões) | Ver Bônus 3 — Mudança com a Família. |

[box-dica] Documentos emitidos no Brasil, em português, dispensam tradução para a residência pela Rota Mercosul, segundo a DNM. Você economiza o custo de tradutor juramentado.

O checklist completo está no Material 3 — Checklist 1.

---

### PÁGINA 12 — Capítulo 5 (continuação): Apostila de Haia sem erro
TIPO: conteúdo com etapas
LAYOUT: 5 etapas `.etapa` em coluna; caixa de erro comum no final.
TEXTO (literal):
Apostila de Haia sem erro

A apostila é o que faz o Paraguai aceitar um documento brasileiro. Sem ela, o documento não vale para a residência.

1. Emita primeiro, apostile depois. A apostila é feita sobre o documento original já emitido.
2. Procure um cartório que faça apostilamento. Nem todo cartório faz; confirme por telefone antes de ir.
3. Uma apostila por documento. Certidão de nascimento, de casamento e de antecedentes recebem, cada uma, a sua apostila.
4. Pergunte o valor antes. O preço é definido por tabela estadual e muda de um estado para outro.
5. Confira na hora. Verifique se o nome, a data e o número do documento na apostila estão iguais aos do documento.

[box-erro] Emitir a certidão de antecedentes cedo demais. Se ela passar de 90 dias até o dia do protocolo no Paraguai, pode ser recusada — e você terá que emitir e apostilar de novo, à distância.

---

### PÁGINA 13 — Capítulo 5 (continuação): Antecedentes da Polícia Federal
TIPO: conteúdo com etapas
LAYOUT: 4 etapas com ícones de tela de celular; caixa de dica.
TEXTO (literal):
Certidão de antecedentes da Polícia Federal

1. Acesse o site gov.br e procure por "Certidão de Antecedentes Criminais" da Polícia Federal.
2. Preencha seus dados exatamente como estão no seu documento de identidade.
3. Baixe o PDF da certidão. Ela é gratuita e sai na hora na maioria dos casos.
4. Imprima e leve ao cartório para apostilar.

Se a certidão não sair na hora: o site vai indicar o que fazer. Normalmente, isso acontece com nomes comuns (homônimos) e pode exigir atendimento presencial na Polícia Federal. Por isso, emita a primeira tentativa logo na Semana 2 do cronograma.

[box-dica] Guarde também o PDF original no celular e no e-mail. Se o papel se perder, você tem como imprimir de novo — mas lembre-se de que a apostila é feita sobre o papel, e precisaria ser refeita.

---

### PÁGINA 14 — Capítulo 6: A entrada no Paraguai
TIPO: abertura de capítulo + conteúdo
LAYOUT: "06" em vermelho; ilustração de posto de fronteira à direita; lista com ícones.
TEXTO (literal):
06
A entrada no Paraguai

Brasileiros podem entrar no Paraguai com passaporte válido ou com o RG/CIN, por serem cidadãos do Mercosul. A estadia como turista é de até 90 dias corridos, prorrogáveis uma vez a critério da DNM.

O que você precisa sair da fronteira com:
• Carimbo no passaporte ou tarjeta migratória (comprovante de entrada).
• O prazo de estadia que foi concedido — confira na hora, porque reclamações posteriores não são aceitas.

[box-atencao] Na fronteira por terra (por exemplo, Ponte da Amizade, entre Foz do Iguaçu e Ciudad del Este), é possível atravessar sem passar pela imigração — e muita gente faz isso. Para quem vai pedir residência, isso é um erro caro: o comprovante de entrada é obrigatório para o pedido, e a multa por falta de registro de ingresso é de Gs 702.462. Pare no posto da Polícia Federal (saída do Brasil) e no posto da DNM (entrada no Paraguai).
ARTE: posto de fronteira estilizado com uma pessoa entregando documento a um guichê, ponte ao fundo, sem bandeiras nem textos.

---

### PÁGINA 15 — Capítulo 6 (continuação): Antecedentes no Paraguai
TIPO: conteúdo
LAYOUT: duas caixas lado a lado (Rota Mercosul / Rota geral), cada uma com a lista do que tirar no Paraguai; dica no final.
TEXTO (literal):
Os documentos que você tira no Paraguai

Rota Mercosul
• Certificado de antecedentes para estrangeiros, emitido pela Policía Nacional do Paraguai (obrigatório a partir de 14 anos).
• Declaração jurada de não ter antecedentes internacionais — emitida pela própria DNM quando você inicia o trâmite.

Rota geral (Lei 6.984/2022)
• Certificado de antecedentes para estrangeiros, emitido pela Policía Nacional.
• Certificado da Interpol.
• Declarações juradas de cumprimento das leis, da atividade que vai exercer e do domicílio no país.

[box-dica] Confirme no atendimento da DNM ou da Policía Nacional o endereço atual e o horário de emissão dos certificados antes de ir. Os locais de atendimento mudam com frequência, e informações antigas circulam muito em grupos de internet.

---

### PÁGINA 16 — Capítulo 7: O protocolo na Migraciones
TIPO: abertura de capítulo + etapas
LAYOUT: "07" em vermelho; 6 etapas `.etapa`; ilustração de pasta organizada.
TEXTO (literal):
07
O protocolo na Migraciones

O pedido de residência é pessoal e presencial. Você pode acompanhar o processo por meio de um representante legal depois, mas a entrega é feita por você.

1. Vá cedo. O atendimento é por ordem de chegada, de segunda a sexta, das 7h às 14h30.
2. Leve a pasta montada na ordem do Checklist 3, com originais e cópias.
3. Leve o valor da taxa. Em dinheiro, só em guaranis. Cartões são aceitos pela máquina do local, com acréscimo.
4. Apresente os documentos e responda às perguntas com calma. Se não entender, peça para repetir: "¿Me lo puede repetir, por favor?"
5. Guarde todos os comprovantes: pagamento, protocolo e qualquer papel entregue a você.
6. Anote o que vem depois: quando e como acompanhar o processo e onde retirar o carnet.

O passo a passo do dia, com roteiro de conversa em espanhol, está no Material 6 — Roteiro de Viagem e Protocolo.
ARTE: pasta sanfonada azul com divisórias coloridas e documentos alinhados, sobre uma mesa clara.

---

### PÁGINA 17 — Capítulo 7 (continuação): Depois do protocolo
TIPO: conteúdo
LAYOUT: duas colunas: "Você pode" (ícones de check verde) e "Cuidado com" (ícones de alerta âmbar).
TEXTO (literal):
Depois do protocolo: o que muda na sua vida

Como residente precário, você pode:
✓ Trabalhar legalmente.
✓ Estudar.
✓ Sair do Paraguai e voltar durante o trâmite.
✓ Procurar moradia definitiva com mais tranquilidade.

Cuidado com:
! Prazos: acompanhe o processo e responda rápido se a DNM pedir algum documento.
! Viagens longas: antes de sair do país, confirme no atendimento quais documentos levar para reentrar como residente precário.
! Mudança de endereço: informe a DNM se mudar de domicílio durante o trâmite.
! Promessas de "aceleração": ninguém pode garantir prazo de aprovação. Veja o Bônus 6.

---

### PÁGINA 18 — Capítulo 8: Quanto custa (taxas oficiais)
TIPO: abertura de capítulo + tabela
LAYOUT: "08" em vermelho; tabela de taxas com 4 colunas; nota de rodapé em fonte menor.
TEXTO (literal):
08
Quanto custa: as taxas oficiais da Migraciones

Valores vigentes desde 1º de julho de 2026 (Resolução DNM nº 478/2026), pagamento em dinheiro:

| Procedimento | Valor oficial | Referência em reais* |
|---|---|---|
| Residência temporária — Rota Mercosul | Gs 2.341.540 | ≈ R$ 2.056 |
| Residência temporária — Rota geral (Lei 6.984/2022) | Gs 2.926.925 | ≈ R$ 2.570 |
| Residência permanente (inclui mudança de categoria) | Gs 2.926.925 | ≈ R$ 2.570 |
| Prorrogação da residência temporária (rota geral) | Gs 1.287.847 | ≈ R$ 1.131 |
| Certificado de radicación | Gs 234.154 | ≈ R$ 206 |
| Prorrogação de permanência como turista | Gs 585.385 | ≈ R$ 514 |
| Multa por estadia vencida | Gs 702.462 | ≈ R$ 617 |
| Multa por falta de registro de entrada | Gs 702.462 | ≈ R$ 617 |

*Conversão aproximada com a cotação do Banco Central do Paraguai de 31/08/2026 (R$ 1 = Gs 1.139). Pagando com cartão, o valor é maior (acréscimo de comissão). As taxas são cobradas por pessoa.

[box-oficial] Tabela atualizada: migraciones.gov.py → Aranceles Migratorios.

---

### PÁGINA 19 — Capítulo 8 (continuação): O orçamento total da mudança
TIPO: conteúdo com gráfico simples
LAYOUT: gráfico de barras horizontais (sem números exatos, só proporção visual) com as 6 categorias de custo; texto explicativo; caixa de dica com chamada para a planilha.
TEXTO (literal):
O orçamento total da mudança

A taxa da Migraciones é só uma parte. Para planejar de verdade, some estas 6 categorias:

1. Documentos no Brasil — certidões, apostilas, cópias, passaporte (se precisar).
2. Taxas no Paraguai — residência, antecedentes locais, cédula, eventuais multas.
3. Viagem — passagens ou combustível, pedágios, bagagem extra, seguro viagem.
4. Hospedagem provisória — os primeiros 30 dias, enquanto procura moradia.
5. Instalação — depósito do aluguel, garantia, comissão de imobiliária, móveis, chip de celular.
6. Reserva de vida — pelo menos 6 meses do seu custo mensal previsto.

Regra prática: some as 5 primeiras categorias e acrescente 15% de margem para imprevistos. A reserva de vida vem por cima disso, não dentro.

[box-dica] Use a Planilha de Custos (Material 5). Ela já vem com as taxas oficiais preenchidas, converte guaranis para reais e calcula o total por pessoa e por família.

---

### PÁGINA 20 — Capítulo 9: Depois da residência — os primeiros registros
TIPO: abertura de capítulo + lista de cartões
LAYOUT: "09" em vermelho; 5 cartões horizontais, cada um com ícone, título e 2 linhas.
TEXTO (literal):
09
Depois da residência: os primeiros registros

Cédula de identidad paraguaya
Emitida pelo Departamento de Identificaciones da Policía Nacional. A Lei 6.984/2022 permite a cédula ao residente temporário, com a mesma validade da residência. Na Rota Mercosul, a DNM informa que a cédula é emitida depois da concessão da residência: confirme no atendimento em que momento você poderá pedir a sua.

Certificado de radicación
Comprova que você é residente. Bancos, empresas e escolas costumam pedir. Taxa oficial: Gs 234.154.

RUC (registro de contribuinte)
Necessário para emitir faturas como autônomo ou abrir empresa. A inscrição na DNIT (Dirección Nacional de Ingresos Tributarios) é gratuita, começa online em dnit.gov.py e é finalizada em atendimento presencial. Procure um contador local antes de se registrar.

Conta bancária
A maioria dos bancos pede cédula ou comprovante de residência. Pergunte a lista de documentos ao banco antes de ir.

Chip de celular
Pode ser comprado logo na chegada, com documento de identidade. As principais operadoras são Tigo, Personal e Claro.

---

### PÁGINA 21 — Capítulo 9 (continuação): E no Brasil?
TIPO: conteúdo
LAYOUT: lista com ícones de pendência; caixa de atenção.
TEXTO (literal):
E o que fica pendente no Brasil?

Quem muda de país costuma esquecer o lado brasileiro. Organize estes pontos:

• Receita Federal: quem passa a morar fora pode precisar entregar a Comunicação e a Declaração de Saída Definitiva do País. Isso muda a forma como você é tributado no Brasil. Converse com um contador antes de decidir.
• Bancos e cartões: avise que vai morar fora e mantenha ao menos uma conta ativa no Brasil.
• Procuração: deixe uma pessoa de confiança com procuração para resolver assuntos no Brasil.
• Título de eleitor: brasileiros no exterior podem transferir o título para votar no exterior.
• INSS e previdência: verifique sua situação. Brasil e Paraguai fazem parte do Acordo Multilateral de Seguridade Social do Mercosul.
• Número de celular: mantenha o chip brasileiro ativo para receber códigos de bancos e do gov.br.

[box-atencao] Não deixe para resolver a parte da Receita Federal depois da mudança. Erros aqui geram multa e problemas no CPF.

---

### PÁGINA 22 — Capítulo 10: Da temporária à permanente
TIPO: abertura de capítulo + linha do tempo
LAYOUT: "10" em vermelho; régua de 24 meses com destaque vermelho nos 3 últimos meses; lista de documentos.
TEXTO (literal):
10
Da temporária à permanente

Na Rota Mercosul, a residência temporária vale 2 anos e não pode ser prorrogada. O pedido da residência permanente deve ser feito nos 90 dias anteriores ao vencimento.

O que normalmente é pedido para a permanente Mercosul:
• Comprovante da residência temporária.
• Documento de identidade.
• Certificado de antecedentes do Paraguai.
• Comprovação de meios de vida lícitos (renda, trabalho, empresa ou aposentadoria).
• Pagamento da taxa (Gs 2.926.925, valor de jul/2026).

Faça hoje:
1. Anote no seu calendário a data de vencimento da sua residência temporária.
2. Crie um lembrete 120 dias antes do vencimento para começar a juntar os documentos.
3. Crie outro lembrete 90 dias antes do vencimento: a partir desse dia você já pode pedir.
4. Guarde, desde o primeiro mês, comprovantes da sua renda no Paraguai.

[box-atencao] Perder esse prazo faz você perder os direitos do Acordo do Mercosul. Não existe "jeitinho" depois.

---

### PÁGINA 23 — Capítulo 11: Os 10 erros que mais atrasam a residência
TIPO: conteúdo (lista numerada)
LAYOUT: "11" em vermelho; lista em 2 colunas com números em círculos vermelhos.
TEXTO (literal):
11
Os 10 erros que mais atrasam a residência

1. Atravessar a fronteira por terra sem registrar a entrada.
2. Emitir a certidão de antecedentes cedo demais e deixá-la vencer.
3. Esquecer de apostilar um documento.
4. Levar o RG antigo (emitido há mais de 10 anos) como único documento.
5. Chegar à Migraciones sem guaranis em dinheiro e sem plano B para pagamento.
6. Deixar o prazo de turista (90 dias) vencer antes de protocolar.
7. Não levar cópias dos documentos.
8. Esquecer documentos dos filhos, como a autorização do outro genitor.
9. Acreditar em grupos de internet com informações antigas em vez de confirmar na DNM.
10. Pagar intermediários que prometem "residência garantida" ou "prazo acelerado".

Cada um desses erros tem um item de prevenção no Cronograma e nos Checklists.

---

### PÁGINA 24 — Capítulo 12: Gestor, advogado ou você mesmo?
TIPO: tabela
LAYOUT: "12" em vermelho; tabela de 3 colunas; lista de perguntas no final.
TEXTO (literal):
12
Gestor, advogado ou você mesmo?

| Situação | Você mesmo | Contrate ajuda |
|---|---|---|
| Adulto brasileiro, documentos em ordem, Rota Mercosul | Recomendado | Opcional |
| Família com filhos e um genitor que fica no Brasil | Possível | Recomendado |
| Nome com homônimo ou pendência na certidão de antecedentes | Difícil | Recomendado |
| Investimento, abertura de empresa ou compra de imóvel | Não recomendado | Recomendado |
| Residência negada ou pedido de documento extra | Não recomendado | Recomendado |

Se contratar, pergunte antes de pagar:
• O valor cobrado inclui ou não as taxas oficiais da DNM?
• O contrato e os recibos serão emitidos em nome de quem, com qual RUC?
• Quais etapas o profissional faz e quais você precisa fazer pessoalmente?
• Qual é a política em caso de exigência de novos documentos?

Desconfie de qualquer pessoa que garanta aprovação ou prazo. Veja as 15 verificações do Bônus 6.

---

### PÁGINA 25 — Próximos passos
TIPO: encerramento
LAYOUT: ilustração no topo (metade da página); 3 passos grandes numerados; frase final em azul.
TEXTO (literal):
Seus próximos passos

1. Abra a Planilha de Custos e preencha seus valores. Você vai saber hoje quanto precisa ter.
2. Imprima o Cronograma de 30 Dias e os 3 Checklists.
3. Marque no calendário a data do seu Dia 1 — e comece.

Você não precisa resolver tudo de uma vez. Precisa saber o que fazer hoje. Este kit foi feito para isso.
ARTE: uma pessoa sentada à mesa da cozinha, com uma cuia de tereré ao lado, marcando com caneta um calendário impresso na parede; luz da manhã entrando pela janela.

---

### PÁGINA 26 — Fontes oficiais e contatos
TIPO: conteúdo (referência)
LAYOUT: lista em 2 colunas agrupada por país; links clicáveis no PDF.
TEXTO (literal):
Fontes oficiais e contatos

Paraguai
• Dirección Nacional de Migraciones (DNM) — migraciones.gov.py
  Sede central: Caballero nº 201, esquina Eligio Ayala, Assunção
  +595 21 411 2000 · migraciones@migraciones.gov.py
• Tabela de taxas — migraciones.gov.py/aranceles-migratorios
• Residência temporária Mercosul — migraciones.gov.py/residencia-temporaria-mercosur
• Residência permanente Mercosul — migraciones.gov.py/residencia-permanente-mercosur
• Requisitos de entrada e saída — migraciones.gov.py/entrada-y-salida-del-pais
• Banco Central do Paraguai (cotações) — bcp.gov.py
• DNIT (impostos e RUC) — dnit.gov.py

Brasil
• Certidão de antecedentes da Polícia Federal — gov.br/pf
• Certidões de registro civil online — registrocivil.org.br
• Portal Consular do Itamaraty — gov.br/mre
• Receita Federal (saída definitiva) — gov.br/receitafederal

Legislação
• Lei nº 6.984/2022 (Lei de Migrações do Paraguai)
• Lei nº 3.578/2008 (aprova o Acordo de Residência do Mercosul no Paraguai)

Conteúdo verificado em outubro de 2026.


---

# MATERIAL 2 — CRONOGRAMA DE 30 DIAS (PDF visual e imprimível, 7 páginas)

> Instrução ao Codex: "Produza o Material 2 seguindo o prompt mestre, Modo A. Este material
> precisa funcionar impresso em preto e branco. Cada dia é um cartão com: número do dia grande,
> título da tarefa, 2 a 4 subtarefas com checkbox, e uma linha 'Feito em: ___/___'."

Layout geral das páginas de semana: cabeçalho com faixa azul "SEMANA X — Nome" e objetivo da
semana; abaixo, cartões dos dias em grade de 2 colunas. No rodapé de cada página de semana, uma
caixa "Revisão da semana" com 3 linhas em branco para anotações.

---

### PÁGINA 1 — Capa do cronograma
TIPO: capa
LAYOUT: calendário estilizado ilustrado ocupando o centro; título no topo; subtítulo e instruções em baixo.
TEXTO (literal):
PARAGUAI EM 30 DIAS
Cronograma de 30 Dias
Uma tarefa principal por dia. Do planejamento no Brasil ao protocolo da residência no Paraguai.

Como usar:
• Imprima e cole em um lugar visível.
• Faça uma tarefa principal por dia. Se adiantar, ótimo. Se atrasar, não pule etapas: siga a ordem.
• Marque cada item concluído e anote a data.
• Os dias 1 a 20 acontecem no Brasil. Os dias 21 a 30, no Paraguai.
ARTE: calendário de parede ilustrado com 30 quadradinhos, alguns já marcados com check verde, ao lado de uma mala e uma cuia de tereré. Sem números ou letras legíveis.

---

### PÁGINA 2 — Visão geral
TIPO: tabela
LAYOUT: 4 faixas horizontais (uma por semana) + faixa final "Dias 29–30". Cada faixa com nome, objetivo e entrega.
TEXTO (literal):
Visão geral dos 30 dias

Semana 1 (Dias 1 a 7) — Decisão e diagnóstico
Entrega: rota escolhida, cidade definida, orçamento preenchido, documentos de identidade conferidos.

Semana 2 (Dias 8 a 14) — Documentos no Brasil
Entrega: todas as certidões emitidas e apostiladas, pendências no Brasil organizadas.

Semana 3 (Dias 15 a 21) — Logística e viagem
Entrega: hospedagem provisória reservada, pasta de protocolo montada, entrada registrada no Paraguai.

Semana 4 (Dias 22 a 28) — Protocolo no Paraguai
Entrega: antecedentes locais emitidos, pedido de residência protocolado, busca de moradia iniciada.

Dias 29 e 30 — Organização do que vem depois
Entrega: calendário de prazos montado, plano dos próximos 90 dias.

---

### PÁGINA 3 — Semana 1: Decisão e diagnóstico
TIPO: checklist (cartões de dia)
TEXTO (literal):
SEMANA 1 — Decisão e diagnóstico
Objetivo: saber exatamente quem vai, para onde, por qual rota e com quanto dinheiro.

DIA 1 — Defina o projeto
☐ Escreva quem vai na mudança e a data desejada de viagem.
☐ Leia os capítulos 1 a 4 do Guia Prático.
☐ Crie uma pasta física e uma pasta digital (nuvem) chamadas "Paraguai".

DIA 2 — Confira os documentos de identidade
☐ Verifique a data de emissão do RG de cada pessoa (menos de 10 anos) ou a validade do passaporte.
☐ Se precisar, agende a emissão da CIN ou do passaporte hoje.
☐ Fotografe os documentos e salve na pasta digital.

DIA 3 — Escolha a rota
☐ Use o fluxograma da página 9 do Guia.
☐ Anote: "Minha rota é ________".
☐ Abra o Checklist 1 e marque quais documentos você já tem.

DIA 4 — Faça o orçamento
☐ Abra a Planilha de Custos e preencha a aba "Parâmetros".
☐ Preencha a aba "Custos da mudança" com estimativas.
☐ Compare o total com o dinheiro que você tem disponível hoje.

DIA 5 — Escolha a cidade
☐ Leia o Bônus 1 — Onde Morar no Paraguai.
☐ Escolha até 2 cidades e anote o motivo.
☐ Pesquise 5 anúncios de aluguel em cada uma e registre os valores na planilha.

DIA 6 — Planeje a renda
☐ Leia o Bônus 2 — Trabalho e Renda.
☐ Escreva de onde virá a renda nos primeiros 6 meses.
☐ Cadastre seu currículo em pelo menos 2 canais da lista, se for buscar emprego local.

DIA 7 — Revisão da semana
☐ Refaça o teste "Você está pronto?" (página 6 do Guia).
☐ Confirme: a reserva cobre a mudança + 6 meses de custo?
☐ Se a resposta for não, ajuste a data de viagem antes de seguir.

---

### PÁGINA 4 — Semana 2: Documentos no Brasil
TIPO: checklist (cartões de dia)
TEXTO (literal):
SEMANA 2 — Documentos no Brasil
Objetivo: ter todos os documentos brasileiros emitidos, apostilados e conferidos.

DIA 8 — Certidões de registro civil
☐ Peça a certidão de nascimento atualizada de cada pessoa (cartório ou registrocivil.org.br).
☐ Peça a certidão de casamento ou divórcio, se houver.
☐ Anote a data prevista de entrega de cada uma.

DIA 9 — Antecedentes criminais
☐ Emita a certidão de antecedentes da Polícia Federal de cada adulto (e de filhos a partir de 14 anos).
☐ Se não sair na hora, siga a orientação do site no mesmo dia.
☐ Anote a data de emissão: ela tem prazo.

DIA 10 — Localize o cartório de apostila
☐ Ligue para 2 cartórios e confirme: fazem apostila? Qual o valor por documento? Qual o prazo?
☐ Escolha um e agende, se necessário.
☐ Lance o valor na planilha.

DIA 11 — Apostile os documentos
☐ Leve: certidão de nascimento, de casamento (se houver) e de antecedentes.
☐ Confira na hora os dados de cada apostila.
☐ Guarde tudo em envelope plástico, sem dobrar.
☐ Se alguma certidão ainda não chegou, apostile assim que ela chegar — até o Dia 14.

DIA 12 — Documentos dos filhos (se houver)
☐ Siga o checklist "Documentos dos filhos" do Bônus 3.
☐ Se só um dos pais vai viajar, providencie a autorização de viagem do outro, com firma reconhecida.
☐ Peça na escola a declaração de escolaridade e o histórico escolar.

DIA 13 — Pendências no Brasil
☐ Agende conversa com contador sobre a Saída Definitiva do País (Receita Federal).
☐ Avise bancos e cartões; mantenha uma conta ativa.
☐ Defina quem vai ter procuração para você no Brasil.

DIA 14 — Revisão da semana
☐ Confira o Checklist 1 inteiro. Todos os itens marcados?
☐ Tire cópias de todos os documentos (2 de cada).
☐ Escaneie todos os documentos apostilados e salve na nuvem.

---

### PÁGINA 5 — Semana 3: Logística e viagem
TIPO: checklist (cartões de dia)
TEXTO (literal):
SEMANA 3 — Logística e viagem
Objetivo: chegar ao Paraguai com entrada registrada, hospedagem garantida e pasta de protocolo pronta.

DIA 15 — Hospedagem provisória
☐ Reserve hospedagem para os primeiros 15 a 30 dias, perto do local onde vai protocolar.
☐ Antes de pagar, aplique as verificações do Bônus 6.
☐ Lance o valor na planilha.

DIA 16 — Rota da viagem
☐ Escolha: avião, ônibus ou carro (ver Roteiro de Viagem, Material 6).
☐ Compre passagens ou planeje paradas.
☐ Contrate seguro viagem para o período até você ter cobertura no Paraguai.

DIA 17 — Dinheiro
☐ Defina como vai levar dinheiro: cartão internacional, conta global, dinheiro em espécie.
☐ Separe o valor da taxa da DNM em guaranis ou tenha um cartão aceito como plano B.
☐ Avise o banco da viagem para o cartão não ser bloqueado.

DIA 18 — Espanhol de sobrevivência
☐ Leia o Bônus 4 e treine em voz alta as frases das seções "Migraciones" e "Aluguel".
☐ Baixe um aplicativo de tradução com o idioma espanhol disponível offline.

DIA 19 — Bagagem e mudança
☐ Faça a lista do que vai na primeira viagem e do que vai depois.
☐ Separe remédios de uso contínuo com receita.
☐ Se tiver pet, verifique as exigências veterinárias (ver Bônus 3).

DIA 20 — Pasta de protocolo
☐ Monte a pasta seguindo a ordem do Checklist 3.
☐ Faça o Checklist 2 (entrada no Paraguai).
☐ Leve a pasta na bagagem de mão. Nunca despache.

DIA 21 — Viagem e entrada
☐ Registre a saída do Brasil (Polícia Federal) e a entrada no Paraguai (DNM).
☐ Confira o carimbo ou a tarjeta migratória e o prazo concedido.
☐ Fotografe o comprovante de entrada e guarde o original na pasta.

---

### PÁGINA 6 — Semana 4: Protocolo no Paraguai
TIPO: checklist (cartões de dia)
TEXTO (literal):
SEMANA 4 — Protocolo no Paraguai
Objetivo: entregar o pedido de residência e começar a vida local.

DIA 22 — Chegada e instalação
☐ Compre um chip de celular local.
☐ Confirme o trajeto até a DNM e até a Policía Nacional.
☐ Troque uma quantia de reais ou dólares por guaranis em casa de câmbio autorizada.

DIA 23 — Antecedentes no Paraguai
☐ Peça o certificado de antecedentes para estrangeiros na Policía Nacional (adultos e filhos a partir de 14 anos).
☐ Se estiver na rota geral, peça também o certificado da Interpol.
☐ Guarde os comprovantes na pasta.

DIA 24 — Ensaio do protocolo
☐ Releia o Roteiro de Protocolo (Material 6).
☐ Confira a pasta inteira com o Checklist 3.
☐ Separe o valor da taxa e prepare a roupa e o transporte para sair cedo.

DIA 25 — Protocolo na Migraciones
☐ Chegue antes do início do atendimento (7h).
☐ Entregue o pedido, pague a taxa e guarde todos os comprovantes.
☐ Anote como acompanhar o processo e quando voltar.

DIA 26 — Folga planejada
☐ Se algum documento foi pedido, resolva hoje.
☐ Se não, descanse e conheça o bairro. Você é residente precário.

DIA 27 — Busca de moradia definitiva
☐ Visite pelo menos 3 imóveis.
☐ Aplique as verificações do Bônus 6 antes de assinar ou pagar.
☐ Peça a minuta do contrato para ler com calma.

DIA 28 — Rotina local
☐ Faça o roteiro da Semana 2 do Bônus 5 (supermercado, transporte, compras).
☐ Atualize a planilha com os gastos reais até agora.

---

### PÁGINA 7 — Dias 29 e 30: Organização do que vem depois
TIPO: checklist + tabela de prazos
LAYOUT: cartões dos dias 29 e 30 em cima; abaixo, tabela "Meu calendário de prazos" com linhas em branco para preencher à mão.
TEXTO (literal):
DIAS 29 E 30 — O que vem depois

DIA 29 — Calendário de prazos
☐ Anote abaixo as datas importantes.
☐ Crie lembretes no celular para cada uma.

DIA 30 — Plano dos próximos 90 dias
☐ Defina: moradia definitiva, renda, escola dos filhos e plano de saúde.
☐ Comece o Bônus 5 — Meu Primeiro Mês no Paraguai.
☐ Compare o gasto real com o previsto na planilha e ajuste a reserva.

Meu calendário de prazos

| O quê | Data |
|---|---|
| Data do protocolo na DNM | ___/___/______ |
| Data limite da estadia como turista | ___/___/______ |
| Data prevista para retirar o carnet | ___/___/______ |
| Data de vencimento da residência temporária | ___/___/______ |
| 120 dias antes do vencimento (começar a juntar documentos) | ___/___/______ |
| 90 dias antes do vencimento (pedir a permanente) | ___/___/______ |

Parabéns por chegar até aqui. A parte mais difícil — começar — ficou para trás.


---

# MATERIAL 3 — 3 CHECKLISTS DE DOCUMENTAÇÃO (3 PDFs imprimíveis, 2 páginas cada)

> Instrução ao Codex: "Produza o Material 3 seguindo o prompt mestre, Modo A. Gere 3 PDFs
> separados. Layout de checklist: cabeçalho com faixa colorida (Checklist 1 azul, Checklist 2
> erva, Checklist 3 vermelho), nome do titular com linha para preencher, tabela com colunas
> [☐ | Documento | Observação | Por pessoa: 1 2 3 4]. A coluna 'Por pessoa' tem 4 quadradinhos
> pequenos para marcar cada membro da família. Precisa funcionar em preto e branco."

Campo no topo de todos os checklists:
`Titular: ______________________  Família (nomes): 1.__________ 2.__________ 3.__________ 4.__________`

---

## CHECKLIST 1 — Documentos para preparar no Brasil

### PÁGINA 1
TEXTO (literal):
CHECKLIST 1
Documentos para preparar no Brasil
Use entre os Dias 2 e 14 do cronograma.

Identidade
☐ RG emitido há menos de 10 anos, CIN ou passaporte válido — Original. Confira se a foto ainda permite reconhecer a pessoa.
☐ 2 cópias do documento de identidade (frente e verso) — Pergunte na DNM se a cópia precisa ser autenticada no Paraguai.
☐ Passaporte (recomendado mesmo se for entrar com RG) — Facilita bancos, voos e outros trâmites.

Registro civil
☐ Certidão de nascimento recente — Emitida de preferência há menos de 90 dias.
☐ Apostila da certidão de nascimento — Confira nome e datas.
☐ Certidão de casamento ou divórcio (se houver) — Comprova estado civil.
☐ Apostila da certidão de casamento ou divórcio — Uma apostila por documento.

Antecedentes
☐ Certidão de antecedentes criminais da Polícia Federal — Adultos e filhos a partir de 14 anos.
☐ Apostila da certidão de antecedentes — Faça perto da data de viagem: prazo de 90 dias.
☐ Data de emissão anotada: ___/___/______ — Vence em: ___/___/______

### PÁGINA 2
TEXTO (literal):
Filhos menores (se houver)
☐ Documento de identidade ou passaporte de cada filho
☐ Certidão de nascimento recente e apostilada de cada filho — Comprova o vínculo com os pais.
☐ Autorização de viagem do genitor que não vai viajar — Escrita, com firma reconhecida ou pelo e-Notariado.
☐ Autorização apostilada para uso no Paraguai (se um dos pais ficar no Brasil) — A DNM pede autorização notarial quando um dos pais está ausente. Confirme o formato no atendimento.
☐ Declaração de escolaridade e histórico escolar — Peça na escola atual.
☐ Carteira de vacinação — Leve original e foto.

Saúde e outros
☐ Receitas de medicamentos de uso contínuo
☐ Exames e laudos médicos importantes
☐ Diplomas e históricos (se pretende trabalhar na sua área) — Perguntar sobre apostila conforme o uso.
☐ CNH — Para dirigir como turista. Para residentes, verifique as regras de habilitação local.

Organização final
☐ Todos os documentos escaneados e salvos na nuvem
☐ 2 cópias impressas de cada documento
☐ Envelopes plásticos, sem dobrar os documentos apostilados

Total gasto com documentos: R$ ________ (lance na planilha)

---

## CHECKLIST 2 — Requisitos de entrada no Paraguai

### PÁGINA 1
TEXTO (literal):
CHECKLIST 2
Requisitos de entrada no Paraguai
Use no Dia 20 (preparação) e no Dia 21 (viagem).

Na bagagem de mão (nunca despache)
☐ Documento de identidade de viagem de cada pessoa (RG com menos de 10 anos, CIN ou passaporte)
☐ Pasta de protocolo completa (ver Checklist 3)
☐ Autorização de viagem dos filhos, se um dos pais não estiver viajando
☐ Comprovante da hospedagem provisória (endereço e telefone)
☐ Comprovante de seguro viagem
☐ Remédios de uso contínuo com receita
☐ Dinheiro para os primeiros dias e cartão internacional

Na saída do Brasil
☐ Passei pelo controle de saída da Polícia Federal (obrigatório também por terra)

Na entrada no Paraguai
☐ Passei pelo posto da Dirección Nacional de Migraciones
☐ Recebi carimbo no passaporte ou tarjeta migratória — de cada pessoa
☐ Conferi o prazo de estadia concedido: ______ dias
☐ Data limite da estadia como turista: ___/___/______

### PÁGINA 2
TEXTO (literal):
Depois de entrar
☐ Fotografei o carimbo ou a tarjeta de cada pessoa e salvei na nuvem
☐ Guardei o comprovante original de entrada na pasta de protocolo
☐ Comprei chip de celular local
☐ Anotei o endereço da DNM e o trajeto até lá

ATENÇÃO
Na fronteira por terra, é possível passar sem registrar a entrada. Não faça isso.
• O comprovante de entrada é exigido no pedido de residência.
• A multa por falta de registro de ingresso é de Gs 702.462 por pessoa (valor de julho de 2026).
• A multa por estadia vencida também é de Gs 702.462.

Contato da DNM: +595 21 411 2000 · migraciones@migraciones.gov.py

---

## CHECKLIST 3 — Documentação para solicitar a residência

### PÁGINA 1
TEXTO (literal):
CHECKLIST 3
Documentação para solicitar a residência temporária (Rota Mercosul)
Use nos Dias 20, 24 e 25. Monte a pasta nesta ordem.

Divisória 1 — Identidade
☐ Documento de identidade original (RG, CIN ou passaporte)
☐ Cópia do documento de identidade

Divisória 2 — Registro civil
☐ Certidão de nascimento apostilada
☐ Certidão de casamento ou divórcio apostilada (se houver)

Divisória 3 — Antecedentes
☐ Certidão de antecedentes da Polícia Federal apostilada (a partir de 14 anos)
☐ Certificado de antecedentes para estrangeiros da Policía Nacional do Paraguai (a partir de 14 anos)

Divisória 4 — Entrada no país
☐ Comprovante de entrada (carimbo no passaporte ou tarjeta migratória)

Divisória 5 — Filhos menores (se houver)
☐ Documentos de identidade dos pais ou responsáveis
☐ Certidão de nascimento apostilada que comprova o vínculo
☐ Autorização notarial do genitor ausente (se for o caso)

### PÁGINA 2
TEXTO (literal):
Divisória 6 — Pagamento
☐ Valor da taxa em guaranis, em dinheiro: Gs 2.341.540 por pessoa (valor de julho de 2026)
☐ Plano B: cartão de débito ou crédito (com acréscimo de comissão)

Divisória 7 — Cópias extras
☐ Uma cópia extra de cada documento da pasta
☐ Caneta azul

Se você estiver na rota geral (Lei 6.984/2022), acrescente:
☐ Certificado da Interpol
☐ Declarações juradas de cumprimento das leis, de atividade e de domicílio (verifique o modelo na DNM)
☐ Valor da taxa: Gs 2.926.925 por pessoa (valor de julho de 2026)

Depois do protocolo
☐ Recebi o comprovante de pagamento
☐ Recebi o comprovante do pedido / número do expediente: __________________
☐ Anotei como acompanhar o processo: __________________
☐ Anotei onde e quando retirar o carnet: __________________

Lembrete: a lista oficial pode mudar. Confira em migraciones.gov.py/residencia-temporaria-mercosur na semana do protocolo.


---

# MATERIAL 4 — MAPA DO PROCESSO DE RESIDÊNCIA (PDF visual, 3 páginas)

> Instrução ao Codex: "Produza o Material 4 seguindo o prompt mestre, Modo A. A página 2 é um
> fluxograma em formato de mapa/trilha — desenhe com HTML/CSS ou SVG (não com GPT Image), porque
> tem texto. Use o GPT Image só para a textura de fundo (mapa estilizado em tons de areia, sem
> nomes de lugares) e para os ícones dos órgãos."

---

### PÁGINA 1 — Capa do mapa
TIPO: capa
LAYOUT: ilustração de trilha sinuosa saindo de uma casa (Brasil, à esquerda embaixo) até uma casa com jardim de lapachos (Paraguai, à direita em cima), com 8 marcos ao longo do caminho. Título no topo.
TEXTO (literal):
PARAGUAI EM 30 DIAS
Mapa do Processo de Residência
Do primeiro documento no Brasil até a residência permanente no Paraguai: cada etapa, cada órgão, cada prazo.
ARTE: trilha pontilhada sinuosa sobre um mapa estilizado em tons de areia, 8 círculos vazios ao longo do caminho, uma casinha simples no início e uma casa com árvore de lapacho rosa no final. Sem texto, sem nomes de países.

---

### PÁGINA 2 — O mapa
TIPO: fluxograma (página principal — pode ser em formato paisagem A4)
LAYOUT: trilha com 8 estações numeradas. Cada estação é um cartão com: número (círculo vermelho), nome da etapa (azul), "Onde" (ícone de prédio), "O que sai daqui" (ícone de documento) e "Quando" (ícone de relógio). Estações 1–3 com fundo azul claro (BRASIL); estações 4–8 com fundo erva claro (PARAGUAI). Uma linha vermelha separando "Dentro dos 30 dias" (estações 1–5) de "Depois dos 30 dias" (estações 6–8).
TEXTO (literal):
O caminho completo

BRASIL

1. Certidões de registro civil
Onde: Cartório de Registro Civil (ou registrocivil.org.br)
O que sai daqui: certidão de nascimento e de casamento/divórcio
Quando: Dia 8 do cronograma

2. Antecedentes criminais
Onde: Polícia Federal (gov.br)
O que sai daqui: certidão de antecedentes criminais
Quando: Dia 9 — validade de 90 dias

3. Apostila de Haia
Onde: Cartório com serviço de apostilamento
O que sai daqui: certidões válidas no Paraguai
Quando: Dias 10 a 14

PARAGUAI

4. Entrada registrada
Onde: Posto da Dirección Nacional de Migraciones (fronteira ou aeroporto)
O que sai daqui: carimbo ou tarjeta migratória
Quando: Dia 21

5. Antecedentes locais e protocolo
Onde: Policía Nacional (antecedentes para estrangeiros) e sede ou escritório regional da DNM
O que sai daqui: pedido protocolado e status de residente precário
Quando: Dias 23 a 25

— fim dos 30 dias —

6. Residência temporária concedida
Onde: Dirección Nacional de Migraciones
O que sai daqui: carnet de residente temporário (2 anos)
Quando: após a análise da DNM — sem prazo oficial publicado

7. Cédula de identidad
Onde: Departamento de Identificaciones da Policía Nacional
O que sai daqui: cédula paraguaia
Quando: após a concessão da residência — confirme o momento no atendimento

8. Residência permanente
Onde: Dirección Nacional de Migraciones
O que sai daqui: carnet de residente permanente
Quando: pedido nos 90 dias anteriores ao vencimento da temporária

---

### PÁGINA 3 — Quem faz o quê
TIPO: tabela
LAYOUT: tabela de órgãos com ícone à esquerda; caixa de atenção no rodapé.
TEXTO (literal):
Quem faz o quê

| Órgão | País | Para que você vai lá |
|---|---|---|
| Cartório de Registro Civil | Brasil | Certidões de nascimento, casamento e divórcio |
| Cartório com apostilamento | Brasil | Apostila de Haia nas certidões |
| Polícia Federal | Brasil | Certidão de antecedentes criminais e controle de saída do país |
| Dirección Nacional de Migraciones (DNM) | Paraguai | Registro de entrada, pedido de residência, carnet, certificado de radicación, residência permanente |
| Policía Nacional | Paraguai | Certificado de antecedentes para estrangeiros |
| Departamento de Identificaciones (Policía Nacional) | Paraguai | Cédula de identidad paraguaia |
| DNIT — Dirección Nacional de Ingresos Tributarios | Paraguai | RUC, para quem vai trabalhar como autônomo ou abrir empresa |
| Receita Federal | Brasil | Comunicação e Declaração de Saída Definitiva do País (avalie com contador) |

[box-atencao] Três prazos que não podem ser perdidos:
1. 90 dias de validade da certidão de antecedentes.
2. 90 dias de estadia como turista — protocole antes que vençam.
3. 90 dias antes do vencimento da temporária — janela para pedir a permanente.


---

# MATERIAL 5 — PLANILHA DE CUSTOS DA MUDANÇA (Excel / Google Sheets)

## O arquivo já está pronto

`planilha-custos-mudanca-paraguai.xlsx` — **não gere pelo Codex nem pelo GPT Image.** Entregue
esse arquivo direto na área de membros.

Abas:
1. **Comece aqui** — instruções de uso.
2. **Resumo** — total por categoria, margem de imprevistos, reserva de vida, total necessário,
   comparação com o dinheiro disponível e total por pessoa.
3. **Parâmetros** — nº de adultos, filhos de 14–17, filhos < 14, rota (Mercosul/Geral, lista
   suspensa), cotações Gs/R$ e Gs/US$, margem, meses de reserva, dinheiro disponível.
4. **Taxas oficiais** — tabela da DNM vigente desde 01/07/2026 (Res. 478/2026), com conversão.
5. **Custos da mudança** — 33 itens em 6 categorias, moeda por item (R$/Gs/US$), quantidade já
   ligada ao nº de pessoas, valor previsto × real, status (lista suspensa).
6. **Custo mensal** — 14 itens de custo de vida, que definem o tamanho da reserva.

Células amarelas = o cliente preenche. Fórmulas testadas (recalculadas no LibreOffice, zero erros).
A taxa de residência muda automaticamente quando o cliente troca a rota.

Quando a DNM reajustar as taxas (normalmente em julho), atualize só a coluna C da aba
"Taxas oficiais" e a data no topo.

Para entregar como Google Sheets: suba o .xlsx no Google Drive → Abrir com Planilhas Google →
Arquivo → Fazer uma cópia → compartilhe o link no modo "Fazer uma cópia"
(troque `/edit` por `/copy` no final do link).

---

## Única peça visual (opcional) — capa para a área de membros

> Instrução ao Codex: "Gere apenas esta imagem de capa (thumbnail) para a área de membros,
> 1536×1024, sem texto. Eu coloco o título por cima."

ARTE: mesa de madeira clara vista de cima com um notebook aberto mostrando uma planilha genérica
(células coloridas sem números legíveis), uma calculadora, uma cuia de tereré, um passaporte
fechado sem brasão e algumas notas de dinheiro genéricas (não reconhecíveis como moeda real).
Luz natural, clima organizado e tranquilo.

Título para sobrepor: **Planilha de Custos da Mudança** · subtítulo: *Saiba quanto você precisa
antes de ir.*


---

# MATERIAL 6 — ROTEIRO PRÁTICO DE VIAGEM E PROTOCOLO (PDF prático, 8 páginas)

> Instrução ao Codex: "Produza o Material 6 seguindo o prompt mestre, Modo A. Formato prático:
> pensado para ser lido no celular no dia da viagem e do protocolo. Fonte do corpo 12 pt, muito
> espaço em branco, blocos curtos."

---

### PÁGINA 1 — Capa
TIPO: capa
TEXTO (literal):
PARAGUAI EM 30 DIAS
Roteiro Prático de Viagem e Protocolo
Como viajar, entrar no país do jeito certo e chegar à Migraciones com tudo organizado.
ARTE: estrada ao amanhecer com uma ponte sobre um rio largo ao fundo (inspirada no rio Paraná), um ônibus e um carro pequenos na estrada, e um avião discreto no céu. Sem placas legíveis, sem bandeiras.

---

### PÁGINA 2 — Escolha como chegar
TIPO: tabela
TEXTO (literal):
Como chegar ao Paraguai

| | Avião | Ônibus | Carro próprio |
|---|---|---|---|
| Melhor para | Quem vai morar em Assunção ou região | Quem quer economizar e leva pouca bagagem | Quem vai levar mais bagagem ou quer independência nos primeiros dias |
| Registro de entrada | No aeroporto, automático na fila de imigração | Na fronteira: o ônibus deve parar nos postos; confirme com a empresa | Na fronteira: você precisa parar por conta própria nos dois postos |
| Atenção | Limite de bagagem | Confira se a empresa para no controle migratório | Veículo brasileiro entra como turista; regras para quem vira residente são diferentes. Pesquise antes de decidir ficar com o carro no Paraguai |

Principais pontos de fronteira por terra usados por brasileiros:
• Foz do Iguaçu (PR) → Ciudad del Este — Ponte da Amizade
• Ponta Porã (MS) → Pedro Juan Caballero
• Guaíra (PR) → Salto del Guairá
• Mundo Novo (MS) → Salto del Guairá

---

### PÁGINA 3 — Passo a passo na fronteira por terra
TIPO: etapas
TEXTO (literal):
Na fronteira por terra: 5 passos

1. Antes de atravessar, pare no posto da Polícia Federal do lado brasileiro e registre a saída do Brasil.
2. Atravesse e pare no posto da Dirección Nacional de Migraciones do lado paraguaio.
3. Apresente o documento de cada pessoa (inclusive das crianças) e diga: "Vengo a vivir en Paraguay. Voy a pedir la residencia."
4. Receba o carimbo ou a tarjeta migratória de cada pessoa e confira o prazo concedido antes de sair do guichê.
5. Fotografe os comprovantes e guarde os originais na pasta de protocolo.

[box-erro] Atravessar direto, sem parar nos postos, como fazem compradores de um dia. Sem registro de entrada você não consegue protocolar a residência e ainda paga multa de Gs 702.462 por pessoa.

---

### PÁGINA 4 — Os primeiros 3 dias
TIPO: conteúdo (lista por dia)
TEXTO (literal):
Os primeiros 3 dias no Paraguai

Dia da chegada
• Vá direto para a hospedagem e confira se tudo está como anunciado.
• Guarde a pasta de documentos em lugar seguro.
• Compre um chip de celular local.

Segundo dia
• Troque dinheiro em casa de câmbio autorizada. Evite trocar com pessoas na rua.
• Faça o trajeto até a Policía Nacional e até a DNM para saber quanto tempo leva.
• Compre água, itens básicos e conheça o supermercado mais próximo.

Terceiro dia
• Peça o certificado de antecedentes para estrangeiros na Policía Nacional.
• Confira mais uma vez a pasta com o Checklist 3.
• Durma cedo: no dia do protocolo, você vai sair de madrugada.

---

### PÁGINA 5 — O dia do protocolo: antes de sair de casa
TIPO: checklist
TEXTO (literal):
O dia do protocolo: antes de sair

☐ Pasta completa na ordem do Checklist 3
☐ Documento de identidade original de cada pessoa
☐ Valor da taxa em guaranis, em dinheiro, separado em envelope
☐ Cartão de débito ou crédito como plano B
☐ Celular carregado e carregador portátil
☐ Água e um lanche (a espera pode ser longa)
☐ Caneta azul
☐ Roupa confortável e discreta
☐ Endereço da DNM salvo: Caballero nº 201, esquina Eligio Ayala, Assunção (ou o endereço do escritório regional onde você vai protocolar)
☐ Saída de casa programada para chegar antes das 7h

Se for com filhos: leve algo para eles se distraírem e os documentos de cada um em envelope separado, identificado com o nome.

---

### PÁGINA 6 — O dia do protocolo: lá dentro
TIPO: etapas
TEXTO (literal):
Lá dentro: o que acontece

1. Chegada e senha. O atendimento é por ordem de chegada. Pergunte onde pegar a senha ou em qual fila ficar: "¿Dónde saco el turno para residencia?"
2. Conferência dos documentos. Entregue a pasta organizada e espere a conferência. Se faltar algo, anote exatamente o quê.
3. Declaração jurada. Na Rota Mercosul, a declaração de não ter antecedentes internacionais é emitida pela própria DNM nesse momento.
4. Pagamento. Pague a taxa e guarde o comprovante.
5. Protocolo. Receba o comprovante do pedido e anote o número.
6. Antes de sair, pergunte: "¿Cómo puedo seguir el trámite?" e "¿Cuándo y dónde retiro el carnet?"

Mantenha a calma. Funcionários atendem muitas pessoas por dia. Ser educado, objetivo e organizado faz diferença.

---

### PÁGINA 7 — Frases para o protocolo
TIPO: tabela (português | espanhol)
TEXTO (literal):
Frases que você vai usar

| Português | Espanhol |
|---|---|
| Bom dia. Venho pedir a residência temporária Mercosul. | Buenos días. Vengo a solicitar la residencia temporaria Mercosur. |
| Onde pego a senha? | ¿Dónde saco el turno? |
| Aqui estão meus documentos. | Aquí están mis documentos. |
| Está faltando algum documento? | ¿Falta algún documento? |
| Pode repetir mais devagar, por favor? | ¿Me lo puede repetir más despacio, por favor? |
| Posso pagar com cartão? | ¿Puedo pagar con tarjeta? |
| Como acompanho o processo? | ¿Cómo puedo seguir el trámite? |
| Quando e onde retiro o carnet? | ¿Cuándo y dónde retiro el carnet? |
| Pode escrever para mim, por favor? | ¿Me lo puede escribir, por favor? |
| Muito obrigado(a). | Muchas gracias. |

Dica: se ficar nervoso, mostre esta página no celular para o atendente e aponte a frase.

---

### PÁGINA 8 — Depois do protocolo
TIPO: encerramento + checklist
TEXTO (literal):
Depois do protocolo

☐ Fotografei todos os comprovantes e salvei na nuvem
☐ Anotei o número do pedido: ______________________
☐ Anotei como acompanhar: ______________________
☐ Preenchi o "Meu calendário de prazos" (Cronograma, Dia 29)
☐ Lancei os valores pagos na Planilha de Custos

Se pediram documento extra:
1. Anote exatamente o nome do documento e o prazo.
2. Se o documento for brasileiro, veja se pode ser emitido online e apostilado por alguém com procuração no Brasil.
3. Volte à DNM com o documento e o comprovante do pedido.

Você protocolou. Agora é residente precário e pode trabalhar e estudar legalmente enquanto a DNM analisa o seu pedido.
ARTE: pessoa saindo de um prédio público genérico (sem placas ou brasões) segurando uma pasta e sorrindo levemente, sol da manhã, árvores de lapacho amarelo na calçada.


---

# BÔNUS 1 — ONDE MORAR NO PARAGUAI (PDF, 8 páginas)

> Instrução ao Codex: "Produza o Bônus 1 seguindo o prompt mestre, Modo A. Cada cidade é uma
> ficha de 1 página com layout idêntico: ilustração da cidade no topo (30% da página), nome,
> 'perfil em uma frase', tabela de 5 critérios com nota visual de 1 a 5 (bolinhas preenchidas,
> funciona em P&B), bloco 'Aluguel de referência', bloco 'Para quem combina' e bloco 'Atenção'."

---

### PÁGINA 1 — Capa
TIPO: capa
TEXTO (literal):
BÔNUS 1
Onde Morar no Paraguai
5 fichas comparativas para escolher sua cidade com base em aluguel, infraestrutura e estilo de vida.
ARTE: colagem ilustrada de 5 pequenas vinhetas em círculos: prédios modernos ao lado de uma fachada colonial (Assunção); ruas residenciais arborizadas (Grande Assunção); ponte e rio largo com movimento comercial (Ciudad del Este); praia de rio com calçadão ao pôr do sol (Encarnación); lago calmo com casas de veraneio e árvores (San Bernardino). Sem textos nem nomes.

---

### PÁGINA 2 — Como ler as fichas
TIPO: conteúdo
TEXTO (literal):
Como ler as fichas

Cada cidade recebe uma nota de 1 a 5 em cinco critérios:
• Custo de moradia (5 = mais barato)
• Infraestrutura (hospitais, escolas, serviços)
• Oportunidades de trabalho e negócios
• Tranquilidade e ritmo de vida
• Proximidade com o Brasil

As notas são uma comparação entre estas 5 cidades, não uma avaliação absoluta.

Sobre os valores de aluguel: são faixas observadas em anúncios publicados em 2026, não valores de contratos fechados. O preço real depende muito do bairro, do estado do imóvel e de ser mobiliado ou não. Use as faixas para ter uma ideia e confirme sempre com anúncios atuais — a última página tem uma tabela para você registrar a sua pesquisa.

[box-atencao] Em 2026, o guaraní se valorizou frente ao real. Valores em dólar ou em guaranis podem parecer baixos, mas convertidos para reais podem surpreender. Sempre converta na Planilha de Custos.

---

### PÁGINA 3 — Ficha: Assunção
TIPO: ficha
TEXTO (literal):
ASSUNÇÃO
A capital: mais serviços, mais oportunidades e o aluguel mais caro do país.

| Critério | Nota |
|---|---|
| Custo de moradia | ●●○○○ |
| Infraestrutura | ●●●●● |
| Trabalho e negócios | ●●●●● |
| Tranquilidade | ●●○○○ |
| Proximidade com o Brasil | ●●○○○ |

Aluguel de referência (apartamento de 2 quartos, anúncios 2026):
• Bairros intermediários: cerca de US$ 300 a US$ 500 por mês.
• Bairros nobres (como Villa Morra e Carmelitas): cerca de US$ 500 a US$ 800 ou mais.
• A mediana dos anúncios de 2 dormitórios em setembro de 2026 era de Gs 6.500.000, puxada pelos prédios novos.

Para quem combina: quem precisa de emprego local, atendimento médico completo, escolas bilíngues e vida urbana.

Atenção: trânsito intenso nos horários de pico e calor forte no verão. O preço varia muito de um bairro para outro — visite antes de fechar.
ARTE: avenida com prédios modernos de vidro ao lado de uma fachada colonial em tom pastel, lapachos rosa floridos, céu azul.

---

### PÁGINA 4 — Ficha: Grande Assunção (Luque, San Lorenzo, Lambaré, Fernando de la Mora)
TIPO: ficha
TEXTO (literal):
GRANDE ASSUNÇÃO
Luque, San Lorenzo, Lambaré e Fernando de la Mora: perto da capital, com aluguel geralmente menor.

| Critério | Nota |
|---|---|
| Custo de moradia | ●●●○○ |
| Infraestrutura | ●●●○○ |
| Trabalho e negócios | ●●●●○ |
| Tranquilidade | ●●●○○ |
| Proximidade com o Brasil | ●●○○○ |

Aluguel de referência: não há uma média confiável publicada para essas cidades. Em geral, os valores ficam abaixo dos bairros centrais de Assunção. Pesquise anúncios por cidade e por bairro.

Destaques:
• Luque abriga o Aeroporto Internacional Silvio Pettirossi.
• San Lorenzo concentra campus universitários e comércio popular.
• Lambaré fica às margens do rio Paraguai, colada à capital.

Para quem combina: quem trabalha em Assunção ou quer acesso à capital pagando menos de aluguel.

Atenção: o deslocamento diário até Assunção pode levar bastante tempo no trânsito. Simule o trajeto no horário em que você vai circular.
ARTE: rua residencial arborizada com casas baixas e muros coloridos, um ônibus urbano passando, céu de fim de tarde.

---

### PÁGINA 5 — Ficha: Ciudad del Este
TIPO: ficha
TEXTO (literal):
CIUDAD DEL ESTE
A cidade do comércio, colada em Foz do Iguaçu.

| Critério | Nota |
|---|---|
| Custo de moradia | ●●●○○ |
| Infraestrutura | ●●●○○ |
| Trabalho e negócios | ●●●●○ |
| Tranquilidade | ●●○○○ |
| Proximidade com o Brasil | ●●●●● |

Aluguel de referência (anúncios 2026):
• Apartamento de 2 quartos no centro: cerca de US$ 250 a US$ 600 por mês, conforme a fonte e o bairro.
• A mediana dos anúncios de 2 dormitórios em setembro de 2026 era de Gs 4.500.000.

Para quem combina: quem trabalha com comércio, importação e serviços, ou quer estar a poucos minutos do Brasil.

Atenção: o centro comercial é muito movimentado e exige atenção redobrada com objetos de valor. Prefira bairros residenciais para morar e conheça-os de dia e à noite.
ARTE: ponte sobre um rio largo com tráfego, prédios comerciais ao fundo e uma área residencial arborizada em primeiro plano.

---

### PÁGINA 6 — Ficha: Encarnación
TIPO: ficha
TEXTO (literal):
ENCARNACIÓN
Praias de rio, calçadão e um ritmo mais calmo no sul do país.

| Critério | Nota |
|---|---|
| Custo de moradia | ●●●○○ |
| Infraestrutura | ●●●○○ |
| Trabalho e negócios | ●●●○○ |
| Tranquilidade | ●●●●○ |
| Proximidade com o Brasil | ●●●○○ |

Aluguel de referência (anúncios 2026):
• Apartamento de 2 quartos: cerca de US$ 200 a US$ 700 por mês, conforme a fonte e o bairro.
• A mediana dos anúncios de 2 dormitórios em setembro de 2026 era de Gs 4.155.000.

Para quem combina: famílias, aposentados e trabalhadores remotos que buscam qualidade de vida e uma cidade de porte médio.

Atenção: a cidade lota na temporada de verão, e o aluguel por temporada fica mais caro. Faz fronteira com Posadas, na Argentina — não com o Brasil.
ARTE: calçadão à beira de um rio largo com praia de areia clara, palmeiras e pôr do sol alaranjado.

---

### PÁGINA 7 — Ficha: San Bernardino
TIPO: ficha
TEXTO (literal):
SAN BERNARDINO
Cidade pequena à beira do Lago Ypacaraí, a cerca de uma hora de Assunção.

| Critério | Nota |
|---|---|
| Custo de moradia | ●●●○○ |
| Infraestrutura | ●●○○○ |
| Trabalho e negócios | ●○○○○ |
| Tranquilidade | ●●●●● |
| Proximidade com o Brasil | ●●○○○ |

Aluguel de referência: não há uma média confiável publicada. Há muitas casas de veraneio, e os preços sobem no verão. Pesquise contratos anuais, não diárias.

Para quem combina: trabalhadores remotos, aposentados e quem quer natureza e silêncio, aceitando ir a Assunção para serviços maiores.

Atenção: fora da temporada, o comércio é reduzido. Para hospitais e escolas mais completos, conte com o deslocamento até a capital.
ARTE: lago calmo com pequenas casas entre árvores, deque de madeira, céu limpo.

---

### PÁGINA 8 — Comparativo e sua pesquisa
TIPO: tabela + ficha de pesquisa
TEXTO (literal):
Comparativo rápido

| Cidade | Moradia | Infraestrutura | Trabalho | Tranquilidade | Perto do Brasil |
|---|---|---|---|---|---|
| Assunção | ●●○○○ | ●●●●● | ●●●●● | ●●○○○ | ●●○○○ |
| Grande Assunção | ●●●○○ | ●●●○○ | ●●●●○ | ●●●○○ | ●●○○○ |
| Ciudad del Este | ●●●○○ | ●●●○○ | ●●●●○ | ●●○○○ | ●●●●● |
| Encarnación | ●●●○○ | ●●●○○ | ●●●○○ | ●●●●○ | ●●●○○ |
| San Bernardino | ●●●○○ | ●●○○○ | ●○○○○ | ●●●●● | ●●○○○ |

E Pedro Juan Caballero?
Ela é muito procurada por quem vem do Mato Grosso do Sul, por fazer fronteira seca com Ponta Porã. Ficou fora da lista porque a região tem histórico frequente de violência ligada ao crime organizado na fronteira. Se for considerar, pesquise a situação atual de segurança e visite antes de decidir.

Minha pesquisa de aluguel
| Cidade / bairro | Tipo de imóvel | Valor anunciado | Mobiliado? | Link ou contato |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

Onde pesquisar: InfoCasas, Clasipar e os classificados dos jornais ABC Color e Última Hora. Antes de pagar qualquer valor, aplique as 15 verificações do Bônus 6.


---

# BÔNUS 2 — TRABALHO E RENDA NO PARAGUAI (PDF, 6 páginas)

> Instrução ao Codex: "Produza o Bônus 2 seguindo o prompt mestre, Modo A. Os 20 canais aparecem
> como cartões numerados (número grande em vermelho), com nome, endereço do site, 'para que serve'
> e 'dica'. Links clicáveis. NÃO acrescente canais além destes 20."

---

### PÁGINA 1 — Capa
TIPO: capa
TEXTO (literal):
BÔNUS 2
Trabalho e Renda no Paraguai
20 canais e fontes de pesquisa para buscar emprego, trabalho remoto e oportunidades de negócio.
ARTE: mesa com notebook, caderno com anotações, um celular e uma cuia de tereré; ao fundo, uma janela com vista para uma rua arborizada. Sem texto legível nas telas.

---

### PÁGINA 2 — Antes de procurar
TIPO: conteúdo
TEXTO (literal):
Antes de procurar: 3 verdades sobre renda no Paraguai

1. Os salários locais costumam ser menores que no Brasil. Para muitas famílias, o melhor plano é chegar com renda que já existe (trabalho remoto, clientes no Brasil, aposentadoria, negócio) e buscar o emprego local como complemento.
2. O espanhol abre portas. Em vagas com atendimento ao público, falar bem espanhol é decisivo. Em algumas regiões, o guarani também é valorizado.
3. Você pode trabalhar desde o protocolo. Como residente precário, já pode trabalhar legalmente enquanto a residência é analisada.

[box-atencao] Se você vai continuar recebendo de clientes ou empresas do Brasil, converse com um contador nos dois países sobre onde e como declarar essa renda. Fazer isso errado gera problemas nos dois lados.

---

### PÁGINA 3 — Emprego no Paraguai (canais 1 a 8)
TIPO: cartões
TEXTO (literal):
Emprego no Paraguai

1. EmpleaPy — emplea.mtess.gov.py
Para que serve: portal oficial de vagas do Ministério do Trabalho do Paraguai (MTESS).
Dica: cadastre o currículo completo; as vagas são atualizadas com frequência.

2. Feiras de emprego do MTESS
Para que serve: eventos presenciais com dezenas de empresas contratando, como a Expo Empleo.
Dica: acompanhe as notícias do MTESS e leve currículos impressos em espanhol.

3. Computrabajo Paraguai — py.computrabajo.com
Para que serve: um dos sites de vagas mais usados no país.
Dica: ative alertas de vagas por cidade e área.

4. LinkedIn — linkedin.com
Para que serve: vagas de empresas maiores, multinacionais e cargos qualificados.
Dica: coloque "Paraguay" como localização e escreva o resumo do perfil em espanhol.

5. TopTrabajos Paraguai — toptrabajos.com/py
Para que serve: agregador de vagas de vários sites.
Dica: use para descobrir empresas que estão contratando na sua área.

6. BuscoJobs Paraguai
Para que serve: site de vagas com presença no Paraguai.
Dica: compare as vagas com as dos outros canais para evitar duplicidade.

7. Clasipar — clasipar.paraguay.com
Para que serve: classificados gerais, incluindo empregos e serviços.
Dica: bom para vagas operacionais e para anunciar seus próprios serviços.

8. Classificados do ABC Color e da Última Hora
Para que serve: vagas publicadas pelos dois maiores jornais do país.
Dica: confira as edições de fim de semana, que costumam concentrar anúncios.

---

### PÁGINA 4 — Trabalho remoto e freelance (canais 9 a 15)
TIPO: cartões
TEXTO (literal):
Trabalho remoto e freelance

9. Workana — workana.com
Para que serve: projetos freelance de clientes da América Latina, em português e espanhol.
Dica: morar no Paraguai e falar os dois idiomas é um diferencial; destaque isso no perfil.

10. Upwork — upwork.com
Para que serve: projetos freelance de clientes do mundo todo, principalmente em inglês.
Dica: comece com projetos menores para construir avaliações.

11. Fiverr — fiverr.com
Para que serve: venda de serviços em pacotes com preço fixo.
Dica: crie pacotes claros, com prazo e entregas bem definidos.

12. Get on Board — getonbrd.com
Para que serve: vagas de tecnologia e trabalho remoto na América Latina.
Dica: filtre por vagas 100% remotas que aceitam candidatos de qualquer país da região.

13. We Work Remotely — weworkremotely.com
Para que serve: vagas remotas internacionais.
Dica: confira se a vaga aceita profissionais fora dos Estados Unidos ou da Europa.

14. Remote OK — remoteok.com
Para que serve: vagas remotas internacionais em várias áreas.
Dica: use os filtros de região e de fuso horário.

15. 99Freelas — 99freelas.com.br
Para que serve: projetos de clientes brasileiros.
Dica: manter clientes no Brasil é uma das formas mais rápidas de ter renda no Paraguai.

---

### PÁGINA 5 — Negócios e qualificação (canais 16 a 20)
TIPO: cartões
TEXTO (literal):
Negócios e qualificação

16. SUACE — Sistema Unificado de Apertura y Cierre de Empresas
Para que serve: abertura e encerramento de empresas em um único sistema.
Dica: converse com um contador local antes de escolher o tipo de empresa.

17. DNIT — Dirección Nacional de Ingresos Tributarios — dnit.gov.py
Para que serve: registro de contribuinte (RUC), notas fiscais e impostos.
Dica: o RUC é necessário para trabalhar como autônomo e emitir faturas.

18. REDIEX — Red de Inversiones y Exportaciones (Ministério da Indústria e Comércio)
Para que serve: informações oficiais para quem quer investir ou exportar a partir do Paraguai.
Dica: útil para quem pensa em empresa de médio porte ou indústria.

19. Regime de maquila — CNIME (Consejo Nacional de las Industrias Maquiladoras de Exportación)
Para que serve: regime que permite produzir no Paraguai para exportação com tributação reduzida.
Dica: é um caminho para empresas brasileiras; exige planejamento com especialistas.

20. SNPP — Servicio Nacional de Promoción Profesional
Para que serve: cursos profissionalizantes do governo paraguaio.
Dica: além de qualificação, os cursos ajudam a fazer contatos e praticar espanhol.

---

### PÁGINA 6 — Plano de renda em 1 página
TIPO: ficha para preencher
TEXTO (literal):
Meu plano de renda

Minha renda que já existe hoje (e continua no Paraguai):
_____________________________________________ R$ ________ por mês

Minha meta de renda no Paraguai nos primeiros 6 meses:
_____________________________________________ R$ ________ por mês

Canais que vou usar (escolha até 4):
1. ________________________
2. ________________________
3. ________________________
4. ________________________

Meu currículo em espanhol está pronto? ☐ Sim ☐ Não — prazo: ___/___/______

Vou precisar de RUC? ☐ Sim ☐ Não ☐ Vou perguntar ao contador

Se em 90 dias eu não atingir a meta, meu plano B é:
_____________________________________________________________


---

# BÔNUS 3 — MUDANÇA COM A FAMÍLIA (PDF, 5 páginas)

> Instrução ao Codex: "Produza o Bônus 3 seguindo o prompt mestre, Modo A. Três checklists
> imprimíveis (Escola, Saúde, Preparação com filhos), cada um em 1 página, com a mesma estrutura
> visual dos checklists do Material 3."

---

### PÁGINA 1 — Capa
TIPO: capa
TEXTO (literal):
BÔNUS 3
Mudança com a Família
3 checklists práticos sobre escola, saúde e preparação da mudança com filhos.
ARTE: família brasileira (pai, mãe, uma criança de uns 7 anos e um adolescente) arrumando caixas de mudança juntos numa sala clara, com um cachorro pequeno ao lado. Clima leve e colaborativo.

---

### PÁGINA 2 — Checklist: Escola
TIPO: checklist
TEXTO (literal):
CHECKLIST — Escola

No Brasil
☐ Declaração de matrícula ou de escolaridade de cada filho
☐ Histórico escolar atualizado
☐ Boletim do último ano
☐ Pergunte à escola nova (ou ao Ministério de Educación y Ciencias do Paraguai) se o histórico precisa de apostila
☐ Carteira de vacinação (escolas podem pedir)

Entendendo o sistema paraguaio
☐ O ano letivo no Paraguai começa no fim de fevereiro e termina entre novembro e dezembro.
☐ Brasil e Paraguai têm acordo do Mercosul para reconhecimento de estudos do ensino fundamental e médio. Confirme com a escola como será feita a equivalência da série.
☐ O Acordo de Residência do Mercosul garante aos filhos de imigrantes o acesso à educação.
☐ Há escolas públicas, particulares e particulares subvencionadas. Muitas escolas particulares ensinam em espanhol e inglês; poucas em português.

Ao escolher a escola
☐ Visitei pelo menos 2 escolas
☐ Perguntei o valor da matrícula, da mensalidade, do uniforme e do material
☐ Perguntei se a escola oferece apoio no espanhol para alunos estrangeiros
☐ Perguntei quais documentos são exigidos para a matrícula
☐ Calculei o trajeto casa–escola no horário de entrada
☐ Lancei os custos na aba "Custo mensal" da planilha

---

### PÁGINA 3 — Checklist: Saúde
TIPO: checklist
TEXTO (literal):
CHECKLIST — Saúde

Antes de viajar
☐ Seguro viagem para todos, válido até você ter outra cobertura no Paraguai
☐ Consulta de rotina e exames em dia
☐ Receitas de todos os medicamentos de uso contínuo
☐ Estoque de medicamentos para os primeiros 60 dias
☐ Cópia dos laudos e exames importantes (física e digital)
☐ Carteira de vacinação de todos

Entendendo o sistema paraguaio
☐ Sistema público: hospitais e postos do Ministério da Saúde Pública e Bem-Estar Social atendem a população.
☐ IPS (Instituto de Previsión Social): seguro social de quem trabalha com carteira assinada; o empregador e o trabalhador contribuem.
☐ Seguros médicos privados (medicina prepaga): a opção mais usada por quem busca atendimento particular. Compare coberturas, carências e rede credenciada.

Depois de chegar
☐ Localizei o hospital e o pronto-atendimento mais próximos de casa
☐ Pedi cotação de pelo menos 2 seguros médicos privados para toda a família
☐ Perguntei sobre carência e doenças preexistentes
☐ Encontrei uma farmácia de confiança perto de casa
☐ Salvei os números de emergência no celular

---

### PÁGINA 4 — Checklist: Preparação da mudança com filhos
TIPO: checklist
TEXTO (literal):
CHECKLIST — Preparação com filhos

Documentos
☐ Documento de viagem de cada filho (RG emitido há menos de 10 anos, CIN ou passaporte)
☐ Certidão de nascimento recente e apostilada de cada filho
☐ Se só um dos pais viaja: autorização do outro, por escrito, com firma reconhecida ou pelo e-Notariado
☐ Se um dos pais fica no Brasil: autorização notarial para a residência no Paraguai (a DNM pede quando um dos pais está ausente). Confirme o formato antes de viajar.
☐ Se houver guarda definida judicialmente: cópia da decisão

Conversa com os filhos
☐ Explicamos o motivo da mudança de forma adequada à idade
☐ Mostramos fotos e vídeos da cidade nova
☐ Combinamos como vão manter contato com avós e amigos
☐ Começamos a ouvir músicas e desenhos em espanhol em casa

Pets
☐ Consultei o veterinário sobre vacinas e exames exigidos
☐ Verifiquei as exigências do Ministério da Agricultura (Brasil) para emissão do certificado veterinário internacional
☐ Verifiquei as exigências do SENACSA (Paraguai) para entrada de animais
☐ Separei caixa de transporte, ração e documentos do pet

Primeira semana no Paraguai
☐ Rotina de sono e alimentação mantida o mais parecida possível
☐ Um passeio de lazer planejado para os primeiros dias
☐ Lista de parques e praças perto de casa

---

### PÁGINA 5 — Encerramento
TIPO: encerramento
TEXTO (literal):
Mudança em família é um projeto de todos

Crianças costumam se adaptar mais rápido do que os adultos imaginam — principalmente quando participam das decisões. Dê a elas tarefas pequenas: escolher a cor do quarto, montar a mochila da viagem, aprender 5 palavras novas em espanhol por semana.

Lembre-se: cada pessoa da família, inclusive cada criança, tem o seu próprio pedido de residência e a sua própria taxa. Coloque todos na Planilha de Custos e confirme no atendimento da DNM os valores para menores.
ARTE: criança e adulto de mãos dadas olhando para uma praça arborizada com lapachos amarelos, de costas, clima de descoberta.


---

# BÔNUS 4 — ESPANHOL DE SOBREVIVÊNCIA NO PARAGUAI (PDF, 6 páginas)

> Instrução ao Codex: "Produza o Bônus 4 seguindo o prompt mestre, Modo A. Cada frase em uma
> linha de tabela com 3 colunas: Português | Espanhol (em negrito azul) | Como se fala (pronúncia
> aproximada para brasileiros, em itálico). Numere as frases de 1 a 30. Pensado para ser aberto no
> celular na hora da conversa: fonte grande, 6 frases por página."

---

### PÁGINA 1 — Capa e como usar
TIPO: capa + conteúdo
TEXTO (literal):
BÔNUS 4
Espanhol de Sobrevivência no Paraguai
30 frases essenciais para aluguel, compras, transporte e atendimento.

Como usar:
• Leia em voz alta. A pronúncia aproximada está ao lado de cada frase.
• Em caso de dúvida, mostre a frase no celular para a pessoa.
• No Paraguai, muita gente usa "vos" no lugar de "tú" no dia a dia. Em atendimento formal, use "usted" — nunca é falta de educação.
ARTE: dois balões de conversa estilizados (um azul, um vermelho) sem texto, sobre um fundo de rua com lapachos.

---

### PÁGINA 2 — Aluguel (frases 1 a 6)
TIPO: tabela
TEXTO (literal):
ALUGUEL

| Nº | Português | Espanhol | Como se fala |
|---|---|---|---|
| 1 | Estou procurando um apartamento para alugar. | Estoy buscando un departamento para alquilar. | es-TOI bus-CAN-do un de-par-ta-MEN-to pa-ra al-qui-LAR |
| 2 | Quanto custa o aluguel por mês? | ¿Cuánto cuesta el alquiler por mes? | CUAN-to CUES-ta el al-qui-LER por mes |
| 3 | O condomínio está incluído? | ¿Las expensas están incluidas? | las ex-PEN-sas es-TAN in-clu-I-das |
| 4 | Está mobiliado? | ¿Está amueblado? | es-TÁ a-mue-BLA-do |
| 5 | Quais são as garantias exigidas? | ¿Qué garantías piden? | QUÊ ga-ran-TÍ-as PI-den |
| 6 | Posso ler o contrato com calma antes de assinar? | ¿Puedo leer el contrato con calma antes de firmar? | PUE-do le-ER el con-TRA-to con CAL-ma AN-tes de fir-MAR |

---

### PÁGINA 3 — Compras e supermercado (frases 7 a 12)
TIPO: tabela
TEXTO (literal):
COMPRAS E SUPERMERCADO

| Nº | Português | Espanhol | Como se fala |
|---|---|---|---|
| 7 | Quanto custa? | ¿Cuánto cuesta? | CUAN-to CUES-ta |
| 8 | Aceita cartão? | ¿Acepta tarjeta? | a-SEP-ta tar-RRE-ta |
| 9 | Pode me dar a nota fiscal? | ¿Me puede dar la factura? | me PUE-de dar la fac-TU-ra |
| 10 | Onde fica a seção de limpeza? | ¿Dónde está la sección de limpieza? | DON-de es-TÁ la sec-SION de lim-PIE-sa |
| 11 | Tem uma sacola? | ¿Tiene una bolsa? | TIE-ne U-na BOL-sa |
| 12 | Só estou olhando, obrigado. | Solo estoy mirando, gracias. | SO-lo es-TOI mi-RAN-do, GRA-sias |

---

### PÁGINA 4 — Transporte (frases 13 a 18)
TIPO: tabela
TEXTO (literal):
TRANSPORTE

| Nº | Português | Espanhol | Como se fala |
|---|---|---|---|
| 13 | Qual ônibus vai para o centro? | ¿Qué colectivo va al centro? | QUÊ co-lec-TI-vo va al SEN-tro |
| 14 | Onde é o ponto de ônibus? | ¿Dónde está la parada? | DON-de es-TÁ la pa-RA-da |
| 15 | Quanto custa a passagem? | ¿Cuánto cuesta el pasaje? | CUAN-to CUES-ta el pa-SA-rre |
| 16 | Pode me avisar quando chegarmos? | ¿Me avisa cuando lleguemos? | me a-VI-sa CUAN-do lhe-GUE-mos |
| 17 | Me leve a este endereço, por favor. | Lléveme a esta dirección, por favor. | LHE-ve-me a ES-ta di-rec-SION, por fa-VOR |
| 18 | Vou descer aqui. | Me bajo acá. | me BA-rro a-CÁ |

---

### PÁGINA 5 — Atendimento e serviços (frases 19 a 24)
TIPO: tabela
TEXTO (literal):
ATENDIMENTO E SERVIÇOS

| Nº | Português | Espanhol | Como se fala |
|---|---|---|---|
| 19 | Não entendi. Pode repetir mais devagar? | No entendí. ¿Puede repetir más despacio? | no en-ten-DÍ. PUE-de rre-pe-TIR mas des-PA-sio |
| 20 | Pode escrever para mim? | ¿Me lo puede escribir? | me lo PUE-de es-cri-BIR |
| 21 | Quais documentos eu preciso trazer? | ¿Qué documentos tengo que traer? | QUÊ do-cu-MEN-tos TEN-go que tra-ER |
| 22 | Qual é o horário de atendimento? | ¿Cuál es el horario de atención? | CUAL es el o-RA-rio de a-ten-SION |
| 23 | Onde eu pego a senha? | ¿Dónde saco el turno? | DON-de SA-co el TUR-no |
| 24 | Sou brasileiro(a) e estou aprendendo espanhol. | Soy brasileño(a) y estoy aprendiendo español. | SOI bra-si-LE-nho(a) i es-TOI a-pren-DIEN-do es-pa-NHOL |

---

### PÁGINA 6 — Saúde e emergência (frases 25 a 30) + extras
TIPO: tabela + conteúdo
TEXTO (literal):
SAÚDE E EMERGÊNCIA

| Nº | Português | Espanhol | Como se fala |
|---|---|---|---|
| 25 | Preciso de um médico. | Necesito un médico. | ne-se-SI-to un MÉ-di-co |
| 26 | Onde fica a farmácia mais próxima? | ¿Dónde queda la farmacia más cercana? | DON-de QUE-da la far-MA-sia mas ser-CA-na |
| 27 | Sou alérgico(a) a... | Soy alérgico(a) a... | SOI a-LÉR-rri-co(a) a |
| 28 | Dói aqui. | Me duele acá. | me DUE-le a-CÁ |
| 29 | Chame uma ambulância, por favor. | Llame a una ambulancia, por favor. | LHA-me a U-na am-bu-LAN-sia, por fa-VOR |
| 30 | Perdi meus documentos. | Perdí mis documentos. | per-DÍ mis do-cu-MEN-tos |

Palavras em guarani que você vai ouvir
O guarani é idioma oficial do Paraguai, junto com o espanhol. Três palavras para começar:
• Mba'éichapa? — Olá, tudo bem?
• Aguyje — Obrigado(a)
• Iporã — Bom, bonito, legal

Cuidado com os falsos amigos
• Embarazada = grávida (não "embaraçada")
• Exquisito = delicioso (não "esquisito")
• Oficina = escritório (não "oficina mecânica")
• Rato = um momento, um tempinho (não o animal)
• Propina = gorjeta (não suborno)
• Largo = comprido (não "largo")
• Apellido = sobrenome (não "apelido")
• Borracha = bêbada (não "borracha")


---

# BÔNUS 5 — MEU PRIMEIRO MÊS NO PARAGUAI (PDF, 7 páginas)
Guia Prático de Adaptação à Cultura e ao Dia a Dia Paraguaio

> Instrução ao Codex: "Produza o Bônus 5 seguindo o prompt mestre, Modo A. Cada semana tem 1
> página de conteúdo ('o que saber') e, ao final, uma lista de 'Missões da semana' com checkbox.
> Tom leve, de diário de viagem."

---

### PÁGINA 1 — Capa
TIPO: capa
TEXTO (literal):
BÔNUS 5
Meu Primeiro Mês no Paraguai
Um roteiro de 4 semanas para conhecer os costumes locais e criar a sua nova rotina.
ARTE: roda de amigos sentados em cadeiras de praia numa calçada à sombra de uma árvore, compartilhando uma guampa de tereré com garrafa térmica; casas baixas coloridas ao fundo; luz de fim de tarde.

---

### PÁGINA 2 — Semana 1: Primeiros contatos e diferenças culturais
TIPO: conteúdo + missões
TEXTO (literal):
SEMANA 1 — Primeiros contatos, costumes locais e diferenças culturais

O que saber
• Dois idiomas oficiais. O Paraguai é bilíngue: espanhol e guarani. Você vai ouvir os dois na rua, às vezes misturados na mesma frase (o chamado "jopará").
• O tereré é um ritual. É a erva-mate com água gelada, compartilhada em roda. Se oferecerem, aceitar é um gesto de aproximação. Quem serve é quem enche e passa a guampa — não mexa na bomba.
• Cumprimentos. Entre conhecidos, um beijo no rosto é comum. Em ambientes formais, aperto de mão. "Buenos días", "buenas tardes" e "buenas noches" fazem diferença.
• O calor manda na rotina. No verão, as temperaturas passam com facilidade dos 35 °C. Em cidades menores, parte do comércio fecha no início da tarde.
• Comparações com o Brasil. Evite começar frases com "no Brasil é melhor...". Curiosidade abre portas; comparação fecha.

Missões da semana
☐ Cumprimentar os vizinhos e se apresentar
☐ Experimentar tereré
☐ Aprender e usar "Mba'éichapa?" e "Aguyje"
☐ Descobrir o horário de funcionamento do comércio do seu bairro

---

### PÁGINA 3 — Semana 2: Supermercado, alimentação, transporte e compras
TIPO: conteúdo + missões
TEXTO (literal):
SEMANA 2 — Supermercados, alimentação, transporte e compras

O que saber
• Supermercados. As grandes redes (como Superseis, Stock e Real) estão nas cidades maiores. Feiras e mercados populares, como o Mercado 4, em Assunção, têm preços menores e muita variedade — vá com atenção aos pertences.
• O que provar. Chipa (pão de queijo com milho, vendido em toda parte), sopa paraguaya (que não é sopa: é um bolo salgado de milho e queijo), mbejú, chipa guasu, vorí vorí e o tradicional asado.
• Preços em guaranis. Os valores são altos em número: "cincuenta mil" significa Gs 50.000. Treine a conversão na cabeça com a cotação do dia.
• Ônibus. O ônibus urbano é chamado de "colectivo". Em Assunção e região, a passagem é paga com cartão de bilhetagem eletrônica: pergunte onde comprar e recarregar.
• Aplicativos. Em Assunção e nas cidades maiores, há aplicativos de transporte, como Bolt e Uber.
• Nota fiscal. Peça a "factura". Se tiver RUC, informe o número para a nota sair no seu nome.

Missões da semana
☐ Fazer a primeira compra grande no supermercado e comparar com a planilha
☐ Visitar uma feira ou mercado popular
☐ Andar de colectivo pela primeira vez
☐ Experimentar 3 comidas típicas

---

### PÁGINA 4 — Semana 3: Convivência, comunicação e etiqueta social
TIPO: conteúdo + missões
TEXTO (literal):
SEMANA 3 — Convivência, comunicação, etiqueta social e hábitos locais

O que saber
• "Vos" no dia a dia. Muitos paraguaios usam "vos" no lugar de "tú". Em atendimento formal, use "usted".
• Ritmo diferente. Prazos e horários podem ser mais flexíveis do que você espera em alguns contextos. Em órgãos públicos, porém, chegue no horário e com tudo em ordem.
• Família em primeiro lugar. Encontros de domingo, almoços longos e festas de família são centrais na vida social.
• Religiosidade. A maioria da população é católica. O dia 8 de dezembro, dia da Virgem de Caacupé, reúne grandes peregrinações.
• Feriados importantes. 1º de março (Dia dos Heróis), 14 e 15 de maio (Independência), 12 de junho (Paz do Chaco), 15 de agosto (Fundação de Assunção), 29 de setembro (Batalha de Boquerón) e 8 de dezembro (Virgem de Caacupé).
• Política e futebol. Como no Brasil, são temas que despertam paixões. Ouça mais do que opine no começo.

Missões da semana
☐ Ter uma conversa de 5 minutos só em espanhol
☐ Aprender 5 expressões locais com alguém do bairro
☐ Anotar no calendário os próximos feriados nacionais
☐ Participar de um encontro, culto, missa ou evento comunitário

---

### PÁGINA 5 — Semana 4: Lazer, comunidade e nova rotina
TIPO: conteúdo + missões
TEXTO (literal):
SEMANA 4 — Lazer, integração à comunidade e construção de uma nova rotina

O que saber
• Comunidade brasileira. Há muitos brasileiros no Paraguai, principalmente na região de fronteira e no leste do país. Grupos de brasileiros ajudam com dicas — mas confirme informações oficiais na fonte (veja o Bônus 6).
• Comunidade local. Fazer amigos paraguaios acelera o idioma e a adaptação. Clubes, academias, igrejas, cursos do SNPP e grupos de corrida são bons pontos de partida.
• Lazer. Rios, lagos, praças e shoppings concentram o lazer. No verão, as praias de rio de Encarnación e o Lago Ypacaraí, em San Bernardino, ficam cheios.
• Rotina. Defina horários fixos de trabalho, compras e lazer. A sensação de "estar de férias" passa — a rotina é o que faz você se sentir em casa.

Missões da semana
☐ Conhecer um ponto de lazer da cidade
☐ Entrar em um grupo local (esporte, curso, igreja ou voluntariado)
☐ Montar a rotina semanal da família no papel
☐ Escrever o que mais gostou e o que mais estranhou neste primeiro mês

---

### PÁGINA 6 — Contatos úteis
TIPO: ficha para preencher
TEXTO (literal):
Meus contatos úteis no Paraguai

Polícia (emergências): 911
Ambulância (SEME): 141 (de celular: 021 141)
Bombeiros voluntários: 132
Consulado do Brasil mais próximo: ______________________
Hospital mais próximo: ______________________
Farmácia de confiança: ______________________
Proprietário ou imobiliária: ______________________
Escola dos filhos: ______________________
Contador: ______________________
Vizinho de confiança: ______________________
Dirección Nacional de Migraciones: +595 21 411 2000

---

### PÁGINA 7 — Encerramento
TIPO: encerramento
TEXTO (literal):
Um mês depois

Adaptar-se leva tempo. Haverá dias em que tudo parece fácil e dias em que você vai sentir falta de casa. Os dois fazem parte.

Volte ao seu "Meu calendário de prazos" (Cronograma, Dia 29), revise a Planilha de Custos com os gastos reais e defina o próximo passo: moradia definitiva, renda estável ou escola dos filhos.

Você não chegou só a um novo país. Você começou uma nova rotina.
ARTE: janela aberta com vista para uma rua arborizada ao amanhecer, uma cuia de tereré e um caderno no parapeito.


---

# BÔNUS 6 — MUDANÇA SEGURA: EVITE GOLPES E PREJUÍZOS (PDF, 5 páginas)

> Instrução ao Codex: "Produza o Bônus 6 seguindo o prompt mestre, Modo A. As 15 verificações
> são cartões numerados agrupados em 4 blocos, cada cartão com a verificação em negrito e uma
> linha 'Sinal de alerta'. Use o vermelho com moderação — o tom é de prevenção, não de medo."

---

### PÁGINA 1 — Capa e introdução
TIPO: capa + conteúdo
TEXTO (literal):
BÔNUS 6
Mudança Segura
15 verificações práticas antes de gastar dinheiro com imóveis, intermediários e serviços.

Quem está se mudando é o alvo preferido de golpistas: tem pressa, não conhece o lugar, fala outro idioma e precisa resolver muita coisa ao mesmo tempo. A regra que vale para todo este bônus é simples: quanto maior a pressa que alguém coloca em você, mais devagar você deve ir.
ARTE: lupa sobre um contrato genérico (sem texto legível) e uma chave de casa, sobre uma mesa clara.

---

### PÁGINA 2 — Imóveis e aluguel (verificações 1 a 5)
TIPO: cartões
TEXTO (literal):
IMÓVEIS E ALUGUEL

1. Visite antes de pagar — pessoalmente ou por videochamada ao vivo, nunca só por fotos.
Sinal de alerta: "Estou fora do país, deposite o sinal que eu envio a chave."

2. Confirme quem é o dono. Peça documento do proprietário e comprovante de que ele pode alugar o imóvel.
Sinal de alerta: o anunciante não aceita mostrar nenhum documento.

3. Pesquise o preço. Compare com pelo menos 5 anúncios parecidos no mesmo bairro.
Sinal de alerta: preço muito abaixo da média, com "muitos interessados".

4. Leia o contrato inteiro antes de assinar e peça uma cópia. Se não entender, peça para alguém de confiança ou um profissional ler.
Sinal de alerta: pressão para assinar no mesmo dia.

5. Pague com rastreio e exija recibo. Prefira transferência bancária para conta em nome do proprietário ou da imobiliária.
Sinal de alerta: pedido de pagamento em dinheiro sem recibo ou para conta de terceiros.

---

### PÁGINA 3 — Intermediários e documentação (verificações 6 a 10)
TIPO: cartões
TEXTO (literal):
INTERMEDIÁRIOS E DOCUMENTAÇÃO

6. Desconfie de qualquer garantia de aprovação. A residência é decidida pela DNM. Ninguém pode garantir resultado.
Sinal de alerta: "Residência garantida" ou "aprovação em X dias".

7. Desconfie de "atalhos". Não existe forma legal de pular etapas, comprar carimbo ou "agilizar por fora".
Sinal de alerta: pedido de valor extra "para o funcionário".

8. Separe taxa oficial de honorário. Exija por escrito quanto é a taxa da DNM (confira na tabela oficial) e quanto é o serviço do profissional.
Sinal de alerta: um valor único, sem detalhamento.

9. Verifique o profissional. Peça nome completo, registro profissional (se for advogado ou escribano), endereço do escritório e RUC para a fatura.
Sinal de alerta: atende só por mensagem e não emite fatura.

10. Nunca entregue seus documentos originais sem recibo. Se precisar deixar algum original, exija recibo listando cada documento.
Sinal de alerta: "Deixa tudo comigo que eu resolvo."

---

### PÁGINA 4 — Dinheiro e serviços (verificações 11 a 15)
TIPO: cartões
TEXTO (literal):
DINHEIRO E SERVIÇOS

11. Troque dinheiro só em casa de câmbio autorizada ou banco. Confira a cotação do dia antes.
Sinal de alerta: cambista na rua oferecendo cotação muito acima da oficial.

12. Pague adiantado só o mínimo. Para fretes, reformas e serviços, combine pagamento por etapa.
Sinal de alerta: pedido de 100% antecipado.

13. Faça orçamento com pelo menos 3 fornecedores para mudança, frete e serviços.
Sinal de alerta: o único orçamento que você pediu "vale só até hoje".

14. Confirme informações em fonte oficial. Grupos de internet ajudam, mas informações antigas circulam por anos.
Sinal de alerta: "Fulano fez assim em 2019 e deu certo."

15. Proteja seus dados. Não envie fotos de documentos, senhas ou códigos recebidos por SMS para quem você não conhece.
Sinal de alerta: "Me manda o código que chegou no seu celular para eu finalizar o cadastro."

---

### PÁGINA 5 — Se der errado
TIPO: conteúdo
TEXTO (literal):
Se você caiu em um golpe

1. Pare de pagar imediatamente, mesmo que prometam devolver se você pagar "só mais uma taxa".
2. Junte provas: conversas, comprovantes, anúncios, nomes e números de telefone.
3. Faça a denúncia na Policía Nacional do Paraguai (emergência: 911).
4. Se o pagamento foi feito a partir do Brasil, avise seu banco imediatamente e registre boletim de ocorrência.
5. Procure o Consulado do Brasil mais próximo para orientação.

Resumo em uma frase: visite, confirme, leia, pague com recibo — e nunca aceite pressa.


---

