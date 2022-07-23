//special Countdown
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let CountDown = () => {
    let futureDate = new Date("30 july 2022");
    let currentDate = new Date();
    let myDate = futureDate -currentDate;

    let days = Math.floor(myDate /1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate /1000 / 60 / 60) % 24;
    let min = Math.floor(myDate /1000 / 60) % 60;
    let sec = Math.floor(myDate /1000) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

CountDown()

setInterval(CountDown, 100);

//Scroll Back To Top
function scrollTopBack(){
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function  (){
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 250){
            scrollTopButton.classList.add('scrollActive');
    
        } else{
            scrollTopButton.classList.remove('scrollActive')
        }
    }
}
scrollTopBack();