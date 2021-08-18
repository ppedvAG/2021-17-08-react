// import { devToolsEnhancer } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";

const initialState = {
    value: 0
}

const myReducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
      case 'PLUS3':
        return { ...state, value: state.value + 3 };
      case 'MINUS5':
        return { ...state, value: state.value - 5 };
      default:
        return state;
    }
}

const rootReducer = combineReducers({
    mathResult: myReducer
  })

  interface SystemState {
    mathResult: {
      value: number
    }
  }  
  
  /* STORE */
//   export const myStore = createStore(rootReducer, devToolsEnhancer({}))
  export const myStore = createStore(myReducer)
  
  
  /* SELECTORS */
//   const getCountValue = (state: SystemState) => state.mathResult.value;
  const getCountValue = (state: typeof initialState) => state.value;

/* COMPONENTS */
export default function ReduxExampleComponent() {

    /* A hook to access the redux store's state. 
  This hook takes a selector function as an argument. 
  The selector is called with the store state. */
    const count = useSelector(getCountValue)
    const dispatch = useDispatch()  
  
    return (
      <>
      <h2>REDUXEXAMPLECOMPONENT</h2>  
        <p>
        Test mit count: {count}
        </p>
        {/* <p>{myReducer()}</p> */}
  
        <button onClick={(event) => dispatch({ type: (event.target as HTMLButtonElement).textContent})}>PLUS3</button>
        {/* <button onClick={(event) => handleClick((event.target as HTMLButtonElement).textContent!)}>PLUS3</button> */}
        <button onClick={(event) => dispatch({ type: (event.target as HTMLButtonElement).textContent})}>MINUS5</button>
      </>
    )
  }