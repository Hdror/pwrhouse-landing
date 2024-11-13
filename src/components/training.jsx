import { Typography, useMediaQuery } from '@mui/material';
import HorizentalScrollText from './horizental-scroll-text';
import gloves from '../assets/img/gloves.jpg';
import pilates from '../assets/img/pilates.jpeg';
import power from '../assets/img/power.jpg';
import { useState } from 'react';
import { delay, motion } from 'framer-motion';
import { FormatHeadline } from '../components/format-headline';

export default function Training({ isSmallScreen, isMidScreen, isLargeScreen }) {
    const isMidLargeScreen = useMediaQuery('(min-width:900px)');

    // Manage the open state for each train-img-container
    const [openStates, setOpenStates] = useState([false, false, false]);

    const handleToggle = (event, index) => {
        event.stopPropagation()
        setOpenStates((prevStates) =>
            prevStates.map((isOpen, i) => (i !== index ? false : !isOpen))
        );
    };


    const trainsTexts = {
        pilatesTexts: ['מתחם פילאטיס מכשירים עם מיטות הפילאטיס המתקדמות והאיכותיות ביותר בעולם מבית MERRITHEW.', 'עם צוות מיומן ומדויק, הרכבנו מעטפת המתאימה לכולם. שיעורי הפילאטיס שלנו מתאימים לכל הרמות! מגיל שלישי, הריוניות ועד לנערות.', 'במתחם הפילאטיס נשלב בין פילאטיס על פי השיטה הקלאסית, אימוני PWR PILATES ועוד.'],
        powerTexts: ['במתחם ה-PWR תמצאו מגוון אימוני כוח סופר מקצועיים ואפקטיביים שהם כל מה שאתם צריכים על מנת לפתח גוף חזק.'],
        boxingTexts: ['אימון כוח פונקציונאלי המשלב בין משקולות חופשיות ואגרוף באימון אחד. 45 דקות של אימון ממוקד בעצימות גבוהה, לא לבעלי לב חלש!']

    }

    const trainitems = [
        { img: pilates, label: 'PILATES REFORMER', headline: 'PILATES REFORMER', texts: trainsTexts.pilatesTexts },
        { img: power, label: 'PWR', headline: 'PWR', subHeadline: 'אימוני כוח הם המומחיות שלנו.', texts: trainsTexts.powerTexts },
        { img: gloves, label: 'PWR&BOXING', headline: 'PWR&BOX', subHeadline: 'מוכנים לנוקאאוט?', texts: trainsTexts.boxingTexts },
    ]

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
        hidden: { x: "100%", y: "40%", opacity: 0, },
        visible: { x: 0, y: isMidScreen ? -20 : 0, opacity: 1 },
    };

    return (
        <section className="training-container">
            <HorizentalScrollText isMidLargeScreen={isMidLargeScreen} />
            <div className="training-content">
                {trainingMainTexts.map((text, idx) => (
                    <Typography key={idx} sx={{ marginBlockEnd: '5px' }}>
                        {text}
                    </Typography>
                ))}
            </div>
            <motion.div className="training-desc-container">

                {trainitems.map((item, index) => {
                    return <  >
                        <motion.div
                            key={index}
                            layout
                            data-is-open={openStates[index]}
                            data-is-shown={openStates[index] || !openStates.includes(true)}
                            className="train-img-container"
                            onClick={(e) => handleToggle(e, index)}
                        >
                            <img src={item.img} alt={item.label} />
                            <button
                                onClick={(e) => handleToggle(e, index)}
                                className="expend-train"
                            >
                                <FormatHeadline fontSize="20px" headline={item.label} />
                            </button>


                        </motion.div>
                        {/* Mobile opining mode */}
                        {isMidScreen &&
                            <motion.div
                                variants={slideVariants}
                                key={item.headline}
                                initial="hidden"
                                animate={openStates[index] ? "visible" : "hidden"}
                                transition={{
                                    duration: .4, // Slightly longer duration for smoothness
                                    ease: "easeInOut" // Smooth ease-in-out effect
                                }}
                                data-is-open={openStates[index]}
                                className="train-content-container">
                                <motion.div className="train-content">
                                    <FormatHeadline headline={item.headline} />

                                    <div className="train-text-container">
                                        {item.subHeadline &&
                                            <h3 className="train-subheadline">{item.subHeadline}</h3>
                                        }
                                        {item.texts.map((text, index) => (
                                            <Typography sx={{ fontSize: "1.3rem" }} key={index}>{text}</Typography>
                                        ))}
                                    </div>
                                </motion.div>
                                <div className="blur-space"></div>
                            </motion.div>
                        }
                        {/* Desktop opening mode */}
                        {isMidLargeScreen &&
                            <motion.div
                                variants={slideVariants}
                                key={item.headline}
                                initial="hidden"
                                animate={openStates[index] ? "visible" : "hidden"}
                                transition={{
                                    duration: .4, // Slightly longer duration for smoothness
                                    ease: "easeInOut" // Smooth ease-in-out effect
                                }}
                                data-is-open={openStates[index]}
                                className="train-content-container">
                                <motion.div className="train-content">
                                    <FormatHeadline headline={item.headline} />

                                    <div className="train-text-container">
                                        {item.subHeadline &&
                                            <h3 className="train-subheadline">{item.subHeadline}</h3>
                                        }
                                        {item.texts.map((text, index) => (
                                            <Typography sx={{ fontSize: "1.3rem" }} key={index}>{text}</Typography>
                                        ))}
                                    </div>
                                </motion.div>
                                <div className="blur-space"></div>
                            </motion.div>
                        }

                    </>
                })}
            </motion.div>
        </section>
    );
}
