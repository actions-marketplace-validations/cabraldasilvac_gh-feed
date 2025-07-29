const core = require("@actions/core");
const Parser = require("rss-parser");
const fs = require("fs");

(async () => {
  try {
    const FEED_URL = core.getInput("feed-url");
    const BLOG_POST_LIMIT = parseInt(core.getInput("post-limit"));
    const README_FILE_PATH = core.getInput("readme-path");
    const FEED_TYPE = core.getInput("feed-type"); // Para uso futuro

    core.info(`Buscando feed: ${FEED_URL}`);
    const parser = new Parser();
    const feed = await parser.parseURL(FEED_URL);

    if (!feed.items || feed.items.length === 0) {
      core.warning("Nenhum post encontrado no feed.");
      return;
    }

    let markdownList = feed.items
      .slice(0, BLOG_POST_LIMIT)
      .map((item) => {
        // Futuramente, pode tratar tipos de feed diferentes aqui
        return `- [${item.title}](${item.link})`;
      })
      .join("\n");

    core.info("Posts encontrados e formatados:");
    core.info(markdownList);

    const readmeContent = fs.readFileSync(README_FILE_PATH, "utf-8");

    const newReadmeContent = readmeContent.replace(
      /<!-- BLOG-POST-LIST:START -->[\s\S]*?<!-- BLOG-POST-LIST:END -->/,
      `<!-- BLOG-POST-LIST:START -->\n${markdownList}\n<!-- BLOG-POST-LIST:END -->`,
    );

    fs.writeFileSync(README_FILE_PATH, newReadmeContent);
    core.info("Arquivo README.md atualizado com sucesso!");
  } catch (error) {
    core.setFailed(`Ocorreu um erro: ${error.message}`);
  }
})();
