import * as React from "react"
import Zoom from 'react-reveal/Zoom';
import {MainBlock, FirstBlock, SecondBlock, Logo, PhoneOne, mainDesc} from '../components/blocks'
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
                    <Zoom>
                        <h1>Join HappyMe community today!</h1>
                        <p>Send letters to random people, and receive and response too!</p>
                        <p>You can make someone day's better.</p>
                        <a href="#second">Learn more!</a>
                    </Zoom>
                </mainDesc>

                <Zoom>
                    <PhoneOne src="https://cdn.pixabay.com/photo/2021/01/25/08/55/apple-iphone-12-pro-max-5947688_1280.png" />
                </Zoom>
            </FirstBlock>
        </MainBlock>
    </main>
  )
}

export default IndexPage
