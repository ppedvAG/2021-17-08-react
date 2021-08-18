import { useEffect, useState } from "react";

/* 
KomponenteMitState2 als Klasse wird zurückgesetzt zu einer Funktionalen Komponente
 */

/* 
export function DateComponentFunction() {
    let intervalID: any;

    let [uhrzeit, ändereUhrzeit] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        intervalID = setInterval(() => {
            ändereUhrzeit(new Date().toLocaleTimeString());
            console.log('uhrzeit :>> ', uhrzeit);
        }, 1000)
        return (() => {
            clearInterval(intervalID);
            console.log('interval cleared');
        })
    })
    return (<span>aktuelle Uhrzeit: {uhrzeit} </span>)
} */

interface TimeStateType {
    uhrzeit: string
}
export function KomponenteMitHooks() {
    // Variante1
    // let [timeState, changeTimeState] = useState({

    // Variante2, mit der Möglichkeit, Datentypen festzulegen
    let timeState: TimeStateType;
    let changeTimeState: Function;

    [timeState, changeTimeState] = useState({
        uhrzeit: new Date().toLocaleTimeString()        
    })

    // Variante1
    useEffect(() => {
        let intervalID: any; // streng typisiert wäre der Typ hier: TimerID
        intervalID = setInterval(() => {
            changeTimeState({ uhrzeit: new Date().toLocaleTimeString() })
        }, 1000)        
        return () => {
            clearInterval(intervalID)
        }
    })

    // Variante2
    // zwei Use Effects, der eine für DidMount, der andere für WillUnmount
    // passt nicht, wenn der eine Effect eine lokale Variable hat, auf die der zweite Effect zugreift   

    return <p>
        uhrzeit: {timeState.uhrzeit}
    </p>

}