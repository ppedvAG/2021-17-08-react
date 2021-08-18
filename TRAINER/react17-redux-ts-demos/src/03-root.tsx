import Zufallszahl, { Iterieren } from "./05-attributes";
import ReactElements, { FunctionComponent1, FunctionComponent2, FunctionComponent3, FunctionComponent4 } from "./06-react-element";
import { KlassenKomponente, KlassischeSchreibweise, PfeilSchreibweise } from "./07-components";
import { KomponenteMitState } from "./08-state";
import Greeter from "./04-greeter";
import Todos from "./todo-app/Todos";

/* 
Legen Sie eine neue Datei an und einer ähnlichen Funktion wie in App.tsx an.
Ersetzen Sie die App-Komponente in index.tsx durch die neu erstellte Funktion Root().
Verschieben Sie die Dateien der App-Komponente in einen Ordner 'AppDefault'. 
*/

function Root() {
    let component1 = FunctionComponent1;
    console.log('FunctionComponent1 :>> ', FunctionComponent1);
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

            <h2>06 React Elements</h2>
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

           
            {/*  <FunctionComponent1 testAttr="testValue" /> */}
            {/* Fehler: Type '{ testAttr: string; }' is not assignable to type 'IntrinsicAttributes'.
            Property 'testAttr' does not exist on type 'IntrinsicAttributes'.ts(2322) */}

            {/* <FunctionComponent2 /> */}
            {/* 
            Fehler:
            Property 'attr' is missing in type '{}' but required in type '{ attr: string; }'.ts(2741)
            */}


            <FunctionComponent2 attr="test" /> {/* ok */}
            {/* <FunctionComponent2 test="test"/> */} {/* Fehler */}
            {/*             
            Type '{ test: string; }' is not assignable to type 'IntrinsicAttributes & { attr: string; }'.
            */}

            <FunctionComponent3 /> {/* ok */}
            <FunctionComponent3 attr1="attr1Wert" /> {/* ok */}
            <FunctionComponent3 attr2="attr2Wert" /> {/* ok */}
            <FunctionComponent3 attr1="attr1Wert" attr2="attr2Wert" /> {/* ok */}
            <FunctionComponent3 attr1="attr1Wert" attr2="attr2Wert"></FunctionComponent3> {/* ok */}
            {/* <FunctionComponent3 attr1="attr1Wert" attr2="attr2Wert">
            </FunctionComponent3> */} {/* Fehler */}
            {/* 
            Type '{ children: never[]; attr1: string; attr2: string; }' is not assignable to type 'IntrinsicAttributes & PropsType3'.
            Property 'children' does not exist on type 'IntrinsicAttributes & PropsType3'.ts(2322) 
            */}
            {/* 
            Analyse:
            Im Vergleich zum vorhergehenden Test ist hier ein Zeichen für die neue Zeile als Kind (child -> children) von FunctionComponent3 erschienen. 
            */}

            {/* <FunctionComponent3 attr1="attr1Wert" attr2="attr2Wert">
                <div>test</div>
            </FunctionComponent3> */} {/* Fehler */}
            {/* 
            Type '{ children: Element; attr1: string; attr2: string; }' is not assignable to type 'IntrinsicAttributes & PropsType3'.
            Property 'children' does not exist on type 'IntrinsicAttributes & PropsType3'.ts(2322)
            */}
            {/* 
            Analyse:
            children sind vom Typ 'Element'. 
            */}
            {/* <FunctionComponent3 attr1="attr1Wert" attr2="attr2Wert">
                <FunctionComponent2 attr="test" />
            </FunctionComponent3> */} {/* der gleiche Fehler auch mit einer Komponente als Kind. Sie ist für JSX vom Typ 'Element'. */}

            {/* <FunctionComponent4 attr1="attr1Wert">
            </FunctionComponent4> */} {/* Fehler */}
            {/* 
            Type '{ children: never[]; attr1: string; }' is not assignable to type 'PropsType4'.
            Types of property 'children' are incompatible.
            Type 'never[]' is missing the following properties from type 'ReactElement<any, any>': type, props, key. ts(2322)
            */}
            {/* 
            Analyse:
            Die Informationen zu 'IntrinsicAttributes' sind mit dem Erscheinen der Prop 'children' im Interface PropsType4 verschwunden.
            Warum vergleicht TS 'never[]' mit 'ReactElement...' und nicht mit 'JSX.Element'?
            Weil JSX.Element extends ReactElement<any, any>.
            */}

            <FunctionComponent4 attr1="attr1Wert">
                <input type="text" />
            </FunctionComponent4>
            <hr />

            <h2>Komponenten</h2>
            <pre>
                Großschreibweise, sonst wird das Wort als Attribut-Prop interpretiert.
            </pre>
            <KlassischeSchreibweise propA={4} />
            <PfeilSchreibweise propB="g" />
            <KlassenKomponente propC={new Date()} />
            <hr />

            <h2>State</h2>
            <KomponenteMitState />

        </>
    )
}
export default Root;