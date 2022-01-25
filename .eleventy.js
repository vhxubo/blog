const CleanCSS = require("clean-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addFilter("datetzday", function (date) {
    return dayjs(date).tz("Asia/Shanghai").format("YYYY-MM-DD");
  });
  eleventyConfig.addFilter("datetztime", function (date) {
    return dayjs(date).tz("Asia/Shanghai").format("YYYY-MM-DD HH:mm");
  });
  eleventyConfig.addPlugin(syntaxHighlight);
  return {
    pathPrefix: "/blog/",
  };
};
