import './assets/styles/main.css'
import logo from './assets/svg/logo.svg'
import arrowDown from './assets/svg/arrow-down.svg'
import { Element } from 'react-scroll';
import { Typography, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion';
import About from './components/about';
import Training from './components/training';
import Welcome from './components/welcome';
import Footer from './components/footer';

function Home({ pages, pageNames }) {

  const isLargeScreen = useMediaQuery('(min-width:1150px)');
  const isMidScreen = useMediaQuery('(max-width:900px)');
  const isMidLargeScreen = useMediaQuery('(min-width:700px)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');


  // Define the animation variants
  const variants = {
    float: {
      y: [0, -17, 0], // Move up and down
      opacity: [1, 0.8, 0.6, 0.5,],
      transition: {
        duration: 2, // Duration of the animation
        ease: 'easeInOut', // Easing function for a smooth effect
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: 'reverse', // Repeat the animation in a loop
      },
    },
  }

  return (
    <main className="main-container">
      <section className="hero-section full-viewport-height">
        <div className="hero-content">
          <img className="hero-img" src={logo} alt="logo" />
          <div className="hero-title-container">
            <Typography sx={{ fontWeight: "700", fontSize: { xs: "1.5rem", md: "2.75rem" } }}>
              בית
            </Typography>
            <Typography sx={{ fontSize: { xs: "1.5rem", md: "2.75rem" }, fontFamily: "main-font-thin" }}>
              לאימונים
            </Typography>
          </div>
        </div>
        <motion.img
          className="arrow-down-animation"
          src={arrowDown}
          alt="Arrow-Down"
          variants={variants}
          animate="float"
        />
      </section>
      <Element style={{}} name='about'>
        <About isMidLargeScreen={isMidLargeScreen} isSmallScreen={isSmallScreen} isMidScreen={isMidScreen} isLargeScreen={isLargeScreen} />
      </Element>
      <Element  style={{}} name='trains'>
        <Training isSmallScreen={isSmallScreen} isMidScreen={isMidScreen} isLargeScreen={isLargeScreen}/>
      </Element>
      <Element style={{}} name='welcome' >
        <Welcome />
      </Element>
      <Element>
        <Footer pageNames={pageNames} pages={pages} style={{ paddingTop: '100px' }} name='footer' />
      </Element>
    </main>
  )
}

export default Home
