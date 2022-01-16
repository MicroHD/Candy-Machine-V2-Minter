import styled from "styled-components"

export const Foot = styled.div`
    background: #050508;
    height: 80px;
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
    align-items: center;
    font-size: 1rem;
    position: relative;
    bottom: 0;
    z-index: 10;
    width: 100%;
    color: #fff;
    @media screen and (max-width: 960px)
    {
        transition: 0.8s all ease;
    }
`

export const FootIcon = styled.a`
    color: #fff;
    justify-self: center;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    margin-left: 22px;
    margin-right: 22px;
    font-weight: bold;
    text-decoration: none;
`

export const Socials = styled.div `
    display: flex;
    text-align: center;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: lightgray;
    }
`