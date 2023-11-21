export const qs = (url: string, params: Record<string, any>) => {
  const query = Object.entries(params).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');
  return `${url}${query ? `?${query}` : ''}`;
};

export const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // tslint:disable-next-line: no-bitwise
    const r = Math.random() * 16 | 0;
    // tslint:disable-next-line: no-bitwise
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Resolve promise once condition returns true
 * @param {*} cond condition function
 * @param {*} timeout max length of time to wait for promise
 * @param {*} interval interval of time to wait between checks
 */
export const satisfyCondition = async (
  cond: () => boolean,
  timeout = 1000,
  interval: number = 100,
) => {
  if (interval === 0) {
    throw new Error('ivl cannot be 0');
  }
  const iters = Math.max(0, Math.floor(timeout / interval));
  let i = 0;
  while (!cond() && i < iters) {
    await delay(interval);
    i++;
  }
};

export const defined = <T>(value: T | undefined | null): value is T => value != null;