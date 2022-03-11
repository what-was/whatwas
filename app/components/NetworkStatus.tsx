import { Badge } from '@mantine/core';
import { useState, useEffect } from 'react';

type NetworkStatus = 'online' | 'offline';

export const NetworkPresence = ({ showLabel = false }: { showLabel?: boolean }) => {
  const [status, setStatus] = useState<NetworkStatus>('online');
  const [shouldShowLabel, setShouldShowLabel] = useState(showLabel);

  useEffect(() => {
    window.addEventListener('online', () => setStatus('online'));
    window.addEventListener('offline', () => setStatus('offline'));

    return () => {
      window.removeEventListener('online', () => setStatus('online'));
      window.removeEventListener('offline', () => setStatus('offline'));
    };
  }, []);

  return (
    <>
      <Badge
        variant="dot"
        color={status === 'online' ? 'green' : 'red'}
        onMouseEnter={() => setShouldShowLabel(true)}
        onMouseLeave={() => setShouldShowLabel(false)}
        styles={{
          inner: {
            opacity: 0,
            width: 0,
          },
        }}
        sx={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          padding: '0 6px',
          transition: 'all 100ms ease-in-out',

          '&:hover': {
            padding: '0 11px',

            '& .mantine-Badge-inner': {
              opacity: 1,
              width: '100%',
            },
          },

          '&::before': {
            marginRight: shouldShowLabel ? 6 : 0,
          },
        }}
      >
        {status}
      </Badge>
    </>
  );
};
