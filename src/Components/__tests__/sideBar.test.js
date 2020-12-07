import { render, screen } from '@testing-library/react';
import SideBar from '../sideBar';

test('Render SideBar correctly', () => {
  render(<SideBar />);
});

test('Render "Launch Year" text correctly', () => {
  render(<SideBar />);
  expect(screen.getByText('Launch Year')).toBeInTheDocument();
});

test('Render "Successful Launch" text correctly', () => {
  render(<SideBar />);
  expect(screen.getByText('Successful Launch')).toBeInTheDocument();
});