import { Helmet } from 'react-helmet';

export const About = () => {
    return (
        <>
            <Helmet>
                <meta name='description' content={'Description'} />
                <meta property='og:title' content={'About page'} />
                <meta property='og:description' content={'Description'} />
                <meta property='og:locale' content='en_US' />
                <meta property='og:type' content='website' />
            </Helmet>
            <div>About page</div>
        </>
    )
}