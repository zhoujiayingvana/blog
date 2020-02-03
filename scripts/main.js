document.querySelector('#linux-net').onclick = function () {
    alert('更多笔记正在玩命上传ing');
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
    if (mySrc === 'images/星尘斗士6.webp') {
        myImage.setAttribute('src', 'images/星尘斗士2.webp');
    } else {
        myImage.setAttribute('src', 'images/星尘斗士6.webp');
    }
}

let subTitle = document.querySelector('#sub-title');
let myButton = document.querySelector('button');
function setUserName() {
    let userName = prompt("请输入你的名字：");
    if(!userName || userName===null){
        alert("请输入一个名字！")
        setUserName();
    }else{
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
myButton.onclick=function(){
    setUserName();
}