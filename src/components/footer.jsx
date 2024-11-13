import { Link } from 'react-scroll';
import { Button, Typography, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSpotify, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import ContantMeForm from "../components/contant-me-form"
import scrollToSection from '../utils/scroll-to-section.js'

export default function Footer({ pages, pageNames }) {


    return (
        <footer className="footer">
            <div className="footer-main-container">
                <div className="footer-link-container">
                    {pages.map((page, idx) => {
                        return <Link href={`#${page}`} key={page} to={page}>
                            <Button
                                onClick={() => scrollToSection(pageNames[idx])}
                                sx={{ color: 'black', padding: 0, borderRadius: 'unset' }}
                                className="footer-link-btn"

                            >
                                <Typography sx={{ fontFamily: 'main-font', fontSize: { xs: "1rem", md: "1.375rem" }, paddingBlock: '30px' }}>
                                    {page}
                                </Typography>
                            </Button>
                        </Link>
                    })}
                    <div className="link-icons-container">
                        <a
                            href="https://wa.me/message/2DPGRYWDQARSF1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton aria-label="Whatsapp" >
                                <FontAwesomeIcon icon={faWhatsapp} style={{ color: "black",fontSize:"2.3rem" }} />
                            </IconButton>
                        </a>
                        <a
                            href="https://www.instagram.com/tair_avraham"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} style={{ color: "black",fontSize:"2.3rem" }} />
                            </IconButton>
                        </a>
                        <a href="https://open.spotify.com/show/0eFowPUM3Wd4ETnCE5cMMK?si=a99f15cc0e674111"
                            target="_blank"
                            rel="noopener noreferrer">

                            <IconButton aria-label="Spotify" >
                                <FontAwesomeIcon icon={faSpotify}  style={{ color: "black",fontSize:"2.3rem" }}/>
                            </IconButton>
                        </a>
                    </div>
                </div>
                <ContantMeForm />
            </div>
            <div className="footer-buttom-line"></div>
        </footer>
    )
}