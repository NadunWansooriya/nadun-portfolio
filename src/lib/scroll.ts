export function throttle<T extends (...args: any[]) => void>(fn: T, limit = 100): T {
  let inThrottle = false;
  let lastArgs: any[] | null = null;

  // @ts-expect-error generic cast
  return function (...args: any[]) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        if (lastArgs) {
          fn(...lastArgs);
          lastArgs = null;
        }
      }, limit);
    } else {
      lastArgs = args;
    }
  };
}

export function raf<T extends (...args: any[]) => void>(fn: T): T {
  let queued = false;
  // @ts-expect-error generic cast
  return function (...args: any[]) {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      fn(...args);
      queued = false;
    });
  };
}
