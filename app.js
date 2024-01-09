let [sec, min, hours] = [0, 0, 0];
let displayTime = document.getElementById('displayTime')
let timer = null

const stopwatch = () => {
    sec ++;
    if(sec === 60) {
        sec = 0;
        min++

        if (min === 60) {
            min = 0;
            hours++
        }
    }
}

const watchStart = () => {
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000);
}