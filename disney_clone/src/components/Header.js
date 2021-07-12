/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice';
import { useSelector, useDispatch,  } from 'react-redux';
import { auth, provider } from '../firebase'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';


function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUserLoginDetails({
                    name : user.displayName,
                    email : user.email,
                    photo : user.photoURL
                }))
                history.push('/')
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user
            dispatch(setUserLoginDetails({
                name : user.displayName,
                email : user.email,
                photo : user.photoURL
            }))
            history.push('/');
        })
    };

    const signOut = () => {
        auth.signOut()
        .then(()=>{
            dispatch(setSignOutState());
            history.push('/login')
        })
    }

    return (
        <Nav>
            <Link to="/">
                <Logo src="/images/logo.svg" />
            </Link>
            { !userName ? (
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login>
                </LoginContainer>
                 ) : 
                <>
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

                    <UserImg onClick={signOut} src={userPhoto}/>
                </>
            }

        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;

`

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

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

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
