import TodoListItem from "./TodoListItem.jsx"

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {
        return(
            <li className="list-group-item" key={item.id}> 
             <TodoListItem {...item}/>
                <button type="button" className="btn btn-outline-success my-button">
                    <i className="fa-solid fa-check"></i>
                </button>
                <button type="button" className="btn btn-outline-danger my-button">
                    <i className="fa-solid fa-trash"></i>
                </button>
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