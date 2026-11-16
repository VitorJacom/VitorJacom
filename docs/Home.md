# 🏛️ VitorJacom — GitHub Profile, Portfólio Web & Ecossistema AIDD

Bem-vindo à Wiki oficial e base de conhecimento vivo (**Living Documentation**) do repositório `VitorJacom/VitorJacom`.

Este repositório centraliza a identidade profissional de **Vítor Jacom de Souza** (Engenheiro de Software Full-Stack especializado em Java, TypeScript, React 19 e Cloud Architecture), o GitHub Profile README executivo, o Portfólio Web interativo, o Showcase de projetos AGES, o Blog técnico autoral Content-Driven e o servidor MCP Stdio para agentes de IA.

---

## 🧭 Os 4 Valores do Manifesto AIDD (AI-Driven Development)

Todo o ciclo de engenharia, arquitetura e governança deste repositório é regido pelos quatro pilares fundamentais do **Manifesto AIDD**:

1. **Method over Model (Método sobre o Modelo)**: O processo determinístico, o sandboxing, as travas de Git e a máquina de estados formal importam mais do que qual LLM está sendo executado.
2. **Ownership over Delegation (Responsabilidade sobre Delegação)**: A IA acelera a geração de artefatos, mas os contratos determinísticos, os Architecture Decision Records (ADRs) e a revisão de engenharia garantem regras inegociáveis.
3. **Understanding over Acceptance (Compreensão sobre Aceitação)**: Nenhum código ou interface é aceito por presunção; toda entrega exige testes determinísticos automatizados ($\ge 85\%$ de cobertura) e provas demonstrativas visuais e de execução no `walkthrough.md`.
4. **Outcome over Output (Resultado sobre Volume)**: Gerar milhares de linhas de código sem validação é desperdício; o valor real reside em resolver issues atômicas com CI 100% verde e zero regressões.

---

## 🏗️ Arquitetura do Ecossistema

| Camada / Módulo | Stack Tecnológica | Responsabilidade Principal |
| :--- | :--- | :--- |
| **GitHub Profile (`README.md`)** | Markdown, HTML Semântico, Assets WebP/PNG/SVG | Cartão de visitas executivo renderizado em `github.com/VitorJacom`. |
| **Portfólio Web (`site/`)** | **React 19**, TypeScript 5, Vite, Tailwind CSS | SPA de alta performance hospedada no GitHub Pages (Scale-to-Zero). |
| **Showcase Interativo (`AGES`)** | React 19, Demos Client-Side Isoladas | Demonstrações interativas de projetos acadêmicos e industriais (Estudify, MeditAmamente, Lucky Draw). |
| **Blog Autoral (`site/content/blog/`)** | Markdown + Frontmatter (Content-Driven) | Artigos técnicos de engenharia de software processados em tempo de build sem dependência de banco de dados. |
| **Servidor `MCP` (`mcp/`)** | TypeScript, Node.js, `@modelcontextprotocol/sdk` | Servidor Model Context Protocol via Stdio expondo currículo, projetos e artigos diretamente para agentes de IA e LLMs. |

---

## 📚 Mapa de Navegação Rápida

### 📐 Arquitetura & Decisões Técnicas (ADRs)
- [Visão Arquitetural Canônica (`ARCHITECTURE`)](ARCHITECTURE)
- [ADR 0001 — Stack Tecnológica e Estrutura da Página Pessoal](0001-stack-e-estrutura-da-pagina-pessoal)
- [ADR 0002 — Blog Content-Driven em Markdown e MCP Server Stdio Sem Backend](0002-content-driven-blog-e-mcp-stdio-sem-backend)
- [ADR 0003 — Showcase Interativo de Projetos AGES com Demos Client-Side](0003-showcase-interativo-ages-demos-client-side)

### 🎨 Catálogo de Telas & Especificações Vivas (Figma-less Mockup-as-Code)
- [Índice Geral do Catálogo de Telas (`Mockups-Catalog`)](Mockups-Catalog)
- [Template Canônico de Living Spec (`TEMPLATE`)](TEMPLATE)
- [Living Spec: GitHub Profile README (`github-profile-readme`)](github-profile-readme)

### 🖥️ Telas Implementadas (Produção)
- [Catálogo de Telas Implementadas em Produção (`Implemented-Screens-Catalog`)](Implemented-Screens-Catalog)
- [Portfólio Web — Fundação, Hero & Seções Canônicas (`site-foundation`)](site-foundation)
