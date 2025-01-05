export { PageContent } from './page.content';
export { PageHeader } from './page.header';

export const Page = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 pt-0">{children}</div>;
};
