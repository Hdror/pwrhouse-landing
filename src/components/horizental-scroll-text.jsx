import { motion, transform } from 'framer-motion';
import { Typography } from '@mui/material'
import CallReceivedIcon from '@mui/icons-material/CallReceived'

export default function HorizentalScrollText({ isLargeScreen }) {

    let renderTextAmount = isLargeScreen ? 13 : 7

    const scrollingTexts = ['האימונים', 'שלנו']

    const scrollingTextVariant = {
        initial: { opacity: 0 },
        animate: {
            x: ['0%', '-40%'], // Moves the content from start to end
            transition: {
                x: {
                    repeat: Infinity, // Infinite loop
                    repeatType: 'loop', // Continuous loop
                    duration: 50, // Adjust to control speed
                    ease: 'linear', // Keeps the speed consistent
                },
            },
        },
    }

    return (
        <div className="horizental-scroll-container">
            <motion.div
                variants={scrollingTextVariant}
                whileInView="animate"
                className="scroll-text-box"
                title='הסיפור שלי'>
                {Array.from({ length: renderTextAmount }).map((_, idx) => {
                    return (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography component={motion.p} sx={{ fontSize: '2rem', lineHeight: '2.4', fontWeight: 700, marginInlineEnd: '8px' }}>{scrollingTexts[0]}</Typography>
                            <Typography component={motion.p} sx={{ fontSize: '2rem', lineHeight: '2.4', marginInlineEnd: '3px' }}>{scrollingTexts[1]}</Typography>
                            <CallReceivedIcon component={motion.svg} sx={{ fontSize: '2rem', marginTop: '4px' }}></CallReceivedIcon>
                        </div>
                    )
                })}
                {Array.from({ length: renderTextAmount }).map((_, idx) => {
                    return (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography component={motion.p} sx={{ fontSize: '2rem', lineHeight: '2.4', fontWeight: 700, marginInlineEnd: '8px' }}>{scrollingTexts[0]}</Typography>
                            <Typography component={motion.p} sx={{ fontSize: '2rem', lineHeight: '2.4', marginInlineEnd: '3px' }}>{scrollingTexts[1]}</Typography>
                            <CallReceivedIcon component={motion.svg} sx={{ fontSize: '2rem', marginTop: '4px' }}></CallReceivedIcon>
                        </div>
                    )
                })}
            </motion.div>
        </div >
    )
}