import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche la marque John Doe', () => {
  render(<App />);
  const brand = screen.getAllByText(/John Doe/i)[0];
  expect(brand).toBeInTheDocument();
});
