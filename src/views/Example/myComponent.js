import React from "react";
import ChildComponent from "./ChildComponent";
import Addcomponent from "./Addcomponent";
class MyConpoment extends React.Component {
  /*
JSX => return 1 khối duy nhất, nếu muốn trả về 2 khối thì phải bọc lại bằng 1 khối!
Dùng React.Fragment để có thể trả về nhiều block mà không cần block cha bọc lại!
state là 1 obj!
Khi state thay đổi thì JSX cũng sẽ thay đổi!
*/
    state = {
        arrJobs : [
          {id: 'haha' , title: "Dev", salaty: '500'},
          {id: 'haha2' , title: "Tester", salaty: '560'},
          {id: 'haha3' , title: "Dev2", salaty: '600'}
        ]
    }


    addNewJob = (job) => {
      // let currentJobs = this.state.arrJobs
      // currentJobs.push(job);
      this.setState({
        arrJobs: [...this.state.arrJobs , job]
        // arrJobs: currentJobs
      })
      console.log('Check job : ', job);
    }

    deleteAjob = (job) => {
      let currentJobs = this.state.arrJobs

      currentJobs  = currentJobs.filter(item => item.id !== job.id);
      this.setState({
        arrJobs : currentJobs
      })
    }

   
   

  render() {
    return (
      <>
      <Addcomponent
      addNewJob = {this.addNewJob}
      />
       <div>
        Hello HTML FROM!
       </div>
      
       <ChildComponent 
       ArrJob = {this.state.arrJobs}
       deleteAjob = {this.deleteAjob}
       />
      </>
    );
  }
}

export default MyConpoment;
