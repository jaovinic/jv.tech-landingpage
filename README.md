# JV Tech Landing Page

Landing page da **JV Tech**, consultoria de TI. Feita com [Astro](https://astro.build) (site estático) e publicada no GitHub Pages em https://jvtech.dev.br.

## Estrutura

```
public/            favicons e CNAME (copiados como estão para o build)
src/
  assets/          imagens e fonte de ícones (otimizadas no build)
  components/      Header, Hero, About, Services, Contact, Footer, ...
  layouts/         Layout.astro (<head>, SEO, fontes)
  pages/           index.astro (monta as seções)
  scripts/         reveal.ts (animação ao rolar)
  styles/          global.css e icons.css
```

Cada componente tem seus próprios estilos (escopados) e, quando precisa, seu próprio script.

## Identidade visual

Segue a nova identidade da JV Tech: monograma JV (o V verde sobe acima do J), paleta azul-noite e verde, e a fonte **Inter**. O tema **claro** é o padrão e há um **tema escuro** no botão do header (a escolha fica salva no navegador, em `localStorage`). O nome é sempre **JV Tech**.

- `src/styles/tokens.css`: cores da marca (`azul-noite`, `verde`, `verde-texto`, `verde-claro`, `nevoa`, `ardosia`, `marinho`) e os papéis `surface`, `ink`, `accent`..., com os valores do tema escuro em `:root[data-theme="dark"]`. A classe `.on-deep` redefine os papéis para as faixas escuras, onde o texto é branco e o destaque é o verde claro.
- **Verde:** `verde` (#00A57A) só em formas grandes (3,2:1 sobre branco); em texto e botões sobre fundo claro, `verde-texto` (#00755A, 5,7:1).
- Sem degradês, relevos nem sombras.
- **Fonte:** Inter (licença OFL), hospedada em `src/assets/fonts/inter-latin.woff2` (subconjunto latino).
- Logotipos em `src/assets/images/`: `logo.svg` (em cores, tema claro), `logo-reverse.svg` (tema escuro e faixas azul-noite), `hero.png` (logo com descritor sobre azul-noite, também usado no Open Graph) e `notebook.png` (mockup com a logo nova). Nunca redigite "JV Tech" em outra fonte: use sempre os arquivos da logo.
- Favicon: `public/favicon.svg` (ícone do kit), com `favicon.png` e `apple-touch-icon.png` gerados a partir dele.

## Como executar

Requer Node 22.23.4+.

```sh
git clone https://github.com/Xiriuu/jv.tech-landingpage.git
cd jv.tech-landingpage
npm install
npm run dev      # servidor local em http://localhost:4321
```

| Comando           | Ação                                         |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento                  |
| `npm run build`   | Checa os tipos e gera o site em `dist/`      |
| `npm run preview` | Serve o build de `dist/` localmente          |

## Deploy

O workflow `.github/workflows/deploy.yml` faz o build e publica no GitHub Pages a cada push na `main`.
Em *Settings → Pages*, a fonte (*Source*) precisa estar em **GitHub Actions**.
