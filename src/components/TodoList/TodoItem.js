export const TodoItem = (props) => {

    function isComplete(isComplete) {
        return isComplete === true ? "todo is-completed" : "todo";
    }

    return (
        <tr className={isComplete(props.IsComplete)}>
            <td>{props.title}</td>
            <td>{props.IsComplete === true ? "Complete" : "Incomplete"}</td>
            <td className="todo-action">
                <button>Change status</button>
            </td>
        </tr>
    );
}