let timer = document.querySelector('.timer');

let startBtn = document.getElementById('startBtn');
let pausetBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');


let msec = 0;
let secs = 0;
let mins = 0;
let hrs = 0;

let timerId=null;

startBtn.addEventListener('click', function(){
    if(timerId !==null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});
pauseBtn.addEventListener('click', function(){
    clearInterval(timerId);
});
resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timer.innerHTML = '00:00:00:00';
    msec = secs = mins = hrs = 0;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec= 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
            if(mins == 60){
                mins = 0;
                hrs++;
            }
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hrsString = hrs < 10 ? `0${hrs}` : hrs;


    timer.innerHTML = `${hrsString}:${minsString}:${secsString}:${msecString}`;
}