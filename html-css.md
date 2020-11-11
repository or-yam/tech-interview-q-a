# HTML / CSS

1.  ## What is block and inline elements?

    ### Answer:

    block element is an HTML element that by default starts a new line and takes up the whole width of the screen.
    <br>
    inline element continue on the same line and takes up only his content width
    <br>
    we can use CSS to force an inline element act as block and otherwise.
    <br>
    elements with inline-block property will not break to the next line and their height and width can be changed.

    ### Examples:

    ```html
    block elements:
    <div></div>
    <h1></h1>
    <canvas></canvas>
    <nav></nav>
    ```

    ```html
    inline elements:
    <span></span>
    <button></button>
    <a></a>
    <img />
    ```

2.  ## How does specificity work in CSS?

    ### Answer:

    CSS Specificity is the set of the rules applied to CSS selectors in order to determine which style is applied to an element. The more specific a CSS style is, the higher point value it accrues, and the likelier it is to be present on the element's style.
    <br>
    less specific to most specific:
    HTML tag => class => id => inline style => !important

    ### Example:

    HTML:

    ```html
    <div class="box" id="main-container">example</div>
    ```

    CSS:

    ```css
    .box {
      background-color: blue;
    }
    #main-container {
      background-color: red;
    }
    ```

    ### The background color will be set to red.

3.  ## Why don’t we use IDs for all our selectors?

    ### Answer:

    id's used mostly for one of a kind element , for example button. for elements that repeat in several places in the page is cleaner and easier to use classes.

4.  ## What is the box model - why is it useful?

    ### Answer:

    the html box model is the layout of elements. each element can have padding margin border and content. it useful to control the view and the structure of the page elements The box model allows us to add a border around elements, and to define space between elements.

5.  ## What are ​data-​attributes good for?

    ### Answer:

    embed data in html element that can be use later in javascript.

    ```html
    <div data-userId>Hello User</div>
    ```

6.  ## How would you approach fixing browser-specific styling issues?

    ### Answer:

    check on [Can I Use](https://caniuse.com/) what alternatives I can use for the specific issue and try to implement a solution using this tools.
    another approach is to use `-webkit` prefix in the CSS file.

---
