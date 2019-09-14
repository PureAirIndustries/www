require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("./src/GenSitemapRoutes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://www.pureairindustries.com")
    .save("./sitemap.xml");
}

generateSitemap()
  .then(
    () => {
      console.info("Sitemap Generated");
    },
    err => {
      console.info("Error while generating sitemap");
      console.info(err);
    }
  )
  .finally(() => process.exit());
