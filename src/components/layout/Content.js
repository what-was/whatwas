import React from 'react';
import { SidebarLeft } from './SidebarLeft'
import { SidebarRight } from './SidebarRight'
import { Notes } from '../Notes'

export const Content = () => (
    <section>
        <SidebarLeft />
        <SidebarRight />
        <Notes />
    </section>
);