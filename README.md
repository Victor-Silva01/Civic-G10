# Honda Civic G10 — Landing Page Premium (React + TypeScript)

Landing page imersiva do Honda Civic G10 desenvolvida com React, TypeScript, Tailwind CSS e Vite.

---

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Linguagem | TypeScript |
| Biblioteca de UI | React 19 |
| Ferramenta de Build | Vite |
| Estilização | Tailwind CSS 3 + PostCSS |
| Animações | Motion (Framer Motion v12) |
| Ícones | Lucide React |

---

## Como rodar o projeto

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
# ou
npm start

# 3. Gerar a versão de produção
npm run build

# 4. Pré-visualizar o build de produção localmente
npm run preview
```

O servidor local iniciará em `http://localhost:5173`.

---

## Como recriar este projeto do zero com Vite

```bash
# 1. Criar projeto Vite com template React + TypeScript
npm create vite@latest honda-civic-g10 -- --template react-ts

# 2. Entrar na pasta
cd honda-civic-g10

# 3. Instalar dependências
npm install motion lucide-react
npm install -D tailwindcss postcss autoprefixer tailwindcss-animate

# 4. Inicializar configuração do Tailwind
npx tailwindcss init -p
```

---

## Estrutura de Pastas

```
/
├── index.html                   # HTML base com fontes (Poppins) e meta tags
├── package.json                 # Dependências e scripts
├── tsconfig.json                # Configurações do TypeScript
├── tailwind.config.js           # Tema e extensões de estilo
├── postcss.config.js            # Plugins PostCSS
├── vite.config.ts               # Configuração do Vite
└── src/
    ├── main.tsx                 # Ponto de entrada (React DOM root)
    ├── App.tsx                  # Componente raiz
    ├── index.css                # Estilos globais, Tailwind e variáveis de tema
    ├── vite-env.d.ts            # Tipagens globais do Vite
    ├── assets/                  # Imagens e mídias do Civic G10
    └── components/
        └── landing/
            ├── LandingPage.tsx          # Composição principal das seções
            ├── Nav.tsx                  # Barra de navegação e menu mobile
            ├── Hero.tsx                 # Seção inicial com chamada principal
            ├── Parallax.tsx             # Seção de destaque com efeito parallax
            ├── Specs.tsx                # Ficha técnica com contadores animados
            ├── Interior.tsx             # Pontos interativos do interior
            ├── DesignShowcase.tsx       # Showcase visual e galeria/estilo
            ├── CTA.tsx                  # Chamada final para ação e WhatsApp
            ├── Footer.tsx               # Rodapé com links e créditos
            ├── ScrollProgress.tsx       # Barra de progresso da rolagem
            ├── FloatingWhatsApp.tsx     # Botão flutuante do WhatsApp
            ├── TestDriveModal.tsx       # Modal com formulário de agendamento
            └── test-drive-context.tsx   # Contexto para controle do modal
```

---

## Seções e Funcionalidades

1. **Scroll Progress** — Barra superior indicadora de progresso na leitura da página.
2. **Navegação (Nav)** — Header fixo com efeito blur, links de âncora suaves e botão de ação.
3. **Hero** — Destaque visual do Civic G10 com tipografia impactante, gradientes neon e botão de agendamento.
4. **Parallax** — Efeito de profundidade e transição dinâmica durante a rolagem.
5. **Especificações (Specs)** — Ficha técnica com contadores numéricos animados.
6. **Interior Interativo** — Destaques interativos sobre itens da cabine e acabamento.
7. **Design Showcase** — Visualização de linhas, aerodinâmica e detalhes esportivos.
8. **CTA (Call to Action)** — Formulário/convite para test drive e link direto para WhatsApp.
9. **Modal de Test Drive** — Janela de agendamento interativa com validação e feedback.
10. **WhatsApp Flutuante** — Botão dinâmico que surge após a rolagem com mensagem pré-configurada.
11. **Footer** — Rodapé com mapa do site e avisos legais.

---

## Customização e Ajustes

- **WhatsApp**: Altere o número de telefone em `src/components/landing/FloatingWhatsApp.tsx` e `src/components/landing/CTA.tsx` substituindo `5500000000000` pelo seu número com DDD.
- **Formulário de Test Drive**: Configure o envio real no `TestDriveModal.tsx` integrando à sua API ou serviço de e-mail/CRM.

---

## Observações

Projeto desenvolvido para fins de demonstração e portfólio, sem qualquer vínculo oficial ou comercial com a Honda.
