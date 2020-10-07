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

    block elements: `<button>`,`<div>`,`<h1>` inline elements:`<span>`

2.  ## How does specificity work in CSS?

    ### Answer:

    less specific to most specific:
    html tags => classes => id => inline=> !important
    <br>
    CSS Specificity is the set of the rules applied to CSS selectors in order to determine which style is applied to an element. The more specific a CSS style is, the higher point value it accrues, and the likelier it is to be present on the element's style.
    <br>

    ### Example:

    html: `<div class="box" id="main-container">example</div>`
    <br>
    CSS: `.box{background-color:blue} #main-container {background-color:red}`
    <br>
    the background color will be set to red.

3.  ## Why don’t we use IDs for all our selectors?

    ### Answer:

    id's used mostly for one of a kind element , for example button. for elements that repeat in several places in the page is cleaner and easier to use classes.

4.  ## What is the box model - why is it useful?

    ### Answer:

    the html box model is the layout of elements. each element can have padding margin border and content. it useful to control the view and the structure of the page elements The box model allows us to add a border around elements, and to define space between elements.

5.  ## What are ​data-​attributes good for?

    ### Answer

    embed data in html element that can be use later in javascript
    `<div data-userId>Hello User</div>`

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

Array.prototype.map, Array.prototype.filter

5. ## What is a callback?

### Answer

a function that will execute after another function has finish to execute.

### Example

```
const greeting = (name) => {
 console.log(`hello ${name}`)
}

const greetUser = (callBack) =>{
    let name = prompt('What is your name ?')
    callBack(name);
}
```

6. ## What’s the difference between ​map​ and ​forEach

### Answer

forEach manipulate the given array
<br>
map returns new manipulated array

7. ## Explain scope
8. ## Explain how ​this​ works in JavaScript.
9. ## What is a closure, and how/why would you use one?
10. ## What is a promise? How is it different from callback?
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
21. ## Explain "hoisting"
22. ## What is event loop in NodeJS?
23. ## What is the difference between ​==​ and ​===​?
