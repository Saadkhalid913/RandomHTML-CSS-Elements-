function Post (img_src, description = "", author = "unknown", time_posted) {
  if (time_posted === null || time_posted === undefined) 
    time_posted = new Date().getTime()
 
  this.img_src = img_src
  this.description = description
  this.author = author 
  this.time_posted = time_posted

  localStorage.setItem(time_posted, JSON.stringify(this))

  return this 
}

function MakePostElement(Post) {
  if (typeof Post !== "object") {
    return
  }

  let postWrapper = document.createElement("div")
  postWrapper.className = "feed-post"
  
  let imgTag = document.createElement("img")
  imgTag.src = Post.img_src
  
  let linkTag = document.createElement("a")
  linkTag.appendChild(imgTag)
  linkTag.href = "./post.html?id=" + Post["time_posted"]
  linkTag.target = "_blank";
  

  
  postWrapper.appendChild(linkTag)
  return postWrapper
}


function AddPostToFeed(Post) {
  if (typeof Post !== "object") {
    return
  }

  let newHTMLPost = MakePostElement(Post)
  document.getElementById("news-feed").appendChild(newHTMLPost)
  
}

function DirectAdd (src, desc, author) {
  let post = new Post(src, desc, author)
  if (!src) 
    return null
  console.log(arguments);
  AddPostToFeed(post)
}

function AddPost (){
  // let src = document.getElementById("file-path-box").value

  const FileBox = document.getElementById("file-box");
  const reader = new FileReader()
  let src;

  let desc = document.getElementById("description-box").value
  let author = document.getElementById("author-box").value

  document.getElementById("author-box").textContent = ""
  document.getElementById("description-box").textContent = ""
  document.getElementById("post-add-header").style.top = "-30%"

  reader.addEventListener("load", function(){
    src = reader.result
    DirectAdd(src, desc, author)
    
  })
  
  reader.readAsDataURL(FileBox.files[0])
  
}

function revealHeader() {
  document.getElementById("post-add-header").style.top = "0%"
}