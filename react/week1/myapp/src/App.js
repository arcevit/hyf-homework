import React, {Component} from 'react';

import Arcevit from './arcevit';

class App extends Component {
  state={
    myschedule:[
      {task:"Get out of bed", time:"Wed Sep 13 2017",id:1},
      {task:"Brush teeth", time:"Thu Sep 14 2017",id:2},
      {task:"Eat breakfast", time:"Fri Sep 15 2017",id:3}


    ]
  };
  render(){
    return (
    <div className="App">
     <h1>My First React Homework App</h1>
     <p>Welcome :)</p>
     <Arcevit myschedule={this.state.myschedule}/>

    </div>
  )}
  
}

export default App;
