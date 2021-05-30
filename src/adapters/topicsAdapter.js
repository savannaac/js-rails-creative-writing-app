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
                "Content-Type": "application/json"
            },
            body: JSON.stringify({body})
        }
        return fetch(this.baseUrl, topicCreateParams).then(res => res.json())
    }

    deleteTopic(topicId) {
        const topicDeleteParams = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(`${this.baseUrl}/${topicId}`, topicDeleteParams).then(res => res.json())
    }
}