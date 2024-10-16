import { Button, duration, Typography } from '@mui/material';
// import { Button } from '@mui/base';
import tahirImg from '../assets/img/tahir-img.png';
import { delay, motion } from 'framer-motion';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { useState } from 'react';

export default function About() {

    const [isArticleOpen, setIsArticleOpen] = useState(false)

    const handleToggleArticle = () => {
        setIsArticleOpen(!isArticleOpen)
    }

    const articleText = {
        headline: 'לפני 7 שנים שקלתי 120 ק״ג.',
        subHeadline: 'נעים להכיר, תאיר אברהם',
        accordionline: `הסיפור שלי`,
        firstParagraph: `אחרי שהסבתי את תשומת לבכם, אתחיל לספר לכם על הבית החדש שלכם.  אני יכולה להרחיב רבות על שלושת סוגי האימונים שלנו, על המתחמים השונים והמגוונים, אבל אתחיל בדבר החשוב ביותר- `,
        secondParagraph: `החזון שלי לבנות house שהוא home. החזון שלי, להביא את עקרונות עולם הכושר, לחיי המתאמנים שלי - המשפחה שלי. בית זה בסיס, בית זה עוגן, בית זה משפחה. בניתי בית, עם יסודות חזקים, איתנים ולב פועם.  בניתי בית, שאני מאמינה, שיביא כל אחד ואחת מכם, למקומות שתרצו ותחלמו להגיע.`,
        powerSentence: `אני כל כך גאה ונרגשת להציג בפניכם, את תחנת הכוח הפרטית שלי PWRHOUSE`,
        finalParagraph: `אני יכולה לדבר עוד הרבה על התהליך, על המחשבה ועל ההתרגשות שבבניית הבית שלי, שבקרוב מאוד- שלכם. אבל בינתיים, אעצור ואזמין אתכם, לקחת חלק בקסם שלנו ולהצטרף למשפחה.`,

    };

    const wrapperVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren:.1,
                delayChildren:1,
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
                type: 'ease-in',
            }
        }
    }


    return (
        <section className="about-container">
            <motion.img
                initial={{
                    opacity: 0,
                    x: 200,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position,
                    transition: {
                        duration: 1 // Animation duration
                    }
                }}
                // animate={{transform:"translateX:(100px)"}}
                viewport={{ once: false }}
                className="about-img" src={tahirImg} alt="trainer-image" />

            <article className="about-article-container">
                <motion.div
                    variants={wrapperVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    {/* Headline */}
                    <Typography variant='h3' sx={{ fontWeight: '700', lineHeight: '1.5' }}>
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
                    <Typography variant='h4' sx={{ fontSize: '4rem', fontFamily: 'main-font', lineHeight: '1.125' }}>
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
                    {/* <motion.div variants={wrapperVariant}> */}

                    <motion.button
                        className="read-more-btn"
                        variants={buttonVariant}
                        onClick={handleToggleArticle}

                        title='הסיפור שלי'>
                        <Typography component={motion.p} sx={{ fontSize: '1.875rem', lineHeight: '2.4' }}>{articleText.accordionline}</Typography>
                        <CallReceivedIcon component={motion.svg} sx={{ fontSize: '1.875rem' }}></CallReceivedIcon>
                    </motion.button>
                    {/* </motion.div> */}

                    <div className="about-content-container" style={{ height: !isArticleOpen ? '0px' : '400px', overflow: 'hidden' }}>
                        <Typography>{articleText.firstParagraph}</Typography>
                        <Typography sx={{ fontWeight: '700' }}>החזון שלי</Typography>
                        <Typography>{articleText.secondParagraph}</Typography>
                        <Typography>{articleText.powerSentence}</Typography>
                        <Typography>{articleText.finalParagraph}</Typography>
                    </div>

                </motion.div>

            </article>
        </section>
    );
}
