export const FormatHeadline = ({ headline, fontSize }) => {
    const splitHeadline = headline.split(/[\s&]+/)
    if (splitHeadline.length === 1) {
        return (
            <h1 style={{ fontSize: fontSize ? fontSize:''}} className="train-headline">{splitHeadline[0]}</h1>
        )
    } else {
        return (
            <h1 style={{ fontSize: fontSize ? fontSize:''}} className="train-headline">{splitHeadline[0]}<span className="unbold-headline">{headline.includes('&') ? '&' : ' '}{splitHeadline[1]}</span></h1>
        )
    }
}