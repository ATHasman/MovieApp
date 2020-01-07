export default class ActorModel {
    constructor(firstName, lastName, birthDay, image, imdbLink) {
        this.name = firstName + lastName;
        this.born = birthDay;
        this.image = image;
        this.link = imdbLink;

    }
}
