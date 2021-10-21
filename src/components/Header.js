import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily:"Nunito",
    },
    appbar:{
        background:"none",
        fontFamily:"Nunito",
    },
    appbarWrapper:{
        width : '80%', //Pushes the menu button to the right
        margin: '0 auto', //centers the appbar
    },
    appbarTitle:{
        flexGrow: '1',
    },
    icon :{
        color: "#ffffff",
    },
    IslandColor:{
        color: "#5AFF3D",
    },
    title:{
        color: "white",
        fontSize: "4rem",
    },
    container:{
        textAlign: 'center',
    },
    goDown:{
        color: "#5AFF3D",
    }
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    },[])
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>  
                    <h1 className={classes.appbarTitle}>
                        My<span className={classes.IslandColor}>Island.</span>
                    </h1>
                    <IconButton>
                        <MenuIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} { ... (checked ? {timeout: 1000} : {})}
                collapsedSize={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}> 
                        Welcome to <br />
                            My <span className={classes.IslandColor}>Island.</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                                <KeyboardArrowDownIcon className={classes.goDown} sx={{ fontSize: 40 }}/>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}
