import { Fragment } from 'react';
import { NavLink, useMatches } from '@remix-run/react';
import {
  Breadcrumb,
  BreadcrumbItem as BreadcrumbItemPrimitive,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import { Typography } from './ui/typography';

const Separator = () => (
  <Typography variant="muted" as="span" aria-hidden="true" size="sm">
    /
  </Typography>
);

type BreadcrumbItemProps = {
  path: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
};

export const BreadcrumbItem = ({
  path,
  children,
  isActive: _isActive,
  className,
}: BreadcrumbItemProps) => {
  return (
    <BreadcrumbItemPrimitive className="hidden md:block">
      {!_isActive ? (
        <BreadcrumbLink href={path}>{children}</BreadcrumbLink>
      ) : (
        <BreadcrumbPage>{children}</BreadcrumbPage>
      )}
    </BreadcrumbItemPrimitive>
  );
};

type BreadcrumbMatchHandler = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  breadcrumb: (match: any, isActive?: boolean) => React.ReactNode;
};

export const Breadcrumbs = ({ className }: { className?: string }) => {
  const matches = useMatches() as { handle: BreadcrumbMatchHandler }[];

  const breadcrumbs = matches
    // skip routes that don't have a breadcrumb
    .filter((match) => match.handle && match.handle.breadcrumb);

  const breadcrumbItems = breadcrumbs.map((match, index) => {
    const { handle } = match;
    const isLast = index === breadcrumbs.length - 1;
    const isRoot = index === 0;

    return (
      <Fragment key={index}>
        {!isRoot && <BreadcrumbSeparator className="hidden md:block" />}
        {handle?.breadcrumb && handle.breadcrumb(match, isLast)}
      </Fragment>
    );
  });

  if (!breadcrumbs.length) {
    return null;
  }
  return (
    <Breadcrumb>
      <BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
    </Breadcrumb>
  );
};
