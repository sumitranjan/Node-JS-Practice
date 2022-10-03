### Class Notes

<!-- Component re-render :
    - When state changes
    - when the prop changes
So, anytime state or prop changes the component re-renders

And Whenever the component re-renders,the callback that is in the useEffect() gets triggered  -->

1. useEffect

```JavaScript
useEffect(() => {}) ->  The callback will get triggered everytime the component re-render.

When does the componet re-renders?
- WHen the state of the componet changes.
- If the props of the component changes.
```

```JavaScript

1. The callback will get triggered everytime the component re-render.

useEffect(() => {});


2. The callback will get triggered only for the first time,
when component mount the component re-render.

useEffect(() => {},[]);


3. The callback will get triggered for the first time when the component mounts
and the value inside the array of dependency changes

useEffect(() => {},[count]);

4. cleanup  
useEffect(() => {
    return () => {};
  }, []);

```

## What are side-effects?

-un-predictable -> impure functions -> side effects
-impure function == side Effect
-calling an API -> Don't know whether we will get status code as 200, 404, 500, etc.
-setTimeout, setInterval, Web/Browser APIs, document, window....
-this type of side-effects should only be handle inside useEffect.

```JavaScript

useEffect(() => {
    //side-effects
    //MEMORY LEAK
    let id = setInterval(() => {
      console.log("Inside setInterval", Date.now());
    }, 1000);

    //unmounts -> unmounting will not re-render the component
    return () => {
      clearInterval(id);
    };
  }, []);

```

## HOF ?
- .map, .filter, .reduce take another functions as arguments
- .map(() => {})   

## HOC ?
- Components taht take another components as arguments