let myArray = ['a', 'b', 'c', 'd', 'e'];
let myNewString = myArray.toString(); //"a,b,c,d,e"
console.log(myNewString);
let button1 = document.querySelector("#button1");

button1.onclick = function () {
    if (button1.style.backgroundColor != 'aqua') {
        button1.style.backgroundColor = 'aqua';
    } else {
        button1.style.backgroundColor = "red";
    }
};

function Person(name) {
    this.name = name;
    this.greeting = function () {
        console.log("Hi!");
    }
}
let person1 = new Person("Bob");
console.log(person1.constructor.name)

//使用json
const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
    let superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
    let myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    let myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    let heroes = jsonObj['members'];

    for (i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for (j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

async function hello() { return "Hello" };
hello().then(console.log).then(setTimeout( function(){
    console.log(2000)},2000));
// console.log(hello());