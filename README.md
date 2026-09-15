# 梁朝阳的个人主页

基于 AcademicPages / Jekyll 的中文个人主页，导航使用英文。

| 导航 | 页面文件 | 路径 | 内容 |
| --- | --- | --- | --- |
| Main Page | `_pages/about.md` | `/` | 个人介绍、研究方向、拓展方向 |
| Overview | `_pages/overview.md` | `/overview/` | 身份、研究和经历概览 |
| Research | `_pages/research.md` | `/research/` | 三篇论文，集中在一页 |
| Engineering | `_pages/engineering.md` | `/engineering/` | 奇安信实习与芯片项目 |
| Competitions | `_pages/competitions.md` | `/competitions/` | 竞赛与个人贡献 |

首页采用顶部照片与个人信息、下方通栏正文的布局；其他页面保留个人信息侧栏。Research 已填入三篇论文及 PDF 链接，工程、实习与竞赛页面依据简历写入初稿，日期和描述可继续精修。正文中的 Liquid 注释记录补充事项，不会显示在网页上。
`_pages/404.md` 是不存在地址的提示页，不出现在导航中。

## 修改入口

- 个人信息和站点地址：`_config.yml`
- 首页正文：`_pages/about.md`；顶部身份信息：`_layouts/home.html`
- 页面间距、字号、颜色和手机布局：`_sass/layout/_personal.scss`
- 首页导航名称：`_config.yml` 中的 `main_page_title`
- 其他导航与顺序：`_data/navigation.yml`
- 照片：放入 `images/`，并在 `_config.yml` 中填写 `author.avatar`（如 `portrait.jpg`）；留空时显示圆形占位
- 论文信息、作者顺序、关键词和 PDF 路径：`_data/research.yml`
- 论文 PDF：`files/bootstrapping-ring-switching.pdf`、`files/theta-series-ideal-lattices.pdf`、`files/secure-deduplication-iot.pdf`
- 竞赛文字与图片路径：`_data/competitions.yml`；竞赛图片放入 `images/competitions/`
- 工程与实习文字和图片路径：`_data/engineering.yml`；相关图片放入 `images/engineering/`

论文标题在新标签页直接打开对应 PDF。链接使用站点相对路径，本地预览和 GitHub Pages 共用。

## 本地预览

安装 Ruby 与 Bundler 后，在仓库目录运行：

```bash
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

访问 http://127.0.0.1:4000/。修改 `_config.yml` 后需要重启预览。

## 发布

使用 GitHub Pages，从 `master` 分支的根目录构建。
站点地址：https://zhaoyang-liang.github.io/

主题来自 [AcademicPages](https://github.com/academicpages/academicpages.github.io)，保留原始许可证和主题署名。
