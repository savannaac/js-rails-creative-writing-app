let topicsContainer = document.getElementById("topics")
p = new Topic
p.fetchAndLoadTopics

class Topic {

    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/topics"
        this.topics = []
        // this.adapter = new TopicsAdapter()
        this.id = id
        this.description = description;
        this.card = this.createCard()
        this.bindingsAndEventListeners()
        this.fetchAndLoadTopics()
    }

    // bindingsAndEventListeners() {
    //     this.topicForm = document.getElementById("topic-form")
    //     this.topicInput = document.getElementById("topic-input")
    //     this.topicNode = document.getElementById("topic-form-container")
    //     this.topicForm.addEventListener("submit", this.addTopic.bind(this))
    //     this.topicNode.addEventListener("click", this.deleteTopic.bind(this))
    // }

    fetchAndLoadTopics() {
        return fetch(this.baseUrl)
        .then(res => res.json())
        .then(data => {
            topicsHTML(data)
            // topicsContainer.innerHTML = renderTopics(data)
        })
    }

    topicsHTML(data) {
        return data.map(renderTopics).join(" ")
    }

    renderTopics(topic) {
        return topicsContainer.innerHTML = `<p>${topic.description}</p>`
    }

    // function renderAllLikes(likesArray) {
    //     return likesArray.map(showLikes).join(' ')
    //   }
}