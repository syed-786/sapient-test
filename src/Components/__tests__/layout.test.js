import { render, screen } from '@testing-library/react';
import Layout from '../layout';

test('Render sidebar correctaly', () => {
  render(<Layout />);
});

test('Render "Space Launch Program" text correctaly', () => {
  render(<Layout />);
  expect(screen.getByText('SpaceX Launch Program')).toBeInTheDocument();
});