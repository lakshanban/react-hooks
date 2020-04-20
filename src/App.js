import React, {useState} from "react";

function Todo({todo,index}){

    return (<div className='todo'>

        <h4>{index}+{todo.text}</h4>
        <h4> {todo.completed}</h4>


    </div>)

}



function App(){

    const [todos,setTodo]= useState([
        {
            text:'Create a project twith react hooks',
            completed: false
        },
        {
            text:'do coding ',
            completed: false
        },
        {
            text:'runt the project',
            completed: false
        }
    ]);


    return (<div className='app'>

        {todos.map((todo,index)=>(
            <Todo todo={todo} index={index} key={index} />

        ))}


    </div>)


}



export default App;
