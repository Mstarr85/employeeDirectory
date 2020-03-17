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
    contacts: [],
    searchEmployee: ''
  }

   
  // };
  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({ searchEmployee: e.target.value })
    // this.setState({ contacts: e.target.value })

   }



  render() {
    const filteredContacts = this.state.contacts.filter((contact) => {
      // this.state.contacts.filter((contact) => {

    
      return contact.name.toLowerCase().includes(this.state.searchEmployee.toLowerCase())
      // return contact.name.toLowerCase().includes(this.contacts.toLowerCase())

    })
    

    return (
        <div className="App">
        <div className="Employees">
          
          <h1>Employee Search</h1>

      <SearchBox handleInput={this.handleInput}/>
      {/* <SearchBox search={this.state.searchEmployee.handleInput}/> */}
      <Contacts contacts={this.state.contacts} />
   
      </div>
      </div>
)
}
}


export default App;

