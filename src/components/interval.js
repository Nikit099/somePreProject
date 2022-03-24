let scale = 0
let last = 0
export let speed = 0

export function Interv() {
    scale++
}

setInterval(() => {

    speed = (scale - last) * 30
    last = scale
}, 2000)