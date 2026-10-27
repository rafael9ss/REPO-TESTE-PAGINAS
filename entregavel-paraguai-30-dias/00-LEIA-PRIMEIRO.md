# PARAGUAI EM 30 DIAS — Pacote de produção do entregável

> Este diretório contém **todo o planejamento e todo o conteúdo** do kit, página por página,
> pronto para você colar no Codex. Leia este arquivo inteiro antes de começar.

---

## 1. Ordem de uso no Codex

1. Cole **`01-PROMPT-MESTRE-CODEX.md`** primeiro. Ele define identidade visual, regras de texto,
   formato de página e o fluxo de produção. Ele vale para todos os materiais.
2. Depois cole **um material por vez**, na ordem abaixo. Não cole tudo de uma vez: o modelo perde
   consistência e começa a inventar texto.
3. Ao final de cada material, revise cada página contra o texto literal do arquivo (ver seção 4).

| Ordem | Arquivo | Material final | Páginas |
|---|---|---|---|
| 1 | `02-guia-pratico-imigracao.md` | Guia principal (PDF) — inclui a Parte 2, Passo a Passo Detalhado | 38 |
| 2 | `03-cronograma-30-dias.md` | Cronograma (PDF imprimível) | 7 |
| 3 | `04-checklists-documentacao.md` | 3 checklists (3 PDFs) | 3 × 2 |
| 4 | `05-mapa-processo-residencia.md` | Mapa do processo (PDF visual) | 3 |
| 5 | `06-planilha-custos.md` + `planilha-custos-mudanca-paraguai.xlsx` | Planilha (Excel/Sheets) | — |
| 6 | `07-roteiro-viagem-protocolo.md` | Roteiro (PDF prático) | 8 |
| 7 | `08-bonus-01-onde-morar.md` | Bônus 1 | 8 |
| 8 | `09-bonus-02-trabalho-renda.md` | Bônus 2 | 6 |
| 9 | `10-bonus-03-mudanca-familia.md` | Bônus 3 | 5 |
| 10 | `11-bonus-04-espanhol-sobrevivencia.md` | Bônus 4 | 6 |
| 11 | `12-bonus-05-primeiro-mes.md` | Bônus 5 | 7 |
| 12 | `13-bonus-06-mudanca-segura.md` | Bônus 6 | 5 |
| — | `99-fontes-e-verificacao.md` | Uso interno (não vai para o cliente) | — |

A planilha **já está pronta** (`planilha-custos-mudanca-paraguai.xlsx`), com fórmulas. Não gere
planilha por imagem — uma planilha em imagem não é editável e quebra a promessa da oferta.

---

## 2. Críticas diretas antes de você produzir (leia, é o que mais importa)

### 2.1 Gerar páginas de texto inteiras com GPT Image é a escolha errada

Modelos de imagem ainda erram texto longo: trocam letras, comem acentos (ç, ã, õ), inventam
palavras, desalinham tabelas e mudam a fonte de uma página para outra. Num guia de **documentação
legal**, um número errado num valor de taxa ou num prazo é defeito grave — gera reembolso e
reclamação.

Problemas adicionais de PDF feito só de imagens:
- o cliente não consegue copiar endereço, telefone ou link;
- o arquivo fica pesado para abrir no celular;
- **as taxas oficiais mudam** (mudaram em 1º/07/2026). Com página em imagem, você precisa
  regenerar a arte inteira. Com página em HTML, você troca um número.

**O que eu recomendo (e o prompt mestre já está configurado assim — "Modo A"):**
- O Codex monta as páginas em **HTML/CSS** com o texto real e exporta para **PDF A4**.
- O **GPT Image** gera só o que ele faz bem: capas, ilustrações, ícones, fundos e texturas.
- Resultado: visual premium + texto 100% correto + atualização barata.

Se mesmo assim você quiser tudo em imagem ("Modo B"), o prompt mestre tem as regras para reduzir o
estrago (máximo de palavras por página, revisão obrigatória). Mas saiba que vai gastar muito mais
tempo corrigindo do que economizou.

### 2.2 A promessa "Paraguai em 30 dias" tem risco de expectativa

Ninguém sai com **residência aprovada** em 30 dias. Em 30 dias dá para: preparar documentos no
Brasil, viajar, entrar regularmente, tirar antecedentes locais e **protocolar** o pedido — o que
já dá o status de **residente precário** (pode trabalhar, estudar, sair e voltar enquanto o
processo corre). A carteira de residente sai depois, sem prazo oficial publicado.

Sua página de vendas fala em "planejar sua mudança em 30 dias" — isso é defensável. Mas se algum
criativo ou VSL disser "more legalmente no Paraguai em 30 dias", você está vendendo algo que o
produto não entrega. O conteúdo deste kit é honesto nesse ponto de propósito (capítulo 3 do guia):
cliente com expectativa certa pede menos reembolso.

### 2.3 O argumento "custo de vida mais barato" ficou mais fraco em 2026

O guaraní valorizou mais de 10% frente ao dólar em 2026 (EFE/BCP). Em 31/08/2026, R$ 1 ≈ Gs 1.139.
Isso significa:
- Só a **taxa oficial** da residência temporária Mercosul (Gs 2.341.540) custa ≈ **R$ 2.050 por
  pessoa**. Muitos guias na internet ainda dizem "US$ 150" — está desatualizado.
- A **mediana de anúncios** de 2 dormitórios em Assunção estava em Gs 6,5 milhões (≈ R$ 5.700) em
  set/2026 — puxada por prédios novos em bairros nobres, mas mostra que "barato" depende muito de
  bairro.

Uma família de 4 pessoas gasta ≈ R$ 8.000+ só de taxas de Migraciones. Se o seu público é quem
"vê o dinheiro render cada vez menos", parte dele **não tem esse caixa**. O kit trata isso com
honestidade (planilha + capítulo de custos). Revise sua copy: venda **liberdade, segurança jurídica
e tributação simples**, não "vida barata".

### 2.4 Bônus que precisam de cuidado

- **Bônus 2 (20 canais)**: listei só canais que verifiquei existirem. Não complete com nomes
  inventados pelo modelo.
- **Bônus 1 (cidades)**: valores de aluguel são faixas de anúncios, não contratos. Está sinalizado.
  Pedro Juan Caballero foi deixado de fora da lista principal por questão de segurança, com
  explicação — não "esconda" isso, explique.
- **Garantia "incondicional de 7 dias"**: o CDC já obriga 7 dias de arrependimento em compra
  online. Não é diferencial forte; não aumente prazo sem necessidade, mas também não esconda.

### 2.5 Responsabilidade

Você vende orientação sobre procedimento legal. Todo material tem aviso de que **não substitui
assessoria jurídica** e que as regras devem ser confirmadas na Dirección Nacional de Migraciones
(DNM). Não remova esses avisos para "deixar mais limpo". Eles protegem você.

### 2.6 Ponto que estava em aberto e foi resolvido

A Resolução 717/2026 da Policía Nacional confirma que residentes **temporários** e permanentes
podem pedir a cédula. Ela exige 10 documentos (Interpol, Registro de Extranjeros, certificado de
vida e residência, entre outros), custa Gs 8.500 e leva até 90 dias úteis. Está no Passo 11 do Guia.

---

## 3. Data de referência

Todo o conteúdo foi verificado em **27/10/2026**. Taxas oficiais conforme Resolução DNM nº 478/2026,
vigente desde 01/07/2026. Câmbio de referência: Banco Central do Paraguai, 31/08/2026
(US$ 1 = Gs 5.903; R$ 1 = Gs 1.139). Detalhes e links em `99-fontes-e-verificacao.md`.

Recomendação: revise taxas e requisitos **a cada 3 meses** e sempre que a DNM publicar nova
resolução de aranceles (costuma acontecer quando o salário mínimo paraguaio é reajustado, em
julho).

---

## 4. Checklist de qualidade (rode em cada página antes de publicar)

- [ ] O texto da página é **idêntico** ao do arquivo (palavra por palavra, acentos incluídos).
- [ ] Valores em guaranis conferem com a tabela oficial (Gs com ponto de milhar: 2.341.540).
- [ ] Nenhuma bandeira, brasão ou logotipo oficial do governo paraguaio ou brasileiro foi usado
      como se o produto fosse oficial.
- [ ] Rodapé com número de página e "Paraguai em 30 Dias".
- [ ] Contraste legível no celular (texto escuro em fundo claro).
- [ ] Links e contatos clicáveis no PDF (Modo A).
- [ ] Nada promete prazo de aprovação da residência.
