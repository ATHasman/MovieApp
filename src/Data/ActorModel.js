

// actorModel Data Class can recieve 1 or 4 parameters:
//      *Object Actor[index] from ActorsData.Json
//      ** firstName(String), lastName(String), birthDay(YYYY-MM-DD), image(URL), imdbLink(URL)

export default class actor {
    constructor (firstName, lastName, birthDay, image, imdbLink)    {
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthDay = birthDay;
            this.image = image;
            this.imdbLink = imdbLink;
    }

    // ActorMethods:
    // calcAge() calculates Age from birthday date [yyyy-mm-dd] format and returns age(number) in years
    calcAge()   {   
        const dateOfBirth = new Date(this.birthDay);
        const today = new Date();
        let age = today.getFullYear() - dateOfBirth.getFullYear();
        let month = today.getMonth() - dateOfBirth.getMonth();
        if ((month < 0) || ((month === 0) && (today.getDate() < dateOfBirth.getDate()))) {
            age--;  // accounts the difference in months and days and reduces one year 
        }
        return age;
    }
};

export default class actorModel {
    constructor(ActorObject, lastName, birthDay, image, imdbLink) {
        if (arguments.length === 1) {
            this.name = ActorObject.firstName + ActorObject.lastName;
            this.born = ActorObject.birthDay;
            this.image = ActorObject.image;
            this.link = ActorObject.imdbLink;
        }   else {
            this.name = ActorObject + lastName;
            this.born = birthDay;
            this.image = image;
            this.link = imdbLink;
        }        
    }

    // ActorModel Methods:
    // calcAge() calculates Age from birthday date [yyyy-mm-dd] format and returns age(number) in years
    calcAge()   {   
        const dateOfBirth = new Date(this.birthDay);
        const today = new Date();
        let age = today.getFullYear() - dateOfBirth.getFullYear();
        let month = today.getMonth() - dateOfBirth.getMonth();
        if ((month < 0) || ((month === 0) && (today.getDate() < dateOfBirth.getDate()))) {
            age--;  // accounts the difference in months and days and reduces one year 
        }
        return age;
    }
};
