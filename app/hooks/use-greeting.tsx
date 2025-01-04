import { useDailyGreeting } from '~/hooks/use-time';
import { useTimelyString } from '~/hooks/use-timely-string';

export const useGreeting = () => {
  const timelyGreeting = useTimelyString({
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    night: 'Good Night',
  });

  const dailyGreeting = useDailyGreeting();

  return { greeting: dailyGreeting, dailyGreeting, timelyGreeting };
}
