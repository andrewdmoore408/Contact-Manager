document.addEventListener('DOMContentLoaded', () => {
  class Model {
    async addContact(contactInfo) {
      const ADD_CONTACT_URL = '/api/contacts/';
      const HEADERS = {
        'Content-Type': 'application/json',
      };

      try {
        return await fetch(ADD_CONTACT_URL, {
          method: 'POST',
          headers: HEADERS,
          body: JSON.stringify(contactInfo),
        }).then(response => response.json());
      } catch (error) {
        return {error: error};
      }
    }

    async getAllContacts() {
      const ALL_CONTACTS_URL = '/api/contacts';

      return await fetch(ALL_CONTACTS_URL).then(response => response.json());
    }

    async deleteContact(id) {
      const DELETE_CONTACT_URL = `/api/contacts/${id}`;

      try {
        return await fetch(DELETE_CONTACT_URL, {
          method: 'DELETE',
        }).then(response => response.status);
      } catch (error) {
        return {error: error};
      }
    }

    async searchContacts(searchString) {
      const allContacts = await this.getAllContacts();

      return allContacts.filter(contact => contact.full_name.toLowerCase().includes(searchString.toLowerCase()));
    }

    async updateContact(id, updatedContactInfo) {
      const UPDATE_CONTACT_URL = `/api/contacts/${id}`;
      const HEADERS = {
        'Content-Type': 'application/json',
      }

      try {
        return await fetch(UPDATE_CONTACT_URL, {
          method: 'PUT',
          headers: HEADERS,
          body: JSON.stringify(updatedContactInfo),
        }).then(response => response.json());
      } catch (error) {
        return {error: error};
      }
    }
  }

  class View {

  }

  class Controller {
    #model;
    #view;

    constructor() {
      this.#view = new View();
      this.#model = new Model();
    }
  }

  let model = new Model();

  // model.addContact({
  //   full_name: "Scooby-Doo",
  //   email: "email@addy.com",
  //   phone_number: "119",
  //   tags: "investigator, programmer",
  // }).then(response => console.log(response));

  // model.getAllContacts().then(response => console.log(`response is: ${response.forEach(object => console.log(object))}`));

  // model.deleteContact(6).then(response => console.log(`delete status: ${response}`));

  // model.searchContacts('I').then(response => response.forEach(contact => console.log(contact)));

  // model.searchContacts('n').then(response => response.forEach(contact => console.log(contact)));

//   model.updateContact(4, {
//     full_name: 'Scooby-Doo',
//     phone_number: '119',
//     email: 'scoobz@zoinks.com',
//     tags: 'investigator, dog, icon',
//   }).then(response => console.log(response));
// });
