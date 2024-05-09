import React from "react";
import  "./../../styles/Listtodo.scss"
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import Color from "./../HOC/Color";

class ListTodo extends React.Component {
  state = {
    ListTodo: [
      { id: "todo1", title: "Doing HomeWord" },
      { id: "todo2", title: "Making Video" },
      { id: "todo3", title: "Fixing bugs" },
    ],

    editTodo: {}
  };


  addNewTodo = (todo) => {
    this.setState({
      ListTodo: [...this.state.ListTodo, todo]
    })
    toast.success("Wow so easy!");
  }

  DeleteTodo = (todo) => {
    let currenTodo = this.state.ListTodo;
    currenTodo = currenTodo.filter(item => item.id !== todo.id)
    this.setState({
      ListTodo: currenTodo
    })
    toast.error("Delete success!")
  }

  EditTodo = (todo) => {
    let {editTodo, ListTodo} = this.state;
    let isEmtyObj = Object.keys(editTodo).length === 0;
    if(isEmtyObj === false && editTodo.id === todo.id) {
      let ListTodoCoppy = [...ListTodo];

      let objIndex = ListTodoCoppy.findIndex(item => item.id === todo.id);

      ListTodoCoppy[objIndex].title = editTodo.title;
      this.setState({
        ListTodo: ListTodoCoppy,
        editTodo: {}
      })
      toast.success("Update success!")
      return;
    } 

    //Save
      this.setState({
        editTodo: todo
      })
   
  
  }

  hendeleOnchengeEditodo = (event) => {
    let editToDoCoppy = {...this.state.editTodo};
    editToDoCoppy.title = event.target.value;
    this.setState({
      editTodo: editToDoCoppy
    })
  }

  render() {
    let { ListTodo, editTodo } = this.state;

    let isEmtyObj = Object.keys(editTodo).length === 0;
    return (
      <>
       <p >
          Simple ToDo Apps with React.js
        </p>
        <div className="list-todo-contaimer">
         <AddTodo
         addNewTodo={this.addNewTodo}
         />
          <div className="List-todo-conten">
            { ListTodo && ListTodo.length > 0 &&
            ListTodo.map((item, index) => {
                return(
            <div className="todo-child" key={item.id}>
                  {isEmtyObj === true ? 
                    <span> {index + 1} - {item.title}</span>
                    :
                  <>
                  {editTodo.id === item.id ?
                 <span>
                  {index + 1} - <input value={editTodo.title}
                  onChange={(event)=> this.hendeleOnchengeEditodo(event)}
                  />
                 </span>
                 :
                 <span>
                 {index + 1} -  {item.title}
                </span>
                  }
                 </>
            }
              <button className="edit" onClick={()=> this.EditTodo(item)} >

                {isEmtyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                </button>
              <button className="delete" onClick={()=> this.DeleteTodo(item)}>Delete</button>
            </div>
                )
            })
        }
            
          </div>
        </div>
      </>
    );
  }
}

export default Color(ListTodo);
