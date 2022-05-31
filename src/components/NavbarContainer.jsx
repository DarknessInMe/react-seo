import Link from 'next/link'

const NavbarContainer = ({ children }) => {

    return (
        <div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/users">Users</Link>
            </div>
            <div>
                { children }
            </div>
        </div>
    )
}

export default NavbarContainer;