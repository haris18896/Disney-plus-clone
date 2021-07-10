# Disney-plus-clone

## Home Page

create a component Header in `/src/components/Header.js`
```js
//src/components/Header.js
import React from 'react'

function Header() {
    return (
        <div>
            Header
        </div>
    )
}

export default Header
```
and then import it to `App.js`

Now we are going to add styled components, which are basically `CSS with in JS`
```
npm install styled-components
```

with the help of `styled-components` we can create any `html tag` with `JavaScript` as shown below. we have created a div by the name of Nav. which is a container for Header elements.
```js
//src/components/Header.js
import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            Header
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background-color: #090b13;
`
```
Now creating `Home component` because we have multiple pages.
also import `Home` component too `App.js`
for now we are going to focus on `Header`

if yu have pictures in your app to use. then paste those pics in `public` directory.
in Header, we have to create 3 div, --> `1 for logo`, `1 for nav bar`, `1 for profile image`

```js
//src/components/Header.js
import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>

            </NavMenu>
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background-color: #090b13;
    display: flex;
`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`

`
```

```js
//src/components/Header.js
const Nav = styled.div`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
```
Now we are going to take care of `NavMenu`
```js
//src/components/Header.js
<NavMenu>
    <a>
        <img src="/images/home-icon.svg" alt="" />
        <span>HOME</span>
    </a>


</NavMenu>
```
to make the `span` color white we have to goto the `index.css`
```css
/* src/index.css */
body {
  margin: 0;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```
#### the main power of styled components is that you can style elements in a pattern like a tree. as shown below in the NavMenu styling

Now making the span on the right and image on left.

```js
//src/components/Header.js

const NavMenu = styled.div`
    display: flex;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
        }
    }
`
```
```js
//src/components/Header.js
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>

                <a>
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>

                <a>
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCH LIST</span>
                </a>

                <a>
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>

                <a>
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>

                <a>
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="/images/haris.png"/>

```
```js
//src/components/Header.js
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
```

Now pushing UserImg all the way to the right hand with the help of flex.
```js
//src/components/Header.js
const NavMenu = styled.div`
    display: flex;
    flex: 1;
```
adding hovering effect to span
```js
//src/components/Header.js
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    // justify-content: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;

            }
        }
    }
`
```
transition all at 250ms on cubic-bezier transition.
```css
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
```
***************************************************************************************************************





