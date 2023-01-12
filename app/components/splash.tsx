import { Logo } from './logo';

interface SplashProps {
  childrenHidden?: boolean;
  children?: React.ReactNode;
}

export const Splash = ({ childrenHidden = true, children }: SplashProps) => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Logo />
      </div>
      {children && (
        <div
          style={{
            display: childrenHidden ? 'none' : 'block',
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};
