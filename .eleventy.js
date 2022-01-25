const CleanCSS = require("clean-css");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addFilter("datetz", function (date) {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    return dayjs.tz(date, "Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss");
  });
  eleventyConfig.addPlugin(syntaxHighlight);
  return {
    pathPrefix: "/blog/",
  };
};
