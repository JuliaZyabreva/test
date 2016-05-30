define([
 'jquery', 'lodash', 'app/pow'
],

function(j, _, pow){

alert(j);

var arr = ['Kate','Lili','Jack'];

var names = _.sortBy(arr);
console.log(names);

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

// Sort by `user` in ascending order and by `age` in descending order.
console.log( _.orderBy(users, ['user', 'age'], ['asc', 'desc']));
// → objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

console.log("Hello!");

console.log(pow(2,3));


});



