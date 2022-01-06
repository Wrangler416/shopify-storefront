const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles({
    navbar: {
        backgroundColor: 'black', 
        '& a ' : {
            color: 'white',
            marginLeft: 10,
        },
    },
    main: {
        minHeight: '80vh'
    },
    footer: {
        textAlign: 'center'
    },
    side: {
        flexGrow: 1
    },
    nav: {
        fontSize: 2,
        padding: 10,
        backgroundColor: 'white',
        color: 'black'
    },
    logo: {
        height: 100
    }
    
    
})

export default useStyles