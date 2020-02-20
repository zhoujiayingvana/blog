// Global variable
let date = new Date();


document.querySelector('#linux-net').onclick = function () {
    alert('临时版本，凑活一下233之后抽空补全');
}
document.querySelector('#io-assemble').onclick = function () {
    alert('更多笔记正在玩命上传ing');
}
document.querySelector('#io-interface').onclick = function () {
    alert('更多笔记正在玩命上传ing');
}
let myImage = document.querySelector("#top-bar")
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/星尘斗士6.jpg') {
        myImage.setAttribute('src', 'images/星尘斗士2.webp');
    } else {
        myImage.setAttribute('src', 'images/星尘斗士6.jpg');
    }
}

// 设置版权时间
function displayCopyrightTime() {
    let year = date.getFullYear();
    document.querySelector("#copyrightTime").textContent = year;
}

// 显示时间
function formatTime(time) {
   if (time<10) return "0"+time;
   else return time;
}
function displayTime() {
    let date=new Date();
    let month=date.getMonth();
    let day=date.getDate();
    let weekday=date.getDay();
    let hour=formatTime(date.getHours());
    let minute=formatTime(date.getMinutes());
    let second=formatTime(date.getSeconds());
    let weeks=["日","一","二","三","四","五","六"];
    let currentTime=month+"月"+day+"日"+" 星期"+weeks[weekday]+"  "+hour+":"+minute+":"+second;
    document.querySelector("#clock").textContent=currentTime;
}


let subTitle = document.querySelector('#sub-title');
let myButton = document.querySelector('button');

function setUserName() {
    let userName = prompt("请输入你的名字：");
    if (!userName || userName === null) {
        alert("请输入一个名字！")
        setUserName();
    } else {
        localStorage.setItem('name', userName);
        subTitle.textContent = "Welcome " + userName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    subTitle.textContent = "Welcome " + storedName;
}
myButton.onclick = function () {
    setUserName();
}


// 执行函数
displayCopyrightTime();
displayTime();
setInterval(displayTime,1000);
