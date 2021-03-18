import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('must render the component without errors!', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
