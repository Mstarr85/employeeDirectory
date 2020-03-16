

import React, { Component } from 'react';
import Contacts from './components/contacts';
import SearchBox from './components/SearchBox';



class App extends Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  state = {
    contacts: []
  }
  render () {
    return (
        <div className="App">
        <div className="Employees">
          
          <h1>Employees</h1>

        
          
         
    




      
      
      
      <SearchBox />
      
      <Contacts contacts={this.state.contacts} />


      </div>
      </div>
)
}
}


export default App;

