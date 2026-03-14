import React from "react";

class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(
            ({done}) =>
            {
                return {
                    done: !done
                }
            }
        );
    };

    onMarkImportant = () => { 
        this.setState(
            ({important}) => {
                return {
                    important: !important
                }
            }
        );
    };

    render() {
        const {label, onDeleted} = this.props

        const {done, important} = this.state
        let className = 'item-list-base';

        if(done) { //Если равен истине
            className += ' done';
        }

        if(important) {
            className += ' important';
        }

        return <div>
            <span
            onClick={this.onLabelClick.bind(this)}
            className={className}>
                {label}
            </span>
            <button type="button" className="btn btn-outline-success my-button mx-1">
                <i className="fa-solid fa-check"></i>
            </button>
            <button type="button" className="btn btn-outline-danger my-button mx-1" onClick={onDeleted}>
                <i className="fa-solid fa-trash"></i>
            </button>
            <button type="button" onClick={this.onMarkImportant.bind(this)} className="btn btn-outline-primary my-button mx-1">
                <i className="fa-solid fa-trophy"></i> 
            </button> 
        </div>            
    }
}

export default TodoListItem;