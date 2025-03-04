// Ability to create a New Address Book array and add new Contacts to it.

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateMinLength(address, "Address", 4);
        this.city = this.validateMinLength(city, "City", 4);
        this.state = this.validateMinLength(state, "State", 4);
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    validateName(name, field) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // Starts with capital, min 3 characters
        if (!nameRegex.test(name)) {
            throw new Error(`${field} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    validateMinLength(value, field, minLength) {
        if (value.length < minLength) {
            throw new Error(`${field} must be at least ${minLength} characters long.`);
        }
        return value;
    }

    validateZip(zip) {
        const zipRegex = /^[1-9][0-9]{4,5}$/; // 5 or 6-digit valid zip code
        if (!zipRegex.test(zip)) {
            throw new Error("Zip code must be 5 or 6 digits and should not start with 0.");
        }
        return zip;
    }

    validatePhone(phone) {
        const phoneRegex = /^[1-9][0-9]{9}$/; // 10-digit number not starting with 0
        if (!phoneRegex.test(phone)) {
            throw new Error("Phone number must be 10 digits and should not start with 0.");
        }
        return phone;
    }

    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format.");
        }
        return email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
    }
}

// Address Book Class
class AddressBook {
    constructor() {
        this.contacts = []; // Array to store contacts
    }

    addContact(contact) {
        if (this.contacts.some(c => c.phone === contact.phone || c.email === contact.email)) {
            throw new Error("Contact with the same phone or email already exists.");
        }
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Address Book is empty.");
        } else {
            console.log("\n Address Book Contacts:");
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
    }
}

// Example Usage
try {
    let myAddressBook = new AddressBook();

    let contact1 = new Contact("John", "Doe", "1234 Elm St", "Austin", "Texas", "78701", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    let contact2 = new Contact("Jane", "Smith", "5678 Oak Rd", "Miami", "Florida", "33101", "8765432109", "jane.smith@email.com");
    myAddressBook.addContact(contact2);

    myAddressBook.displayContacts();
} catch (error) {
    console.error("Error:", error.message);
}
