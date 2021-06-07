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
                const topicDiv = document.createElement("div")
                topicDiv.innerHTML = `<h1>${topic.description}</h1>`
                this.topicsContainer.appendChild(topicDiv)
            }))
    }

    addTopic = (e) => { 
        e.preventDefault()
        // this.topicInput.value 

        this.adapter.createTopic(this.topicInput.value)
            .then(data => {
                console.log(data)
                
                if (data.description){
                    // addTopicToDom
                } else {
                    alert(data.errors)
                }
            })
        // console.dir(this.topicInput)
        
        // const 
    }


}