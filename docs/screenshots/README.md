# 🖥️ Catálogo de Telas Implementadas (Produção)

Bem-vindo ao catálogo oficial de **Telas Implementadas em Produção** do ecossistema `VitorJacom/VitorJacom`.

Enquanto o [Catálogo de Mockups (`Mockups-Catalog`)](Mockups-Catalog) registra as especificações visuais preliminares (**Modo 1: Design Gate / Living Specs**), este catálogo consolida as **Provas Visuais Determinísticas Pós-Implementação (Modo 2: Visual Audit & Gatekeeper)**. Cada registro aqui comprova como a interface real codificada em produção é renderizada por um navegador headless (`chromium --headless`) e auditada antes do merge na branch `main`.

---

## 📑 Índice de Telas Implementadas

A tabela abaixo lista as interfaces já construídas em código de produção, seu identificador (`slug`), stack tecnológica, viewport de captura e status de auditoria:

| Slug | Nome da Tela / Interface | Stack Tecnológica | Viewport | Status | Origem | Documentação & Prova Visual |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `site-foundation` | Portfólio Web — Fundação, Hero & Seções Canônicas | React 19, TypeScript 5, Vite, Tailwind CSS | `1440x2500` | `Implemented / Live` | Issues #2 & #3 | [site-foundation.md](site-foundation.md) |

---

## 🔍 Fluxo de Auditoria Visual Pós-Implementação (Modo 2)

De acordo com a **Regra 1.3 do `AGENTS.md` (Provas Demonstrativas Universais Mandatórias)**, nenhuma entrega de front-end é aceita apenas com testes unitários lógicos:

1. **Build e Servidor de Produção Local**:
   A aplicação `site/` é compilada (`npm run build`) e servida localmente para inspeção real do bundle.
2. **Captura Determinística via Chromium Headless**:
   O agente executa a renderização real da página em alta resolução e armazena a prova gráfica em `docs/screenshots/<slug>-preview.png`.
3. **Catalogação e Sincronização Contínua**:
   O documento `docs/screenshots/<slug>.md` é vinculado ao índice acima e publicado automaticamente na GitHub Wiki (`Implemented-Screens-Catalog`) pelo workflow `.github/workflows/wiki-sync.yml`.
