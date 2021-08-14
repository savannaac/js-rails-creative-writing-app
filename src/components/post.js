class Post {
     
    constructor(post) {
        this.id = post.id;
        this.topic_id = post.topic_id;
        this.content = post.content;
        // this.adapter = new PostAdapter() 
        // this.postBindingsAndEventListeners()
        // this.fetchAndLoadPosts()
        // this.nodesAndEventListeners();
        this.fetchPosts();
    }

    // nodesAndEventListeners() {
    //     this.postContainer = document.getElementById("posts");
    // }

    fetchPosts() {
        return fetch("http://127.0.0.1:3000/api/v1/posts", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => data.forEach(post => {
            // console.log(post)
            this.render(post)
        }))
    }

    // createPost(content) {
    //     const postCreateParams = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ content })
    //     }
    //     return fetch("http://127.0.0.1:3000/api/v1/posts", postCreateParams).then(res => res.json())
    // } 

    render() {
        const postDiv = document.createElement("div")
        const postContent = document.createElement("p")
        postContent.innerText = this.content

        postDiv.appendChild(postContent)
        return postDiv
    }
}