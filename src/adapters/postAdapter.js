// import topic from "./topic"

class PostAdapter {

    constructor() {
        this.baseUrl = "http://127.0.0.1:3000/api/v1/posts"
    }

    getPosts() {
        return fetch(this.baseUrl, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(json => (json.data))
    }
}