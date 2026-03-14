import React from 'react';
import AppHeader from './appheader.jsx';
import SearchPanel from './searchpanel.jsx';
import TodoList from './Todolist.jsx';
import ItemsFilter from './ItemsFilter.jsx';
import AddItem from './addItem.jsx';

class App extends React.Component {
  maxId = 100;
  state = {
    todoData : [
        { id: 1, label: 'проснуться'},
        { id: 2, label: 'умыться', important: true },
        { id: 3, label: 'покушать' }
    ]
  };
  
  deleteItem = (id) => {
    this.setState(
      ({todoData}) => {
        const index = todoData.findIndex((num) => num.id === id)
        const before = todoData.slice(0, index)
        const after = todoData.slice(index + 1)
        const newMassive = [...before, ...after]
        return {
          todoData : newMassive
        }
      }
    );
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState(
      ({todoData}) => {
        const newMassive = [
          ...todoData,
          newItem
        ];
        return {
          todoData: newMassive
        }
      }
    )
  }

  render() {
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
              <TodoList todos = {this.state.todoData} onDeleted = {this.deleteItem} />
              <AddItem onAddItem = {this.addItem}/>
        </div>
      )
    }
}

export default App;
