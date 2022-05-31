import Head from 'next/head'
import Navbar from '../components/NavbarContainer';

const About = () => {
    return (
        <Navbar>
            <Head>
                <title>About</title>
                <meta name='description' content={'Description'} />
                <meta property='og:title' content={'About page'} />
                <meta property='og:description' content={'Description'} />
                <meta property='og:locale' content='en_US' />
                <meta property='og:type' content='website' />
            </Head>
            <div>About page</div>
        </Navbar>
    )
}

export default About;