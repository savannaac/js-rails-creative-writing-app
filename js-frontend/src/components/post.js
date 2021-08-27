class Post {
     
    constructor(post) {
        // console.log(post)
        this.id = post.id;
        this.topic_id = post.topic_id;
        this.content = post.content;
        this.created_at = post.created_at;
        this.updated_at = post.updated_at;
        // this.nodesAndEventListeners();
        this.fetchPosts();
        // this.createPost();
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
    //     content.preventDefault();
    //     // const post = { content: document.getElementById("post-input").value }

    //     fetch("http://127.0.0.1:3000/api/v1/posts"), {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({ content })
    //     }
    //     .then(res => res.json())
    //     .then(post => {
    //         if (post.content) {
    //             console.log(post)
    //         } else {
    //             alert(post.errors)
    //         }
    //         // data.render()
    //     })
    // } 

    render() {
        const postDiv = document.createElement("div")
        const postContent = document.createElement("p")
        postContent.innerText = this.content

        postDiv.appendChild(postContent)
        return postDiv
    }
}