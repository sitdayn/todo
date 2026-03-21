import React from 'react';
import AppHeader from './appheader.jsx';
import SearchPanel from './searchpanel.jsx';
import TodoList from './Todolist.jsx';
import ItemsFilter from './ItemsFilter.jsx';
import AddItem from './addItem.jsx';

let maxId = 100;
class App extends React.Component {

  constructor(props) {
      super(props);
      
      const savedTodos = localStorage.getItem('todoData');

      this.state = {
        todoData: savedTodos ? JSON.parse(savedTodos) : 
        [
        { id: 1, label: 'проснуться'},
        { id: 2, label: 'умыться', important: true },
        { id: 3, label: 'покушать' }
      ],
      term: '',//срок    
      filter: 'all'
      };
  }

  //функционал сохранения
  componentDidUpdate(prevProps, prevState) {
    if(prevState.todoData !== this.state.todoData) {
      localStorage.setItem('todoData', JSON.stringify(this.state.todoData));
    }
  }

  //поиск
  onSearchChange = (term) => {
    this.setState({term});
  }

  //фильтр
  onFilterChange = (filter) => {
    this.setState({filter});
  }

  searchItem(items, term) {
    if(term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase() .includes(term.toLowerCase());
    }) 
  }

  filterItem(items, filter) {
      switch(filter) {
        case 'active':
          return items.filter((item) => !item.done);
        case 'done':
          return items.filter((item) => item.done);
        default:
          return items;    
      }
  }

  toggleDone = (id) => {
    this.setState(({todoData}) => {
        const index = todoData.findIndex((item) => item.id === id);
        const oldItem = todoData[index];
        const newItem = {
          ...oldItem,
          done: !oldItem.done
        };

        return {
          todoData: [
            ...todoData.slice(0, index),
            newItem,
            ...todoData.slice(index + 1)
          ]
        };
    });
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
      id: maxId++
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
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filterItem(this.searchItem(todoData, term), filter);
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

      return(
        <div className="container">
            <AppHeader active = {todoCount} done = {doneCount}/>
              <div className="row">
                  <div className="col-6">
                    <SearchPanel onSearchChange = {this.onSearchChange}/>
                  </div> 
                  <div className="col-6">   
                    <ItemsFilter filter={filter} onFilterChange = {this.onFilterChange}/>
                  </div>
              </div>
              <TodoList todos = {visibleItems} onDeleted = {this.deleteItem}  ontoggleDone = {this.toggleDone}/>
              <AddItem onAddItem = {this.addItem}/>
        </div>
      )
    }
}

export default App;
