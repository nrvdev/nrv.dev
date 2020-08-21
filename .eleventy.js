module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("sass");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addWatchTarget("css", "html");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");

  return {
    passthroughFileCopy: true
  }
}
