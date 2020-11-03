# General Dev

1. ## What is HTTP and HTTPS?
   ### Answer:
   Both are comunication protocols over the internet.
   used as request and response for transfering data.
   can talk about status codes, headers , types of data.
   ### missing https!!!
2. ## What is Cors?

   ### Answer:

   polocy to allow the server to accept the request that coming or prevent from other origins

   example: preventing a website sharing resorces between other endpoints (prevent a server hit your computer)

   ### missing info!!!!

# HTML / CSS

1.  ## What is block and inline elements?

    ### Answer:

    block element is an html element that by default starts a new line and takes up the whole width of the screen.
    <br>
    inline element continue on the same line and takes up only his content width
    <br>
    we can use css to force an inline element act as block and otherwise.
    <br>
    elements with inline-block property will not break to the next line and their height and width can be changed.

    ### Examples:

    ```html
    block elements:
    <div>
      ,
      <h1>
        ,
        <canvas
          >,
          <nav>
            inline elements:
            <span
              >,
              <button>
                , <a>, <img /></a></button
            ></span></nav
        ></canvas>
      </h1>
    </div>
    ```

2.  ## How does specificity work in CSS?

    ### Answer:

    less specific to most specific:
    html tags => classes => id => inline=> !important
    <br>
    CSS Specificity is the set of the rules applied to CSS selectors in order to determine which style is applied to an element. The more specific a CSS style is, the higher point value it accrues, and the likelier it is to be present on the element's style.
    <br>

    ### Example:

    ```html
    html:

    <div class="box" id="main-container">example</div>
    ```

    ```css
    css: .box {
      background-color: blue;
    }
    #main-container {
      background-color: red;
    }
    ```

    The background color will be set to red.

3.  ## Why don’t we use IDs for all our selectors?

    ### Answer:

    id's used mostly for one of a kind element , for example button. for elements that repeat in several places in the page is cleaner and easier to use classes.

4.  ## What is the box model - why is it useful?

    ### Answer:

    the html box model is the layout of elements. each element can have padding margin border and content. it useful to control the view and the structure of the page elements The box model allows us to add a border around elements, and to define space between elements.

5.  ## What are ​data-​attributes good for?

    ### Answer

    embed data in html element that can be use later in javascript.

    ```html
    <div data-userId>Hello User</div>
    ```

6.  ## How would you approach fixing browser-specific styling issues?

    ### Answer:

    check on [Can I Use](https://caniuse.com/) what alternatives I can use for the specific issue and try to implement a solution using this tools

# JavaScript

1. ## What is OOP?

   ### Answer

   object oriented programing is a code architecture build using objects and classes.
   <br>
   each class has its own variables and methods, what makes it self contained peaces of code (ENCAPSULATION).
   classes can inherent features from other classes(INHERITANCE),
   classes can act differently each --- (POLYMORPHISM)

### Example

2. ## What is polymorphism?

### Answer

polymorphism is a core concept in OOP.
it means that an object can act differently each ---

### Example

3. ## Explain MVC, why is it useful?

### Answer

Model View Control is a code architecture.
<br>
Model is where the data is stored
<br>
Control is where the user interact with the UI
<br>
View is the what renders on the screen

### Example

4. ## What is high order function?

### Answer

A Higher-Order function is a function that
receives a function as an argument or returns the function as
output.

### Example

```javascript
Array.prototype.map(), Array.prototype.filter();
```

5. ## What is a callback?

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

### Example !!!!!!!

9. ## What is a closure, and how/why would you use one?

### Answer:

a function that has access to the outer function variables
pitfalls: closure in a loop ,

### Example:

10. ## What is a promise? How is it different from callback?
### Answer:
Its !!!!!
3 states: pending fullfil reject. can use for 

callback hell: using callback functions one by one for many times we can use promises to avoid that, also can use async await. (or generator function??)

11. ## How can you share code between files?
12. ## What are the differences between variables created using ​let​, ​var​ and ​const​?
13. ## Should we always use Async/Await?
14. ## What is DOM?
15. ## What are some differences between JS and JSON?
16. ## Difference between Stack and Queue?
17. ## If all the operations of an object are O(1), why do we ever use an array?
18. ## How does binary search work?
19. ## What is an arrow function? What is the major use of it?
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
22. ## What is event loop in NodeJS?
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
