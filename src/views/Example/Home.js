import React from "react";
// import { withRouter } from "react-router";
import Color from "./../HOC/Color";
class Home extends React.Component {
    
    render () {
        return(
            <>
            <div>
                Hello, In my home!
            </div>
            </>
        )
    }
}


export default Color(Home);