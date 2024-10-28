import { useState } from 'react';
import React from 'react';

import { AppBar, Typography, Box, Toolbar, IconButton, Drawer, Button, List, ListItem, ListItemButton, ListItemText, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSpotify, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import logo from '../assets/svg/logo.svg';

const pages = ['נעים להכיר', 'האימונים שלנו', 'ברוכים הבאים'];

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

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {pages.map((page) => (
                    <ListItem key={page} disablePadding>
                        <ListItemButton>
                            <ListItemText sx={{ textAlign: 'right' }} primary={page} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <ElevationScroll {...props}>
            <AppBar position="fixed">
                {/* <Container maxWidth="xl"> */}
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Desktop Logo */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <img src={logo} alt="logo" />
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
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <img src={logo} alt="logo" />
                    </Box>
                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        {pages.map((page) => {
                            const splitWord = page.split(' ')
                            if (splitWord.length > 1)
                                return <Button
                                    key={page}
                                    onClick={toggleDrawer(false)}
                                    sx={{ color: 'black', display: 'flex', gap: '5px' }}
                                >
                                    <Typography sx={{ fontWeight: '700', fontFamily: 'main-font' }}>
                                        {splitWord[0]}
                                    </Typography>
                                    <Typography>
                                        {splitWord[1]}
                                    </Typography>
                                </Button>
                            else return <Button
                                key={page}
                                onClick={toggleDrawer(false)}
                                sx={{ color: 'black', display: 'flex', gap: '5px' }}
                            >
                                {splitWord[0]}
                            </Button>
                        })}
                        <Button sx={{ color: 'black', border: '1px solid black', borderRadius: '50vw', paddingBlock: '0px', paddingInline: '15px', marginInlineStart: '6px', height: '30px' }} >
                            <Typography>הרשמה</Typography>
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <IconButton aria-label="Whatsapp" sx={{ paddingInlineStart: '0px' }}>
                            <FontAwesomeIcon icon={faWhatsapp} style={{ color: "black", backgroundColor: '#F5F3EF' }} />
                        </IconButton>
                        <IconButton aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: "black", backgroundColor: '#F5F3EF' }} />
                        </IconButton>
                        <IconButton aria-label="Spotify" sx={{ paddingInlineEnd: '0px' }}>
                            <FontAwesomeIcon icon={faSpotify} style={{ color: "black", backgroundColor: '#F5F3EF' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
}

export default Header;
