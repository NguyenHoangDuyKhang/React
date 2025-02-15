import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    hendleOnchageTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    hendelAddTodo = () => {
        if(!this.state.title){
           toast.error(`Missing Title Todo!`);
           return
        }
       let todo = {
        id: Math.floor(Math.random() * 1000),
        title: this.state.title
       }
      this.props.addNewTodo(todo);
      this.setState({
        title: ''
      })
    }



  render() {
    let {title} = this.state;
    return (
      <>
        <div className="add-todo">
          <input type="text" value={title}
          onChange={(event)=> this.hendleOnchageTitle(event)}
          />
          <button type="btn" className="add" onClick={() => this.hendelAddTodo()}>
            Add
          </button>
        </div>
      </>
    );
  }
}

export default AddTodo;
