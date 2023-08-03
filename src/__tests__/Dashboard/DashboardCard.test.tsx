import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import DashboardCard from 'components/Dashboard/DashboardCard';

describe('DashboardCard', () => {
  const DashboardCardData = { name: 'abc', value: '123' };
  it('renders DashboardCard component', async () => {
    render(<DashboardCard DashboardCardData={DashboardCardData} />);

    expect(await screen.queryByText('abc:')).toBeInTheDocument();
    expect(await screen.queryByText('123')).toBeInTheDocument();
  });
});
