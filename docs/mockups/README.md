# 🎨 Catálogo de Telas (Mockup Living Specs)

Bem-vindo ao catálogo central de especificações vivas de telas (**Living Specs**) do projeto `VitorJacom`.

Este catálogo centraliza o design de interfaces segundo o protocolo determinístico **Figma-less Mockup-as-Code**, garantindo que todas as telas, componentes e fluxos visuais sejam especificados, versionados e auditados diretamente no Git antes e depois da codificação.

---

## 📑 Índice de Especificações Vivas

A tabela abaixo lista as telas e interfaces cadastradas no sistema, seu identificador (`slug`), viewport de referência e status de aprovação visual:

| Slug | Nome da Tela / Interface | Viewport | Status | Origem | Spec |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `TEMPLATE` | Template Canônico de Living Spec (3 Camadas) | 1280x800 / 390x844 | `Canonical` | Governança Mockup-as-Code (Issue #25) | [TEMPLATE.md](TEMPLATE.md) |
| `github-profile-readme` | GitHub Profile README Executivo & Identidade Visual | 1280x2800 / 960px | `Implemented` | Refinamento Visual / Avatar & Header Fix (Issue #23) | [github-profile-readme.md](github-profile-readme.md) |
| `readme-profile` | Redesign Minimalista Executivo do GitHub Profile README | 1280x900 / 390x844 | `Proposed` | Redesign Executivo `README.md` (`/plan-feature`) | [readme-profile.md](readme-profile.md) |
| `portfolio-landing-page` | Portfólio Web & Landing Page Executiva | 1280x1780 / 390x844 | `Proposed` | Issues #4, #5, #6 | [portfolio-landing-page.md](portfolio-landing-page.md) |
| `ages-showcase-and-demos` | Vitrine AGES & 4 Simuladores Interativos | 1280x1220 / 390x844 | `Proposed` | Épico #7 e Issues #8, #9, #10, #11, #12 | [ages-showcase-and-demos.md](ages-showcase-and-demos.md) |
| `blog-reader-experience` | Experiência Editorial do Blog (`BlogList` & `BlogPostView`) | 1280x920 / 390x844 | `Proposed` | Issue #14 | [blog-reader-experience.md](blog-reader-experience.md) |

---

## 🚀 Como Criar e Versionar um Novo Mockup (Workflow)

Quando uma funcionalidade demandar alterações visuais ou novas interfaces, o subagente `uiux-designer` deve seguir o fluxo:

1. **Estruturar a Living Spec**:
   Crie o documento da tela em `docs/mockups/<slug>.md` contendo Spatial Blueprint ASCII (Camada 1), Design Tokens & Luminance Contract (Camada 2) e Estados Interativos.

2. **Gerar o Protótipo e Captura Headless**:
   Crie o arquivo estático autocontido `.mockup-preview.html` e gere o screenshot determinístico headless via Chromium:
   ```bash
   chromium --headless --no-sandbox --screenshot=docs/assets/mockups/<slug>.png --window-size=1280,1024 .mockup-preview.html
   ```

3. **Registrar no Catálogo**:
   Adicione uma nova linha na tabela do índice acima.
