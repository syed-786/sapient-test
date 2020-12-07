import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

test('Render sidebar correctaly', () => {
  render(<Layout />);
});

test('Render "Space Launch Program" text correctaly', () => {
  render(<Layout />);
  expect(screen.getByText('Space Launch Program')).toBeInTheDocument();
});