class Post {
     
    constructor(id, topic_id, content) {
        this.posts = [];
        this.id = id;
        this.topic_id = topic_id;
        this.content = content;
        // this.adapter = new PostAdapter() 
        // this.postBindingsAndEventListeners()
        // this.fetchAndLoadPosts()
        this.fetchPosts();
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
        .then(data => {
            console.log(data)
            renderPosts()
        })
    }

    renderPosts(posts) {
        const postDiv = document.createElement("div")
        posts.forEach(post => {
            const postContent = document.createElement("p")
            postContent.innerHTML = post.content
            postDiv.appendChild(p)
            this.postContainer.appendChild(postDiv)
        })
    }
}