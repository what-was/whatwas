import React from 'react';
import { DashboardContainer } from '../containers/dashboard';
import { useContent } from '../hooks';


export default function Dashboard() 
{
  const user = JSON.parse(localStorage.getItem('authUser'));
  const boards = useContent('boards');

  return (
    <>
      <DashboardContainer boards={boards} />

    </>
  );
}
