import styled from 'styled-components'


export const Logo = styled.div`
    color: #ffffff;
    font-size: 30px;
    background: rgb(67,97,238);
    background: linear-gradient(90deg, rgba(67,97,238,1) 0%, rgba(26,192,198,1) 100%);
    padding: 1em;
`


export const PhoneOne = styled.img`
    height: 32em;
    margin-left: 5em;
    
    @media screen and (max-width: 960px){
        height: 20em;
        margin-left: 0em;
        margin-top: 0em;
    }

`

export const WhatIsAbout = styled.div`
    color: rgb(67,97,238);
    position: absolute;
    margin-top: -30em;
    @media screen and (max-width: 960px){
        margin-top: -70em;
    }
`

export const FooterBox = styled.footer`
    color: #ffffff;
    font-size: 20px;
    background: rgb(67,97,238);
    background: linear-gradient(90deg, rgba(67,97,238,1) 0%, rgba(26,192,198,1) 100%);
    height: 200px;
    text-align: center;
`

export const SocialIcons = styled.img`
    height: 50px;
    margin: 10px;
`

export const ImgBox = styled.img`
    height: 15em;
`

export const DescSecBox = styled.div`
    flex-direction: column;
    text-align: center;
    margin: 5em;
    color: rgb(67,97,238);
    max-width: 350px;
    @media screen and (max-width: 960px){
        margin:0;
    }
`

export const mainDesc = styled.div`
    flex-direction: column;
`

export const FirstBlock = styled.div`
    background: rgb(67,97,238);
    background: linear-gradient(90deg, rgba(67,97,238,1) 0%, rgba(26,192,198,1) 100%);
    color: #ffffff;
    font-size: 20px;
    font-family: Arial;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 15em;
    border-bottom-left-radius: 50% 10%;
    border-bottom-right-radius: 50% 10%;

    @media screen and (max-width: 960px){
        flex-direction: column;
        text-align: center;
    }

`

export const SecondBlock = styled.div`

    background-color: #fff;
    color: #000;
    font-size: 20px;
    font-family: Arial;
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5em;
    
    @media screen and (max-width: 960px){
        flex-direction: column;
        text-align: center;
        margin-top: 15em;
    }

`



export const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
`