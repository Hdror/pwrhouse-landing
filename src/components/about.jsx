import { Typography } from '@mui/material';
// import { Button } from '@mui/base';
import tahirImg from '../assets/img/tahir-img.png';
import { AnimatePresence, delay, motion } from 'framer-motion';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { useState } from 'react';
import circle from '../assets/svg/circle2.svg'

export default function About({ isLargeScreen,isMidLargeScreen, isMidScreen, isSmallScreen }) {

    const [isArticleOpen, setIsArticleOpen] = useState(false)

    const handleToggleArticle = () => {
        setIsArticleOpen(!isArticleOpen)
    }

    const articleText = {
        headline: 'לפני 7 שנים שקלתי 120 ק״ג.',
        subHeadline: 'נעים להכיר, תאיר אברהם',
        accordionline: `הסיפור שלי`,
        firstParagraph: `אחרי שהסבתי את תשומת לבכם, אתחיל לספר לכם על הבית החדש שלכם. אני יכולה להרחיב רבות על שלושת סוגי האימונים שלנו, על המתחמים השונים והמגוונים, אבל אתחיל בדבר החשוב ביותר- `,
        secondParagraph: `החזון שלי לבנות house שהוא home. החזון שלי, להביא את עקרונות עולם הכושר, לחיי המתאמנים שלי - המשפחה שלי. בית זה בסיס, בית זה עוגן, בית זה משפחה. בניתי בית, עם יסודות חזקים, איתנים ולב פועם. בניתי בית, שאני מאמינה, שיביא כל אחד ואחת מכם, למקומות שתרצו ותחלמו להגיע.`,
        powerSentence: `אני כל כך גאה ונרגשת להציג בפניכם, את תחנת הכוח הפרטית שלי PWRHOUSE`,
        finalParagraph: `אני יכולה לדבר עוד הרבה על התהליך, על המחשבה ועל ההתרגשות שבבניית הבית שלי, שבקרוב מאוד- שלכם. אבל בינתיים, אעצור ואזמין אתכם, לקחת חלק בקסם שלנו ולהצטרף למשפחה.`,

    };

    const wrapperVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .08,
                delayChildren: .5,
            }
        }
    }


    const letterVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const buttonVariant = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            x: [100, -50, 0],
            transition: {
                duration: .5,
                ease: 'easeInOut',
            }
        }
    }


    return (
        <section className="about-container">
            <div className="about-img-container">
                {isLargeScreen &&
                    <AnimatePresence>
                        {!isArticleOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        duration: 1.3,
                                        ease: 'linear'
                                    }
                                }}
                                exit={{
                                    opacity: 0, transition: {
                                        duration: .7,
                                        ease: 'linear'
                                    }
                                }}
                                // transition={{ duration: 1, ease: 'easeInOut' }}
                                className="circle"
                            >
                                <img src={circle} alt="circle" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                }

                <motion.img
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position,
                        transition: {
                            duration: 1 // Animation duration
                        },

                    }}
                    // animate={{transform:"translateX:(100px)"}}
                    viewport={{ once: false }}
                    className="about-img" src={tahirImg} alt="trainer-image"
                />
            </div>


            <article className="about-article-container">
                <motion.div
                    variants={wrapperVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="headline-container"
                >

                    {/* Headline */}
                    <Typography variant='h3' sx={{ fontWeight: '700', lineHeight: '1.5', fontSize: { xs: "1.5rem", md: "2.5rem", xl: "4rem" }, paddingLeft: { xs: "50px" } }}>
                        {articleText.headline.split("").map((letter, idx) => (
                            <motion.span
                                key={idx}
                                variants={letterVariant}
                                transition={{
                                    // duration: 0.5,
                                    ease: 'easeInOut',
                                }}
                            >
                                {letter}{""}
                            </motion.span>
                        ))}
                    </Typography>

                    {/* SubHeadline */}
                    <Typography variant='h4' sx={{ fontSize: { xs: "1.5rem", md: "2.5rem", xl: "4rem" }, fontFamily: 'main-font', lineHeight: '1.125', marginBlockEnd: { sm: '30px' } }}>
                        {articleText.subHeadline.split("").map((letter, idx) => (
                            <motion.span
                                key={idx}
                                variants={letterVariant}
                                transition={{
                                    // duration: 0.5,
                                    ease: 'easeInOut',
                                }}
                            >
                                {letter}{""}
                            </motion.span>
                        ))}
                    </Typography>
                    {isMidLargeScreen &&
                        <AnimatePresence>
                            {isArticleOpen &&
                                <motion.div
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: "auto" },
                                        collapsed: { opacity: 0, height: 0 }
                                    }}
                                    transition={{ duration: 0.8, ease: [0.0, 0.62, 0.23, 1] }}
                                    className="about-content-container" style={{ overflow: 'hidden' }}>
                                    <Typography component={motion.p}>{articleText.firstParagraph}</Typography>
                                    <Typography component={motion.p} sx={{ fontWeight: '700' }}>החזון שלי</Typography>
                                    <Typography component={motion.p}>{articleText.secondParagraph}</Typography>
                                    <Typography component={motion.p}>{articleText.powerSentence}</Typography>
                                    <Typography component={motion.p}>{articleText.finalParagraph}</Typography>
                                </motion.div>
                            }

                        </AnimatePresence>

                    }

                    <motion.button
                        className="read-more-btn"
                        variants={buttonVariant}
                        onClick={handleToggleArticle}
                        title='הסיפור שלי'>
                        <Typography component={motion.p} sx={{ fontSize: { xs: "1.2rem", md: "1.875rem" }, lineHeight: '2.4' }}>{articleText.accordionline}</Typography>
                        <CallReceivedIcon component={motion.svg} sx={{ fontSize: { xs: "1.5rem", md: "1.875rem" }, marginTop: '4px' }}></CallReceivedIcon>
                    </motion.button>


                </motion.div>

            </article>
            {isSmallScreen &&
                <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.8, ease: [0.0, 0.62, 0.23, 1] }}
                    className="about-content-container" style={{ overflow: 'hidden' }}>
                    <Typography component={motion.p}>{articleText.firstParagraph}</Typography>
                    <Typography component={motion.p} sx={{ fontWeight: '700' }}>החזון שלי</Typography>
                    <Typography component={motion.p}>{articleText.secondParagraph}</Typography>
                    <Typography component={motion.p}>{articleText.powerSentence}</Typography>
                    <Typography component={motion.p}>{articleText.finalParagraph}</Typography>
                </motion.div>
            }
        </section>
    );
}
