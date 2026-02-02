# Alter Capital — Brainstorming de Design

## Abordagem 1: Modernismo Suíço Financeiro

<response>
<text>
**Movimento de Design**: Modernismo Suíço (International Typographic Style) aplicado ao contexto financeiro institucional

**Princípios Fundamentais**:
- Clareza absoluta através de hierarquia tipográfica rigorosa
- Grid assimétrico com tensão visual controlada
- Uso de espaço negativo como elemento estrutural ativo
- Precisão matemática em todos os alinhamentos e proporções

**Filosofia de Cor**:
Paleta monocromática sofisticada ancorada em azul naval profundo (herança do logo), complementada por cinzas frios e acentos de verde-esmeralda discretos para momentos de ênfase. A cor não decora — ela hierarquiza e guia. O azul transmite confiança institucional e maturidade; o verde sugere crescimento estratégico sem ser literal.

**Paradigma de Layout**:
Grid de 12 colunas com quebras assimétricas intencionais. Seções alternam entre layouts de duas colunas desiguais (40/60) e blocos full-width com texto ancorado à esquerda. Evita centralização excessiva — o olho se move através de uma jornada diagonal que cria dinamismo sem caos.

**Elementos Distintivos**:
- Linhas verticais finas como separadores estruturais
- Numeração de seções em tipografia display grande e transparente
- Uso de espaço em branco generoso (mínimo 120px entre seções)

**Filosofia de Interação**:
Transições instantâneas e precisas. Hover states revelam informação adicional através de deslocamentos sutis (2-4px) e mudanças de opacidade. Scroll é fluido mas não animado em excesso — a experiência é profissional, não lúdica.

**Animação**:
Fade-in sequencial ao scroll (stagger de 100ms entre elementos). Elementos entram de baixo para cima com easing cubic-bezier(0.4, 0, 0.2, 1). Nenhuma animação dura mais de 400ms. Movimento existe para guiar atenção, não para entreter.

**Sistema Tipográfico**:
- Display: **Syne** (700-800) — geométrica, moderna, assertiva para headlines
- Body: **Inter** (400-500) — legibilidade técnica para corpo de texto
- Accent: **JetBrains Mono** (400) — para detalhes numéricos e labels
Hierarquia: 64px/48px/32px/18px/16px com line-height de 1.2 para display e 1.6 para body
</text>
<probability>0.08</probability>
</response>

---

## Abordagem 2: Brutalismo Financeiro Refinado

<response>
<text>
**Movimento de Design**: Brutalismo Digital refinado com sensibilidade editorial de revistas financeiras premium (Monocle, Financial Times Weekend)

**Princípios Fundamentais**:
- Honestidade estrutural — cada elemento revela sua função
- Contraste máximo entre peso tipográfico e espaço vazio
- Bordas e containers visíveis como elementos de design
- Assimetria intencional que cria tensão visual produtiva

**Filosofia de Cor**:
Paleta de alto contraste: preto profundo (não puro), off-white cremoso, e azul-petróleo saturado do logo como único acento cromático. Fundos em bege-papel (warm gray) para reduzir fadiga visual. A cor é usada com parcimônia extrema — quando aparece, comanda atenção total.

**Paradigma de Layout**:
Layout de revista editorial: blocos de texto em colunas estreitas (máx 65 caracteres), imagens sangradas que quebram o grid, overlays de texto sobre imagens com fundos semi-transparentes. Seções demarcadas por bordas grossas (3-4px) em vez de espaço.

**Elementos Distintivos**:
- Boxes com bordas sólidas contendo informações-chave
- Tipografia oversized para números e stats (120px+)
- Uso de aspas tipográficas grandes como elemento gráfico
- Texturas sutis de papel/grain em fundos

**Filosofia de Interação**:
Interações táteis e imediatas. Hover states mudam cores de borda e background de forma binária (sem gradientes). Click feedback é instantâneo. A interface responde como um objeto físico — peso e presença.

**Animação**:
Animações abruptas e intencionais. Elementos "snap" into place. Transições de 200ms com easing linear ou ease-in-out. Scroll parallax mínimo (0.3x speed) em backgrounds para criar profundidade sem distração.

**Sistema Tipográfico**:
- Display: **Archivo Black** (400) — impacto brutal para headlines principais
- Subheadings: **Archivo** (600) — mesma família, peso médio para hierarquia
- Body: **Newsreader** (400-500) — serif editorial para texto longo, legibilidade superior
- Labels: **Archivo** (500) — sans-serif para UI elements
Hierarquia: 72px/56px/36px/20px/16px com line-height variável (1.1 para display, 1.7 para body)
</text>
<probability>0.07</probability>
</response>

---

## Abordagem 3: Minimalismo Japonês Corporativo

<response>
<text>
**Movimento de Design**: Ma (間) — filosofia japonesa do espaço negativo aplicada ao design corporativo contemporâneo, inspirado em Muji e Kenya Hara

**Princípios Fundamentais**:
- Redução ao essencial — cada elemento justifica sua existência
- Espaço vazio como protagonista, não como fundo
- Ritmo visual através de repetição e variação sutil
- Elegância através de restrição, não de ornamento

**Filosofia de Cor**:
Paleta quase monocromática: tons de cinza quente (greige), azul-acinzentado profundo do logo, e um único acento de terracota queimado para CTAs. Fundos em gradientes imperceptíveis (2-3% de variação tonal) que criam profundidade atmosférica. A cor sugere, nunca grita.

**Paradigma de Layout**:
Grid fluido com margens generosas (10-15% da viewport). Elementos flutuam em espaço abundante. Alinhamento vertical rigoroso mas horizontal variado. Seções respiram com padding vertical de 15-20vh. Texto nunca ultrapassa 600px de largura.

**Elementos Distintivos**:
- Linhas horizontais finas (1px, 20% opacity) como pontuação visual
- Círculos e formas geométricas simples como acentos
- Fotografias em preto e branco com grain sutil
- Iconografia minimalista (line icons, 1.5px stroke)

**Filosofia de Interação**:
Interações zen — mudanças sutis que recompensam atenção. Hover states alteram opacidade (0.7 → 1.0) e adicionam underline fino. Transições lentas e deliberadas (600ms) criam sensação de peso e qualidade. Scroll é suave com momentum natural.

**Animação**:
Fade-in gradual com blur-to-focus (blur(10px) → blur(0)). Elementos aparecem como se emergissem de névoa. Timing: 800ms com easing custom cubic-bezier(0.16, 1, 0.3, 1). Parallax vertical mínimo (0.5x) em backgrounds. Animações nunca competem — uma por vez.

**Sistema Tipográfico**:
- Display: **Instrument Serif** (400-500) — serif contemporâneo com personalidade contida
- Body: **Inter** (300-400) — pesos leves para elegância, tracking aumentado (+0.02em)
- Accent: **Instrument Sans** (500) — mesma família, sans para contraste
Hierarquia: 56px/40px/28px/18px/16px com line-height generoso (1.3 para display, 1.8 para body)
Espaçamento entre letras aumentado em 2-5% para criar "ar" tipográfico
</text>
<probability>0.09</probability>
</response>

---

## Decisão

Após análise, **Abordagem 3: Minimalismo Japonês Corporativo** é a escolha ideal para Alter Capital porque:

1. **Alinha com a identidade "Alter"**: Sabedoria (Ma/espaço) + inovação (contemporâneo)
2. **Transmite maturidade sem peso**: Elegância através de restrição
3. **Diferencia de fundos tradicionais**: Evita clichês de VC (roxo, gradientes, Inter bold)
4. **Escala com discrição**: Permite crescimento sem perder sofisticação
5. **Respeita o conteúdo**: O storytelling e copy brilham sem competição visual

**Filosofia de design escolhida**: Redução ao essencial, espaço como protagonista, elegância através de restrição.
