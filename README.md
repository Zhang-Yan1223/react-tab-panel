# React Tab Panel

A small React implementation of a reusable tab panel component. The selected tab dynamically renders a reusable `Heading` component and `Paragraph` component.

## Tech Stack

- React
- Vite
- Vitest
- React Testing Library

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run tests:

```bash
npm run test:run
```

Build for production:

```bash
npm run build
```

## Approach

The project keeps display and state responsibilities separate:

- `Heading` renders reusable heading content.
- `Paragraph` renders reusable paragraph content.
- `TabPanel` owns tab selection state and renders the selected tab's content.
- `tabs.js` stores tab data separately so the component can be reused with different content.

The tab controls use accessible `tablist`, `tab`, and `tabpanel` roles, along with `aria-selected`, `aria-controls`, and `aria-labelledby`.

## Project Structure

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
