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



