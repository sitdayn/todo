import TodoListItem from "./TodoListItem.jsx"

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {
        return(
            <li><TodoListItem {...item}/></li>
        )
    });

    return(
        <ul>
            {elements}
        </ul>
    )
}

export default TodoList;