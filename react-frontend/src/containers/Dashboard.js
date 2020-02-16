import React from 'react';
import AppBar from '../components/AppBar/AppBar';
import CardCarousel from '../components/CardCarousel/CardCarousel';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    // toolbar: {
    //     paddingRight: 24, // keep right padding when drawer closed
    // },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    // appBar: {
    //     zIndex: theme.zIndex.drawer + 1,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    // },
    // appBarShift: {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100%',
        overflow: 'auto',
        margin: '10px',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Dashboard(props) {
    

    const classes = useStyles();

    return (

        <div>
            <div>
                <AppBar />
            </div>
            <div>
                <main className={classes.content}>
                    {/* <div className={classes.appBarSpacer} /> */}
                    <Container maxWidth="lg" className={classes.container}>
                        <CardCarousel 
                        events={props.events}/>
                    </Container>
                </main>
            </div>
        </div >
    )
}
