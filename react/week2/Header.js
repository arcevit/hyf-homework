import React,{Component} from 'react';

class Header extends Component{
    state={
        inputValue:""
    }
    inputChangeHandler=(e)=>{
        const newInput=e.target.value;
        this.setState({inputValue:newInput})

    }
    add=()=>{
        
        const inputValue=this.state.inputValue;
        this.props.addItem(inputValue);

    }

    render(){
        return(  <div>
            <input placeholder="add a item"
            onChange={this.inputChangeHandler}
             type="text"/>
            <button onClick={this.add}>Add</button>
            </div>)
      
    }
}

export default Header;