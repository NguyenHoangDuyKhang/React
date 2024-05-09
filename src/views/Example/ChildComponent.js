import React from "react";

class ChildComponent extends React.Component {
  state = {
    show: false,
  };

  hendlesShow = () => {
    this.setState({
        show: !this.state.show
    })
  }

  hendelOnclickDelete = (job) => {
    console.log('hendelOnclickDelete : ' , job);
    this.props.deleteAjob(job);
  }

  render() {
    let { ArrJob } = this.props;
    let { show } = this.state;
    let check = show === true ? 'Show = true' : 'Show = false';
    console.log(check);
    return (
        //Dùng tóan tử 3 ngôi để có thể so sánh 2 điều kiện
        // ---->Code ngắn đi rất nhiều
      <>
        {show === false ?
        <div>
          <button onClick={() => this.hendlesShow()}>Show</button>
        </div> 
        :
          <>
            <div className="Job-List">
              {ArrJob.map(item => {
                if (item.salaty >= 500) {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salaty}$ - <></> 
                      <span onClick={() => this.hendelOnclickDelete(item)}>Xóa</span>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <button  onClick={() => this.hendlesShow()}>Hide</button>
            </div>
          </>
        }
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   console.log("Check child Props", props);
//   let { ArrJob } = props;
//   return (

//     <div className="Job-List">
//       {ArrJob.map((item) => {
//          if(item.salaty>= 500){
//         return <div key={item.id}>{item.title} - {item.salaty}$</div>;
//          }
//       })}
//     </div>
//   );
// };

export default ChildComponent;
