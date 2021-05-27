import React from "react";

const ContactCard = ({ contact, removeContactHandler }) => {

    const removeItem = () => {
        removeContactHandler(contact.id)
    }


    return (
        <div className={"item"}>
            <img className={"ui avatar image"} src="https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png" alt="user"/>
            <div className={"content"}>
                <div className={"header"}>{contact.name}</div>
                <div>{contact.email}</div>
            </div>
            <i
                className={"trash alternate outline icon"}
                style={{ color: "red", marginTop: "7px" }}
                onClick={removeItem}
            ></i>

        </div>
    )
}

export default ContactCard;