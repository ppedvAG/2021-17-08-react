import { createStore } from "redux"

export default function ReduxDemo() {
    const myReducer = (state = 0, action: { type: string }) => {
        switch (action.type) {
            case 'add2':
                return state + 2
            case 'minus3':
                return state - 3
            case 'mal2':
                return state * 2
            default:
                return state
        }
    }
    const myStore = createStore(myReducer)

    const handleClick = (actionType: string) => {
        console.log('bin in HandleClick');
        myStore.dispatch({ type: actionType })
        console.log('myStore.getState()', myStore.getState())
        // myStore.dispatch({ type: 'add2' })
        // todo #2        
    }
    // myStore.dispatch({ type: 'mal2' })
    function render() {
        return (<>
        <h2>ReduxDemo works</h2>

        <div>Initial State: {myStore.getState()}</div>
        <button
            onClick={(event) =>
                handleClick((event.target as HTMLButtonElement).innerText)}>minus3</button>
        <button
            onClick={(event) =>
                handleClick((event.target as HTMLButtonElement).innerText)}>add2</button>
        <button
            onClick={(event) =>
                handleClick((event.target as HTMLButtonElement).innerText)}>mal2</button>
        <button onClick={() => myStore.getState()}>{myStore.getState()}</button>
    </>)
    }

    return (
        <>
        {render()}
        </>   
    )
}