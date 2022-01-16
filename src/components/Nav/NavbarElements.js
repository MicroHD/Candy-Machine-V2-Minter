import styled from "styled-components";

export const Nav = styled.nav`
    background: #5d58b4;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: relative;
    top: 0;
    z-index: 10;
    width: 100%;
    color: white;
    @media screen and (max-width: 960px)
    {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    top: 0;
    position: absolute;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    /* max-width: 1100px; */
    @media screen and (max-width: 1080px)
    {
        transition: 0.8s all ease;
        justify-content: space-between;
        height: 60px;
    }
`
export const WalletText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    line-height: .05; 
    padding-right: 25px;
    @media screen and (max-width: 580px)
    {
        transition: 0.8s all ease;
        height: 40px;
        font-size: 10px;
    }
`