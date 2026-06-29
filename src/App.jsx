import { TabPanel } from './components/TabPanel.jsx';
import { tabs } from './data/tabs.js';

export default function App() {
  return (
    <main className="page-shell">
      <section className="intro" aria-labelledby="page-eyebrow">
        <p className="eyebrow" id="page-eyebrow">
          Lorem ipsum dolor sit amet
        </p>
        <h1>consectetur adipiscing elit</h1>
        <p className="intro-copy">
          Donec suscipit ex eu faucibus laoreet. Nulla non neque mauris. Quisque molestie
          aliquam sem eget mattis. Suspendisse vehicula nisl non quam imperdiet fringilla.
        </p>
      </section>

      {/* Tab data is passed in, so the panel can be reused with any content set. */}
      <TabPanel tabs={tabs} defaultTabId="facilisi" />
    </main>
  );
}
