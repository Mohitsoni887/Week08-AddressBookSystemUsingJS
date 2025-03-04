// Ability to ensure Valid Contacts are added...

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

// Example Usage
try {
    let contact1 = new Contact("John", "Doe", "1234 Elm St", "Austin", "Texas", "78701", "9876543210", "john.doe@example.com");
    console.log(contact1.toString());

    let contact2 = new Contact("Jane", "Smith", "5678 Oak Rd", "Miami", "Florida", "33101", "8765432109", "jane.smith@email.com");
    console.log(contact2.toString());
} catch (error) {
    console.error(error.message);
}
