import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>
            <div className="table-wrapper">

                {/* <Spinner /> */}

                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <TodoItem title="Give dog a bath" isComplete="Complete" />
                        <TodoItem title="Do laundry" isComplete="Complete" />
                        <TodoItem title="Vacuum floor" isComplete="Incomplete" />
                        <TodoItem title="Feed cat" isComplete="Complete" />
                        <TodoItem title="Change light bulbs" isComplete="Incomplete" />
                        <TodoItem title="Feed cat" isComplete="Complete" />
                        <TodoItem title="Change light bulbs" isComplete="Incomplete" />
                        <TodoItem title="Go to Store" isComplete="Complete" />
                        <TodoItem title="Fill gas tank" isComplete="Incomplete" />

                    </tbody>
                </table>
            </div>
        </section>
    );
}