/* 
Aufgabe:

Legen Sie eine Komponente Rating an.
Von der aufrufenden Stelle erwartet sie eine Zahl.

Diese Zahl wird genutzt um ein String '*' zu wiederholen:

'*'.repeat(eine_zahl);

*/

export default function Rating(props: { starsNumber: number; }){
    return <span id="ddd">{'*'.repeat(props.starsNumber)}</span>
    /*  */
}

/* 

beim Test:

wenn 
<span>{'*'.repeat(3)}</span>

im Test aber 
.create(<Rating starsNumber={2} />)

dann:

Snapshot name: `renders correctly 1`

    - Snapshot  - 1
    + Received  + 1

      <span>
    -   **
    +   ***
      </span> 
      
      
      
===========================================
wenn 
<span id="ddd">{'*'.repeat(props.starsNumber)}</span>

dann:
    Snapshot name: `renders correctly 1`

    - Snapshot  - 1
    + Received  + 3

    - <span>
    + <span
    +   id="ddd"
    + >
        **
      </span>      */