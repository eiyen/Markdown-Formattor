// textProcessor.js
const fs = require('fs');
const originalArticle = require('./article');

function processArticle(article) {
  // 在文章开头添加特定内容
  let modifiedArticle = '@[TOC]\n\n---\n' + article;

  // 替换文章中的二级、三级、四级标题
  modifiedArticle = modifiedArticle.replace(/^(##+)( )/gm, (match, hashes, space) => {
    // 移除一个 '#'，以降低标题级别
    return '#'.repeat(hashes.length - 1) + space;
  });

  return modifiedArticle;
}

const processedArticle = processArticle(originalArticle);

// 将处理后的文章保存到 outputArticle.js 文件中
fs.writeFileSync('outputArticle.js', `const processedArticle = \`${processedArticle}\`;\nmodule.exports = processedArticle;`);
