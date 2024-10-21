import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'This is Dashboard page',
};

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default DashboardLayout;
