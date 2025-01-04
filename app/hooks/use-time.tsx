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


type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

/**
 * Returns a greeting based on the day of the week.
 * @returns {string} - The greeting.
 */
export function useDailyGreeting() {
  const time = useTime();

  const day = time.toLocaleDateString('en-GB', { weekday: 'long' }) as Day;

  const greeting = {
    'Monday': 'Happy Monday!',
    'Tuesday': 'Happy Tuesday!',
    'Wednesday': 'Happy Wednesday!',
    'Thursday': 'Happy Thursday!',
    'Friday': 'Happy Friday!',
    'Saturday': 'Happy Saturday!',
    'Sunday': 'Happy Sunday!',
  }[day];

  return greeting;
}
