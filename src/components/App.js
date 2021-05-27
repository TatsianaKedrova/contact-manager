import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import {v1} from 'uuid';

function App() {

    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (name, email) => {
        setContacts([...contacts, {id: v1(), name: name, email: email}])

    }

    const removeContactHandler = (idRemove) => {
        const newContacts = contacts.filter(item => item.id !==idRemove);
        setContacts(newContacts);
    }

    useEffect(() => {
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrieveContacts) setContacts(retrieveContacts);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    }, [contacts])


    /*const contacts = [
        { id: v1(), name: "Tania", email: "baletro@mail.ru"},
        { id: v1(), name: "Tatiana", email: "baletrot@gmail.com"}
    ]*/
    return (
        <div className="ui container">
            <Header/>
            <AddContact addContactHandler={addContactHandler}  />
            <ContactList contacts={contacts} removeContactHandler={removeContactHandler}/>

        </div>
    );
}

export default App;
