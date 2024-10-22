import { Metadata } from 'next';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import Error from './error';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'This is Dashboard page',
};

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary errorComponent={Error}>
      <section>{children}</section>
    </ErrorBoundary>
  );
};

export default DashboardLayout;
