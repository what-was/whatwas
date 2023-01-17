export type Timings = Record<
  string,
  Array<{ desc?: string; type: string; time: number }>
>;

export async function time<ReturnType>(
  fn: Promise<ReturnType> | (() => ReturnType | Promise<ReturnType>),
  {
    type,
    desc,
    timings,
  }: {
    type: string;
    desc?: string;
    timings?: Timings;
  },
): Promise<ReturnType> {
  const promise = typeof fn === 'function' ? fn() : fn;
  if (!timings) return promise;
  if (process.env.NODE_ENV === 'production') return promise;

  const start = performance.now();
  const result = await promise;
  type = type.replaceAll(' ', '_');
  let timingType = timings[type];
  if (!timingType) {
    // eslint-disable-next-line no-multi-assign
    timingType = timings[type] = [];
  }

  timingType.push({ desc, type, time: performance.now() - start });
  return result;
}

export function getServerTimeHeader(timings: Timings) {
  return Object.entries(timings)
    .map(([key, timingInfos]) => {
      const dur = timingInfos
        .reduce((acc, timingInfo) => acc + timingInfo.time, 0)
        .toFixed(1);
      const desc = timingInfos
        .map((t) => t.desc)
        .filter(Boolean)
        .join(' & ');
      return [
        key.replaceAll(':', '_'),
        desc ? `desc="${desc}"` : null,
        `dur=${dur}`,
      ]
        .filter(Boolean)
        .join(';');
    })
    .join(',');
}
