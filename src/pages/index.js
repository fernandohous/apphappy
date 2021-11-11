import * as React from "react"

import {
        MainBlock, 
        FirstBlock, 
        SecondBlock, 
        Logo, PhoneOne, 
        mainDesc, 
        ImgBox, 
        DescSecBox, 
        WhatIsAbout, 
        FooterBox, 
        SocialIcons 
} from '../components/blocks'

import '../styles/global.css'

// markup
const IndexPage = () => {
  return (
    <main >
    <title>HappyMe!</title>
        <MainBlock >
            <Logo>
                <img class="logoImg scale-in-center" src="https://i.imgur.com/U9C81LW.png" alt="HappyMe" />
            </Logo>
            <FirstBlock>
                <mainDesc>
                    <div>
                        <h1>Join HappyMe community today!</h1>
                        <p>Send letters to random people, and receive and response too!</p>
                        <p>You can make someone day's better.</p>
                        <a href="#second" class="learnabout flip-horizontal-bottom">Learn about!</a>
                    </div>
                </mainDesc>

                <div class='scale-in-center'>
                    <PhoneOne src="https://cdn.pixabay.com/photo/2021/01/25/08/55/apple-iphone-12-pro-max-5947688_1280.png" />
                </div>
            </FirstBlock>
            <SecondBlock id="second">
                <WhatIsAbout>
                    <h1 class="whatis">What is HappyMe?</h1>
                </WhatIsAbout>
                <DescSecBox>
                    <ImgBox src="https://i.imgur.com/6rcrnR5.png" alt="People using cellphone"/>
                    <p class="tracking-in-expand">Join the community to make a bunch of people happy!</p>
                </DescSecBox>
                <DescSecBox>
                    <ImgBox src="https://i.imgur.com/f9Gwrs8.png" alt="Mailbox with paper airplane"/>
                    <p class="tracking-in-expand">You can send letters to people in the the whole world!</p>
                </DescSecBox>
                <DescSecBox>
                    <ImgBox src="https://i.imgur.com/XB8Wx7Q.png" alt="People happy"/>
                    <p class="tracking-in-expand">Awnser people and make them happy with positive messages</p>
                </DescSecBox>
            </SecondBlock>
            <FooterBox>
                <p class="whiteText">Made by: Fernando B. Barbosa</p>
                <a href="https://github.com/ferbarbosa">
                    <SocialIcons src="https://i.imgur.com/8shpEZc.png" alt="Linkedin" />
                </a>
                <a href="https://github.com/ferbarbosa">
                    <SocialIcons src="https://i.imgur.com/ogjQnSk.png" alt="Github" />
                </a>
                <p>
                    <a class="whiteText" href="https://storyset.com/">illustrations by Storyset</a>
                </p>
            </FooterBox>
        </MainBlock>
        
    </main>
  )
}

export default IndexPage
