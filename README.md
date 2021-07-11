# Disney-plus-clone

## Redux

Now anchoring the movies to a detail page.
```js
//src/App.js
//....
<Route path="/detail/:id">
    <Detail />
</Route>
```
```js
//src/components/Moves.js
//.....
<Wrap key={movie.id}>
    <Link to={`/detail/${movie.id}`}>
        <img src={movie.cardImg} alt=""/>
    </Link>
</Wrap>
///.......
```
it's working.
Now go to the detail page and make it dynamic.
at this point we have told the `/src/App.js` that what comes after the `/detail/`page, that's the `/detail/:id`
which is saved in the parameter, so that's why we are going to use `useParams` from react-router-dom in details.js
```js
//src/components/details.js
import { useParams } from 'react-router-dom'


function Detail() {
    const { id } = useParams();
    console.log(id);

```
now we are going to grab that data for that specific id, and for that we are going to use `useEffect`.
and we are going to save the data in to the `State`, because this changes for every single page.

##### actually useState is like a redux but for individual component. if redux is for the whole app then useState is for individual component.

```js
//src/components/details.js
import db from '../firebase';
import React, {useEffect, useState} from 'react'
//.....
function Detail() {
    const { id } = useParams();
    const [ movie, setMovie ] = useState();

    useEffect(() => {
        // grab the movie info from db
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            //we need to check if this doc exist
            if(doc.exists){
                //save the movie data in to state.
                setMovie(doc.data());
            } else{
                //redirect to home page.
            }
        })
    }, [])

    // console.log("Movie is >>>>>", movie);
```
now making the `detail.js` page dynamic from static.
```js
//src/components/details.js
//.......
<Container>
    <Background>
        <img src={movie.backgroundImg}  alt="" />
    </Background>
    <ImgTitle>
        <img src={movie.titleImg} alt=""/>
    </ImgTitle>
    <Controls>
        <PlayButton>
            <img src="/images/play-icon-black.png" alt="" />
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
        </TrailerButton>
        <AddButton>
            <span>+</span>
        </AddButton>
        <GroupWatchButton>
            <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
    </Controls>

    <SubTitle>
        {movie.subtitle}
    </SubTitle>
    <Description>
        {movie.description}
    </Description>
</Container>
//......
```

```
TypeError: Cannot read property 'backgroundImg' of undefined
```
actually we are grabbing the data from DB a few seconds latter, that's why it show's this error.
```js
//src/components/detail.js
//....
<Container>
    {movie && (
        <>
        //......
        </>
    )}
</Container>
```
it says that if the movie exist then grab the data, else it will not show.
Now we are good to go forward.

**************************************************************************************************
### User
if the user exists do this (.....) if not exist do this (.....)

create a file `//src/features/user/userSlice.js`
we have to create our react redux slice for user.
```js
//src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
```
and Now add this to `/src/app/stor.js`
```js

import userReducer from '../features/user/userSlice'
import userSlice from "../features/user/userSlice";

//.....
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
//.....
```
*************************************************************************************************
Now changing the Header on sign out.
go to the Header component.
we have to grab the userName, userEmail, userPhoto and see if it exist if it doesn't exist we show the login button, if exist we show the Header.

```js
//src/components/Header.js
//...
import { selectUserName, selectUserPhoto } from '../features/user/userSlice';
import { useSelector } from 'react-redux;';

function Header() {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    
```
so now if we don't have a user, then the login button has to be shown.
so after the `logo` we are going to use `if else statment`.
we say that if the user doesn't exist then show the styled component `Login` button otherwise show NavMenu. and for that we have to use anonymus tags `<>    </>`

```js
//src/components/Header.js
//...
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            { !userName ? (
                <LoginContainer>
                    <Login>Login</Login>
                </LoginContainer>
                 ) : 
                <>
                    <NavMenu>
                </>
```
```js
//src/components/Header.js
//......
const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`

const Login = styled.button`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.6);
    color: white;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover{
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`

```

Now on the click of `login` button we are going to be logged in ourselves.
```js
//src/components/Header.js
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice';
import { useSelector, useDispatch,  } from 'react-redux';
import { auth, provider } from '../firebase'
//......

function Header() {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            // console.log(result);
            // setting up the user data

        })
    }

    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            { !userName ? (
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login>
                </LoginContainer>

//......
```

now dispatch the data.




