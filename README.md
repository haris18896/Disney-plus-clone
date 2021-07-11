# Disney-plus-clone

## Redux

at this point our site is static, now we are going to use firebase and deep database to make our site dynamic.

to grab all the movies from the firebase we have to do the following. `/src/components/Home.js`

```
npm i firebase
npm i firebase-tools
```
create a `firebase.js` file. `/src/firebase.js`
at this point this file is from `Naz(team CP)`
```js
//src/firebase.js
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
```
first of all we are importing firebase.
next we have firebase configuration.
Initialize firebase app.
firestore.
firebase authentications for login and logout
google authentication
firebase storage.

Now go to ``Home.js``, we are importing `useEffect` it says that when ever i load my component, or page. do this ``useEffect(//.......)``, so it will run whenever `Home.js` loads
```js
//src/components/Home.js
import React, { useEffect } from 'react'
//.....
function Home() {
    useEffect(() => {
        // console.log("Hello")
        db.collection("movies").onSnapshot((snapshot) => {
            // console.log("the snap goes here >>>", snapshot);
            let tempMovies = snapshot.docs.map((doc) => {
                // console.log(doc.data());
                return{
                    id: doc.id, ...doc.data()
                }
            }) //so here what we need is tempMovies, all the data has been returned to tempMovies
            console.log(tempMovies);    // Now redux comes here , redux is something that manage all the data.
        })
    }, [])
//.....
```
Now go to the `/features/counter`. create a new directory and file in features. `/features/movie/movieSlice.js`

```js
//src/features/movie/movieSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: []
}

const movieSlice =createSlice({
    name: "movie",
    initialState,
    
})

```
redux is made of few things, `Actions, Reducers and State`.

`Actions` are the action you want to do e.g user login, logout, create a movie, set a new movie etc.
`Reducers` basically is what take an action and actually changes the state.

 if you change the state in redux, the whole app will know about it.

in the state change or reducer changes the state and we setMovies we are going to get new movie from the database.
 ```js
//src/features/movie/movieSlice.js
//.......
const movieSlice =createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }

})

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
 ```

Now go to `/src/app/store.js` and import that reducer.
```js
//src/app/store.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});


```

now go to the `/src/components/Home.js`.
```js
//src/components/Home.js
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice'
//.......
function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return{
                    id: doc.id, ...doc.data()
                }
            })
            dispatch(setMovies(tempMovies));
        })
    }, [])

    //.....
```

Now go to the movies, `//src/components/movies.js`
```js
//src/components/movies.js
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'

function Movies() {
    const  movies = useSelector(selectMovies);

    console.log("This is Movies",movies);
    //......
```

so what have we done here is that, we went down to the home(state) component and inside the home component we grab the data from the database, we dispatch an action by using redux to save the movies inside the react store. once we put that there and go back to movies component we just now grab it from the store.

Now we can replace the static images in `//src/components/movies.js`
we can do that with the help of loop.

the loop says that if the movies exist then we can go and proceed and do something about it.

and then we are gonna grab the movies data from the data base `<img src={movie.cardImg} alt=""/>`
```js
//src/component/Movies.js
//......
function Movies() {
    const  movies = useSelector(selectMovies);

    console.log("This is Movies",movies);

    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                { movies && 
                    movies.map((movie) => (
                        <Wrap key={movie.id}>
                            <img src={movie.cardImg} alt=""/>
                        </Wrap>
                    ))
                }
//......
```
removing the `unique key error`
```js
//src/component/Movies.js
//...........
                    movies.map((movie) => (
                        <Wrap key={movie.id}>
                            <img src={movie.cardImg} alt=""/>
                        </Wrap>
```

Now anchoring the movies to a detail page.



