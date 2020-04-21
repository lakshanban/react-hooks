import React, {Component} from 'react';
import Posts from "./components/posts";
import Postform from "./components/postform";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {decrement, increment, signin} from "./actions";


function App(){

    const count= useSelector((state)=>state.counter);
    const isLogged= useSelector((state)=>state.isLogged);
    const dispatch= useDispatch();


    return <div className='app'>
        <h1>Counter:{count}</h1>

        <button onClick={()=>dispatch(increment(5))}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>

        <button onClick={()=>dispatch(signin())}>sign IN</button>

        {isLogged? <h4>Sensible data shouldnt see this</h4>: ''}

    </div>


}
export default App;
