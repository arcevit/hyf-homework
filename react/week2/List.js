import React,{Component} from "react";
import Checkbox from "./checkbox";
import Delete from "./delete";


class List extends Component{
    

    render(){
      const  {myschedule}=this.props;
      let noLength;
      myschedule.length===0?noLength=true:noLength=false;

        return (       
            <div>

            { noLength
              ? <b>No items...</b>
              :<ul>

              {myschedule.map(item => (
                <li id={item.id} key={item.id}><Checkbox myschedule={this.props} />{item.description}<Delete myschedule={this.props} /></li>
              ))}
             </ul>  
            }

        
         
           </div>
        )
    }
}

export default List;

