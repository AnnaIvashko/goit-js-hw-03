// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
console.log(user);

user.mood = ['happy'];
console.log(user);

user.hobby = 'skydiving';
console.log(user);

user.premium = 'false';
console.log(user);

const keys = Object.keys(user);
console.log(user);

for (const key of keys) {
  const showAllKeys = function (obj) {
    let result = "";
  }
  
}




