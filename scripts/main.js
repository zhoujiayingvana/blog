// Global variable
let date = new Date();


document.querySelector('#linux-net').onclick = function () {
    alert('临时版本，凑活一下233之后抽空补全');
};
document.querySelector('#io-assemble').onclick = function () {
    alert('更多笔记正在玩命上传ing');
};
document.querySelector('#io-interface').onclick = function () {
    alert('更多笔记正在玩命上传ing');
};
let myImage = document.querySelector("#top-bar");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/星尘斗士6.jpg') {
        myImage.setAttribute('src', 'images/星尘斗士2.webp');
    } else {
        myImage.setAttribute('src', 'images/星尘斗士6.jpg');
    }
};

// 设置版权时间
function displayCopyrightTime() {
    let year = date.getFullYear();
    document.querySelector("#copyrightTime").textContent = year;
};

// 显示时间
function formatTime(time) {
    if (time < 10) return "0" + time;
    else return time;
};

function displayTime() {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let weekday = date.getDay();
    let hour = formatTime(date.getHours());
    let minute = formatTime(date.getMinutes());
    let second = formatTime(date.getSeconds());
    let weeks = ["日", "一", "二", "三", "四", "五", "六"];
    let currentTime = month + "月" + day + "日" + " 星期" + weeks[weekday] + "  " + hour + ":" + minute + ":" + second;
    document.querySelector("#clock").textContent = currentTime;
};



//设置用户名信息
let subTitle = document.querySelector('#sub-title');
let changeUserBtn = document.querySelector('#change-user');
let forgetUserBtn = document.querySelector('#forget-user');



//自动加载用户名
function initialUserName() {
    if (!localStorage.getItem('name')) {
        //用户是否主动设置匿名
        if(!localStorage.getItem('forget')){
            setUserName();
        }
    } else {
        let storedName = localStorage.getItem('name');
        subTitle.textContent = "Welcome " + storedName;
    }
};

//切换用户
function setUserName() {
    let userName = prompt("请输入你的名字：");
    if (userName && userName != null) {
        localStorage.setItem('name', userName);
        subTitle.textContent = "Welcome " + userName;
    } else {
        alert("你放弃了更改名字！");
    }
};

//注销用户
function forgetUserName(){
    subTitle.textContent = "恭喜你发现了一个天坑工程";
    alert("匿名成功！");
    localStorage.removeItem('name');
    localStorage.setItem('forget',true);
};




// 执行函数
displayCopyrightTime();
displayTime();
setInterval(displayTime, 1000);
//加载主页面后进行用户名设置
document.body.onload=initialUserName;
changeUserBtn.onclick =setUserName;
forgetUserBtn.onclick=forgetUserName;