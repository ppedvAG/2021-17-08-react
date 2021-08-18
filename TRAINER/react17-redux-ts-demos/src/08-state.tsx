import React from "react";

export class KomponenteMitState extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            uhrzeit: new Date().toLocaleTimeString()
        }
        this.tick();    
    }
    tick = () => {
        setInterval(() => {
            this.setState({uhrzeit: new Date().toLocaleTimeString()})
        }, 1000)
    }
    
    render() {
        return <p>
            uhrzeit: {this.state.uhrzeit}
        </p>
    }
}

/* 
Prozess, gestartet durch setInterval, wird nirgendwo beendet, deswegen schreibt React beim Aktualisieren der App im Browser folgende Warnung:

Warning: Can't perform a React state update on an unmounted component. 
This is a no-op, but it indicates a memory leak in your application. 
To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
at KomponenteMitState
*/


export class KomponenteMitState2 extends React.Component<{}, {uhrzeit: string, intervalID: any}> {
    // Props in der Klasse sind auch möglich, aus der React-Sicht aber nicht ganz richtig
    // intervalID: any;
    constructor(props: {}) {
        super(props);
        this.state = {
            uhrzeit: new Date().toLocaleTimeString(),
            intervalID: 0
        }            
    }
    componentDidMount() {
        this.tick();
    }
    tick = () => {
        this.setState({intervalID: setInterval(() => {
            this.setState({uhrzeit: new Date().toLocaleTimeString()})
        }, 1000)})        
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalID)
    }
    
    render() {
        return <p>
            uhrzeit: {this.state.uhrzeit}
        </p>
    }
}