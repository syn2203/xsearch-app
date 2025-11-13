# XSearch App

基于 Astro + Tailwind CSS 的现代化 Web 应用。

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📦 部署到 Cloudflare Pages

### 构建设置

在 Cloudflare Pages 中使用以下配置：

```
构建命令: npm run build
构建输出目录: dist
Root 目录: /
环境变量: NODE_VERSION = 18
```

### 重要文件

- `tailwind.config.mjs`: Tailwind CSS 配置
- `postcss.config.mjs`: PostCSS 配置

## 🛠 技术栈

- **框架**: Astro 5.x
- **样式**: Tailwind CSS 3.x
- **构建工具**: Vite
- **部署**: Cloudflare Pages

## 📁 项目结构

```
├── src/
│   ├── components/     # Astro 组件
│   ├── layouts/        # 布局组件
│   ├── pages/          # 页面文件
│   └── assets/         # 静态资源
├── public/             # 公共文件
├── dist/               # 构建输出
└── package.json        # 项目配置
```

## 🔧 故障排除

### 构建失败

如果遇到依赖问题：

```bash
# 清理并重新安装
rm -rf node_modules package-lock.json
npm install
```

### 部署 404 错误

确保：
1. 构建输出目录设置为 `dist`
2. DNS 配置正确指向 Cloudflare Pages