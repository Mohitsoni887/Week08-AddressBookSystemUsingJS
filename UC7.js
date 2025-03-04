// Ability to ensure there is no Duplicate Entry of the same Person in the Address Book.

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateField(address, "Address", 4);
        this.city = this.validateField(city, "City", 4);
        this.state = this.validateField(state, "State", 4);
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    validateName(name, fieldName) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        return name;
    }

    validateField(value, fieldName, minLength) {
        if (value.length < minLength) throw new Error(`${fieldName} must have at least ${minLength} characters.`);
        return value;
    }

    validateZip(zip) {
        const zipRegex = /^\d{5,6}$/;
        if (!zipRegex.test(zip)) throw new Error("Invalid Zip Code. It must be 5 or 6 digits.");
        return zip;
    }

    validatePhone(phone) {
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phone)) throw new Error("Invalid Phone Number. It must be a 10-digit number starting with 6-9.");
        return phone;
    }

    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) throw new Error("Invalid Email Format.");
        return email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        // Check for duplicate name
        if (this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
            throw new Error("Contact with the same name already exists.");
        }

        // Check for duplicate phone or email
        if (this.contacts.some(c => c.phone === contact.phone || c.email === contact.email)) {
            throw new Error("Contact with the same phone or email already exists.");
        }

        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    getContactCount() {
        return this.contacts.length;
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Address Book is empty.");
        } else {
            console.log("\nAddress Book Contacts:");
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
        console.log(`Total Contacts: ${this.getContactCount()}`);
    }
}

// Example Usage
try {
    let myAddressBook = new AddressBook();

    let contact1 = new Contact("John", "Doe", "1234 Elm St", "Austin", "Texas", "78701", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    let contact2 = new Contact("Jane", "Smith", "5678 Oak Rd", "Miami", "Florida", "33101", "8765432109", "jane.smith@email.com");
    myAddressBook.addContact(contact2);

    let duplicateContact = new Contact("John", "Doe", "777 Maple Ave", "Seattle", "Washington", "98101", "9876543210", "john.duplicate@example.com");
    myAddressBook.addContact(duplicateContact); //  This will throw an error

    myAddressBook.displayContacts();
} catch (error) {
    console.error(" Error:", error.message);
}
