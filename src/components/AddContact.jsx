import React, {useState} from "react";

const AddContact = ({ addContactHandler }) => {

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const changeInputName = (e) => {
        setInputName(e.currentTarget.value);
    }
    const changeInputEmail = (e) => {
        setInputEmail(e.currentTarget.value);
    }

    const addContact = (e) => {
        e.preventDefault();
        if(!inputName.trim() || !inputEmail.trim()) {
            alert('All fields are mandatory');
            return
        }
        addContactHandler(inputName,inputEmail);
        setInputEmail("");
        setInputName("");
    }

    const addOnkeyPress = (e) => {
        if(e.key === "Enter") {
            addContact(e);
        }
    }

    return (
        <div className={"ui main"}>
                <h2>Add Contact</h2>


            <form className={"ui form"} onKeyPress={addOnkeyPress}>
                <div className={"field"}>
                    <label>Name</label>
                    <input
                        type={"text"}
                        name={"name"}
                        placeholder={"Name"}
                        onChange={changeInputName}
                        value={inputName}/>
                </div>

                <div className={"field"}>
                    <label>Email</label>
                    <input type={"text"} name={"email"} placeholder={"Email"} onChange={changeInputEmail} value={inputEmail}/>
                </div>
                <button className={"ui button blue"} onClick={addContact}>Add</button>
            </form>
        </div>
    )
}

export default AddContact;