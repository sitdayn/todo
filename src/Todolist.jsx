import TodoListItem from "./TodoListItem.jsx"

const TodoList = ({todos, onDeleted}) => {

    const elements = todos.map((item) => {
        return(
            <li className="list-group-item" key={item.id}> 
                <TodoListItem {...item} onDeleted = {() => onDeleted(item.id)}/> 
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