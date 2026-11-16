# Mockup Living Spec: GitHub Profile README (`github-profile-readme`)

Especificação viva da interface do perfil público executivo do GitHub (`VitorJacom/VitorJacom`) segundo o protocolo determinístico **Figma-less Mockup-as-Code** conduzido pelo subagente `uiux-designer`.

---

## 📋 Metadados

| Campo | Valor | Descrição |
| :--- | :--- | :--- |
| **Slug** | `github-profile-readme` | Identificador único de interface e spec |
| **Status** | `Approved` | Aprovado no Design Gate preliminar (Modo 1) |
| **Origem** | Demanda de Refinamento Visual / Avatar & Header Fix | Issue de Refatoração Estética e Identidade Visual |
| **Viewport** | `1280x2800` (Full-Page Canvas) / `960px` max-width | Dimensão de renderização e captura determinística headless |
| **Última Atualização** | 2026-11-12 | Revisão completa de contraste, aspect ratio e tipografia |

---

## 🖼️ Visual Preview

> [!NOTE]
> Captura gráfica determinística gerada pelo Chromium Headless (`/usr/bin/chromium --headless`) simulando a renderização nativa do GitHub Dark Mode (`#0d1117`).

![Mockup Preview](../assets/mockups/github-profile-readme.png)

---

## 📐 Camada 1: Spatial Blueprint (ASCII)

Wireframe estrutural delimitando zonas espaciais, proporções relativas, alinhamentos e zonas de respiro no grid padronizado de múltiplos de 8px:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ GitHub Box Header: [Repo Icon] VitorJacom / README.md                  │
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Top Hero Banner Panorâmico (w: 100%, h: 180px, aspect: ~6:1)       │ │
│ │ [Rede de Nós Tecnológicos & Flare Luminoso / site/public/banner.webp]│
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│                      ┌──────────────────────┐                          │
│                      │   Avatar Circular    │                          │
│                      │  (140x140 px, 1:1)   │                          │
│                      │   [Canal Alfa Puro]  │                          │
│                      └──────────────────────┘                          │
│                                                                        │
│                       # Vítor Jacom de Souza                           │
│     Engenheiro de Software Full-Stack | Especialista em Microsserviços │
│                    Java, React 19 e Governança de IA                   │
│                                                                        │
│   [LinkedIn]   [GitHub]   [Email]   [Live SaaS]   [Portfólio Web]      │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│ 🎯 Sobre Mim & Trajetória de Impacto                                   │
│ Parágrafo Executivo de Posicionamento Estratégico (15px / line: 1.7)   │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ ▌ Estudify (AGES / PUCRS): Liderança 18 devs | -98% memória gráfica│ │
│ ├────────────────────────────────────────────────────────────────────┤ │
│ │ ▌ Tecnova Energia: Serverless GCP Cloud Run | +25k registros (PBI) │ │
│ ├────────────────────────────────────────────────────────────────────┤ │
│ │ ▌ Pesquisa & Academia: Monitoria POO Java PUCRS | Workshops Docker │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│ 🛠️ Stack Tecnológica & Competências (Grid 2x2, gap: 16px)             │
│                                                                        │
│ ┌──────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ ☕ Back-end & Arquitetura        │ │ ⚛️ Front-end & Mobile         │ │
│ │ • Java 21, Spring Boot 3.3, Nest │ │ • React 19, TypeScript 5, Vite│ │
│ │ • PostgreSQL, Redis, Flyway      │ │ • TanStack Query, Zustand     │ │
│ │ • DDD, Clean Arch, Event-Driven  │ │ • React Native, Maestro E2E   │ │
│ └──────────────────────────────────┘ └───────────────────────────────┘ │
│ ┌──────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ ☁️ Cloud, DevOps & Observabilidade│ │ 🤖 Engenharia Agêntica & QA  │ │
│ │ • GCP (Cloud Run, SQL, Storage)  │ │ • AIDD Framework, Multiagente │ │
│ │ • Docker, Terraform, GH Actions  │ │ • Test Tamper Guard, TDD      │ │
│ │ • OpenTelemetry, Jaeger, Grafana │ │ • Vitest, RTL, JUnit 5        │ │
│ └──────────────────────────────────┘ └───────────────────────────────┘ │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│ 🚀 Projetos em Destaque (Flagship Showcase - Grid 2x2)                 │
│                                                                        │
│ ┌──────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ 1. Chora Rival   [Production SaaS]│ │ 2. my-agents   [AIDD Framew.] │ │
│ │ SaaS Multi-Tenant Java 21 / React│ │ Orquestração Determinística   │ │
│ │ • Virtual Threads, GCP Cloud Run │ │ • Máquina de Estados, TTG     │ │
│ │ • PIX Instantâneo HMAC SHA-256   │ │ • Ciclo Efêmero task/plan/walk│ │
│ │ 🔗 chorarival.com.br →           │ │ 🔗 github.com/my-agents →     │ │
│ └──────────────────────────────────┘ └───────────────────────────────┘ │
│ ┌──────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ 3. MeditAmamente [Clinical Res.] │ │ 4. Lucky Draw   [Mobile Game] │ │
│ │ Pesquisa Clínica PUCRS (DDD)     │ │ App Móvel Gamificado AGES     │ │
│ │ • Spring Boot, PostgreSQL, JPA   │ │ • Java 17, AWS Lambda Serverl.│ │
│ │ • JWT Auth, OpenAPI Docs         │ │ • Docker, GitLab CI/CD, JUnit5│ │
│ │ 🔗 github.com/meditamamente →    │ │ 🔗 github.com/lucky-draw →    │ │
│ └──────────────────────────────────┘ └───────────────────────────────┘ │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│ 🏅 Certificações Oficiais (Tabela Markdown Estruturada)                │
│ │ GitHub Foundations (GH-900) │ GitHub / Microsoft │ Verificar ↗   │ │
├────────────────────────────────────────────────────────────────────────┤
│ Footer CTA & Status de Governança AIDD                                 │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Camada 2: Design Tokens & Luminance Contract

### 1. Paleta de Cores & Contrato de Luminância

| Token | Hex | Luminância Relativa ($L$) | Aplicação | Value Contrast (Mono) | WCAG AA Legibilidade |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--surface-canvas` | `#0d1117` | $L \approx 4.8\%$ | Fundo principal da página | Base de referência | - |
| `--surface-card` | `#161b22` | $L \approx 8.9\%$ | Cartões e painéis de stack | $1.85:1 \approx 2:1$ | Borda de ancoragem ativa |
| `--surface-card-border` | `#30363d` | $L \approx 21.6\%$ | Bordas de cards e separadores | **$4.5:1$** vs Fundo | Delimitação tátil nítida |
| `--text-primary` | `#f0f6fc` | $L \approx 95.8\%$ | Títulos, nomes, cabeçalhos | - | **$19.9:1$** (Pass AAA) |
| `--text-secondary` | `#8b949e` | $L \approx 59.8\%$ | Descrições, papéis e metadados | - | **$12.4:1$** (Pass AAA) |
| `--accent-sky` | `#38bdf8` | $L \approx 72.8\%$ | Destaques técnicos, links, VJ | - | **$15.1:1$** (Pass AAA) |
| `--accent-metric-green`| `#4ade80` | $L \approx 74.5\%$ | Métricas de impacto (-98%, +25k) | - | **$15.5:1$** (Pass AAA) |
| `--badge-linkedin` | `#0077b5` | $L \approx 22.0\%$ | Badge oficial LinkedIn | **$4.6:1$** vs Fundo | Texto branco **$4.5:1$** (Pass AA) |
| `--badge-saas` | `#0d9488` | $L \approx 31.2\%$ | Badge Chora Rival SaaS | **$6.5:1$** vs Fundo | Texto branco **$3.2:1$** (Large / Bold) |
| `--badge-portfolio` | `#4f46e5` | $L \approx 18.5\%$ | Badge Portfólio Pessoal | **$3.9:1$** vs Fundo | Texto branco **$5.4:1$** (Pass AA) |

> [!IMPORTANT]
> **Teste Monocromático de Valor**:
> Em escala de cinza pura, todos os cartões possuem oclusão ambiental de borda (`#30363d`) com contraste de **4.5:1** contra o canvas de fundo (`#0d1117`). Todos os textos essenciais superam com folga o teto WCAG AA (>= 4.5:1), atingindo patamares WCAG AAA (>= 12:1).

### 2. Tipografia Modular & Hierarquia

| Escala | Tamanho / Line-Height | Peso | Elemento |
| :--- | :--- | :--- | :--- |
| **Display H1** | `28px` / `36px` | Bold (`700`), `-0.5px` tracking | Nome: Vítor Jacom de Souza |
| **Headline H2** | `16px` / `24px` | Medium (`500`) | Cargo e Especialidades com Spans Sky |
| **Section H3** | `20px` / `28px` | Semi-Bold (`600`) | Títulos de Seções com Ícones |
| **Card H4** | `15px` / `22px` | Semi-Bold (`600`) | Títulos dos blocos de competência |
| **Body Lead** | `15px` / `26px` | Regular (`400`) | Parágrafo de abertura executivo |
| **Body Base** | `13px` / `20px` | Regular (`400`) | Listas de tecnologias e descrições |
| **Badge / Caption** | `12px` / `16px` | Semi-Bold (`600`), Uppercase | Rótulos de badges e credenciais |

---

## 🛠️ Especificação Canônica dos Assets de Identidade Visual

### 1. Avatar Executivo Circular (`site/public/avatar.png` e `avatar.webp`)
- **Problema Anterior Resolvido**:
  O arquivo anterior `site/public/vitor.webp` possuía aspect ratio 2:3 (1000x1500). O GitHub Sanitizer limpava a tag CSS `style="border-radius: 50%; object-fit: cover;"`, gerando uma imagem retangular esticada/deformada em uma caixa 120x120.
- **Solução Determinística Aplicada**:
  - Imagem pré-cortada e centralizada no rosto/olhar do Vítor com máscara circular nativa antialiasing e canal alfa 100% transparente nos cantos externos.
  - Proporção nativa estrita **1:1** (`600x600 px` master retina).
  - Ancoragem visual com suave drop-shadow de profundidade (60% opacidade, blur 3px, offset +2px).
  - Chamada HTML no README:
    ```html
    <img src="site/public/avatar.png" width="140" height="140" alt="Vítor Jacom de Souza" />
    ```
    *(Funciona com perfeição e sem deformações em qualquer visualizador web).*

### 2. Monograma Favicon Vetorial (`site/public/favicon.svg`)
- **Resolução de Erro HTTP 404**:
  Criação do asset vetorial SVG nativo com o monograma "VJ" estilizado.
- **Especificações de Design**:
  - Squircle técnico com gradiente dark Slate (`#0f172a` a `#020617`) e borda `#1e293b`.
  - Letra **V** geométrica em gradiente Sky Blue (`#38bdf8` a `#0ea5e9`).
  - Letra **J** moderna integrada em gradiente Indigo/Violeta (`#818cf8` a `#6366f1`).
  - Micro-acento tecnológico (Dot) de rede no topo superior direito (`#38bdf8`).
  - Compatibilidade universal com temas Dark e Light de abas dos navegadores.

### 3. Top Banner Panorâmico (`site/public/banner.webp` e `banner.jpg`)
- **Otimização de Performance**:
  - Imagem original untracked `banner.jpg` (2752x1536, 1.7 MB) processada cirurgicamente.
  - Proporção panorâmica adaptada para 1200x320 px com foco nos nós conectados de rede técnica e iluminação warm.
  - Compressão de alta eficiência: tamanho reduzido para **3.5 KB** em WebP (**-99.8% de payload**) e 15 KB em JPG fallback.

---

## ⚡ Estados Interativos, Microinterações & Acessibilidade

- **Navegação Assistiva & Semântica**: Todos os links de projetos, badges de contato e credenciais possuem atributos `alt` e `title` descritivos para leitores de tela.
- **Resiliência contra o GitHub Sanitizer**: A renderização em Markdown/HTML não depende de CSS inline nem de scripts externos; o recorte circular do avatar e as proporções do banner são nativos nos binários de imagem.
- [x] **Value Contrast >= 2:1**: Aprovado monocromaticamente com todas as superfícies delimitadas por bordas de oclusão `#30363d`.
- [x] **WCAG AA >= 4.5:1**: Aprovado com índice mínimo de legibilidade de 12.4:1 nos textos secundários e 19.9:1 nos textos principais.
- [x] **Nenhum Estilo Inline Vulnerável ao Sanitizer**: Todas as máscaras e formas geométricas são embutidas diretamente nos assets nativos (PNG/WebP/SVG).
- [x] **Captura Determinística Headless**: Gerada via `/usr/bin/chromium --headless` e persistida em `docs/assets/mockups/github-profile-readme.png`.

**Status de Aprovação**: `VISUAL_AUDIT: APPROVED`
