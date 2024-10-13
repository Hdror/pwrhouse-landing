import { Typography } from "@mui/material"

export default function Training() {

    const trainingMainTexts = [
        `חווית אימון בין-לאומית בלב העמק. `,
        `לסביבת האימונים יש השפעה גדולה על איכות האימון,`,
        `לכן היה חשוב לנו ליצור ב - PWRHOUSE חוויה יחודית אחת שלמה, אסתטית ומרשימה.`,
        `השקענו המון מחשבה בכל פרט ופרט על מנת ליצור לכם חווית אימון בסטנדרט לא רגיל.`,
        `לעצב חלל שתרצו לשהות בו גם לאחר האימון, עם מכשור מהטובים בעולם`,
        `וצוות מקצועי ומדויק ביותר שיקח אתכם אל מקומות שלא הכרתם בעצמכם.`,
        `הצלחנו ליצור מקום שתרגישו בו חלק, תרגישו בבית, והכי נוח בעולם.`
    ]

    return (
        <section className="training-container">
            <div className="training-content">
                {trainingMainTexts.map((text, idx) => {
                    return <Typography key={idx} sx={{marginBlockEnd:'5px'}}>{text}</Typography>
                })}
            </div>
        </section>
    )
}