class Topics {

    constructor() {
        this.baseUrl = "http://127.0.0.1:3000/api/v1/posts"
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

        this.postContainer = document.getElementById("posts")

        this.topicForm.addEventListener("submit", this.addTopic)
        // this.topicNode.addEventListener("click", this.deleteTopic.bind(this))
    }

    fetchAndLoadTopics() {
        this.adapter.getTopics()
            .then(data => data.forEach(topic => {
                // console.log(data)
                this.displayTopic(topic)
                // make topicDiv 

                if (topic.posts.length > 0) {
                    this.fetchAndLoadPosts()
                    // Topic.posts.forEach((post) => {
                    //     this.displayPost(post)
                    // })
                }
                // topicModel = new Topic(topic)
                // topicModel.display
            }))
    }

    fetchAndLoadPosts() {
        Topic.posts.forEach(post => {
            this.displayPost(post)
        })
    }

    addTopic = (e) => { 
        e.preventDefault()
        // this.topicInput.value 

        this.adapter.createTopic(this.topicInput.value)
            .then(topic => {
                if (topic.description) {
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
        // topicContent.setAttribute("contenteditable", "true")
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "delete"
        deleteButton.addEventListener("click", () => {
            this.adapter.deleteTopic(topic.id)
            topicDiv.remove()
            alert(`"${topic.description}" deleted`)
        })  

        // const editButton = document.createElement("button")
        // editButton.innerText = "update"
        // const updatedTopic = this.topicInput
        // updatedTopic.addEventListener("change", () => {
        //     // this.adapter.updateTopic(topic.id)
        //     this.topicInput = updatedTopic
        // })

        topicDiv.appendChild(topicContent)
        topicDiv.appendChild(deleteButton)
        // topicDiv.appendChild(editButton)
        this.topicsContainer.appendChild(topicDiv)
    
    }

    getPosts() {
        return fetch(this.baseUrl, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => data.forEach(post => {
            console.log(post)
            this.displayPost(post)
        }))
    }

    displayPost = (post) => {
        const postDiv = document.createElement("div")
        const postContent = document.createElement("h2")
        postContent.innerText = post.content 
        // postContent.setAttribute("contenteditable", "true")
        // const postDeleteButton = document.createElement("button")
        // postDeleteButton.innerText = "delete"
        // postDeleteButton.addEventListener("click", () {
        //     this.adapter.
        // })
        postDiv.appendChild(postContent)
        this.postContainer.appendChild(postDiv)
    }
}
//
// checkforPosts(){
//     if topic.posts.length > 0{
//         posts.forEach(post => {
//             postModel = new Post(post)
//             postModel.display
//         })
//     }
// }