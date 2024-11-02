import { Typography, useMediaQuery } from '@mui/material';
import HorizentalScrollText from './horizental-scroll-text';
import gloves from '../assets/img/gloves.jpg';
import pilates from '../assets/img/pilates.jpeg';
import power from '../assets/img/power.jpg';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Training() {
    const isLargeScreen = useMediaQuery('(min-width:900px)');

    // Manage the open state for each train-img-container
    const [openStates, setOpenStates] = useState([false, false, false]);

    const handleToggle = (index) => {
        setOpenStates((prevStates) =>
            prevStates.map((isOpen, i) => (i !== index ? false : !isOpen))
        );
    };

    const trainingMainTexts = [
        `חווית אימון בין-לאומית בלב העמק. `,
        `לסביבת האימונים יש השפעה גדולה על איכות האימון,`,
        `לכן היה חשוב לנו ליצור ב - PWRHOUSE חוויה יחודית אחת שלמה, אסתטית ומרשימה.`,
        `השקענו המון מחשבה בכל פרט ופרט על מנת ליצור לכם חווית אימון בסטנדרט לא רגיל.`,
        `לעצב חלל שתרצו לשהות בו גם לאחר האימון, עם מכשור מהטובים בעולם`,
        `וצוות מקצועי ומדויק ביותר שיקח אתכם אל מקומות שלא הכרתם בעצמכם.`,
        `הצלחנו ליצור מקום שתרגישו בו חלק, תרגישו בבית, והכי נוח בעולם.`,
    ];

    const slideVariants = {
        hidden: { x: "100%", y: "30%", opacity: 0 },
        visible: { x: 0, y: 0, opacity: 1 },
    };

    return (
        <section className="training-container">
            <HorizentalScrollText isLargeScreen={isLargeScreen} />
            <div className="training-content">
                {trainingMainTexts.map((text, idx) => (
                    <Typography key={idx} sx={{ marginBlockEnd: '5px' }}>
                        {text}
                    </Typography>
                ))}
            </div>
            <motion.div className="training-desc-container">
                {[
                    { img: pilates, label: 'PILATES REFORMER' },
                    { img: power, label: 'PWR' },
                    { img: gloves, label: 'BOXING' },
                ].map((item, index) => (
                    <  >
                        <motion.div
                            key={index}
                            layout
                            data-is-open={openStates[index]}
                            data-is-shown={openStates[index] || !openStates.includes(true)}
                            className="train-img-container"
                        >
                            <img src={item.img} alt={item.label} />
                            <button
                                onClick={() => handleToggle(index)}
                                className="expend-train"
                            >
                                {item.label}
                            </button>
                        </motion.div>
                        <motion.div
                            // layout
                            variants={slideVariants}
                            key={index + 11}
                            initial="hidden"
                            animate={openStates[index] ? "visible" : "hidden"}
                            transition={{
                                duration: .4, // Slightly longer duration for smoothness
                                ease: "easeInOut" // Smooth ease-in-out effect
                            }}
                            data-is-open={openStates[index]}
                            className="train-content-container">
                            <motion.div className="train-content">
                                <h1>מוכנים לנוקאאוט?</h1>
                                <Typography>
                                    אימון כוח פונקציונאלי
                                    המשלב בין משקולות חופשיות
                                    ואגרוף באימון אחד. 45 דקות של אימון ממוקד בעצימות גבוהה,
                                    לא לבעלי לב חלש!
                                </Typography>
                            </motion.div>
                            <div className="blur-space"></div>
                        </motion.div>
                    </>
                ))}
            </motion.div>
        </section>
    );
}
