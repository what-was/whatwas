/**
 * Calculate the age of a person based on the birthday
 * @param birthDate {Date} The birth date of the person
 * @returns {number} The age of the person
 */
export function calculateAge(birthDate: Date) {
  const today = new Date();

  const daysOld = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
  const yearsOld = Math.floor(daysOld / 365.25);
  const monthsOld = Math.floor((daysOld % 365.25) / 30.4375);

  return { days: daysOld, years: yearsOld, months: monthsOld };
}