const TodoListItem = ({label, important = false}) => {
    const itemStyle = {
        color: important ? 'red' : 'black'
    }

    return <span style={itemStyle}>{label}</span>
}

export default TodoListItem;