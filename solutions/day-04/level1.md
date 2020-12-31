1. What is the difference between a regular function and an arrow function?
A regular function starts with `function` keyword, but an arrow function consists of parentheses that encloses arguments `()`, an arrow `=>`, followed by a content of the function enclosed by `{}`.

2. What is a React Component?
A react component is a reusable piece of code that can be used in a React project, which is a part of the application UI.

3. How do you make a React functional component?
Define a JavaScript function which returns a JSX.

4. What is the difference between a pure JavaScript function and a functional component?
A pure JavaScript can return any type of value, while a functional component always returns JSX.

5. How small is a React component?
A react component can be as small as a single DOM object.

6. Can we make a button or input field component?
Yes!

7. Make a reusable Button component.
```
const Button() => {
  return (
    <button>Click me!</button>
  )
}
```

8. Make a reusable InputField component.
```
const InputField() => {
  return (
    <input type="text" placeholder="" />
  )
}
```

9. Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
```
const alertBox() => {
  return (
    <div>
      <p></p>
    </div>
  )
}
```
