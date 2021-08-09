class Topics {

    constructor(id, description) {
        this.baseUrl = "http://127.0.0.1:3000/api/v1/posts";
        this.topics = [];
        this.adapter = new TopicsAdapter();
        this.id = id;
        this.description = description;
        // this.post = post
        this.bindingsAndEventListeners();
        this.fetchAndLoadTopics();
    }

    bindingsAndEventListeners() {
        this.topicForm = document.getElementById("topic-form");
        this.topicInput = document.getElementById("topic-input");
        this.topicNode = document.getElementById("topic-form-container");
        this.topicsContainer = document.getElementById("topics");

        this.postContainer = document.getElementById("posts");

        this.topicForm.addEventListener("submit", this.addTopic);
        // this.topicNode.addEventListener("click", this.deleteTopic.bind(this))
    }

    fetchAndLoadTopics() {
        this.adapter.getTopics()
            .then(data => data.forEach(topic => {
                // console.log(data)
                this.displayTopic(topic)
                this.topics.push(new Post(topic))
                // make topicDiv 

                // if (topic.posts.length > 0) {
                //     this.fetchAndLoadPosts()
                //     // Topic.posts.forEach((post) => {
                //     //     this.displayPost(post)
                //     // })
                // }
                // topicModel = new Topic(topic)
                // topicModel.display
            }))
    }

    // fetchAndLoadPosts() {
    //     Topic.posts.forEach(post => {
    //         console.log(post)
    //         // this.displayPost(post)
    //     })
    // }

    addTopic = (e) => { 
        e.preventDefault()

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

    createPosts() {
        let postArray = []
        for (let post of posts) {
            postArray.push(post.content)
        }
        return postArray
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