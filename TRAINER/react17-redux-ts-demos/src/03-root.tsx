import Todos from "./todo-app/Todos";
import { Link, Route, Switch } from "react-router-dom";
import Demos from "./09-demos";

/* 
Legen Sie eine neue Datei an und einer ähnlichen Funktion wie in App.tsx an.
Ersetzen Sie die App-Komponente in index.tsx durch die neu erstellte Funktion Root().
Verschieben Sie die Dateien der App-Komponente in einen Ordner 'AppDefault'. 
*/

function Root() {
    return (
        <>
            <h1>Root-Komponente der React App</h1>
            <nav>
                <button><Link to="/todos">Todos</Link></button>
                <button><Link to="/demos">Demos</Link></button>
            </nav>

            <Switch>
                <Route path="/todos" component={Todos} />
                <Route path="/demos" component={Demos} />
            </Switch>
        </>
    )
}
export default Root;