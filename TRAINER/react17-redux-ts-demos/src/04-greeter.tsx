import React from "react";

function Greeter() {
    let datum = new Date();
    console.log('datum: ', datum)
    return (
        <header>
            <p>Hallo Max</p>
            <p>Heute ist: {datum.toLocaleDateString()}</p>
        </header>
    )
}
export default Greeter;

/* 
Aufgabe:
Fragen Sie erstmal nach dem Namen des Benutzers, bevor er begrüßt wird
*/
export class Greeter2 extends React.Component<{}, { name: string; datum: Date }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'name',
            datum: new Date()
        }
    }
    handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ name: e.currentTarget.value })
    }
    render() {
        return (
            <header>
                <p>Hallo {this.state.name}</p>
                <p>Heute ist: {this.state.datum.toLocaleDateString()}</p>
                <form>
                    <label htmlFor="userName">Ihr Name: </label>
                    <input type="number" id="userName" value={this.state.name} onInput={this.handleInput} />
                </form>
            </header>
        )
    }
}