
// Attribute (class vs className)
// js-Ausdrücke bei Attributen
// Iterieren

export default function Zufallszahl() {
    let zahl = Math.ceil(Math.random() * 6);
    return (
        <div>
            <p>Würfel geworfen, die Zahl ist
                <span
                    // class="bordered"    /* Property 'class' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'. Did you mean 'className'?ts(2322) */
                    className={zahl === 6 ? 'bingo' : ''}
                    style={{
                        color: 'blue',
                        fontSize: getFontSize(zahl)
                    }}> {zahl}</span>
            </p>
        </div>
    )
}

function getFontSize(n: number) {
    return n * 15;
}

export function Iterieren() {
    let picUrl = 'https://picsum.photos/300/200/?random';
    let randomSuffixArr = [1, 2, 3];
    const images = <div>{
        randomSuffixArr.map((item) => (
            <img 
            src={picUrl + item}
            key={item}
            alt="Hobby1" />            
        ))}
    </div>
    return (
        <>{images}</>
    )
}