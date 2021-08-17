import React from "react";

// FUNKTIONALE KOMPONENTEN


export function KlassischeSchreibweise(p: any) {
    console.log('p :>> ', p);
    return <>platzhalter in KlassischeSchreibweise</>
}

export let PfeilSchreibweise = (pr: any) => {
    console.log('pr :>> ', pr);
    return <>platzhalter in PfeilSchreibweise</>
}

// KLASSENKOMPONENTEN

export class KlassenKomponente extends React.Component<any, any> {
    
    render() {
        console.log('this.props :>> ', this.props);
        return <>platzhalter in KlassenKomponente</>
    }
}