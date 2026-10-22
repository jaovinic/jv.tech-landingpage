# JV Tech Landing Page

Landing page da **JV Tech**, consultoria de TI. Feita com [Astro](https://astro.build) (site estático) e publicada no GitHub Pages em https://jvtech.dev.br.

## Estrutura

```
public/            favicon e CNAME (copiados como estão para o build)
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

Segue o Design System da JV Tech (cores e logotipos da Kzn Design). O tema **claro** é o padrão e há um **tema escuro** no botão do header (a escolha fica salva no navegador, em `localStorage`). O nome é sempre **JV Tech**.

- `src/styles/tokens.css`: tokens do DS (`principal`, `secundaria`, `noite`, `marinho`, `branco` e os papéis `surface`, `ink`, `accent`...), com os valores do tema escuro em `:root[data-theme="dark"]`. A classe `.on-deep` redefine os papéis para as faixas escuras (`marinho`), onde o texto é branco e o destaque é `principal`.
- Sem raios nem sombras, como o DS define.
- **Fonte:** o site não usa a MGS2 do DS (licença não confirmada); títulos e texto usam a fonte de texto do sistema.
- Logotipos em `src/assets/images/`: `logo-claro.png` (tema claro), `logo-escuro.png` (tema escuro e faixas `marinho`) e `hero.png` (`LOGO JV TECH C BG.png`, também usado no Open Graph).

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
