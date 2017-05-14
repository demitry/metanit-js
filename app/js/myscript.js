var date = new Date(); // получаем текущую дату

var time = date.getHours(); // получаем текущее время в часах

if (time < 14)// сравниваем время с число 13
{
    alert('Доброе утро!'); // если время меньше 13
}
else
{
    alert('Добрый вечер!'); // если время равно 13 и больше
}

function display(){
    console.log("Доброе утро");
    display = function(){
        console.log("Добрый день");
            display = function(){
                console.log("Добрый вечер");
            }
    }
}
 
display(); // Доброе утро
display(); // Добрый день
display();

var user = {};
user.name = "Tom";
user.age = 26;

var user = {};
user["name"] = "Tom";
user["age"] = 26;
user["display"] = function(){
     
    console.log(user.name);
    console.log(user.age);
};
 
// вызов метода
user["display"]();





var user = {
 
    name: "Tom",
    age: 26,
    display: function(){
     
        console.log(this.name);
        console.log(this.age);
    }
};
// вызов метода
user.display();



var user = {
    "name": "Tom",
    "age": 26,
    "display": function(){
     
        console.log(user.name);
        console.log(user.age);
    }
};
// вызов метода
user.display();





var user = {
    name: "Tom",
    age: 26,
    "full name": "Tom Johns",
    "display info": function(){
     
        console.log(user.name);
        console.log(user.age);
    }
};
console.log(user["full name"]);
user["display info"]();




var user = {};
user.name = "Tom";
user.age = 26;
user.display = function(){
     
    console.log(user.name);
    console.log(user.age);
};
 
console.log(user.name); // Tom
delete user.name; // удаляем свойство
console.log(user.name); // undefined


var country = {
 
    name: "Германия",
    language: "немецкий",
    capital:{
     
        name: "Берлин",
        population: 3375000,
        year: 1237
    }
};
console.log("Столица: " + country.capital.name); // Берлин
console.log("Население: " + country["capital"]["population"]); // 3375000
console.log("Год основания: " + country.capital["year"]); // 1237





var country = {
 
    name: "Швейцария",
    languages: ["немецкий", "французский", "итальянский"],
    capital:{
     
        name: "Берн",
        population: 126598
    },
    cities: [
        { name: "Цюрих", population: 378884},
        { name: "Женева", population: 188634},
        { name: "Базель", population: 164937}
    ]
};
 
// вывод всех элементов из country.languages
document.write("<h3>Официальные языки Швейцарии</h3>");
for(var i=0; i < country.languages.length; i++)
    document.write(country.languages[i] + "<br/>");
     
// вывод всех элементов из country.cities
document.write("<h3>Города Швейцарии</h3>");
for(var i=0; i < country.cities.length; i++)
    document.write(country.cities[i].name + "<br/>");



var user = {};
user.name = "Tom";
user.age = 26;
user.display = function(){
     
    console.log(user.name);
    console.log(user.age);
};
var hasNameProp = "name" in user;
console.log(hasNameProp); // true - свойство name есть в user
var hasWeightProp = "weight" in user;
console.log(hasWeightProp); // false - в user нет свойства или метода под названием weight

var hasNameProp = user.name!==undefined;
console.log(hasNameProp); // true
var hasWeightProp = user.weight!==undefined;
console.log(hasWeightProp); // false


var hasNameProp = user.hasOwnProperty('name');
console.log(hasNameProp); // true
var hasDisplayProp = user.hasOwnProperty('display');
console.log(hasDisplayProp); // true
var hasWeightProp = user.hasOwnProperty('weight');
console.log(hasWeightProp); // false


var user = {};
user.name = "Tom";
user.age = 26;
user.display = function(){
    console.log(user.name);
    console.log(user.age);
};
for(var key in user) {
    console.log(key + " : " + user[key]);
}


function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function() {
            document.write("Имя: " + this.name + " возраст: " + this.age + "<br/>");
        }
    };
};
var tom = createUser("Tom", 26);
tom.displayInfo();
var alice = createUser("Alice", 24);
alice.displayInfo();




function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function() {
            document.write("Имя: " + this.name + " возраст: " + this.age + "<br/>");
        },
        driveCar: function(car){
            document.write(this.name + " ведет машину " + car.name + "<br/>");
        }
    };
};
 
function createCar(mName, mYear){
    return{
        name: mName,
        year: mYear
    };
};
var tom = createUser("Том", 26);
tom.displayInfo();
var bently = createCar("Бентли", 2004);
tom.driveCar(bently);




// конструктор типа Car
function Car(mName, mYear){
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function(){
        document.write("Модель: " + this.name + "  Год выпуска: " + this.year + "<br/>");
    };
};
// конструктор типа User
function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car){
        document.write(this.name + " ведет машину " + car.name + "<br/>");
    };
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
};
 
var tom = new User("Том", 26);
tom.displayInfo();
var bently = new Car("Бентли", 2004);
tom.driveCar(bently);





function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
};
 
User.prototype.hello = function(){
    document.write(this.name + " говорит: 'Привет!'<br/>");
};
User.prototype.maxAge = 110;
 
var tom = new User("Том", 26);
tom.hello();
var john = new User("Джон", 28);
john.hello();
console.log(tom.maxAge); // 110
console.log(john.maxAge); // 110



// Инкапсуляция
function User (name, age) {
    this.name = name;
    var _age = age;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + _age + "<br>");
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            return _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}
 
var tom = new User("Том", 26);
console.log(tom._age); // undefined - _age - локальная переменная
console.log(tom.getAge()); // 26
tom.setAge(32);
console.log(tom.getAge()); // 32
tom.setAge("54"); // Недопустимое значение




var square = new Function('n', 'document.write(this.caller()); return n * n; ');
console.log(square(5));


function myFunc() {
  if (myFunc.caller == null) {
    return 'Эта функция была вызвана из верхнего уровня!';
  } else {
    return 'Эта функция была вызвана из ' + myFunc.caller;
  }
}

function func() {
    console.log("Caller Function: " + func.caller);
    
    console.log("Args: ");
    for(let item in arguments) {
        console.log( arguments[item]);
    }
}

function callerFunc(){
    func("adfad", 'adf', 12,12,12.1);
    console.log(myFunc());
}
callerFunc();





// конструктор пользователя
function User (name, age) {
    this.name = name;
    this.age = age;
    this.go = function(){document.write(this.name + " идет <br/>");}
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
}
User.prototype.maxage = 110;
 
// конструктор работника
function Employee(name, age, comp){
    User.call(this, name, age);
    this.company = comp;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "; компания: " + this.company + "<br/>");
    };
}
Employee.prototype = Object.create(User.prototype);
 
var tom = new User("Том", 26);
var bill = new Employee("Билл", 32, "Google");
tom.go();
bill.go();
tom.displayInfo(); 
bill.displayInfo(); 
console.log(bill.maxage);



var numbers = [ 1, 2, 3, 4, 5, 6];
 
function square(value, index, array) {
 
    var result = value * value;
    document.write("Квадрат числа " + value + " равен " + result + "<br/>");
};
 
numbers.forEach(square);




var numbers = [ 1, 2, 3, 4, 5, 6];
 
function square(value, index, array) {
     
    return result = value * value;
};
 
var squareArray = numbers.map(square);
document.write(squareArray);


var initialText = "sfgsdfgsdf";
var exp = /[а-я]/;
var result = exp.test(initialText);
document.write(result + "<br/>"); // true
 
initialText = "3di0789";
result = exp.test(initialText);
document.write(result); // false



var alert = function(message){ 
    document.write("Сообщение: " + message);
};
window.alert("Привет мир!");


var message = "hello";
document.write(window.message);


var result = confirm("Завершить выполнение программы?");
if(result===true)
    document.write("Работа программы завершена");
else
    document.write("Программа продолжает работать");

var age = prompt("Введите свой возраст:");
document.write("Вам " + age + " лет");


var popup = window.open('https://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
// width: ширина окна в пикселях. Например, width=640
// height: высота окна в пикселях. Например, height=480
// left: координата X относительно начала экрана в пикселях. Например, left=0
// top: координата Y относительно начала экрана в пикселях. Например, top=0
// titlebar: будет ли окно иметь строку с заголовком. Например, titlebar=no
// menubar: будет ли окно иметь панель меню. Например, menubar=yes
// toolbar: будет ли окно иметь панели инструментов. Например, toolbar=yes
// location: будет ли окно иметь адресную строку. Например, location=no
// scrollbars: допускается ли наличие полос прокрутки. Например, scrollbars=yes
// status: наличие статусной строки. Например, status=yes
// resizable: может ли окно изменять размеры. Например, resizable=no


var popup = window.open('https://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
function closeWindow(){
    popup.close();
}
setTimeout(closeWindow, 10000);

var popup = window.open('http://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
function dmoveWindow(){
    popup.moveTo(50,50);
}
setTimeout(dmoveWindow, 5000);

var popup = window.open('http://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
popup.moveTo(200,250);

var popup = window.open('https://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
popup.resizeTo(500,350); // 500 - ширина и 350 - высота


	
history.back(); // перемещение назад
history.go(-2);
history.go(3);

// Объект location содержит информацию о расположении текущей веб-страницы:
//  URL, информацию о сервере, номер порта, протокол. С помощью свойств объекта мы можем получить эту информацию:
// href: полная строка запроса к ресурсу
// pathname: путь к ресурсу
// origin: общая схема запроса
// protocol: протокол
// port: порт, используемый ресурсом
// host: хост
// hostname: название хоста
// hash: если строка запроса содержит символ решетки (#), то данное свойство возвращает ту часть строки, которая идет после этого символа
// search: если строка запроса содержит знак вопроса (?), например, то данное свойство возвращает ту часть строки, которая идет после знака вопроса


document.write("Строка запроса: " + location.href + "<br />");
document.write("Путь к ресурсу: " + location.pathname + "<br />");
document.write("Схема: " + location.origin + "<br />");
document.write("Протокол: " + location.protocol + "<br />");
document.write("Порт: " + location.port + "<br />");
document.write("Хост: " + location.host + "<br />");
document.write("Имя хоста: " + location.hostname + "<br />");
document.write("Хэш: " + location.hash + "<br />");
document.write("Поиск: " + location.search + "<br />");


// Также объект location предоставляет ряд методов, которые можно использовать для управления путем запроса:
// assign(url): загружает ресурс, который находится по пути url
// reload(forcedReload): перезагружает текущую веб-страницу.
//      Параметр forcedReload указывает, надо ли использовать кэш браузера.
//      Если параметр равен true, то кэш не используется
// replace(url): заменяет текущую веб-станицу другим ресурсом,
//     который находится по пути url. В отличие от метода assign,
//     который также загружает веб-станицу с другого ресурса, 
//     метод replace не сохраняет предыдущую веб-страницу в стеке истории переходов history,
//     поэтому мы не сможем вызвать метод history.back() для перехода к ней.
// Для перенаправления на другой ресурс мы можем использовать как свойства, так и методы location:

location = "http://google.com";
// аналогично
// location.href = "http://google.com";
// location.assign("http://google.com");
// location.replace("index.html");

document.write(navigator.userAgent);

var browser, uAgent = navigator.userAgent;
 
if(uAgent.indexOf("Chrome") > -1) {
    browser = "Google Chrome";
} else if (uAgent.indexOf("Safari") > -1) {
    browser = "Apple Safari";
} else if (uAgent.indexOf("Opera") > -1) {
    browser = "Opera";
} else if (uAgent.indexOf("Firefox") > -1) {
    browser = "Mozilla Firefox";
} else if (uAgent.indexOf("MSIE") > -1) {
    browser = "Microsoft Internet Explorer";
}
document.write(browser);


//// geolocation

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
     
    document.write("Широта: " + latitude + "<br/>");
    document.write("Долгота: " + longitude + "<br/>");
    document.write("Высота: " + altitude + "<br/>");
    document.write("Скорость перемещения: " + speed + "<br/>");
};
 
function error(obj) {
    document.write("Ошибка при определении положения");
};
navigator.geolocation.getCurrentPosition(success, error);




