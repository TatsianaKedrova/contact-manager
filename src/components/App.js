import './App.css';
import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v1 } from 'uuid';

function App() {

    const contacts = [
        { id: v1(), name: "Tania", email: "baletro@mail.ru"},
        { id: v1(), name: "Tatiana", email: "baletrot@gmail.com"}
    ]
  return (
    <div className="ui container">
        <Header />
        <AddContact />
        <ContactList />

    </div>
  );
}

export default App;
