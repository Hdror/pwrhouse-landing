import CallReceivedIcon from '@mui/icons-material/CallReceived'
import { Typography } from '@mui/material'


export default function Welcome() {

    const welcomeTexts = ['עם שלושה סוגי אימון מרכזיים, צוות מהחלומות וחזון אחד שלי -', 'לבנות בית איכותי ואמיתי לאימונים.', 'אני מאמינה שכושר הוא מרכיב עיקרי והכרחי שכל אחד מאיתנו צריך','בחייו, מהסיבה הפשוטה -', 'הוא הופך אותנו לטובים יותר בכל תחומי החיים.']
    const welomeHeadline = ['ברוכים הבאים', 'הביתה']
    return (
        <section className="welcome-container">
            <div className="headline-container">
                <h3>{welomeHeadline[0]} <span>{welomeHeadline[1]}</span></h3>
                <CallReceivedIcon sx={{ fontSize: "3rem", marginTop: "9px" }}></CallReceivedIcon>
            </div>
            <div className="welcome-content">
                {welcomeTexts.map((text, idx) => {
                    return (
                        <Typography sx={{ fontSize: "1.625rem" }} key={idx}>{text}</Typography>
                    )
                })}
            </div>
        </section>
    )
}