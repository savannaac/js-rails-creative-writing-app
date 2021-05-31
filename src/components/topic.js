class Topic {
    constructor(topicJSON) {
        this.body = topicJSON.body
        this.id = topicJSON.id
    }
  
    renderShow() {
        return `<h3>${this.body}</h3>`
    }
  
    render() {
        return `<li data-noteid="${this.id}" data-props="${JSON.stringify(this)}" class="topic-element"><a class="show-link" href="#">${this.body}</a> <button data-action="edit-topic">edit</button> <i data-action="delete-topic" class="em em-scream_cat"></i></li>`
    }
  }
  