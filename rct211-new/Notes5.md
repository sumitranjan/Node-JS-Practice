### Combine Reducers

1. Create AppReducer, and AuthReducer folder in your Redux folder
2. Move the existing action.js, actionTypes.js, and reducer.js files in AppReducer folder
3. Create action.js , actionTypes.js, and reducer.js in your AuthReducer folder
4. Export the reducers from AuthReducer, and AppReducer in store.js
5. Import both the reducers from AuthReducer, and AppReducer in store.js
6. Use combineReducer method to cobine both the reducers in a single rootReducer
7. Instead of accessing the data from the state directly in the components,
   now access it from the state.AppReducer or state.
