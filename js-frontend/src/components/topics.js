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
        const topicId = topic.id
        const topicDiv = document.createElement("div")
        topicDiv.className = "topic"
        const topicContent = document.createElement("h2")
        topicContent.innerText = topic.description
        // topicContent.setAttribute("contenteditable", "true")

        const topicDeleteButton = document.createElement("button")
        topicDeleteButton.innerText = "delete topic"
        topicDeleteButton.addEventListener("click", () => {
            this.adapter.deleteTopic(topic.id)
            topicDiv.remove()
            alert(`"${topic.description}" deleted`)
        })
        //// deleteButton.appendChild(document.createElement("br"))

        // handles each topic's post(s)
        
        const postsDiv = document.createElement("div")
        postsDiv.id = `posts-div-${topicId}`
        topic.posts.forEach((post) => {
            const postDiv = new Post(post).render();
            postsDiv.appendChild(postDiv)
        });

        const postForm = document.createElement("form")
        postForm.id = `post-form-${topicId}`
        const postInput = document.createElement("input")
        postInput.id = `post-input-${topicId}`
        const postSubmitButton = document.createElement("button")
        postSubmitButton.innerText = "create post"
        postSubmitButton.addEventListener("click", (e) => {
            e.preventDefault();
        
            const postInput = document.getElementById(`post-input-${topicId}`).value
            
            const post = { 
                topic_id: topicId,
                content: postInput}

            // console.log(post)
            fetch("http://127.0.0.1:3000/api/v1/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(post)
            })
            .then(res => res.json())
            .then(data => { return data })
            .then(post => {
                // console.log(post)
                this.topics.push(new Post(post))
                if (post.content) {
                    // debugger;
                    // console.log(post.content)
                    const postsDiv = document.getElementById(`posts-div-${topicId}`)
                    // console.log(postsDiv)
                    const postText = document.createElement("p")
                    postText.innerText = post.content

                    postsDiv.appendChild(postText)

                    const postForm = document.getElementById(`post-form-${topicId}`)
                    // console.log(postForm)
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
        topicDiv.appendChild(topicDeleteButton)
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