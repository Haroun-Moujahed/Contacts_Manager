import React, { useEffect } from 'react'
import "./ContactsList.css"

import { useDispatch, useSelector } from "react-redux"
import { getContacts } from "../../redux/actions/contactsActions"

import ContactCard from "../ContactCard/ContactCard"
import { useHistory } from 'react-router-dom'



function ContactsList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContacts())
        // eslint-disable-next-line
    }, [])
    const contacts = useSelector(state => state.contactsReducer.contacts)
    const history = useHistory()
    return (<div className="contactsArea">
        {contacts.map(contact => <ContactCard key={contact._id} contact={contact} history={history} />)}
    </div>
    )
}

export default ContactsList
