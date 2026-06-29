import { useMemo, useState } from 'react';
import { Heading } from './Heading.jsx';
import { Paragraph } from './Paragraph.jsx';

// The panel accepts tab data as props so the same component can be reused
// with any group of heading and paragraph content.
export function TabPanel({ tabs, defaultTabId }) {
  // Use the requested default tab when provided; otherwise fall back to the first item.
  const initialTabId = defaultTabId ?? tabs[0]?.id;
  const [selectedTabId, setSelectedTabId] = useState(initialTabId);

  // Derive the selected tab from state so the rendered content always matches the active button.
  const selectedTab = useMemo(
    () => tabs.find((tab) => tab.id === selectedTabId) ?? tabs[0],
    [selectedTabId, tabs],
  );

  // Empty data should not render broken tab markup.
  if (!tabs.length) {
    return null;
  }

  return (
    <section className="tab-panel" aria-label="Content tabs">
      <div className="tab-list" role="tablist" aria-label="Choose content">
        {tabs.map((tab) => {
          const isSelected = tab.id === selectedTab.id;

          return (
            // ARIA attributes connect each tab button to its panel for assistive technology.
            <button
              className="tab-button"
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              key={tab.id}
              onClick={() => setSelectedTabId(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <article
        className="tab-content"
        role="tabpanel"
        id={`panel-${selectedTab.id}`}
        aria-labelledby={`tab-${selectedTab.id}`}
      >
        <Heading>{selectedTab.heading}</Heading>
        <Paragraph>{selectedTab.paragraph}</Paragraph>
      </article>
    </section>
  );
}
