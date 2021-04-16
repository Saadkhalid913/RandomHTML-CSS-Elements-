function Post (img_src, description, author, time_posted) {
  if (time_posted === null || time_posted === undefined) 
    time_posted = new Date().getTime

  this.img_src = img_src
  this.description = description
  this.author = author 
  this.description = description
  return this 
}

function MakePostElement(Post) {
  if (typeof Post !== "object") {
    return
  }

  console.log("MAKING POST")
  let postWrapper = document.createElement("div")
  postWrapper.className = "feed-post"
  
  let imgTag = document.createElement("img")
  imgTag.src = Post.img_src
  
  console.log("img", imgTag)
  let linkTag = document.createElement("a")
  linkTag.appendChild(imgTag)

  console.log("linktag", linkTag)
  
  postWrapper.appendChild(linkTag)
  console.log("Post", postWrapper)
  return postWrapper
}


function AddPostToFeed(Post) {
  if (typeof Post !== "object") {
    return
  }

  let newHTMLPost = MakePostElement(Post)
  console.log(newHTMLPost)
  document.getElementById("news-feed").appendChild(newHTMLPost)
  
}

function DirectAdd (src, desc, author) {
  let post = new Post(src, desc, author)
  AddPostToFeed(post)
}