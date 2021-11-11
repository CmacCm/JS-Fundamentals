console.log('Topic: Promises');
// Task 01
// Создайте промис, который постоянно находится в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.


// Task 08
// Используйте предыдущий код. Добавьте в функцию onSuccess генерацию исключения
// Обработайте данное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.


// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData


// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль


// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".

// Task 13
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// Второй промис переходит в состояние rejected со значением "Promise Error".
// Запустите оба эти промисы в параллель и получите результаты тех, которые завершаться успешно



// Task 14
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// Второй промис возвращает дефолтный объект { name: "Unknown" } через 1с.
// Запустите оба эти промисы в параллель и получите результат того, который отработает первым




//==========================================================

//PROMISES AFTER CLASS

console.log('Topic: Async Functions');



async function asyncFunction1111() {   // async всегда возвращает промис
  // await лвозвращает результат из промиса
  ;
}


async function asyncF1() {
  console.log('async FDS');
}
const asyncProto = Object.getPrototypeOf(asyncF1);
console.log(asyncProto); // {AsyncFunction}
console.log(asyncF1[Symbol.toStringTag]) // AsyncFunction

// Task 01
// RU: Создайте асинхронную функцию f1, используя FDS (Function Declaration Statement).
//     Функция должна принимать два параметра a и b и возвращать сумму a+b.   
//     Выведите значение, которое вернет функция в консоль.
//     Обработаете промис и выведите значение в консоль.
// EN: Create an async function f1 as a Function Declaration Statement.
//     The function should take two parameters a and b and return a sum a+b.
//     Display the result of function in the console.
//     Process a promise and display value in the console.



async function f11(a, b) {
  return (a + b);
}
console.log(f11(2, 3));
f11(2, 3).then(res => console.log(res));

// Task 02
// RU: Создайте асинхронную функцию f2, используя FDE (Function Definition Expression).
//     Функция должна возвращать 'Promise Data', используя Promise.resolve()
//     Выведите значение, которое вернет функция в консоль.
//     Обработаете промис и выведите значение в консоль.
// EN: Create an async function f2 as a Function Definition Expression.
//     The function should return the string 'Promise data' using Promise.resolve() method.
//     Display the result of function in the console.
//     Process a promise and display value in the console.

const someFunc2 = async () => {
  return Promise.resolve('Promise Data')
}

console.log(someFunc2());
someFunc2().then(res => console.log(res))


// Task 03
// RU: Создайте класс C1. Добавьте асинхронный метод f3.
//     Метод должен генерить исключение 'Error occurs in f3 method'.
//     Создайте экземпляр класса и вызовите метод f3.
//     Обработаете промис.
// EN: Create a class C1. Add async method f3.
//     Method should throw an exception 'Error occurs in f3 method'.
//     Create an instance of the class and call the method f3.
//     Process a promise and display value in the console.

class C1 {
  async asyncMethod() {
    throw new Error('error occurs in this method')
  }
}

const c1Instance = new C1;
c1Instance.asyncMethod().catch(e => console.log(e))

// Task 04
// RU: Cоздайте функцию makeRequest, используя FDS (Function Declaration Statement).
//     Функция должна принимать один параметр - url и возвращать промис,
//     который перейдет в состояние resolved через 2с. и вернет значение параметра.
//     Первой строкой в функции выведите сообщение 'makeRequest is called'.
//     Cоздайте функцию f4, используя FDS (Function Declaration Statement).
//     Функция должна вызвать функцию makeRequest, получить результат ее работы и вывести в консоль.
// EN: Create a functiom makeRequest as a Function Declaration Statement.
//     The function should take one parameter - url and return a promise,
//     which should be resolved after 2s and it should return the value of the parameter url.
//     The first line of code in the function should display message 'makeRequest is called' in the console.
//     Create a function f4 as a Function Declaration Statement.
//     The function f4 should call the function makeRequest, get its result and display it in the console.

function makeRequest(url) {
  console.log('makeRequest is called');
  return new Promise(resolve => {
    // setTimeout(resolve, 2000, url)
    setTimeout(() => {
      resolve(url)
    }, 2000)
  })
}

function f4(url) {
  return makeRequest(url)
}

console.log(f4('http://example.com'))


// Task 05
// RU: Внесите изменения в функцию f4 из предыдущего задания так, чтобы в консоле появилось
//     значение переданого параметра в функцию makeRequest.
// EN: Make changes to the function f4 from the previous task. This function should display the value
//     of the parameter of the function makeRequest in the console.

function makeRequest2(url) {
  console.log('makeRequest is called');
  return new Promise(resolve => {
    // setTimeout(resolve, 2000, url)
    setTimeout(() => {
      resolve(url)
    }, 2000)
  })
}

function f42(url) {
  return makeRequest(url).then(console.log(url))
}
f42('http://example.com')

// Task 06
// RU: Cоздайте асинхронную функцию f6, используя FDS (Function Declaration Statement).
//     Функция должна вызвать два раза функцию makeRequest с разными значениями параметра.
//     Перед вызовом и после каждого вызова makeRequest функция должна выводить в консоль любое сообщение.
//     Создать и вернуть массив, который должен содержать значения переданые функции makeRequest.
//     Обработаете результат работы функции f6.
// EN: Create an async function f6 as a Function Declaration Statement.
//     This function should call the function makeRequest two times with different values of its parameter.
//     The function f6 should display any message in the console before and after each call 
//     of the function makeRequest.
//     Create and return the array from the function f6, which should contains the values of the 
//     parameter of the function makeRequest.
//     Process the result of the function f6.

async function f6(url1, url2) {
  console.log('first message');
  await makeRequest2(url1);
  console.log('second message');
  await makeRequest2(url2);
  console.log('third message');
  let res = [];
  res.push(url1);
  res.push(url2);
  return res;
}

console.log(f6('url-1', 'url-2').then(console.log))



// Task 07
// RU: Измените асинхронную функцию f6 из предыдущего задания так, чтобы вызовы функции
//     makeRequest выполнялись паралельно.
// EN: Make changes to the async function f6 from the previous task. This function should 
//     call the function makeRequest with different values of its parameter simultaneously.


function f62(url1, url2) {
  return Promise.all([makeRequest2(url1), makeRequest2(url2)])
  // return Promise.allSettled([makeRequest2(url1), makeRequest2(url2)])
}

console.log(f62('url-1', 'url-2').then(console.log))



// Task 08
// RU: Создайте масив урлов ['http://a', 'http://b'].
//     Создайте функцию sendRequest, которая принимает один параметр - url.
//     Функция в первой строке должна выводить в консоль сообщение 'sendRequest is called'
//     и возвращать через 2 с для первого урла объект { name: 'Ann' }, а для второго
//     урла объект { age: 16 }.
//     Создайте асинхронную функцию f8 которая должна вызвать функцию sendRequest для каждого урла
//     и вернуть объект {name: 'Ann', age: 16}
//     Обработайте результат работы функции f8
// EN: Create the array of urls ['http://a', 'http://b'].
//     Create the function sendRequest which should take one parameter - url.
//     The function should display the message 'sendRequest is called' in the console 
//     in its first line of code. Then the function should return the object { name: 'Ann' } for the 
//     first url after 2s and the object { age: 16 } for the second url after 2s.
//     Create the async function f8, which should call the function sendRequest with each value 
//     from the array and return the object {name: 'Ann', age: 16}.
//     Process the reuslt of the function f8


function sendRequest(url) {

  const map = new Map([
    ['http://a', { name: 'Ann' }],
    ['http://b', { age: 16 }]
  ]);

  console.log('sendRequest is called');

  return new Promise((resolve => {
    setTimeout(resolve, 2000, map.get(url));
  }))
}

async function f8() {
  const urls = ['http://a', 'http://b'];

  const arrPromises = urls.map(url => sendRequest(url));

  const result = await Promise.all(arrPromises);

  return result.reduce((acc, item) => {
    console.log(acc);
    console.log(item);
    return { ...acc, ...item }
  }, {})
}


f8().then(console.log)

