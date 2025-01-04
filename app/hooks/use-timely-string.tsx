import { useTime } from '~/hooks/use-time';

type TimesOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

type TimelyStringProps = {
  [key in TimesOfDay]: string;
}

export function useTimelyString({
  morning,
  afternoon,
  evening,
  night,
}: TimelyStringProps) {
  const time = useTime();

  const isMorning = time.getHours() < 12 && time.getHours() >= 6;
  const isAfternoon = time.getHours() < 18 && time.getHours() >= 12;
  const isEvening = time.getHours() < 21 && time.getHours() >= 18;
  const isNight = time.getHours() >= 21 || time.getHours() < 6;

  return isMorning ? morning : isAfternoon ? afternoon : isEvening ? evening : night;
}
