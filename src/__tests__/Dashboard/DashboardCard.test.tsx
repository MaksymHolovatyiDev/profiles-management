import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import DashboardCard from 'components/Dashboard/DashboardCard';

describe('DashboardCard', () => {
  const DashboardCardData = { name: 'abc', value: '123' };
  it('renders DashboardCard component', () => {
    render(<DashboardCard DashboardCardData={DashboardCardData} />);

    expect(screen.queryByText('abc:')).toBeInTheDocument();
    expect(screen.queryByText('123')).toBeInTheDocument();
  });
});
