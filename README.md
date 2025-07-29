# gh-feed

Atualiza o README com os últimos posts de um feed (Medium, Dev.to, WordPress, etc).

## Inputs

| Nome         | Obrigatório | Descrição                                      | Padrão        |
|--------------|-------------|------------------------------------------------|---------------|
| feed-url     | Sim         | URL do feed RSS ou Atom                        |               |
| post-limit   | Não         | Quantidade de posts                            | 5             |
| readme-path  | Não         | Caminho do README                              | ./README.md   |
| feed-type    | Não         | Tipo de feed (medium, devto, wordpress, etc.)  | ""            |

## Exemplo de uso

```yaml
name: Atualizar posts do blog no README

on:
  workflow_dispatch:

permissions:
  contents: write

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Atualiza lista de posts
        uses: cabraldasilvac/gh-feed@v1.0.0
        with:
          feed-url: https://medium.com/feed/@wcabraldasilvac
          post-limit: 5
          readme-path: ./README.md

      - name: Commit e push se houver mudanças
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add README.md
          git diff --quiet && git diff --staged --quiet || (
            git commit -m "Atualiza lista de posts do blog"
            git push
          )
```
