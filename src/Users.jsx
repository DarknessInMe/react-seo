import { Helmet } from 'react-helmet';

export const Users = () => {
    return (
        <Helmet>
            <meta name='description' content={'Lorem ipsum'} />
            <meta property='og:title' content={'Users page'} />
            <meta property='og:description' content={'Lorem ipsum'} />
            <meta property='og:locale' content='en_US' />
            <meta property='og:type' content='website' />
        </Helmet>
    )
}