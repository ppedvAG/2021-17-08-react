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