// Ability to find number of contacts in the address book.
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (this.contacts.some(c => c.phone === contact.phone || c.email === contact.email)) {
            throw new Error("Contact with the same phone or email already exists.");
        }
        this.contacts.push(contact);
        console.log(" Contact added successfully!");
    }

    getContactCount() {
        return this.contacts.length;
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log(" Address Book is empty.");
        } else {
            console.log("\n Address Book Contacts:");
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
        console.log(` Total Contacts: ${this.getContactCount()}`);
    }
}

// Example Usage
try {
    let myAddressBook = new AddressBook();

    let contact1 = new Contact("John", "Doe", "1234 Elm St", "Austin", "Texas", "78701", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    let contact2 = new Contact("Jane", "Smith", "5678 Oak Rd", "Miami", "Florida", "33101", "8765432109", "jane.smith@email.com");
    myAddressBook.addContact(contact2);

    console.log("\n Total Contacts in Address Book:", myAddressBook.getContactCount());
    myAddressBook.displayContacts();
} catch (error) {
    console.error(" Error:", error.message);
}
