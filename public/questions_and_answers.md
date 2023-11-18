01. let greeting;
greetign = {};
console.log(greetign);
Answer: B
explanation:The variable should be named "greeting," but it's mistakenly spelled as "greetign." As a result, when we try to log "greetign," a ReferenceError is thrown because the variable "greetign" is not defined.

02. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");

Answer:c
explanation:The number 1 is converted to a string and then concatenated with "2," resulting in the string "12." When i call the sum function with these arguments, it returns "12."

03.  Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer: A
explanation:this change does not affect the food array. The food array remains unchanged and still contains the original

04.  Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer: B
explanation:The sayHi function expects an argument name to be passed when called. In this case, you haven't provided an argument, so name is undefined

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
Answer: B

explanation:only two elements in the array (1 and 2) are not 0, so count is incremented twice, resulting in a value of 2.




