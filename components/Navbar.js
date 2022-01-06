import Image from 'next/image'
import logo from '../imgs/adid.jpg'
import NextLink from 'next/link'
import Link from 'next/link'
import useStyles from '../util/styles'
import { Router } from 'next/router'

const Navbar = ()=> {
    const classStyles = useStyles()
    return (
        <nav className={classStyles.nav}>
            
            <Image className={
                classStyles.logo}
                src={logo}
                height="100px"
                width="100px"
            />
            <Link href="/">
                <a>HOME</a>
            </Link>
            <Link href="/men">
                <a>MEN</a>
            </Link>
            <Link href="/women">
                <a>WOMEN</a>
            </Link>
            <Link href="/kids">
                <a>KIDS</a>
            </Link>
            <Link href="/sale">
                <a>SALE</a>
            </Link>

            <NextLink href='/cart' passHref>
                <Link onClick={()=>{
                    const storage = window.localStorage
                    const cart = JSON.parse(storage.getItem("cart"))
                    Router.replace(cart.webUrl)
                }}>Cart</Link>
            </NextLink>

            <NextLink href='/login' passHref>
                <Link>Login</Link>
            </NextLink>
        </nav>
    )
}

export default Navbar
