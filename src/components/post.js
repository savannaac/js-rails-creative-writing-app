class Post {
     
    constructor(data) {
        this.posts = [];
        this.id = data.id;
        this.topic_id = data.topic_id;
        this.content = data.content;
        // this.adapter = new PostAdapter() 
        // this.postBindingsAndEventListeners()
        // this.fetchAndLoadPosts()
        this.nodesAndEventListeners();
        this.fetchPosts();
    }

    nodesAndEventListeners() {
        this.postContainer = document.getElementById("posts");
    }

    fetchPosts() {
        return fetch("http://127.0.0.1:3000/api/v1/posts", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => data.forEach(post => {
            console.log(post)
            this.renderPosts(post)
        }))
    }

    renderPosts = (post) => {
        const postDiv = document.createElement("div")
        const postContent = document.createElement("p")
        postContent.innerText = post.content
        
        postDiv.appendChild(postContent)
        this.postContainer.appendChild(postDiv)
    }
}