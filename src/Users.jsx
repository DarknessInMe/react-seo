import { Helmet } from 'react-helmet';

export const Users = () => {
    return (
        <div>
            <Helmet>
                <title>Users page</title>
                <meta name='description' content={'Lorem ipsum'} />
                <meta property='og:title' content={'Users page'} />
                <meta property='og:description' content={'Lorem ipsum'} />
                <meta property='og:locale' content='en_US' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='https://patterns.dev/img/reactjs/react-logo@3x.svg' />
            </Helmet>
            <div>Users page</div>
        </div>
    )
}