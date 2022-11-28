export function debounce (fn, interval = 500) {
    let timer = null
    return function (...args) {
        if (timer) {
        clearTimeout(timer)
        }
        timer = setTimeout(() => {
        fn.apply(this, args)
        }, interval)
    }
}