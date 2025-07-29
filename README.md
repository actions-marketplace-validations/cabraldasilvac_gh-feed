# gh-feed

GitHub Action que busca os posts mais recentes de qualquer feed (Medium, Dev.to, WordPress, etc) e atualiza um bloco específico no README do repositório.

## Inputs

- `feed-url`: **Obrigatório**. URL do feed RSS ou Atom.
- `post-limit`: Opcional. Quantidade de posts para listar (default: 5).
- `readme-path`: Opcional. Caminho do README a ser atualizado (default: `./README.md`).
- `feed-type`: Opcional. Tipo de feed (ex: medium, devto, wordpress). Útil para customizações futuras.

## Exemplo de uso em workflow

```yaml
- name: Fetch latest blog posts
  uses: cabraldasilvac/gh-feed@v1
  with:
    feed-url: https://medium.com/feed/@wcabraldasilvac
    post-limit: 5
    readme-path: ./README.md
```

## Estrutura do bloco no README

Certifique-se de que seu README possui o bloco delimitador para os posts:

```markdown
<!-- BLOG-POST-LIST:START -->
- [Git e GitHub — Conceitos e comandos Iniciais](https://medium.com/@wcabraldasilvac/git-e-github-conceitos-e-comandos-iniciais-6a9690778f2a?source=rss-4b15f2a315f5------2)
- [Arquitetura Frontend:](https://medium.com/@wcabraldasilvac/arquitetura-frontend-uma-an%C3%A1lise-sobre-padr%C3%B5es-de-organiza%C3%A7%C3%A3o-em-projetos-web-contempor%C3%A2neos-7b7ce9730604?source=rss-4b15f2a315f5------2)
<!-- BLOG-POST-LIST:END -->
```

## Publicar no Marketplace

1. Crie um repositório público com esses arquivos.
2. Faça o primeiro release (por exemplo, v1.0.0).
3. Vá em “Actions” > “Marketplace” > “Publicar Action” e siga as instruções.

---

<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->
