# Disney-plus-clone

## Home Page

giving the home page minimum height `min-height: calc(100vh - 70px)`
giving the home page padding `padding : 0 calc(3.5vw + 5px);`
add `background-color: #040714;` into `/src/index.css`
Now adding `background-img`

```js
//src/components/home.js
import React from 'react'
import styled from 'styled-components';


function Home() {
    return (
        <Container>
            Home
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding : 0 calc(3.5vw + 5px);
    position: relative;

    &:before{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: -1;

    }

    `
```
*************************************************************************************************
 #### `Image Slider`
create an `ImgSlider` component in components, and import it into `Home.js`
```js
//src/components/home.js
import styled from 'styled-components';
import ImgSlider from './ImgSlider';


function Home() {
    return (
        <Container>
            <ImgSlider />
        </Container>
    )
}
//.........

```
in `ImgSlider` we are doing something called `react-slick`

```
npm install react-slick --save
npm install slick-carousel
```
here we have to import the slider and the css files.
and also we are going to style `Slider` by ourself.

```js
//src/components/ImgSlider.js
function ImgSlider() {


    return (
        <Carousel>
            Image Slider
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider).div`
`
```
also we have to do some settings for the slider.
```js
//src/components/ImgSlider.js
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt=""/>
            </Wrap>
            
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    .slick-list{
        overflow: visible;
    }
`

const Wrap = styled.div`
    margin-top: 20px;

    img{
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0 16px 10px -10px;
    }
`
```

it's working but not good looking yet,
so to make it better, we have to add  a little more css.
```js
//src/components/ImgSlider.js
const Carousel = styled(Slider)`

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(130, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }
    .slick-list{
        overflow: visible;
    }
`

const Wrap = styled.div`
    margin-top: 20px;
    img{
        border: 4px solid transparent;
        border-radius: 4px;

// ......
```

so now we have `next` button, but don't have a `previous` button.
```jsx
//src/components/ImgSlider.js
const Carousel = styled(Slider)`
// .......
    button{
            z-index: 1;
        }
```
Now adding border box, to the carousel
so we are going to say that the content should contain the border size, and for that we have to do
```css
/* src/App.css */
* {
    box-sizing: border-box;
}
```
now adding hover effect
```js
//src.components/ImgSlider.js
//.....
const Wrap = styled.div`
    cursor: pointer;
    margin-top: 20px;
    img{
        //.......
        //.......
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0 16px 10px -10px;
        transition-duration: 300ms;
        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
```
there is slider in the bottom of the page, to remove that add `overflow-x: hidden;` to `Home.js` and `Header.js`
```js
//src/components/Home.js
//......
const Container = styled.main`
    //.....
    overflow-x: hidden;
    //......
`
```
```js
//src/components/Header.js
//......
const Nav = styled.div`
    //.....
    overflow-x: hidden;
    //......
`
```
*****************************************************************************************************
### Viewers
create a component `Viewers.js` in `/src/components/Viewers.js` and then import it to `/src/components/Home.js`. and to `/src/components/ImgSlider.js`

```js
//src/components/Viewers.js
import React from 'react'
import styled from 'styled-components';


function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png"  alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png"  alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png"  alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png"  alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png"  alt="" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
`

const Wrap = styled.div`

`
```

Now editing the above code using `CSS grids`, and creating 5 columns out of that grid using `grid template`.
```js
//src/components/viewer.js
const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
```

```js
//src/components/viewer.js
//....
const Wrap = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.8);

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
```
now add spacing or gap between the columns,
```js
//src/components/viewer.js
//....
const Container = styled.div`
    //.....
    padding: 30px 0px 26px;
    grid-gap: 25px;
    //....
```
Now adding box shadow
```js
//src/components/viewer.js
//....
const Wrap = styled.div`
    //........
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0 16px 10px -10px;
    //.....
`
```
now adding a hover effect to the image wrapper.


```js
//src/components/viewer.js
//....
const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.8);
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0 16px 10px -10px;


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 /72%) 0 16px 10px -10px;
        transform: scale(1.05);
        border-color: #FFD700;
        transition-duration: 300ms;
    }

`
```
**********************************************************************************************************
#### Movies

```js
//src/components/movies.js
import React from 'react'
import styled from 'styled-components';


function Movies() {
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/60E0E186B331F83A7412290932F9F3BA5F9C4C11FA82ED1D9B6F63F301BD9372/scale?width=1200&aspectRatio=1.78&format=jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/60E0E186B331F83A7412290932F9F3BA5F9C4C11FA82ED1D9B6F63F301BD9372/scale?width=1200&aspectRatio=1.78&format=jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/60E0E186B331F83A7412290932F9F3BA5F9C4C11FA82ED1D9B6F63F301BD9372/scale?width=1200&aspectRatio=1.78&format=jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/60E0E186B331F83A7412290932F9F3BA5F9C4C11FA82ED1D9B6F63F301BD9372/scale?width=1200&aspectRatio=1.78&format=jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/60E0E186B331F83A7412290932F9F3BA5F9C4C11FA82ED1D9B6F63F301BD9372/scale?width=1200&aspectRatio=1.78&format=jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/60E0E186B331F83A7412290932F9F3BA5F9C4C11FA82ED1D9B6F63F301BD9372/scale?width=1200&aspectRatio=1.78&format=jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/60E0E186B331F83A7412290932F9F3BA5F9C4C11FA82ED1D9B6F63F301BD9372/scale?width=1200&aspectRatio=1.78&format=jpeg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/60E0E186B331F83A7412290932F9F3BA5F9C4C11FA82ED1D9B6F63F301BD9372/scale?width=1200&aspectRatio=1.78&format=jpeg" alt=""/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div`

`

const Content = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

`

const Wrap =styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.3);
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0 16px 10px -10px;


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 /72%) 0 16px 10px -10px;
        transform: scale(1.05);
        border-color: #FFD700;
        transition-duration: 300ms;
    }
`
```
******************************************************************************************************
#### Detail page
Now how are we going to change between detail page and home page???
Ans: we will be using `React-Router-Dom`

goto the App.js
```
npm install react-router-dom
```
import react-router-dom into `App.js`
```js
//src/App.js
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

```
here in `App.js` we are going to use `Switch` it says that if the `Route` path is '/detail` then go to the detail page, but if the path is '/home' then go to the home page.
```js
//src/App.js
import React from 'react';
import './App.css';
import './index.css'
import Header from './components/Header';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Detail from './components/Detail';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>

          <Route path="/detail">
            <Detail />
          </Route>

          <Route path="/detail">
            <Home />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
```

#### now working on Detail page
```js
//src/components/detail.js
import React from 'react'
import styled from 'styled-components';


function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://cdn.vox-cdn.com/thumbor/eU72waq9EjmEsOS-sMcndQrGzXc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11604673/BO_RGB_s120_22a_cs_pub.pub16.318.jpg" alt="" />
            </Background>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(10vh - 70px);
    padding: o calc(3.5vw + 5px);
`
```

now we have to edit the `Background` and `Img` tag
```js
//src/components/detail.js
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`
```

```js
//src/components/detail.js
const Container = styled.div`
    //...
    position: relative;
`

const Background = styled.div`
    //....
    z-index: -1;

    img{
        width: 100%;
        height: 100;
        object-fit: cover;
    }
`
```
at this point the pic will cover everything so we have to use `z-index: -1;` and then the NavBar will be there again at the top
```js
//src/components/detail.js
const Background = styled.div`
    //.....
    opacity: 0.8;
```
no we are going to focus on Image title at this point for now.
```js
//src/components/detail.js
const ImgTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
```
Now focusing on the controls of detail page. in controls we have 4 buttons
```js
//src/components/detail.js
        <Container>
            //.....
            <Controls>
                <PlayButton>

                </PlayButton>
                <TrailerButton>

                </TrailerButton>
                <AddButton>

                </AddButton>
                <GroupWatchButton>

                </GroupWatchButton>
            </Controls>
        </Container>


const Controls = styled.div`

`
const PlayButton = styled.button`

`
const TrailerButton = styled.button`

`
const AddButton = styled.button`

`
const GroupWatchButton = styled.button`

`
```
`PlayButton` and `TrailerButton` has almost same properties except for some, that's why we are going to import the `PlayButton properties to the `Trailer Button`
```js
//src/components/detail.js
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </TrailerButton>

const Controls = styled.div`
    display: flex;

`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    margin-left:22px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background-color: rgb(198, 198, 198);
    }

`
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    text-transform: uppercase;
`
```

now working on `AddButton` and `GroupWatchButton`
```js
//src/components/detail.js
//....
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: rgba(0,0,0,1)
`
```






