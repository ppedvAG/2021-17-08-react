import Zufallszahl, { Iterieren } from "./05-attributes";
import Greeter from "./Greeter";
import Todos from "./todo-app/Todos";

function Root() {
    return (
        <>
            <h1>Root-Komponente der React App</h1>

            <h2>Ausgabe von Variablen</h2>
            <Greeter />
            <hr />

            <h2>Attribute bei JSX-Elementen</h2>
            <Zufallszahl />
            <hr />
            
            <h2>JSX Iteration</h2>
            <Iterieren />
            <hr />

            <h2>Übung: Todos aus einem Array</h2>
            <Todos />
        </>
    )
}
export default Root;