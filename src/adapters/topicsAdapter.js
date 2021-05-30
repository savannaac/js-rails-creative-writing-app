class TopicsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/topics"
    }

    getTopics() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createTopic(body) {
        const topicCreateParams = {
            method: "POST",
            headers: {
                "Content-Type"
            }
        }
    }
}