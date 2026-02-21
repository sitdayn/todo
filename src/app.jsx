import AppHeader from './appheader.jsx'
import SearchPanel from './searchpanel.jsx'
import TodoList from './Todolist.jsx'

const App = () => {
    const todoData = [
        { label: 'проснуться'},
        { label: 'умыться', important: true },
        { label: 'покушать' }
    ]
  return(
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos = {todoData}/>
  </div>
  )
}

export default App;
