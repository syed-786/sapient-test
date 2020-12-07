import { render, screen } from '@testing-library/react';
import Search from '../search';
const axios = require('axios');
jest.mock('axios');

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
}));

test('Render search correctly', () => {
  
  render(<Search />);
  expect(screen.getByText('No Data')).toBeInTheDocument();
});

test('Render search correctly', async () => {
  const mockUsers = [{
    mission_name: 'XYZ',
    mission_id: '111',
    flight_number: '123',
    launch_year: '1999',
    launch_success: false,
    links: {},
    rocket: null,
  }];
  const mockResponse = { data: mockUsers };
  axios.get.mockImplementation(() => Promise.resolve({ data: mockResponse }));
});