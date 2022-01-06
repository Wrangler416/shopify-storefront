import Head from  'next/head'
import {AppBar, Toolbar, Typography, Container} from '@material-ui/core'
import useStyles from '../util/styles'
import Navbar from '../components/Navbar'

export default function Layout({children}){
    const classStyles = useStyles()

    return (
        <div>
            <Head>
                <title>Adidas</title>
            </Head>

            
            <AppBar position="static" className={classStyles.navbar}>
                <Toolbar>
                    <Typography>
FREE STANDARD SHIPPING & RETURNS | JOIN NOW     SAVE UP TO 40% OFF SELECT STYLES
                    </Typography>
                </Toolbar>

            </AppBar>

            <Navbar />


            <Container className={classStyles.main}>
                {children}
            </Container>



            <footer className={classStyles.footer}>
                <Typography>
                    Kara's Adida-rass shop. All rights reserved 2022. 
                </Typography>
            </footer>
        </div>
    )
}
