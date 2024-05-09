import React from "react";
import "./../../styles/demo.scss"

class Addcomponent extends React.Component {

    state = {
        title: '',
        salaty: '',
    }

    hendelChangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }


    hendelChangesalaty = (event) => {
        this.setState({
            salaty: event.target.value
        })
    }

    
    hendelSupmit = (event) => {
        event.preventDefault();

        if(!this.state.title || !this.state.salaty){
            alert('Missing requỉed param!');
            return;
        }
        console.log('Đây là state: ' , this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salaty: this.state.salaty
        });

        this.setState ({
            title: '',
            salaty: ''
        })
    }

    render() {
        return(
            <>
            <form>
        <label>Job Title</label> <br/>
        <input type="text" value={this.state.title} 
        onChange={(event)=> this.hendelChangetitle(event)} /><br/>
        <label>Salaty</label> <br/>
        <input type="text" value={this.state.salaty} 
        onChange={(event) => this.hendelChangesalaty(event)}
        />
        <br/>
        <input className="btn-supmit" type="submit" 
        onClick={(event)=> this.hendelSupmit(event)}
        />
       </form>
            </>

        )
    }
}

export default Addcomponent;