class Topics {

    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/topics"
        this.topics = []
        this.adapter = new TopicsAdapter()
        // this.id = id
        // this.description = description;
        // this.card = this.createCard()
        this.bindingsAndEventListeners()
        this.fetchAndLoadTopics()
    }

    bindingsAndEventListeners() {
        this.topicForm = document.getElementById("topic-form")
        this.topicInput = document.getElementById("topic-input")
        this.topicNode = document.getElementById("topic-form-container")
        this.topicsContainer = document.getElementById("topics")
        // this.topicForm.addEventListener("submit", this.addTopic.bind(this))
        // this.topicNode.addEventListener("click", this.deleteTopic.bind(this))
    }

    fetchAndLoadTopics() {
        this.adapter.getTopics()
        .then(topicsJSON => topicsJSON.forEach( topic => this.topics.push(new Topic(topic))))
          .then(this.renderTopics())
          .catch((error) => console.log(error))
    }

    topicsHTML() {
        return this.topics.map( topic => topic.renderTopics() ).join(" ")
    }

    renderTopics() {
        return this.topicsContainer.innerHTML = `<p>${this.topicsHTML()}</p>`
    }

    // function renderAllLikes(likesArray) {
    //     return likesArray.map(showLikes).join(' ')
    //   }
}