# 鸭子的旅行 · A Duck's Journey

Tracy's personal blog. Built with Jekyll; GitHub Pages publishes it automatically.

## Put it online (one time)

1. Create a GitHub account and a new **public** repository.
   - Name it `<username>.github.io` → the site lives at `https://<username>.github.io`.
   - Any other name (e.g. `blog`) → open `_config.yml` and set `baseurl: "/blog"`.
2. Upload everything in this folder to the repository ("Add file → Upload files", drag in all files and folders, Commit).
3. Repository **Settings → Pages** → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)` → Save.
4. Wait 1–2 minutes; the address appears at the top of the Pages settings.

## Add a new post / 发新文章

Create a file in `_posts/` named `YYYY-MM-DD-short-name.md`, e.g. `2026-10-12-autumn-walk.md`:

```
---
title: 文章标题
language: zh          # zh = 中文文章, en = English Posts
topic: everyday       # one of the keys in _data/topics.yml
summary: 一两句话简介（显示在文章卡片上）
cover: /assets/images/2026-autumn/cover.jpg   # optional
---

正文从这里开始。段落之间空一行。

![照片说明](/assets/images/2026-autumn/photo1.jpg)
```

- **Photos**: put them in `assets/images/` (one folder per post), compressed to ~200–400 KB. Don't link WeChat images — they won't load outside WeChat.
- **Topics**: edit `_data/topics.yml` to rename or add topics (Chinese + English names).
- **About page**: edit `about.md`.
- **Home photo**: replace `assets/images/home.jpg` and `home-small.jpg`.

## Structure

```
_config.yml        site name, baseurl
_data/topics.yml   topic list (zh / en names)
_posts/            all articles, Chinese and English
_layouts/          page templates
assets/            css, js, images
zh/  en/           the two language sections
about.md           About page
```
