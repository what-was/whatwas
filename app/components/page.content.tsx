import { cn } from '../lib/utils';

type PageContentProps = {
  className?: string;
  children?: React.ReactNode;
  withGutter?: boolean;
};

export const PageContent = ({
  className,
  withGutter,
  children,
}: PageContentProps) => {
  return (
    <div
      className={cn(
        'h-full bg-background py-4 md:py-6',
        withGutter && 'px-4 md:px-6',
        className,
      )}
    >
      {children}
    </div>
  );
};
