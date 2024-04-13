/* create function for update clock */
function updateClock() {
    /*  */
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if(h > 12){
        h = h-12;
        ampm = "PM";
    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    document.getElementById("hour").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("second").innerHTML = s;
    document.getElementById("ampm").innerHTML = ampm;
    setTimeout(() => {
        updateClock()
    }, 1000);
}
updateClock();
