class Posts {
  constructor (data = [], wrap) {
    this.data = data
    this.wrap = wrap

    this._init()
  }

  _init () {
    this._render()
  }

  _templatePost ({ title, content }) {
    const template = `
      <div class="card m-2" style="width: 200px;">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${content}</p>
        </div>
      </div>
    `

    return template
  }

  _templatePosts () {
    let template = ''

    this.data.forEach((item) => {
      template = template + this._templatePost(item)
    })

    return template
  }

  _render() {
    if (this.wrap) {
      this.wrap.innerHTML = this._templatePosts()
    }
  }
}

export { Posts }
