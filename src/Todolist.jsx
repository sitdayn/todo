import TodoListItem from "./TodoListItem.jsx"

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {
        return(
            <li className="list-group-item" key={item.id}> 
                <TodoListItem {...item}/> 
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