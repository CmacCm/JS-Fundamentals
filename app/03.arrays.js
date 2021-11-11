

// Task 1
const a1 = [1, 2, 3];
const a2 = a1;
a1[0] = 99;
console.log(a2[0]);
// Answer: 99

// Task 2
const entries = ["a", "b", "c"];
console.log(Array.isArray(entries));
// Answer: true

// Task 3
const entries1 = ["a", "b", "c"];
entries1.length = 10;
console.log(entries1.length);
// Answer: 10

// Task 4
const entries2 = ["a", "b", "c"];
console.log(entries2.toString());
// Answer: a,b,c

// Task 5
const entries3 = [];
console.log(entries3.pop());
// Answer: undefined

// Task 6
const entries4 = ["a", "b", "c", "d"];
const newEntries4 = entries4.slice(2);
console.log(newEntries4);
// Answer: ["c", "d"];

// Task 7
const entries5 = ["a", "b", "c", "d"];
const r = entries5.splice(2, 1, "A", "B", "C");
console.log(entries5.toString());
console.log(r);
// Answer: a,b,A,B,C,d;
// Answer: ["c"];

// Task 8
const ratings = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(ratings.indexOf(66));
// Answer: -1

// Task 9
const entries6 = ["a", "b", "c", "d"];
entries6.forEach(
   function(element, index, array) {
     if (index === 1) array.push("e");
	console.log(element.toUpperCase());
});
// Answer: A,B,C,D;

// Task 10
const ratings2 = [1, 2, 3, 4, 5];
const result = ratings2.reduce((start, next, index, array) => start * next); 
console.log(result);
// Answer: 120

// Task 11
const priority = [1, 2, 3];
const priorityCopy = Array.from(priority);
console.log(priority === priorityCopy);
// Answer: false

// Task 12
const priority2 = [1, 2, 3];
const result2 = priority2.find(elem => elem >= 2);
console.log(result2);
// Answer: 2

// Task 13
const priority3 = [1, 2, 3];
const result3 = priority3.includes(2);
console.log(result3);
// Answer: true

// Task 14
const nums = [ 1, 2, [ 3, 4 ], [ [ 5, 6 ] ] ];
console.log(nums.flat(Infinity));
// Answer: [ 1, 2, 3, 4, 5, 6 ];

// Task 15
const priorityCodes = ["A", ..."BC", "D"];
console.log(priorityCodes);
// Answer: 

// Task 16
const priority6 = ["Low", "Normal", "High"];
const [low, ...remaining] = priority6;
console.log(remaining);
// Answer: 

// Task 17
const priority7 = new Set();
priority7.add("High");
priority7.add("Low");
console.log(priority7.size);
// Answer:

// Task 18
const priority8 = new Set(["High","Low"]);
function logSetElements(key, value, set) {
    console.log(`s[${key}] = ${value}`);
}
priority8.forEach(logSetElements);
// Answer:

// Task 19
const task1 = { action: "Create…" };
const task2 = { action: "Delete…" };
const project = new WeakSet([task1, task2]);
console.log(project.has(task1));
// Answer: 

// Task 20
const task11 = { action: "Create…" };
const task22 = { action: "Delete…" };
const project2 = new WeakSet([task11, task22]);
// for (let p of project2) {	
//     console.log(p.action);
// }
// Answer: 






console.log('Topic: Arrays');

// Task 01
// RU: Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.


const arr1 = [1,2,3,4]
console.log(arr1[arr1.length -1 ]);
console.log(arr1.pop());


// Task 02
// RU: Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

const arr2 = [1,2,3,4]
arr2.push(5)
console.log(arr2);

const arr2_1 = [...arr2, 5]
console.log(arr2);
console.log(arr2_1);



// Task 03
// RU: Создать массив любых элементов. Вставить новый элемент под индексом 2.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Insert a new element with index 2.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

const arr3 = [1,2,3,4]
const arr3_1 = [1,2,3,4]

arr3.splice(2, 0, 5)
arr3_1.splice(2, 1, 5)

console.log(arr3);
console.log(arr3_1);


const arr3_2 = [1,2,3,4]

const arr3_2_new = [...arr3_2.slice(0,3), '23', ...arr3_2.slice(3)]
console.log(arr3_2_new);

// Task 04
// RU: Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.
// EN: Create an array of any elements.
//     Iterate over this array and display each element in the console.


const arr4 = [1,2,3,4]

arr4.forEach(item => console.log(item))

for (const a of arr4.entries()) {
  console.log(a);
}

for (const a of arr4.keys()) {
  console.log(a);
}
for (const a of arr4.values()) {
  console.log(a);
}



// Task 05
// RU: Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.


const arr5 = [1,100,100,100,33,23]

const sum = arr5.filter((item) => item > 50).reduce((acc, item) => acc + item)
console.log(sum);

// Task 06
// RU: Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.


const arr6 = ['A', 'B', 'C']

console.log(arr6.join('__'));

// Task 07
// RU: Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Disply it in the console.


const arr7 = [1,12,4,3,14,16,6]

console.log(arr7.sort((a, b) => a - b));
console.log(arr7.sort((a, b) => b - a));


// Task 08
// RU: Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.
// EN: Create the array: [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.

const arr8 = [3, 0, -1, 12, -2, -4, 0, 7, 2]
  const arr8_1 = arr8.filter(item => item < 0)
  const arr8_2 = arr8.filter(item => item === 0 )
  const arr8_3 = arr8.filter(item => item > 0)
  console.log(arr8_1);
  console.log(arr8_2);
  console.log(arr8_3);

  const summaryArr8 = [...arr8_1, ...arr8_2, ...arr8_3]
  console.log(summaryArr8);


// Task 09
// RU: 1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//     6. Выведите массив в консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the last but one element with new value "Classics".
//     4. Remove the first element from the array and disply it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.


const styles = ['Jazz', 'Blues']
styles.push("Rock-n-Roll")
console.log(styles);

styles.splice(-2, 1, 'Classics')

console.log(styles);

console.log(styles.shift())

console.log(styles);

styles.unshift('Rap', 'Reggae')

console.log(styles);




// Task 10
// RU: Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.


const str10 = 'dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh'

const count = str => {
  return [...str].reduce((acc, item) => {
    if(item === 'r' || item === 'k' || item === 't') {
      (acc[item] = (acc[item] || 0) + 1)
    }
     return acc
  },{})
}

console.log(count(str10));


// Task 11
// RU: Создать массив любых элементов.
//     Получить случайный элемент из массива и вывести его в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.





// Task 12
// RU: Создать двумерный массив:
//     1 2 3
//     4 5 6
//     7 8 9
//     Вывести его в консоль.
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console.


const arr12 = [
  [1,2,3],
  [1,2,3],
  [1,2,3],
]

for (const some of arr12)
{console.table(some.join(''))}



// Task 13
// RU: Преобразовать массив из предыдущего задания в одномерный.
//     Вывести его в консоль
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.

const arr13 = [
  [1,2,3],
  [1,2,3],
  [1,2,3],
  [[[[1,2,3,4]]]]
]
console.log(arr13.flat(Infinity));


// Task 14
// RU: Создать массив любых элементов.
//     На его основе получить новый массив – подмножество элементов
//     оригинального массива начиная с индекса a и заканчивая индексом b.
//     Вывести массив в консоль.
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.


// slice

// Task 15
// RU: Создать массив любых элементов.
//     Найти индекс указаного элемента в массиве и вывести его в консоль.
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and display it in the console.


//indexOf
//findIndex

// Task 16
// RU: Создать массив с дублями элементов. На его основе создать новый массив
//     уникальных элементов (удалить дубли).
//     Вывести новый массив в консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.




// Task 17
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.

const arr17 = [1,3,2,3,4,3,4,5,3,3,2]

for (let el of arr17) {
  if (arr17.indexOf(el) !== arr17.lastIndexOf(el)) {
    arr17.forEach((e, index, arr) => {
      if (e === el) {
        arr[index] = "*"
      }
    })
    break
  }
}

console.log(arr17);



// Task 18
// RU: Создать массив целых чисел. На его основе создать массивы – представления
//     этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.
//     Вывести эти массивы в консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.




// Task 19
// RU: Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.

// Task 20
// RU: Создать массив, который содержит строки и числа.
//     Проверить, содержит ли массив только строки.
//     Вывети результат в консоль
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.

// Task 21
// RU: Создать отсортированный массив чисел.
//     Реализовать функцию binarySearch(arr, value), которая принимает массив
//     и значение и возвращает индекс значения в массиве или -1.
//     Функция должна использовать бинарный поиск.
//     Вывести результат в консоль.
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.
