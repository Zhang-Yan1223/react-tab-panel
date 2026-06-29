# React Tab Panel

一个小型的 React 实现，用来展示一个可复用的 Tab Panel 组件。当前选中的 tab 会动态渲染可复用的 `Heading` 组件和 `Paragraph` 组件。

## 技术栈

- React
- Vite
- Vitest
- React Testing Library

## 本地运行

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

运行测试：

```bash
npm run test:run
```

生产环境构建：

```bash
npm run build
```

## 实现思路

这个项目把展示逻辑和状态逻辑分开：

- `Heading` 用来渲染可复用的标题内容。
- `Paragraph` 用来渲染可复用的段落内容。
- `TabPanel` 负责 tab 的选中状态，并渲染当前选中 tab 的内容。
- `tabs.js` 单独存放 tab 数据，这样组件可以复用于不同内容场景。

tab 控件使用了可访问性相关的角色和属性，包括 `tablist`、`tab`、`tabpanel`，以及 `aria-selected`、`aria-controls`、`aria-labelledby`。

## 项目结构

```txt
src/
  components/
    Heading.jsx
    Paragraph.jsx
    TabPanel.jsx
    TabPanel.test.jsx
  data/
    tabs.js
  test/
    setup.js
  App.jsx
  main.jsx
  styles.css
```
