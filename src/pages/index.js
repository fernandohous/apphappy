import * as React from "react"
import Zoom from 'react-reveal/Zoom';
import {MainBlock, FirstBlock, SecondBlock, Logo, PhoneOne, mainDesc, SeeMore} from '../components/blocks'
import '../styles/global.css'

// markup
const IndexPage = () => {
  return (
    <main >
    <title>HappyMe!</title>
        <MainBlock >
            <Logo>
                <a href="#" class='logo'>HappyMe!</a>
            </Logo>
            <FirstBlock>
                <mainDesc>
                    <div class='scale-in-center'>
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
            <SecondBlock>
                <img/>
                <p id="second">Join the community</p>
                <img/>
                <p >Send letters to random people in the world</p>
                <img/>
                <p >Ge awnsers and awnser letters too!</p>
            </SecondBlock>
        </MainBlock>
    </main>
  )
}

export default IndexPage
