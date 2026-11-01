## ⚙️ 게시물의 머리말 설정

```yaml
---
title: 내 첫 블로그 게시물
published: 2023-09-09
description: 내 새로운 Astro 블로그의 첫 번째 게시물입니다!
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
lang: jp      # 게시물의 언어가 `config.ts`의 사이트 언어와 다른 경우에만 설정합니다.
---
```
## 🧩 마크다운 확장 구문
Astro의 기본 [GitHub Flavored Markdown](https://github.github.com/gfm/) 지원 외에도 몇 가지 추가적인 마크다운 기능이 포함되어 있습니다.
- Admonitions ([미리보기 및 사용법](https://fuwari.vercel.app/posts/markdown-extended/#admonitions))
- GitHub 저장소 카드 ([미리보기 및 사용법](https://fuwari.vercel.app/posts/markdown-extended/#github-repository-cards))
- Expressive Code를 사용한 향상된 코드 블록 ([미리보기](https://fuwari.vercel.app/posts/expressive-code/) / [문서](https://expressive-code.com/))

`pnpm new-post <filename>` 새 게시물 작성