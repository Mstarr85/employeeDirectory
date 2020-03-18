import React, { Component } from 'react';
import Contacts from './components/contacts';
import SearchBox from './components/SearchBox';

class App extends Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data, filteredContacts: data })
    })
    .catch(console.log)
  }
  state = {
    contacts: [],
    filteredContacts: [],
    searchEmployee: ''
  }

   
  // };
  handleInput(e) {
    console.log(e.target.value);
    let searchValue = e.target.value;
    let filtered = this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    })
    this.setState({ filteredContacts: filtered})
    // this.setState({ contacts: e.target.value })
    
   }



  render() {

   

    return (
        <div className="App">
        <div className="Employees">
          
          <h1>Employee Search</h1>

      <SearchBox handleInput={this.handleInput.bind(this)}/>
      {/* <SearchBox search={this.state.searchEmployee.handleInput}/> */}
      <Contacts contacts={this.state.filteredContacts} />
   
      </div>
      </div>
)
}
}


export default App;

