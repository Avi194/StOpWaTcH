//alert("HELLO");
//console types
//console.log(prompt("what  is your name"));
//console.log("i am in a script file");
//console.error(" i am an error");
//console.warn("i am a warning");
//console.info("i am an info");
//variables
//var,let,const
//var x = 5;// when you declare a variable as var it will have a Global level scope
//let y = 10;// when you declare a variable as let it will have a block level scope
//const z = 15; // const value is unchangable after declaration
//console.log(x);
//console.log(y);
//console.log(z);
let [Hours,Minutes,Seconds,Miliseconds] = [0,0,0,0]
var timerRef = document.querySelector(".timerDisplay");
let int = null;
document.getElementById("strtBtn").addEventListener("click",()=>{
    if (int !== null)
    {
        clearInterval(int);
    }
    int = setInterval(displayTime,10);
})
document.getElementById("pauseBtn").addEventListener("click",()=>{
    clearInterval(int);
})
document.getElementById("resetBtn").addEventListener("click",()=>{
    [Hours,Minutes,Seconds,Miliseconds] = [0,0,0,0];
    clearInterval(int);
    timerRef.innerHTML = "00:00:00:000";
})
function displayTime()
{
    Miliseconds += 10;
    if(Miliseconds == 1000)
    {
        Miliseconds = 0;
        Seconds++;
        if(Seconds== 60)
        {
            Seconds = 0;
            Minutes++;
            if (Minutes == 60)
            {
                Minutes = 0 
                Hours++;
            }
        }
    }
    let h = Hours < 10 ? "0" + Hours:Hours;
    let m = Minutes < 10 ? "0" + Minutes:Minutes;
    let s = Seconds < 10 ? "0" + Seconds:Seconds;
    let ms = Miliseconds < 10 ? "00" + Miliseconds:Miliseconds < 100 ? "0" + Miliseconds:Miliseconds;
    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}