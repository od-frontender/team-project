const time = 1000; // ms
const step = 1;

function outNum(num, elem) {
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        l.innerHTML = n;
    },
        t);
}

outNum(721, 'count-1');
outNum(16, 'count-2');
outNum(84, 'count-3');