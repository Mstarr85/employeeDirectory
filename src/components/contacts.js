import React from 'react'


    const Contacts = ({ contacts }) => {
      console.log()
      return (
        <div>
          <center><h1>Employee List</h1></center>
          {contacts.map((contact) => (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{contact.name}</h4>
                <h6 className="card-title">{contact.email}</h6>
                <h6 className="card-title">{contact.phone}</h6>
                <h6 className="card-title">{contact.company.name}</h6>

                
               
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Contacts;