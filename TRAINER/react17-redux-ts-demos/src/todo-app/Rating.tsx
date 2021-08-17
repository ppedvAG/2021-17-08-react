/* 
Aufgabe:

Legen Sie eine Komponente Rating an.
Von der aufrufenden Stelle erwartet sie eine Zahl.

Diese Zahl wird genutzt um ein String '*' zu wiederholen:

'*'.repeat(eine_zahl);

*/

export default function Rating(props: { starsNumber: number; }){
    return <span>{'*'.repeat(props.starsNumber)}</span>    
}