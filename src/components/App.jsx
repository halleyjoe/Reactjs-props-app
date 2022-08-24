import React from "react";
import Card from "./Card";
import contacts from "../contacts"

{/*function createContact(contact) {
  return (
    <Card 
      key = {contact.id}
      name= {contact.name}
      imge = {contact.imgURL}
      tel = {contact.phone}
      email = {contact.email}
    />
  )
}*/}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/*ARROW FUNCTION */}
      {contacts.map(contact => <Card 
      key = {contact.id}
      name= {contact.name}
      imge = {contact.imgURL}
      tel = {contact.phone}
      email = {contact.email}
    />)}
      {/*<Card
        name={contacts[0].name}
        imge={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imge={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imge={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />*/}
    
    </div>
  );
}

export default App;