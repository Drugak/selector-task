export default function debounce(func:() => void, wait = 0) {
  let timeoutID: ReturnType<typeof setTimeout> | null = null
  return function (...args) {
    const context: any = this;
    timeoutID && clearTimeout(timeoutID);

    timeoutID = setTimeout(function () {
      timeoutID = null;
      func.apply(context, args);
    }, wait);
  };
}
