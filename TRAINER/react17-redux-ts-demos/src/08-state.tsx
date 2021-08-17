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