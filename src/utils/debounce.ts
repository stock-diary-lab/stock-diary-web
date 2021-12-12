export function debounce(callback: Function, delay = 200) {
  let timer: NodeJS.Timeout | null = null;

  return (...args: any) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback(args);
    }, delay);
  };
}
