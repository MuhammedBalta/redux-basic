import {useSelector, useDispatch, connect} from 'react-redux'
import {counterActions}  from '../store'
import classes from './Counter.module.css';
import {Component} from 'react';

const Counter = () => {
    const counter = useSelector(state => state.counter.counter);
    const isCounterShow = useSelector(state => state.counter.showCounter)
    const dispatch = useDispatch();
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(7));
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{isCounterShow && counter}</div>
            <div>
                <button onClick={incrementHandler}>+</button>
                <button onClick={increaseHandler}>+5</button>
                <button onClick={decrementHandler}>-</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};
export default Counter;


/*class Counter extends Component {
    incrementHandler(){
        this.props.increment();
    }

    decrementHandler(){
        this.props.decrement();
    }

    increaseHandler(){
        this.props.increase(5);
    }

    toggleCounterHandler(){

    }

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.incrementHandler.bind(this)}>+</button>
                    <button onClick={this.increaseHandler.bind(this)}>+5</button>
                    <button onClick={this.decrementHandler.bind(this)}>-</button>
                </div>
                <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>);
    }
}

const mapStateToProps = (state) => {
    return {counter: state.counter}
}

const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => dispatch({type: "INCREMENT"}),
        decrement: () => dispatch({type: "DECREMENT"}),
        increase:  (amount) => dispatch({type: "INCREASE", payload: amount})
    }
}

//önce state sonra dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
