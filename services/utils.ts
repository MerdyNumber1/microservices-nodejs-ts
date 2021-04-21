export const wait = (cb: (...args: any) => any, ms: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      cb();
      resolve();
    }, ms)
  );
