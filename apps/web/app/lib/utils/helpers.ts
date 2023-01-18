export const camelCase = (str: string) => {
  const [first, ...rest] = str.split(' ');
  return [first.toLowerCase(), ...rest].join('');
};
