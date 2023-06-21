const fg = require("fast-glob");
const { basename, dirname } = require("node:path");
const Image = require("@11ty/eleventy-img");
const postcss = require("postcss");
const postcssrc = require("postcss-load-config");

const optimizeImages = async () => {
  const images = await fg(["src/**/*.{jpeg,jpg,png,webp,gif,tiff,avif,svg}"], {
    ignore: ["dist", "**/node_modules", "src/public"],
  });
  for (const image of images) {
    await Image(image, {
      filenameFormat: () => basename(image),
      formats: [null],
      sharpOptions: {
        animated: true,
      },
      outputDir: dirname(image).replace(/^src/, "dist"),
    });
  }
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("date", (date) => date.toLocaleDateString("ja-JP"));
  eleventyConfig.addNunjucksAsyncFilter("postcss", (css, callback) =>
    postcssrc().then(({ plugins, options }) => {
      postcss(plugins)
        .process(css, options)
        .then(
          (result) => callback(null, result.css),
          (error) => callback(error, null)
        );
    })
  );
  eleventyConfig.addWatchTarget("src/style/**/*.css");
  eleventyConfig.addPassthroughCopy({ "src/public/**": "/" });
  eleventyConfig.on("beforeBuild", optimizeImages);
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
