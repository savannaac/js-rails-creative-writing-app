class Topic {

    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.posts = []
        this.card = this.createCard ()
    }

    // fetch("http://127.0.0.1:3000/api/v1/topics") {
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error))
    // }
}