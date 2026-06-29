import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TabPanel } from './TabPanel.jsx';

const testTabs = [
  {
    id: 'first',
    label: 'First tab',
    heading: 'First heading',
    paragraph: 'First paragraph',
  },
  {
    id: 'second',
    label: 'Second tab',
    heading: 'Second heading',
    paragraph: 'Second paragraph',
  },
];

describe('TabPanel', () => {
  it('renders the default selected tab content', () => {
    render(<TabPanel tabs={testTabs} defaultTabId="second" />);

    expect(screen.getByRole('tab', { name: /second tab/i })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('heading', { name: /second heading/i })).toBeInTheDocument();
    expect(screen.getByText(/second paragraph/i)).toBeInTheDocument();
  });

  it('switches heading and paragraph content when a tab is selected', async () => {
    const user = userEvent.setup();
    render(<TabPanel tabs={testTabs} defaultTabId="first" />);

    await user.click(screen.getByRole('tab', { name: /second tab/i }));

    expect(screen.getByRole('heading', { name: /second heading/i })).toBeInTheDocument();
    expect(screen.getByText(/second paragraph/i)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /first heading/i })).not.toBeInTheDocument();
  });
});
