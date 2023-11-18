1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

answer:B
cause In the given code, there's a typo in the variable name. It is declared as "greetign" but then assigned an empty object.JavaScript will throw a ReferenceError because "greetign" is not defined.

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

answer: c;
explaination:it will convert the number 1 to a string and then concatenate it with the string "2," resulting in the string "12." When i call the sum function with these arguments, it will perform a string concatenation, not numerical addition, and return "12" as a string.

03.3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

answer:A
explanation is:info.favoriteFood initially references the first element of the food array, which is "🍕". However, later in the code, it's reassigned to "🍝." This change doesn't affect the food array itself, so when you log the food array, it remains unchanged.

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

answer:B
explanation is:there's a parameter name, but when we call the function with sayHi(), we don't provide any argument for name. In JavaScript, if we don't pass a value for a parameter, it defaults to undefined.
5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
answer:B;
explanation:forEach method iterates over the elements of the nums array and executes the provided callback function for each element. In JavaScript, the number 0 is considered falsy, so the condition if (num) is false for 0. Therefore, the count variable is incremented only when num is a truthy value (non-zero), which happens for the numbers 1, 2, and 3. So, count is incremented three times, resulting in a value of 2 when you log it.





