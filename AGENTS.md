# Personal Homepage Maintenance Guide for AI Agents

This repository is Zhaoyang Liang's personal academic homepage, built with Jekyll and the AcademicPages theme. Treat this file as the primary repository-specific maintenance guide.

The site is published from the `master` branch at `https://zhaoyang-liang.github.io/`. Do not open a pull request against the upstream `academicpages/academicpages.github.io` template repository.

## Agent operating rules

1. Read this file before editing the site.
2. Run `git status --short` before making changes. Preserve unrelated user changes and never reset, discard, or overwrite them.
3. Prefer editing content sources in `_config.yml`, `_pages/`, `_includes/`, and `_data/`. Edit templates or CSS only when the requested presentation cannot be expressed through existing data fields.
4. Never edit `_site/`. It is generated output and is excluded by Git.
5. Do not commit or push unless the user explicitly asks. A request to edit or preview the site does not imply permission to publish it.
6. Do not invent degrees, affiliations, publication venues, paper status, awards, dates, advisors, or project claims. Preserve uncertainty and placeholders when the user has not supplied facts.
7. After any meaningful change, build the entire site and inspect the affected Chinese and English routes.

## Current information architecture

The site has five conceptual pages in two route sets:

| Page | Chinese-site route | English-site route | Content-language rule |
| --- | --- | --- | --- |
| Main Page | `/main/` | `/en/main/` | Body is English on both routes; surrounding profile and footer follow the route language |
| Overview | `/` | `/en/` | Fully localized Chinese/English versions |
| Research | `/research/` | `/en/research/` | Research content is English on both routes; surrounding sidebar and footer follow the route language |
| Engineering | `/engineering/` | `/en/engineering/` | Fully localized through shared data fields |
| Competitions | `/competitions/` | `/en/competitions/` | Fully localized through shared data fields |

The root route `/` is the default landing page and shows Overview. `Main Page` remains the first navigation item even though it is not the landing page.

The Chinese routes use `lang: zh`; English routes use `lang: en`. Each page declares `lang_switch` pointing to its counterpart. Do not use the English language merely because the page body is English: on `/main/` and `/research/`, the Chinese profile, sidebar, footer, HTML language, and interface text must remain Chinese.

### Navigation behavior

- `_includes/masthead.html` renders `Main Page` separately.
- `_data/navigation.yml` contains only Overview, Research, Engineering, and Competitions.
- Do not add Main Page to `_data/navigation.yml`, or it will appear twice.
- Navigation labels intentionally remain English in both route sets.
- The current page is bold through the `is-current` class. Unselected navigation entries use normal weight.
- The language switch appears after the page links and before the theme button.

## Content source map

Use the narrowest source file that owns the requested content.

| Requested change | Source file or directory |
| --- | --- |
| Name, institution, program, avatar filename, email, GitHub, site URL | `_config.yml` |
| Navigation destinations and order | `_data/navigation.yml` |
| Main Page narrative and research-interest prose | `_includes/main-page-content.md` |
| Chinese Overview | `_pages/overview.md` |
| English Overview | `_pages/en-overview.md` |
| Research entries and PDF paths | `_data/research.yml` |
| Engineering/internship entries and images | `_data/engineering.yml` |
| Competition/award entries and images | `_data/competitions.yml` |
| Main Page route wrappers | `_pages/about.md`, `_pages/en-main.md` |
| Research route wrappers | `_pages/research.md`, `_pages/en-research.md` |
| Engineering route wrappers | `_pages/engineering.md`, `_pages/en-engineering.md` |
| Competition route wrappers | `_pages/competitions.md`, `_pages/en-competitions.md` |
| Profile photo | `images/portrait.jpg` by default |
| Research PDFs | `files/` |
| Engineering images | `images/engineering/` |
| Competition images | `images/competitions/` |
| Site-specific layout, color, spacing, and responsive rules | `_sass/layout/_personal.scss` |
| Navigation/menu/theme interaction | `assets/js/site.js` |

## Global identity and contact information

Global information is stored under `author:` in `_config.yml`.

Important fields:

```yaml
author:
  avatar: "portrait.jpg"
  name: "梁朝阳"
  name_en: "Zhaoyang Liang"
  bio: "密码科学与技术 · 计算机科学与技术"
  bio_en: "Cryptography Science and Technology · Computer Science and Technology"
  employer: "南开大学"
  employer_en: "Nankai University"
  affiliation: "南开大学密码与网络空间安全学院"
  affiliation_en: "College of Cyber Science, Nankai University"
  role: "密码科学与技术"
  role_en: "Cryptography Science and Technology"
  email: "budongjishubu@gmail.com"
  github: "Zhaoyang-Liang"
```

`avatar` is resolved relative to `images/`, so `avatar: "portrait.jpg"` means `images/portrait.jpg`. Replacing that file while preserving its name updates the photo everywhere.

Jekyll does not reload `_config.yml` while serving. Restart the local server after changing this file.

## Main Page

Both `/main/` and `/en/main/` include `_includes/main-page-content.md`. This is intentional: Main Page has a single English body shared by both routes.

- Edit the biography and research-interest prose only in `_includes/main-page-content.md`.
- Do not duplicate the prose in `_pages/about.md` or `_pages/en-main.md`.
- The route wrappers control shell language, paired navigation, and layout.
- The `home` layout places the profile photo and identity at the top, followed by full-width narrative content.

## Overview

Overview is the concise landing page.

- Edit Chinese content in `_pages/overview.md`.
- Mirror the same facts in English in `_pages/en-overview.md`.
- Keep route metadata (`permalink`, `lang`, and `lang_switch`) intact.
- The update date is manual. When the displayed information changes materially, update the `last_updated` value in both files:

```yaml
last_updated: "YYYY-MM-DD"
```

Do not replace it with an automatic build date unless the user explicitly changes this policy.

## Research entries and PDFs

Research content is rendered from `_data/research.yml` by `_includes/research-list.html`. Both the Chinese-site and English-site Research routes intentionally show the same English research presentation.

Current display rules:

- The heading is `Selected Research Works` on both routes.
- Paper titles are English and link directly to local PDFs.
- Every author name is bold.
- There is no separate PDF button and no paragraph-length paper description.
- Optional funding/support appears above the title in small dark green text.
- Keywords appear below the authors in muted italic text.
- Do not add a journal, conference, or manuscript-status label unless the user supplies and requests it.

Example entry:

```yaml
- id: example-paper
  title: "English Paper Title"
  authors:
    - First Author
    - Zhaoyang Liang
  support: "国家自然科学基金"
  support_en: "National Natural Science Foundation of China"
  keywords:
    - 中文关键词
  keywords_en:
    - English Keyword
  pdf: /files/example-paper.pdf
```

The renderer prefers `support_en` and `keywords_en`, falling back to `support` and `keywords`. To add or replace a paper:

1. Copy the PDF into `files/` using a stable ASCII filename with no spaces when practical.
2. Add or update the corresponding YAML entry.
3. Keep `id` unique, lowercase, and hyphenated.
4. Use a root-relative PDF path such as `/files/example-paper.pdf`.
5. Confirm that clicking the title opens the PDF.

The current PDFs are:

- `files/bootstrapping-ring-switching.pdf`
- `files/theta-series-ideal-lattices.pdf`
- `files/secure-deduplication-iot.pdf`

## Engineering and internships

Engineering content is shared through `_data/engineering.yml` and localized using paired fields such as `title`/`title_en` and `description`/`description_en`.

The `type` field controls section placement:

- `type: internship` renders under Internship Experience.
- `type: project` renders under Engineering Experience.

Example:

```yaml
- id: example-project
  type: project
  title: "中文标题"
  title_en: "English Title"
  meta: "2026.06 · 密码芯片"
  meta_en: "2026.06 · Cryptographic Hardware"
  project: "中文项目名称或方向"
  project_en: "English Project Name or Area"
  description: "中文简介。"
  description_en: "English description."
  image: /images/engineering/example.png
  image_alt: "中文替代文本"
  image_alt_en: "English alternative text"
```

The `showcase-entry.html` include renders both internship and project cards. Avoid placing both an internship and project in the same section by omitting or mistyping `type`.

## Competitions and awards

Competition content is stored in `_data/competitions.yml`.

The `display` field determines presentation:

- `display: featured` creates a visual card with a left-side image.
- `display: other` creates a compact text-only entry in the remaining-awards section.

Featured entry example:

```yaml
- id: example-competition
  display: featured
  title: "中文竞赛名称"
  title_en: "English Competition Name"
  award: "国家级一等奖"
  award_en: "National First Prize"
  project: "中文项目名称"
  project_en: "English Project Name"
  tags:
    - 密码学
    - 深度学习
  tags_en:
    - Cryptography
    - Deep Learning
  image: /images/competitions/example.png
  image_alt: "中文替代文本"
  image_alt_en: "English alternative text"
```

Keep only the strongest selected competitions as `featured`; use `other` for the compact list. The section names themselves live in `_pages/competitions.md` and `_pages/en-competitions.md`.

## Image preparation

Engineering and featured competition cards are designed around a `16:10` image.

- Preferred size: `1600×1000`, `1280×800`, or another exact `16:10` ratio.
- Keep the subject centered and add white padding when the source does not fit the ratio.
- Use PNG for diagrams/screenshots and JPEG for photographs.
- Use lowercase ASCII filenames with hyphens when practical.
- Store the file in the correct content directory and reference it with a root-relative path beginning with `/`.
- Write meaningful `image_alt` and `image_alt_en` text.

If `image` is omitted, the shared card include renders a placeholder. Do not create separate Chinese and English copies of the same visual unless the visual itself contains language-specific text.

## Layout and component map

The main rendering chain is:

```text
_config.yml defaults
  -> _layouts/default.html
     -> _includes/masthead.html
     -> page-specific layout
     -> _includes/footer.html
```

Secondary pages use `_layouts/single.html`, which adds the profile sidebar. Main Page uses `_layouts/home.html`, which renders the photo and identity at the top and keeps the narrative full width.

Important shared components:

- `_includes/profile-photo.html`: avatar or placeholder.
- `_includes/profile-links.html`: Email, GitHub, Google Scholar, and ORCID links.
- `_includes/author-profile.html`: sidebar identity block.
- `_includes/research-list.html`: research list renderer.
- `_includes/showcase-entry.html`: featured competition and engineering card renderer.
- `_includes/other-awards.html`: compact award list renderer.
- `_includes/icon.html`: inline site icons.
- `_includes/footer.html`: localized footer.

Do not copy component markup into page files. Extend the shared include if the same structural change should appear in multiple places.

## Styling

Site-specific styling belongs in `_sass/layout/_personal.scss`.

Key CSS areas:

- `:root`: site width, gutters, academic heading color, research title color, and funding color.
- `.site-nav*`: desktop/mobile navigation and selected state.
- `#main`, `.sidebar`, `.page`: two-column secondary-page layout.
- `.profile-intro*`: Main Page header.
- `.research-paper*`: research list.
- `.competition-card*`: featured competition and engineering cards.
- `.other-awards*`: compact award list.
- `.overview-updated`: manual update-date line.
- `@media` blocks: tablet and mobile behavior.

Preserve dark-mode variables and test both light and dark themes after changing colors. Preserve mobile behavior at widths below `700px`. Avoid inline styles in Markdown or YAML when an existing class can express the design.

## Local development

Run the site from the repository root:

```bash
cd ~/server-connect/个人主页/Zhaoyang-Liang.github.io

JEKYLL_NO_BUNDLER_REQUIRE=true \
PATH="/Users/mac/.rbenv/versions/3.1.4/bin:$PATH" \
jekyll _3.9.0_ serve \
  --host 127.0.0.1 \
  --port 4000 \
  --watch \
  --force_polling
```

Preview at `http://127.0.0.1:4000/`.

If Jekyll reports `Address already in use`, a server is already listening on port 4000. Check it before starting another server:

```bash
lsof -nP -iTCP:4000 -sTCP:LISTEN
```

If the existing process should be restarted:

```bash
PID=$(lsof -ti tcp:4000)
[ -n "$PID" ] && kill "$PID"
```

Most Markdown, HTML, YAML, SCSS, JavaScript, image, and PDF changes rebuild under `--watch`. Restart Jekyll after editing `_config.yml`.

## Validation checklist

Build the complete site before reporting completion:

```bash
cd ~/server-connect/个人主页/Zhaoyang-Liang.github.io

JEKYLL_NO_BUNDLER_REQUIRE=true \
PATH="/Users/mac/.rbenv/versions/3.1.4/bin:$PATH" \
jekyll _3.9.0_ build --strict_front_matter

git diff --check
```

Then inspect the affected route and its paired-language route. For broad changes, verify all ten routes:

```text
/
/main/
/research/
/engineering/
/competitions/
/en/
/en/main/
/en/research/
/en/engineering/
/en/competitions/
```

Also verify:

- The selected navigation entry alone is bold.
- The language switch opens the matching counterpart.
- Chinese routes retain Chinese sidebar/footer language even when body content is English.
- Email uses `mailto:budongjishubu@gmail.com`.
- GitHub opens `https://github.com/Zhaoyang-Liang`.
- Research titles open their local PDFs.
- Images render without stretching or broken paths.
- Layout remains readable on desktop and mobile.
- Dark mode retains sufficient contrast.

Warnings about the local Ruby logger, Stevenson initialization, or `faraday-retry` may appear during a successful build. Treat the command's exit code and generated output as the build result; investigate any nonzero exit code or Jekyll error.

## Git and publication workflow

The remote is `origin`, and the publishing branch is `master`.

If the user has edited the repository elsewhere, synchronize before starting new work while the working tree is clean:

```bash
git pull --rebase origin master
```

After editing and validating, show the user the diff or summarize it. Only when explicitly asked to publish:

```bash
git status
git add -A
git commit -m "Describe the homepage update"
git push origin master
```

GitHub Pages should be configured once as:

```text
Settings -> Pages -> Build and deployment
Source: Deploy from a branch
Branch: master
Folder: /(root)
```

Each subsequent push to `master` triggers a new GitHub Pages build. Do not commit `_site/` or manually upload generated HTML. Deployment can take several minutes; inspect the repository's Actions page and the Pages settings if the public site does not update.

The existing `.github/workflows/jekyll-build.yml` is a build-only workflow inherited from the template and does not deploy the site. With the configuration above, publication is handled by GitHub Pages' branch deployment.
