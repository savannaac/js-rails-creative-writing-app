class Topics {

    constructor() {
        this.topics = []
        this.adapter = new TopicsAdapter()
        this.id = id
        this.description = description;
        this.card = this.createCard()
        this.bindingsAndEventListeners()
        this.fetchAndLoadTopics()
    }


    bindingsAndEventListeners() {
        this.topicForm = document.getElementById("topic-form")
        this.topicInput = document.getElementById("topic-input")
        this.topicNode = document.getElementById("topic-container")
        this.topicForm.addEventListener("submit", this.addTopic.bind(this))
        // this.topicNode.addEventListener("click", this.deleteTopic.bind(this))
    }

   fetchAndLoadTopics() {
       this.adapter.getTopics()
       .then(topicsJSON => topicsJSON.forEach(topic => this.topics.push(new Topic(topic))))
       .then(rhis.render.bind(this))
       .catch((error) => console.log(error))
   }

   addTopic() {
       event.preventDefault()
       const body = this.topicInput.value 
       this.adapter.createTopic(body)
       .then((topicJSON) => this.topics.push(new Topic(topicJSON)))
       .then(this.render.bind(this))
       .then(() => this.topicInput.value = "")
   }

   topicsHTML() {
       return this.topics.map(topic => topic.render()).join("")
   }

   render() {
       this.topicsNode.innerHTML = `<ul>${this.topicsHTML()}<ul>`
   }

    // fetch("http://127.0.0.1:3000/api/v1/topics") {
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error))
    // }
}