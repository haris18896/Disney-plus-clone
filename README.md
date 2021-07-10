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
//src/components/homme.js
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
    margin-top: 20px;
`

const Wrap = styled.div`
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







