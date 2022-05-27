import { Helmet } from 'react-helmet';

export const Home = () => {
    return (
        <Helmet>
            <meta name='description' content={'42'} />
            <meta property='og:title' content={'Home page'} />
            <meta property='og:description' content={'42'} />
            <meta property='og:locale' content='en_US' />
            <meta property='og:type' content='website' />
        </Helmet>
    )
}