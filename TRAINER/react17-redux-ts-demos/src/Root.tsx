import Zufallszahl, { Iterieren } from "./05-attributes";
import ReactElements from "./06-react-element";
import { KlassenKomponente, KlassischeSchreibweise, PfeilSchreibweise } from "./07-components";
import { KomponenteMitState } from "./08-state";
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
            <hr />

            <h2>React Elements</h2>   
            <pre>
                Start- und End-Tag dürfen nur genutzt werden, wenn die Komponente ein Prop-Objekt als Argument erwartet
                z.B. ReactElements(props)
                
                Object Props kann auf zwei Wegen befüllt werden:
                - über Attribute bei React-Elementen
                - über Inhalte zwischen dem Start- und End-Tag von React-Elementen
                </pre>      
            <ReactElements propInProps="6">
                <div>div für props</div>
            </ReactElements>
            <hr />

            <h2>Komponenten</h2>
            <pre>
                Großschreibweise, sonst wird das Wort als Attribut-Prop interpretiert.
            </pre>
            <KlassischeSchreibweise propA={4}/>
            <PfeilSchreibweise propB="g"/>
            <KlassenKomponente propC={new Date()}/>
            <hr />

            <h2>State</h2>
            <KomponenteMitState />

        </>
    )
}
export default Root;