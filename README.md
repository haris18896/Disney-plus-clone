# Disney-plus-clone

## Login Page

```js
//src/App.js
//....
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
//....
```
changing the `header` on Signing out is part of Redux. will do that latter.
```js
//src/components/login.js
import React from 'react'
import styled from 'styled-components';


function Login() {
    return (
        <Container>
            
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);

    &:before{
        background-position : top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        background-image: url("/images/login-background.jpg");
        z-index: -1;
    }
`
```
```js
//src/components/login.js
//....
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>GET ALL THERE</SignUp>
            </CTA>
        </Container>

const Container = styled.div`
    //....
    display: flex;
    align-items: top;
    justify-content: center;
    //....
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 70%;
`
const SignUp = styled.a`

`
```
Now we are going to make a button for SignUp.
```js
//src/components/login.js
const CTA = styled.div`
    //....
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    text-align: center;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`
```

```js
//src/components/login.js
            <CTA>
                //...
                <Description>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`

const CTALogoTwo = styled.img`
    width: 90%;
    align-items: center;
`
```






