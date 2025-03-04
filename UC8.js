// Ability to search Person in a particular City or State.

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
            throw new Error("Contact with the same name already exists.");
        }

        if (this.contacts.some(c => c.phone === contact.phone || c.email === contact.email)) {
            throw new Error("Contact with the same phone or email already exists.");
        }

        this.contacts.push(contact);
        console.log(" Contact added successfully!");
    }

    findContactsByCity(city) {
        let result = this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
        return result.length > 0 ? result : " No contacts found in this city.";
    }

    findContactsByState(state) {
        let result = this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
        return result.length > 0 ? result : " No contacts found in this state.";
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log(" Address Book is empty.");
        } else {
            console.log("\n Address Book Contacts:");
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
        console.log(` Total Contacts: ${this.contacts.length}`);
    }
}

// Example Usage
try {
    let myAddressBook = new AddressBook();

    let contact1 = new Contact("John", "Doe", "1234 Elm St", "Austin", "Texas", "78701", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    let contact2 = new Contact("Jane", "Smith", "5678 Oak Rd", "Miami", "Florida", "33101", "8765432109", "jane.smith@email.com");
    myAddressBook.addContact(contact2);

    let contact3 = new Contact("Mark", "Taylor", "99 Pine Ave", "Austin", "Texas", "78702", "7654321098", "mark.taylor@email.com");
    myAddressBook.addContact(contact3);

    console.log("\n Searching for contacts in Austin:");
    console.log(myAddressBook.findContactsByCity("Austin"));

    console.log("\n Searching for contacts in Texas:");
    console.log(myAddressBook.findContactsByState("Texas"));

} catch (error) {
    console.error(" Error:", error.message);
}
