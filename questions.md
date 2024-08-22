>What is the difference between Component and PureComponent?
>Give an example where it might break my app.

An Component always re-renders when props or state change. 
An PureComponent performs a shallow comparison of props and state and re-renders only if they have changed.

Using PureComponent and modifying an object or array without changing its reference may prevent the component from re-rendering, causing display issues.

Example: Adding an item to an array with push will not change the reference, so PureComponent will not re-render.

----

>Context + ShouldComponentUpdate might be dangerous. Why is that?

Context and shouldComponentUpdate can conflict because shouldComponentUpdate does not always notice context changes, which can result in the component not re-rendering when the context changes. This can cause rendering issues. To avoid such issues, it is better to use hooks such as useContext or carefully apply optimization techniques.

----

>Describe 3 ways to pass information from a component to its  PARENT.

At first it is bad practice to pass information from a child to a parent component. The parent component should pass information.

1. Callback Functions: Pass a function from the parent to the child. For example, pass a function that updates the parent's state as a prop to the child component. The child component can call this function to update the parent's state.
2.	State Management: Redux or Context API.
3.	Custom Hooks: Create a custom hook to manage state.


----    

> Give 2 ways to prevent components from re-rendering.

1. React.memo.
2. Use PureComponent.
3. Use shouldComponentUpdate lifecycle method.

----

> What is a fragment and why do we need it? Give an example where it might break my app.

Fragment is a component that groups multiple elements without adding extra nodes to the DOM. I never faced with problem using Fragment. 

----    

>Give 3 examples of the HOC pattern.

1. Error Boundary
2. Context provider
3. Some loading indicator HOC, while data is fetching.

----
>What's the difference in handling exceptions in promises, callbacks and async...await?

Since async/await is a syntactic sugar for promises, the difference is in the syntax, but the underlying mechanism is the same.
```const foo = await asyncFn().then(() => doSome());```


----    
>How many arguments does setState take and why is it async.

setState takes up to two arguments: the new state and an optional callback. It is asynchronous because React will batch their updates and re-render them together in a single pass at the end of the event.


----
>List the steps needed to migrate a Class to Function Component.

I never did it, so my answer will be just copy paste from the internet. I think this is will be not fair. 


----
>List a few ways styles can be used with components.

styled components, inline styles, CSS modules, and CSS-in-JS libraries.
but the best thing is to use styled-components and 'ask' Webpack to create separate CSS files for caching on the client side.

----
>How to render an HTML string coming from the server.
Always use dangerouslySetInnerHTML, this is a secure way to render HTML strings. 
```<div dangerouslySetInnerHTML={{ __html: htmlString }} />```
