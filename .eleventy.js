module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("files");

    eleventyConfig.addPassthroughCopy({"img/favicon/favicon.ico" : "/" });
};