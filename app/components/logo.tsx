import { Box, Image } from '@mantine/core';
import { Link } from '@remix-run/react';
import WhiteLogo from '~/shared/assets/logo-white.png';

enum LOGO_WIDTHS {
  xs = 96,
  sm = 128,
  md = 160,
  lg = 192,
  xl = 256,
}

type LogoProps = {
  size?: keyof typeof LOGO_WIDTHS;
  to?: string;
  className?: string;
};

export function Logo(props: LogoProps) {
  const { size, to, className } = props;
  const width = LOGO_WIDTHS[size || 'md'];
  const LogoImage = () => (
    <Box className={className}>
      <Image width={width} src={WhiteLogo} alt="Logo" />
    </Box>
  );

  if (to) {
    return (
      <Link to={to}>
        <LogoImage />
      </Link>
    );
  }

  return <LogoImage />;
}
