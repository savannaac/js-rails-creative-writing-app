class Post {
     
    constructor() {
        this.posts = []
        this.adapter = new PostAdapter() 
        // this.postBindingsAndEventListeners()
        this.fetchAndLoadPosts()
        this.postContainer = document.getElementById("posts")
    }

    fetchAndLoadPosts() {
        this.adapter.getPosts()
            .then(data => data.forEach(post => {
                this.displayPost(post)
                // topicModel = new Topic(topic)
                // topicModel.display
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