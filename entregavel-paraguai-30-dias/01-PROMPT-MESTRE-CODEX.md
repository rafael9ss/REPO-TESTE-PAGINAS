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

- O texto já está escrito no tom certo: encorajador, prático e direto — mostra que a mudança é
  possível e como fazer. O visual deve transmitir a mesma sensação de conquista e confiança
  (cores vivas, pessoas sorrindo, cenas de nova rotina). Não adicione texto, exclamações ou emojis
  por conta própria.
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
