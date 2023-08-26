# Markdown Formatter

## 项目简介

Markdown Formatter 是一个简单的 Node.js 脚本，用于自动格式化 Markdown 文章。主要功能包括在文章开头添加目录（Table of Contents, TOC）和降低二级、三级、四级标题到一级、二级、三级标题。

## 功能

- 自动在文章开头添加 `@[TOC]` 和 `---`。
- 自动将二级（##）、三级（###）、四级（####）标题转换为一级（#）、二级（##）、三级（###）。

## 使用方法

### 1. 安装 Node.js

确保您的系统中已经安装了 [Node.js](https://nodejs.org/).

### 2. 克隆或下载项目

从 GitHub 克隆此项目或直接下载 ZIP 文件。

```shell
git clone https://github.com/eiyen/Markdown-Formattor.git
```

### 3. 进入项目目录

```shell
cd Markdown-Formatter
```

### 4. 修改 `article.js`

在 `article.js` 文件中，输入或粘贴您想要格式化的 Markdown 文章。

### 5. 运行 `textProcessor.js`

```shell
node textProcessor.js
```

运行该命令后，`outputArticle.js` 文件将被创建或更新，其中包含处理后的文章内容。

### 6. 查看结果

打开 `outputArticle.js` 查看处理后的文章。

## 注意事项

- `outputArticle.js` 文件是自动生成的，因此建议不要手动编辑。
- 此项目中的 `.gitignore` 文件已经配置了对 `outputArticle.js` 的忽略，所以它不会被推送到 GitHub。

## 许可证

此项目采用 MIT 许可证。