import { useDispatch, useSelector } from "react-redux";
import { DecrementCounter, incrementCounter } from "../store/actions-creator/CounterAction";

const Counter = () => {
    const counter = useSelector(storeState => storeState.counter);
    const dispatch = useDispatch();

    const increaseHandler = (value) => {
        dispatch(incrementCounter(value));
    };

    const decreaseHandler = (value) => {
        dispatch(DecrementCounter(value));
    };

    return (
        <div>
            <h2>The Value of the counter is {counter}</h2>
            <div className="increase-counter">
                <button onClick={() => increaseHandler(1)}>Increase 1</button>
                <button onClick={() => increaseHandler(10)}>Increase 10</button>
            </div>
            <div className="decrease-counter">
                <button onClick={() => decreaseHandler(1)}>Decrease 1</button>
                <button onClick={() => decreaseHandler(5)}>Decrease 5</button>
            </div>
        </div>
    );
};

export default Counter;
