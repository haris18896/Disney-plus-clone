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




