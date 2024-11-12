import { useState } from 'react';
import React from 'react';
import { Link } from 'react-scroll';
import { AppBar, Typography, Box, Toolbar, IconButton, Drawer, Button, List, ListItem, ListItemButton, ListItemText, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSpotify, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import logo from '../assets/svg/logo.svg';
import scrollToSection from '../utils/scroll-to-section.js'


const pages = ['נעים להכיר', 'האימונים שלנו', 'ברוכים הבאים'];
const pageNames = ['about', 'trains', 'welcome']

// This component handles the dynamic elevation (shadow) of the AppBar based on scroll position
function ElevationScroll(props) {
    const { children } = props;

    // This trigger will return true if the user has scrolled more than 0 pixels
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0, // Elevation applied after scrolling beyond 0 pixels
    });

    // Cloning the AppBar and dynamically changing its elevation based on scroll
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0, // Apply elevation (shadow) when scrolling
    });
}

function Header(props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    const handleMobileMenuClick = (pageName) => {
        scrollToSection(pageName)
        setIsDrawerOpen(false)
    }

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {pages.map((page, idx) => (
                    <Link key={idx} to={page} onClick={() => handleMobileMenuClick(pageNames[idx])}>
                        <ListItem key={page} disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{ textAlign: 'right' }} primary={page} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box >
    );

    return (
        <ElevationScroll {...props}>
            <AppBar position="fixed">
                {/* <Container maxWidth="xl"> */}
                <Toolbar disableGutters sx={{ justifyContent: "space-between", paddingLeft: "40px", paddingRight: "40px" }}>
                    {/* Desktop Logo */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, width: "100px" }}>
                        <img style={{ width: "100%" }} src={logo} alt="logo" />
                    </Box>
                    {/* Mobile Hamburger Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                            sx={{ color: 'black' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right" // Set to right to open from the right side
                            open={isDrawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            {list}
                        </Drawer>
                    </Box>

                    {/* Mobile Logo */}
                    <Box sx={{ display: { xs: 'flex', md: 'none', width: "100px" } }}>
                        <img style={{ width: "100%" }} src={logo} alt="logo" />
                    </Box>
                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        {pages.map((page, idx) => {
                            const splitWord = page.split(' ')
                            if (splitWord.length > 1)
                                return <Link key={page} to={page}>
                                    <Button
                                        onClick={() => scrollToSection(pageNames[idx])}
                                        sx={{ color: 'black', display: 'flex', gap: '5px' }}
                                    >
                                        <Typography sx={{ fontWeight: '700', fontFamily: 'main-font' }}>
                                            {splitWord[0]}
                                        </Typography>
                                        <Typography>
                                            {splitWord[1]}
                                        </Typography>

                                    </Button>
                                </Link>
                            else return <Button
                                key={page}
                                onClick={toggleDrawer(false)}
                                sx={{ color: 'black', display: 'flex', gap: '5px' }}
                            >
                                {splitWord[0]}
                            </Button>
                        })}
                        <Link to="footer">
                            <Button
                                onClick={() => scrollToSection("footer")}
                                sx={{ color: 'black', border: '1px solid black', borderRadius: '50vw', paddingBlock: '0px', paddingInline: '15px', marginInlineStart: '6px', height: '30px' }} >
                                <Typography>הרשמה</Typography>
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <a
                            href="https://wa.me/message/2DPGRYWDQARSF1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton aria-label="Whatsapp" >
                                <FontAwesomeIcon icon={faWhatsapp} style={{ color: "black" }} />
                            </IconButton>
                        </a>
                        <a
                            href="https://www.instagram.com/tair_avraham"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} style={{ color: "black" }} />
                            </IconButton>
                        </a>
                        <a href="https://open.spotify.com/show/0eFowPUM3Wd4ETnCE5cMMK?si=a99f15cc0e674111"
                            target="_blank"
                            rel="noopener noreferrer">

                            <IconButton aria-label="Spotify" >
                                <FontAwesomeIcon icon={faSpotify} style={{ color: "black" }} />
                            </IconButton>
                        </a>
                    </Box>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
}

export default Header;
