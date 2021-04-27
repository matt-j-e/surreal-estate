import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  render(<App />);
  const headerElement = screen.getByText(/surreal estate/i);
  expect(headerElement).toBeInTheDocument();
});
