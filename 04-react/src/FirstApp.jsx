import { MultipleCustomHooks } from "./hooks/MultipleCustomHook";
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";

const FirstApp = ({value}) => {

    // const {counter, handleAdd, handleSubtract, handleReset} = useCounter(value);
    return (
        <>
            {/* <h1>Counter: {counter}</h1>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button> */}
            <MultipleCustomHooks value={1}/>
        </>
    );
}

export default FirstApp;