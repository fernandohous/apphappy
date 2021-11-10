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
    margin-top: 5em;
    
    @media screen and (max-width: 960px){
        height: 20em;
        margin-left: 0em;
        margin-top: 0em;
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
    padding-bottom: 5em;
    
    @media screen and (max-width: 960px){
        flex-direction: column;
        text-align: center;
    }

`

export const SecondBlock = styled.div`

    background: rgb(253,250,102);
    background: linear-gradient(90deg, rgba(253,250,102,1) 0%, rgba(26,192,198,1) 100%);color: #ffffff;
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
    }

`



export const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
`