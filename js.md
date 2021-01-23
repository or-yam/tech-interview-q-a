# JavaScript

1. ## What is OOP?

   ### Answer

   object oriented programing is a code architecture build using objects and classes.
   <br>
   each class has its own variables and methods, what makes it self contained peaces of code (ENCAPSULATION).
   classes can inherent features from other classes(INHERITANCE),
   each instance of a class can act differently (POLYMORPHISM)

   ### Example

   Person class contains: name, age and adress.

   ```javascript
   class Person {
     constructor(name, age, adress) {
       this.name = name;
       this.age = age;
       this.adress = adress;
     }
     printName() {
       console.log(`My name is: ${this.name}`);
     }
   }

   const john = new Person('john', 89, 'IL');
   john.printName(); // my name is john
   ```

2. ## What is polymorphism?

### Answer

polymorphism is a core concept in OOP.
it means that an object can act differently each instance

### Example

```javascript
class Student extends Person {
  constructor(name, age, adress, lessons) {
    super(name, age, adress);
    this.lessons = lessons;
  }
  addLesson(newLesson) {
    this.lessons.push(newLesson);
  }
}
```

3. ## Explain MVC, why is it useful?

### Answer

Model View Control is a code architecture.
<br>
Model is where the data is stored
<br>
Control is where the user interact with the UI
<br>
View is what renders on the screen

### Example

4. ## What is high order function?

### Answer

A Higher-Order function is a function that
receives a function as an argument or returns the function as
output.

### Example

```javascript
Array.prototype.map();
Array.prototype.filter();
Array.prototype.reduce();
```

are some of the Higher-Order functions built into the language. 5. ## What is a callback?

### Answer

a function that will execute after another function has finish to execute.

### Example

```javascript
const greeting = (name) => {
  console.log(`hello ${name}`);
};

const greetUser = (callBack) => {
  let name = prompt('What is your name ?');
  callBack(name);
};
```

6. ## What’s the difference between ​map​ and ​forEach

### Answer

forEach manipulate the given array
<br>
map returns new manipulated array

7. ## Explain scope

8. ## Explain how ​this​ works in JavaScript.

### Answer:

representing the Object that called the function.
in arrow function the context is for the global object while in normal functions its for the scope function

To understand this keyword, only we need to know how, when and from where the function is called, does not matter how and where function is declared or defined

### Example !!!!!!!

9. ## What is a closure, and how/why would you use one?

### Answer:

a function that has access to the outer function variables
pitfalls: closure in a loop ,

Closure are created whenever a variable that is defined outside the current scope is accessed from within some inner scope — it gives you access to an outer function’s scope from an inner function
To use a closure, simply define a function inside another function and expose it

### Example:

10. ## What is a promise? How is it different from callback?

### Answer:

Its !!!!!
3 states: pending fullfil reject. can use for

callback hell: using callback functions one by one for many times we can use promises to avoid that, also can use async await. (or generator function??)

11. ## How can you share code between files?

### Answer:
you can open sandbox or using github\lab to share your code.
### Example:

12. ## What are the differences between variables created using ​let​, ​var​ and ​const​?

### Answer:

### Example:

13. ## Should we always use Async/Await?

### Answer:

### Example:

14. ## What is DOM?

### Answer:

### Example:

15. ## What are some differences between JS and JSON?

### Answer:

### Example:

16. ## Difference between Stack and Queue?

### Answer:

### Example:

17. ## If all the operations of an object are O(1), why do we ever use an array?

### Answer:

### Example:

18. ## How does binary search work?

### Answer:

### Example:

19. ## What is an arrow function? What is the major use of it?

### Answer:

### Example:

20. ## What is prototype in JS?

### Answer:

The Object.prototype is on the top of the prototype inheritance chain
it alows to add new properties and methods to an object outside the constractur.

### Example:

```javascript
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = 'English';
Person.prototype.name = function () {
  return this.firstName + ' ' + this.lastName;
};
```

21. ## Explain "hoisting"

### Answer:

JavaScript’s default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)
JavaScript only hoists declarations, not initializations

### Example:

22. ## What is event loop in NodeJS?

### Answer:

- In most browsers there is an event loop for every browser tab, to make every process isolated and avoid a web page with infinite loops or heavy processing to block your entire browser
- The environment manages multiple concurrent event loops, to handle API calls
- Web Workers run in their own event loop as well
- You mainly need to be concerned that your code will run on a single event loop, and write code with this thing in mind to avoid blocking it
- Any JavaScript code that takes too long to return back control to the event loop will block the execution of any JavaScript code in the page, even block the UI thread, and the user cannot click around, scroll the page, and so on

### Example:

23. ## What is the difference between ​==​ and ​===​?

### Answer:

`==` compares values only while `===` compare type and value.

### Example:

```javascript
1 === 1; //true
1 == 1; //true
'1' == 1; //true
'1' === 1; //false
'1' === '1'; //true
```

24. ## What 'use strict' does ?

### Answer

execute the code in strict mode. for example you can't use undeclared variables `x=42` will throw an error.
the `this` keyword in strict mode behaves differently,
if the object is not specified it will return `undefined` while in normal mode it will return the global object (window in browsers)

25 ## What is `NaN` and how can you test it ?

### Answer:

NaN stands for Not A Number. its a Javascript property.
will return NaN if try to make a math operation on a not number typ. to check if a value is `NaN` we can use `isNaN(value)`
array with more than 1 values return `true`.
empty array and array with a number as 1 value return `false`.

```javascript
console.log('string' / 43); // NaN
```

```javascript
isNaN(5); //false
isNaN('5'); //false
isNaN('string'); //true
```

```javascript
NaN === NaN; //false
```

26. ## How node.js handle childe threads ?

### Answer:

event loop.
what is tipcly the first argument to pass to nodejs callback handler? ERROR
because uncaught exceptions.

27. ## What is the difference between Arrow and Regular Functions?

### Answer:

```javascript
const arrowFunction = (args) => args;
```

This are the main differences :

- This value (context): in a regular function, the value of this has nothing to do with the class on which it was defined; instead, it depends on the object that it was called upon; inside an arrow function this value always equals the this value from the outer function

- Constructors: regular functions can easily construct objects, while an arrow function cannot be used as a constructor

- Arguments object: is a special array-like object containing the list of arguments with which the function has been invoked, inside an arrow function the arguments object is resolved lexically: it accesses arguments from the outer function

- Implicit return: regular functions use the return expression statement — otherwise it will just return undefined, while with arrow functions, if they contain one expression and the function’s curly braces are missing, then the expression is implicitly returned

28. ## What is an Anonymous Function?

### Answer:

A function that was declared without any function named identifier to refer to it — it is usually not accessible after its initial creation. These functions are created at run time

29. ## Promises vs Async/Await?

### Answer

- Scope: in a promise, only the promise chain is asynchronous — doesn’t block the execution; with async/await the entire wrapper function is asynchronous
- Logic: in a promise, synchronous work can be handled in the same callback, and multiple promises can be handled using Promise.all; with async/await the synchronous work needs to be placed outside the callback, and multiple promises can be handled with more simple variables
- Error handling: Promises: then, catch, finally; Async/await: try, catch, finally

30. ## Mutable vs Immutable in JS

- The difference between immutable and mutable: if an item is mutable, when changing the value of the reference variable it will also affect the value of the original referenced variable
- Primitive data types such as numbers, strings, and Booleans are immutable — it is impossible to change values of those types by changing the reference — you can combine them and derive new values from them, but when you assign a specific value, that value will always remain the same; you can make a variable name point to a new value, but the previous value is still held in memory
- Mutable is a type of variable that can be changed by its reference — in JS only objects and arrays are mutable: you can change their properties; for example: causing a single object value to have different content at different times

31. ## What is a typed language?

- The values are associated with values and not with variables — it can be static or dynamic
- Static: the variable can hold only one type, like in Java: a variable declared of string can take only a set of characters and nothing else
- Dynamic: the variable can hold multiple types — like in JS: a variable can take number, chars, etc

32. ## What is the difference between call, apply & bind?

- bind can be particularly helpful when you want to use events to access properties of one class within another class
- call and apply are very similar — they invoke a function with a specified this context, and optional arguments
- The only difference between call and apply is that call requires the arguments to be passed in one-by-one, and apply takes the arguments as an array

33. ## What is the difference between Cookies, Local Storage and Session Storage?

- Browser storage: data is never transferred to the server & can only be read on client-side; storage limit is about 5MB
- Session vs local storage: session is only temporary — data is stored until tab/browser is closed; local doesn’t have an expiration date
- Cons for storage: not secure, limited to strings, danger for XSS
- Cookie: stores data with expiration date, storage limit about 4KB, is sent to the server for each request, read/write on both client & server side (if HttpOnly then it is inaccessible to client-side scripts)
