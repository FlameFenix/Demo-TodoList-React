import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import { Spinner } from "../Spinner/Spinner"

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setTodos(Object.values(result));
                setLoading(false);
            })
    }, []);

    if (loading === true) {
        return <Spinner />
    }

    const clickHandler = (todo) => {
        fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, 
        {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({...todo, IsComplete: !todo.IsComplete })
        })
        .then(res => res.json())
        .then(modifiedTodo => {
            setTodos(oldTodos => oldTodos.map(todo => todo._id === modifiedTodo._id ? modifiedTodo : todo))
        });
    }

    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
    
                        {todos.map(x => <TodoItem key={x._id} {...x} onClick={clickHandler} />)}
    
                    </tbody>
                </table>
            </div>
        </section>
    );
}