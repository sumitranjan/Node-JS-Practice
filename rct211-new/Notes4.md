### Class Notes

///React-Redux contains:

- <Provider> - Access to the redux store that holds all our application data.
- useSelector
- useDispatch

1. Install `redux` && `react-redux`
2. To wrap our component in <Provider> component and pass store as the only prop.
3. Use useSelector inside the App.js file to access the count data.
4. Use the useDispatch hook inside the App.js file to update the count data.

## UseSelector

        - help us ACCESS the data inside our Redux store.
        - has access to the redux store state.
        - multiple use selector can be used.
        - subscribe logic is handled by useSelector itself.
        - useSelector compare old value and new value
        - useSelctor check ===

## useDispatch -

### Todos

1. Install `axios` , `json-server`
2. Create a script for running json-server in the Package.json file
   "server": "json-server --watch db.json -port 8080"
3. `npm run server`
4. Refactor db.json file, to access todos
5. Also, create Todos.jsx and TodoInput.jsx

## shallowEqual

        - Goes only one level deep inside the objects

## deepEqual

        - Goes to the last element(however nested it is) inside the object
