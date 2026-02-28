import AppHeader from './appheader.jsx'
import SearchPanel from './searchpanel.jsx'
import TodoList from './Todolist.jsx'
import ItemsFilter from './ItemsFilter.jsx'

const App = () => {
    const todoData = [
        { id: 1, label: 'проснуться'},
        { id: 2, label: 'умыться', important: true },
        { id: 3, label: 'покушать' }
    ]
  return(
    <div className="container">
      <AppHeader active = {3} done = {4}/>
      <div className="row">
          <div className="col-6">
            <SearchPanel/>
          </div> 
          <div className="col-6">   
            <ItemsFilter/>
          </div>
    </div>
          <TodoList todos = {todoData}/>
  </div>
  )
}

export default App;
