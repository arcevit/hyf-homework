import React,{Component} from "react";
import "./index.css"

class Checkbox extends Component{
    state={
        checked:false
        
    }

   
   
    handleCheck=(e)=> {
      const checkBox=this.props.myschedule.checkBox
      this.setState({checked: !this.state.checked});
      const idNumLi=e.target.parentElement.id;
      console.log(idNumLi)
      let msg;
      if (!this.state.checked) {
        msg = true;
        checkBox(msg,idNumLi)
          
      } else {
        msg = false;
        checkBox(msg,idNumLi)
        
      }
     
     
    }
    render() {
  

      return (
        
          <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
          
        
      );
    }
  };
  
 
  export default Checkbox;