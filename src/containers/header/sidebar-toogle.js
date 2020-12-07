import React from 'react';
import { useSidebarValue } from '../../context';
import { Sidebar } from '../../components';
import { RiMenuLine } from 'react-icons/ri';

export const SidebarToggleContainer = () => {
  const { sidebar, setSidebar } = useSidebarValue();

  return (
    <Sidebar.CloseButton
      aria-label="Toggle sidebar"
      onClick={() => setSidebar(!sidebar)}
    >
      <RiMenuLine />
    </Sidebar.CloseButton>
  );
};
