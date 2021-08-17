// children
// createElement
// {newElement }     let newElement = React.createElement(Todos, {class: 'bingo'})
// props

/* 
REACT ELEMENT
Object {
    $$typeof: Symbol(react.element)
    key: null
    props: {id: "reactPId", children: "geänderter Text"}
    ref: null
    type: "p"
    _owner: null
}
[[Prototype]]: Object
 */

/* 
JSX ELEMENT
Object {
    $$typeof: Symbol(react.element)
    key: null
    props: {children: "text in div"}
    ref: null
    type: "div"
    _owner: FiberNode {tag: 0, key: null, stateNode: null, elementType: ƒ, type: ƒ, …}
    _store: {validated: false}
    _self: undefined
    _source: {fileName: "D:\\D_Dokumente\\k_react\\2021-08-17-React-VC\\2021-17…R\\react17-redux-ts-demos\\src\\06-react-element.tsx", lineNumber: 21, columnNumber: 40}
}
[[Prototype]]: Object
 */

// Wenn Datentyp von Props nicht bekannt, dann 'any'
// export default ReactElements: React.FC<{ children: Element; propInProps: number; }, any> = function() {
    // todo #1
export default function ReactElements (props: any) {
    // JSX kann man nur bei Angaben von Datentypen verwenden
    // console.log('JSX :>> ', JSX); // Cannot use namespace 'JSX' as a value.ts(2708)
    const einJSXElement: JSX.Element = <div>text in div</div>;
    //console.log('einJSXElement :>> ', einJSXElement);
    console.log('props :>> ', props);

    return <>{        
        einJSXElement
    }</>
}
