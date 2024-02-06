import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleSubmit = formData => {
    const { name, contacts } = this.state;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === formData.name.toLowerCase()
      )
    ) {
      alert(
        `Contact with name ${name} already exists. Please choose a different name.`
      );
      return;
    }

    const newContact = {
      id: nanoid(),
      ...formData,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  handleDeleteContact = id => {
    console.log(`Deleting contact with ID: ${id}`);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}
