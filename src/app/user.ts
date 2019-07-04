export class User {
    firstName : string;
    lastName : string;
    email : string;
    phone : string;
    numBookings : number;
    reviews : Array<string>;

    constructor(firstName, lastName, email, phone, numBookings, reviews){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.numBookings = numBookings;
        this.reviews = reviews;
    }
}
