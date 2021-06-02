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
            renderTopics(data)
        })
    }
}