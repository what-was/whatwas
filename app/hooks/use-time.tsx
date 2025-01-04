import { useEffect, useState } from 'react';


export function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return time;
}
