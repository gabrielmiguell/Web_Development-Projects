

const hourEl = window.document.getElementById("hour");

const minuteEl = window.document.getElementById("minute");

const secondEl = window.document.getElementById("second");

const ampmEl = window.document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";


    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(()=>{
        updateClock()
    }, 100)

}

updateClock()
