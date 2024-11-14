import CallReceivedIcon from '@mui/icons-material/CallReceived'
import { Typography, useMediaQuery } from '@mui/material'

export default function Welcome() {
    const isLargeScreen = useMediaQuery('(min-width:700px)');
    const welcomeTexts = ['עם שלושה סוגי אימון מרכזיים, צוות מהחלומות וחזון אחד שלי -', 'לבנות בית איכותי ואמיתי לאימונים.', 'אני מאמינה שכושר הוא מרכיב עיקרי והכרחי שכל אחד מאיתנו צריך', 'בחייו, מהסיבה הפשוטה -', 'הוא הופך אותנו לטובים יותר בכל תחומי החיים.']
    const welomeHeadline = ['ברוכים הבאים', 'הביתה']
    const subContentText = {
        boldParagraphs: ['נבנה מתוך אמונה אמיתית מהלב -', 'אימונים נותנים לנו כוח להתמודד עם כל דבר שעומד בדרכינו.'],
        headParagraphs: ['אנחנו כאן לתת לכם חווית אימון שעדיין לא נראתה כאן בעמק.', 'עם מתחמי אימון שונים הכוללים פילאטיס מכשירים, מתחם אימוני כוח ואגרוף.'],
        mainParagraphs: ['אנחנו מאמינים שבבית מרגישים בנוח - לכן יחס אישי ותשומת לב', 'הם אחד העקרונות המובילים אותנו בכל מה שקשור לחווית האימון שלכם.', 'האימונים מתבצעים בקבוצות אינטימיות,', 'בהן כל אחד מהמתאמנים הוא עולם ומלואו עבורנו.', 'מצאתם את המקום שלכם להתאמן, להנות, להתקדם ופשוט להיות אתם.']
    }
    const detailsTexts = ['שלושה מתחמים', 'קבוצות קטנות', 'יחס אישי']

    return (
        <section className="welcome-container">
            <div className="headline-container">
                <h2>{welomeHeadline[0]} <span>{welomeHeadline[1]}</span></h2>
                <CallReceivedIcon sx={{ fontSize: isLargeScreen ? "3rem" : "1.5rem", marginTop: isLargeScreen ? "9px" : "5px" }}></CallReceivedIcon>
            </div>
            <div className="welcome-content">
                {welcomeTexts.map((text, idx) => {
                    return (
                        <Typography sx={{
                            fontSize: { xs: "1rem", md: "1.625rem" }
                        }} key={idx} > {text}</Typography>
                    )
                })}
            </div>
            <div className="sub-content-container">
                <div className="video-container"></div>
                <div className="sub-content">
                    <h3>PWR<span style={{ fontWeight: 400 }}>HOUSE</span></h3>
                    <div className="subheadline-content">
                        {subContentText.boldParagraphs.map((paragraph, index) => (
                            <Typography sx={{ fontWeight: 700, lineHeight: 1.6, fontSize: '1.25rem'  }} key={index}>{paragraph}</Typography>
                        ))}
                    </div>
                    <div className="head-paragraph">
                        {subContentText.headParagraphs.map((paragraph, index) => (
                            <Typography sx={{ lineHeight: 1.6, fontSize: '1.25rem'  }} key={index}>{paragraph}</Typography>
                        ))}
                    </div>
                    <div className="main-paragraph">
                        {subContentText.mainParagraphs.map((paragraph, index) => (
                            <Typography sx={{ lineHeight: 1.6, fontSize: '1.25rem'  }} key={index}>{paragraph}</Typography>
                        ))}
                    </div>
                    <div className="details-container">
                        {detailsTexts.map((detail, index) => (
                            <div key={index} className="detail-container">
                                <CallReceivedIcon sx={{ fontSize: '28px', marginTop: '3px' }}></CallReceivedIcon>
                                <Typography sx={{ fontSize: "1.375rem" }}>{detail}</Typography>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </section >
    )
}