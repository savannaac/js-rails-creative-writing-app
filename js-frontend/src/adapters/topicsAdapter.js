class TopicsAdapter {

    constructor() {
        this.baseUrl = "http://127.0.0.1:3000/api/v1/topics"
        // this.postBaseUrl = "http://127.0.0.1:3000/api/v1/posts"
    }

    getTopics() {
        return fetch(this.baseUrl, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        // .then(data => console.log(data))
    }

    createTopic(description) {
        const topicCreateParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({description})
        }
        return fetch(this.baseUrl, topicCreateParams).then(res => res.json())
    }

    // updateTopic(topicId) {
    //     const topicUpdateParams = {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }
    //     return fetch(`${this.baseUrl}/${topicId}`, topicUpdateParams).then(res => res.json())
    // }

    deleteTopic(topicId) {
        const topicDeleteParams = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(`${this.baseUrl}/${topicId}`, topicDeleteParams)
    }
}