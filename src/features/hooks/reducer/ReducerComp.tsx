import { useReducer } from 'react';

function ReducerComp() {
    const initialState = {
        count: 0
    };

    const INCREASE = 'INCREASE';
    const DECREASE = 'DECREASE';

    const reducer = (state=initialState, action) => {
        switch(action.type) {
            case 'INCREASE':
                return {
                    count: state.count+1
                }
            case 'DECREASE':
                return {
                    count: state.count-1
                }
        }
    }

    const [newState, dispatch] = useReducer(reducer, {count:0});

    return (
        <>
            <h1> {newState?.count} </h1>
            <button onClick={() => dispatch({type: INCREASE})}> ++ </button>
            <button onClick={() => dispatch({type: DECREASE})}> -- </button>

        </>
    )
};

export default ReducerComp;
9606304578