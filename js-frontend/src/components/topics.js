class Topics {

    constructor(id, description) {
        this.topics = [];
        this.adapter = new TopicsAdapter();
        this.id = id;
        this.description = description;
        this.bindingsAndEventListeners();
        this.fetchAndLoadTopics();
    }

    bindingsAndEventListeners() {
        this.topicForm = document.getElementById("topic-form");
        this.topicInput = document.getElementById("topic-input");
        this.topicNode = document.getElementById("topic-form-container");
        this.topicsContainer = document.getElementById("topics");
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
        deleteButton.innerText = "delete topic"
        deleteButton.addEventListener("click", () => {
            this.adapter.deleteTopic(topic.id)
            topicDiv.remove()
            alert(`"${topic.description}" deleted`)
        })
        // deleteButton.appendChild(document.createElement("br"))
        
         const postsDiv = document.createElement("div")
        topic.posts.forEach((post) => {
            const postDiv = new Post(post).render();
            postsDiv.appendChild(postDiv)
        });
        const topicId = topic.id
        const postForm = document.createElement("form")
        postForm.id = "post-form"
        const postInput = document.createElement("input")
        postInput.id = `post-input-${topicId}`
        const postSubmitButton = document.createElement("button")
        postSubmitButton.innerText = "create post"
        postSubmitButton.addEventListener("click", (e) => {
            e.preventDefault();
            // const postInputValue = document.getElementById("post-input").value
            // this.topics.push(new Post(postInputValue).createPost())
                // if (post.content) {
                //     const postForm = document.getElementById("post-form")
                //     postForm.reset()
                // } else {
                //     alert(post.errors)
                // }
            const postInput = document.getElementById(`post-input-${topicId}`).value
            // const topicId = e.target.dataset.topicId
            const post = { 
                topic_id: topicId,
                content: postInput}

            console.log(post)
            fetch("http://127.0.0.1:3000/api/v1/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(post)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .then(post => {
                console.log(post)
                this.topics.push(new Post(post))
                if (post.content) {
                    const postForm = document.getElementById("post-form")
                    postForm.reset()
                } else {
                    alert(post.errors)
                }
            })
        })
        
        postForm.appendChild(postInput)
        postForm.appendChild(postSubmitButton)

        // const editButton = document.createElement("button")
        // editButton.innerText = "update"
        // const updatedTopic = this.topicInput
        // updatedTopic.addEventListener("change", () => {
        //     // this.adapter.updateTopic(topic.id)
        //     this.topicInput = updatedTopic
        // })

        topicDiv.appendChild(topicContent)
        topicDiv.appendChild(deleteButton)
        topicDiv.appendChild(postsDiv)
        topicDiv.appendChild(postForm)
        // topicDiv.appendChild(editButton)
        this.topicsContainer.appendChild(topicDiv)
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