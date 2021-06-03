class Topic {

    constructor(data) {
        console.log(data)
        // debugger;
        this.description = data.description
        this.id = data.id
    }

    renderHTML() {
        return `<p>${this.description}</p>`
    }

    render() {
        return `<li data-topicid='${this.id}' data-props='${JSON.stringify(
          this
        )}' class='topic-element'><a class="show-link" href='#'>${
          this.description
        }</a> <button data-action='edit-topic'>ddit</button> <i data-action='delete-topic' class="em em-scream_cat"></i></li>`
      }
}