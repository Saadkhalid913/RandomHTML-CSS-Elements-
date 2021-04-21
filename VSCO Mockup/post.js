function toDateTime(secs) {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
}

function Render(post_img_path, description, author, time_posted) {
  const IMGContainer = document.getElementById("post-image");
  const DescriptionContainer = document.getElementById("description");
  const TimePostedContainer = document.getElementById("time");
  const AuthorContainer = document.getElementById("author");
  IMGContainer.setAttribute("src", post_img_path);
  DescriptionContainer.appendChild(document.createTextNode(description));
  TimePostedContainer.appendChild(document.createTextNode(toDateTime(time_posted / 1000)));
  AuthorContainer.appendChild(document.createTextNode(author))


}

function GetPostInfo (post_id) {
  post_JSON = JSON.parse(localStorage.getItem(post_id))
  img_path = post_JSON["img_src"]
  description = post_JSON["description"]
  author = post_JSON["author"]
  time_posted = post_JSON["time_posted"]

  return [img_path, description, author, time_posted]
}

const URLparams = new URLSearchParams(window.location.search);
post_id = URLparams.get('id')

Render(...GetPostInfo(post_id))
