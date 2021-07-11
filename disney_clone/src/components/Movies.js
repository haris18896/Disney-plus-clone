import React from 'react'
import styled from 'styled-components';
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'

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