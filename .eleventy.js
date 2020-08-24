module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter("json", (dev) => {
    return JSON.stringify(dev);
  });
  
  eleventyConfig.addWatchTarget("sass");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addWatchTarget("css", "html");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");

  return {
    passthroughFileCopy: true
  }
}
