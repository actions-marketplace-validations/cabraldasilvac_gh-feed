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
<!-- BLOG-POST-LIST:END -->
```

## Publicar no Marketplace

1. Crie um repositório público com esses arquivos.
2. Faça o primeiro release (por exemplo, v1.0.0).
3. Vá em “Actions” > “Marketplace” > “Publicar Action” e siga as instruções.

---
