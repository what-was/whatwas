import { Outlet } from '@remix-run/react';
import { PageContent, PageHeader } from '~/components/page';

export default function HabitsRoute() {
  return <>
    <Outlet />
  </>;
}