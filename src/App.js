// import './App.css';
// import contacts from "./contacts.json"

// function App() {
//   // const contacts = contacts;
//   const firstFive =  contacts.slice(0, 6);
//   const List = firstFive.map(() => {
//     return <li key={contacts.name}
//      picture={contacts.pictureUrl}
//       popularity={contacts.popularity}></li>

//   });
//   console.log("list",List);
//   return (
//     <div className="App">
//     <List/>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import contacts from "./contacts.json";

class App extends Component {

  state = {
    name:"mir",
    firstFive : contacts.slice(0, 5)
  }

  clickHandler = () =>{
    console.log("here",  contacts[Math.floor(Math.random()* contacts.length)]);
   this.setState({
     name:"Dina",
     firstFive:[...this.state.firstFive, contacts[Math.floor(Math.random()* contacts.length)] ]
   })
  }


  render() {
  
    
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.clickHandler} >click</button>
        {this.state.firstFive.map((contact) => {
          return (
            <div>
              <p>{contact.name}</p> <img src={contact.pictureUrl}></img>
              <p>{contact.popularity}</p>
              <p> {contact.wonOscar ? "Oscar Winner" : ""}  </p>
              <p> {contact.wonEmmy ? "Emmy Winner" : ""}  </p>
              <button>Click</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
