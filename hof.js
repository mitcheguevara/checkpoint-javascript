// NOTE: Make sure to use the `var` keyword for ALL variable declarations

var people = [
  {name: "Jane", age: 32},
  {name: "Jessica", age: 34},
  {name: "Jasmine", age: 39}
]

// #1: Use the `map` array method to create a new array containing the ages of each
// person in the `people` array. Assign the returned array to a variable
// called `peoplesAges`.
// Type your solution immediately below this line:

var peoplesAges = people.map(function(people) {
  return people.age;
  // console.log(people.age)
});

// #2: Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who are older than 35. Assign the returned array
// to a variable called `peopleOlderThan35`.
// Type your solution immediately below this line:

var peopleOlderThan35 = people.filter(function(old) {
  return (old.age) > 35;
});
