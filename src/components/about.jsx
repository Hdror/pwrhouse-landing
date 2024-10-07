import { Typography } from '@mui/material';
import tahirImg from '../assets/img/tahir-img.png';
import welcomeCircle from '../assets/svg/welcome-circle.svg';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const articleText = {
        headline: 'לפני 7 שנים שקלתי 120 ק״ג.',
        subHeadline: 'נעים להכיר, תאיר אברהם'
    };

    const aboutRef = useRef(null);

    return (
        <section className="about-container" ref={aboutRef}>
            <img className="about-img" src={tahirImg} alt="trainer-image" />

            {/* <img src={welcomeCircle} alt="" /> */}
            <article className="about-content">
                <Typography variant='h3' sx={{ fontWeight: '700' }}>
                    {articleText.headline.split("").map((letter, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }} // Ensures animation happens once per view
                            transition={{
                                duration: 0.5,
                                delay: idx * 0.1,
                                ease: 'easeInOut',
                            }}
                        >
                            {letter}{""}
                        </motion.span>
                    ))}
                </Typography>
                <Typography variant='h4' sx={{ fontSize: '4rem', fontFamily: 'main-font' }}>
                    {articleText.subHeadline.split("").map((letter, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }} // Ensures animation happens once per view
                            transition={{
                                duration: 0.5,
                                delay: idx * 0.1,
                                ease: 'easeInOut',
                            }}
                        >
                            {letter}{""}
                        </motion.span>
                    ))}
                </Typography>
            </article>
        </section>
    );
}
