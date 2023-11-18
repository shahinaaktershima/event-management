<div >
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).
```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
 B: `ReferenceError: greetign is not defined`
- C: `undefined`

 - B: `ReferenceError: greetign is not defined`
- C: `undefined`
<details><summary><b>Answer: B</b></summary>

<p>
 #### Answer: B
<i>The variable should be named "greeting," but it's mistakenly spelled as "greetign." As a result, when we try to log "greetign," a ReferenceError is thrown because the variable "greetign" is not defined.</i>

</p>
</details>



###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer:C</b></summary>
<p>

#### Answer: c;

<i>The number 1 is converted to a string and then concatenated with "2," resulting in the string "12" When i call the sum function with these arguments, it returns "12".</i>

</p>
</details>




###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`
<details><summary><b>Answer:A</b></summary>
<p>
#### Answer: A;

<i>this change does not affect the food array. The food array remains unchanged and still contains the original</i>

</p>
</details>



###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer:B</b></summary>
<p>
#### Answer: B

<i>The sayHi function expects an argument name to be passed when called. In this case, you haven't provided an argument, so name is undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer:b</b></summary>
<p>
#### Answer: b

<i>only two elements in the array (1 and 2) are not 0, so count is incremented twice, resulting in a value of 2.</i>

</p>
</details>






