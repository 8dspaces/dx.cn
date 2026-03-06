# GitHub Pages 部署指南

## 配置步骤

### 1. 推送代码到 GitHub
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/8dspaces/dexin.de.git
git push -u origin main
\`\`\`

### 2. 启用 GitHub Pages
1. 进入你的 GitHub 仓库：https://github.com/8dspaces/dexin.de
2. 点击 "Settings" (设置)
3. 在左侧菜单中点击 "Pages"
4. 在 "Source" 下选择 "GitHub Actions"

### 3. basePath 已配置完成
项目已为你的仓库配置好 basePath：`/dexin.de`

在 `next.config.mjs` 中的配置：
\`\`\`javascript
basePath: process.env.NODE_ENV === 'production' ? '/dexin.de' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/dexin.de' : '',
\`\`\`

所有图片路径已通过 `getImagePath()` 工具函数正确处理，确保在 GitHub Pages 上正常显示。

### 4. 触发部署
- 每次推送到 `main` 分支时会自动部署
- 也可以在 GitHub 的 "Actions" 页面手动触发部署

### 5. 访问网站
部署完成后，你的网站将在以下地址可用：
**https://8dspaces.github.io/dexin.de/**

## 注意事项

- 所有图片都在 `public` 目录中，会自动复制到输出目录
- 图片路径使用 `getImagePath()` 函数，自动添加 basePath 前缀
- Next.js 已配置为静态导出模式 (`output: 'export'`)
- 图片优化已禁用 (`unoptimized: true`)，适合静态部署
- `.nojekyll` 文件确保 GitHub Pages 正确处理下划线开头的文件

## 本地测试
在推送前，你可以本地测试构建：

\`\`\`bash
pnpm build
# 构建的静态文件将在 ./out 目录中
\`\`\`

使用本地服务器预览：
\`\`\`bash
npx serve out
\`\`\`

## 图片说明
项目包含以下图片：
- `/public/logo.png` - 公司 Logo
- `/public/germany-healthcare-professionals-hospital.jpg` - Hero 区域背景图
- `/public/smiling-healthcare-professional-with-tablet.jpg` - Track 区域图片

所有图片在生产环境中会自动添加 `/dexin.de` 前缀。
