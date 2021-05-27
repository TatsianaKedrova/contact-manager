import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, removeContactHandler }) => {

    const renderContactList = contacts.map((contact) => {
        return (
           <ContactCard key={contact.id} contact={contact} removeContactHandler={removeContactHandler}/>
        )
    })
    return (
        <div className={"ui celled list"}>{renderContactList}</div>
    )
}

export default ContactList;