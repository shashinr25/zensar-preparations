export function debounce(callback: Function, delay: number) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.call(this, args);
        }, delay)
    }
}