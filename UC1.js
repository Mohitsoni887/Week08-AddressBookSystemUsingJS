// Ability to create a Address Book Contact with first and last names, address, city, state, zip, phone number and email...

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddress(address);
        this.city = this.validateName(city, "City");
        this.state = this.validateName(state, "State");
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    validateName(name, field) {
        const nameRegex = /^[A-Z][a-z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`${field} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    validateAddress(address) {
        if (address.length < 5) {
            throw new Error("Address must be at least 5 characters long.");
        }
        return address;
    }

    validateZip(zip) {
        const zipRegex = /^[0-9]{5,6}$/;
        if (!zipRegex.test(zip)) {
            throw new Error("Zip code must be 5 or 6 digits.");
        }
        return zip;
    }

    validatePhone(phone) {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            throw new Error("Phone number must be 10 digits.");
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

// Example Usage
try {
    let contact = new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "1234567890", "john.doe@example.com");
    console.log(contact.toString());
} catch (error) {
    console.error(error.message);
}
