import React, { Fragment, useEffect, useState } from "react";

const ListContacts = () => {
  const [contacts, setContacts] = useState([]);
  const getContacts = async () => {
    try {
      const response = await fetch(`http://localhost:5000/pshare/contacts/1`);
      console.log(response)
      const jsonData = await response.json();

      setContacts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (!contacts.length) {
      getContacts();
    }
  });

  

  return (<Fragment>{contacts.map(chat => (
      <li>{contacts.friend_id}</li>
  ))}</Fragment>
  );
};

export default ListContacts;
