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
        this.topicForm.addEventListener("submit", this.addTopic)
        // this.topicNode.addEventListener("click", this.deleteTopic.bind(this))
    }

    fetchAndLoadTopics() {
        this.adapter.getTopics()
            .then(data => data.forEach(topic => {
                this.displayTopic(topic)
            }))
    }

    addTopic = (e) => { 
        e.preventDefault()
        // this.topicInput.value 

        this.adapter.createTopic(this.topicInput.value)
            .then(topic => {
                if (topic.description){
                    this.displayTopic(topic)

                    this.topicForm.reset()
                } else {
                    alert(topic.errors)
                }
            })
    }
        // console.dir(this.topicInput) 
    displayTopic = (topic) => {
        const topicDiv = document.createElement("div")
        const topicContent = document.createElement("h1")
        topicContent.innerText = topic.description
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "delete"
        deleteButton.addEventListener("click", () => {
            this.adapter.deleteTopic(topic.id)
            topicDiv.remove()
            alert(`"${topic.description}" deleted`)
        })  
        const editButton = document.createElement("button")
        editButton.innerText = "update"
            this.ad

        topicDiv.appendChild(topicContent)
        topicDiv.appendChild(deleteButton)
        topicDiv.appendChild(editButton)
        this.topicsContainer.appendChild(topicDiv)
    
    }
 }
