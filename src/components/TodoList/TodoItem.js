export const TodoItem = (props) => {

    function isComplete(isComplete) {
        return isComplete === "Complete" ? "todo is-completed" : "todo";
    }

    return (
        <tr className={isComplete(props.isComplete)}>
            <td>{props.title}</td>
            <td>{props.isComplete}</td>
            <td className="todo-action">
                <button>Change status</button>
            </td>
        </tr>
    );
}