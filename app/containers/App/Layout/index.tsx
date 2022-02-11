import { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <div>
    {/* <Navbar /> */}
    <div className='container'>{children}</div>
  </div>
);

export default Layout;
