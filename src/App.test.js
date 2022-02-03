import { render, screen } from '@testing-library/react';
import App from './App';

test('renders goblins link', () => {
  render(<App />);
  const linkElement = screen.getByText(/goblins/i);
  expect(linkElement).toBeInTheDocument();
});
