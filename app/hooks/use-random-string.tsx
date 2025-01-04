export function useRandomString(...strings: string[]) {
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}
