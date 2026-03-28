import TodoListItem from "./TodoListItem.jsx"

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {

    const elements = todos.map((item) => {
        return(
            <li className="list-group-item" key={item.id}> 
                <TodoListItem {...item}
                onDeleted = {() => onDeleted(item.id)}
                onToggleDone = {() => onToggleDone(item.id)}
                onToggleImportant = {() => onToggleImportant(item.id)} />
            </li>
        )
    });

    return(
        <ul className="list-group">
            {elements}
        </ul>
    )
}

export default TodoList;