// Ability to get number of contact persons i.e. count by City or State

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) throw new Error("Invalid First Name");
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) throw new Error("Invalid Last Name");
        if (!/^[A-Za-z0-9\s]{4,}$/.test(address)) throw new Error("Invalid Address");
        if (!/^[A-Za-z\s]{4,}$/.test(city)) throw new Error("Invalid City");
        if (!/^[A-Za-z\s]{4,}$/.test(state)) throw new Error("Invalid State");
        if (!/^\d{5,6}$/.test(zip)) throw new Error("Invalid Zip Code");
        if (!/^\d{10}$/.test(phone)) throw new Error("Invalid Phone Number");
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) throw new Error("Invalid Email");

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return ` ${this.firstName} ${this.lastName} |  ${this.city}, ${this.state} |  ${this.phone} |  ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
            throw new Error(" Contact with the same name already exists.");
        }

        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    viewPersonsByCity(city) {
        return this.contacts
            .filter(contact => contact.city.toLowerCase() === city.toLowerCase())
            .map(contact => contact.toString());
    }

    viewPersonsByState(state) {
        return this.contacts
            .filter(contact => contact.state.toLowerCase() === state.toLowerCase())
            .map(contact => contact.toString());
    }

    countByCity(city) {
        return this.contacts
            .filter(contact => contact.city.toLowerCase() === city.toLowerCase())
            .reduce(count => count + 1, 0);
    }

    countByState(state) {
        return this.contacts
            .filter(contact => contact.state.toLowerCase() === state.toLowerCase())
            .reduce(count => count + 1, 0);
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("📭 Address Book is empty.");
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

    console.log("\n Viewing persons in Austin:");
    console.log(myAddressBook.viewPersonsByCity("Austin"));

    console.log("\n Viewing persons in Texas:");
    console.log(myAddressBook.viewPersonsByState("Texas"));

    console.log("\nCount of persons in Austin:", myAddressBook.countByCity("Austin"));
    console.log("\nCount of persons in Texas:", myAddressBook.countByState("Texas"));

} catch (error) {
    console.error(" Error:", error.message);
}
