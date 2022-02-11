import { Outlet } from 'remix';

import Layout from '../containers/App/Layout';

const Index = () => {
  return (
    <Layout>
      test
      <Outlet />
    </Layout>
  );
};

export default Index;
