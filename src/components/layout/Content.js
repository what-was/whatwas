import React from 'react';
import { SidebarLeft } from './SidebarLeft';
import { SidebarRight } from './SidebarRight';
import { Notes } from '../Notes';

export const Content = () => (
  <section>
    <SidebarLeft />
    <Notes />
    <SidebarRight />
  </section>
);
