
import React, {Component} from 'react';


class Arcevit extends Component{
    render(){
        console.log(this.props)
        const {myschedule}=this.props;
        const scheduleList=myschedule.map(element=>{

             return (
                <div className="arcevit" key={element.id}>
                <div>Task:{element.task}</div>
                <div>Time:{element.time}</div>
                <hr/>
                </div>
                
             )
        })
         
        return(
            <div className="student-list">
            {scheduleList}
            </div>
       
        )
    }
}

export default Arcevit;

