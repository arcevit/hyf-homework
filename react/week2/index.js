
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import List from "./List";




class App extends Component{
    state={
        myschedule:[
            {
              "id": 1,
              "description": "Get out of bed",
              "done": true
            },
            {
              "id": 2,
              "description": "Brush teeth",
              "done": false
            },
            {
              "id": 3,
              "description": "Eat breakfast",
              "done": false
            }
          ]
    }
    

    addItem=(newItem)=>{
      let lastId;
      
      if (this.state.myschedule.length===0) {
        lastId=0;       
      } else{
        lastId=this.state.myschedule[this.state.myschedule.length-1].id;

      }
        const lastTask={id:lastId+1,description:newItem,done:false}
        const MyNewSchedule=this.state.myschedule.concat(lastTask);
        this.setState({myschedule:MyNewSchedule})
        console.log(MyNewSchedule)

    }
    checkBox=(msg,id)=>{
       const editDoneItem = this.state.myschedule.map(eleman => {
        if (eleman.id === Number(id)) {
        eleman = { ...eleman, done: msg };
        }
        return eleman;
      });
       this.setState({myschedule:editDoneItem})       

    }
    deleteItem=(idd)=>{
      for (var i =0; i < this.state.myschedule.length; i++)
      if (this.state.myschedule[i].id === Number(idd)) {
         this.state.myschedule.splice(i,1);
         let newMySchedule=this.state.myschedule;    
         this.setState({myschedule:newMySchedule})
         console.log(newMySchedule)
    
      }


    }


    render(){

        return(
              <div className="app">
              <h2>My Schedule</h2>
              <Header addItem={this.addItem}/>
              <List  myschedule={this.state.myschedule} checkBox={this.checkBox} deleteItem={this.deleteItem}/> 
                           
              </div>
        )
    }

}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
