function GenerateTweet(HeadingText, BodyText) {
  let tweet = document.createElement("div");
  tweet.className = "Tweet"
  let header = CreateHeader(HeadingText);
  let body = CreateBody(BodyText); 
  let date = CreateDate();
  tweet.appendChild(header);
  tweet.appendChild(body);
  tweet.appendChild(date)
  return tweet;
}

function CreateDate() {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  
  console.log(today)
  let DateWrapper = document.createElement("div");
  DateWrapper.className = "tweet-date";
  let datepara = document.createElement("p");
  let date = document.createTextNode(today)
  datepara.appendChild(date)
  DateWrapper.appendChild(datepara);
  console.log(DateWrapper)
  return DateWrapper;

}

function CreateHeader(text) {
  let header = document.createElement("div")
  header.className = "tweet-header";
  let headerH3 = document.createElement("p");
  let headertext = document.createTextNode(text);
  headerH3.appendChild(headertext);
  header.appendChild(headerH3);
  return header;

}

function CreateBody(text) {
  let body = document.createElement("div")
  body.className = "tweet-body";
  let bodyPara = document.createElement("p");
  let bodytext = document.createTextNode(text);
  bodyPara.appendChild(bodytext);
  body.appendChild(bodyPara);
  return body;

}

function sendTweet() {
  let TweetHeading = document.getElementById("Title-textbox").value
  let TweetBody = document.getElementById("Body-textbox").value
  let Feed = document.getElementById("TweetFeed")
  Feed.prepend(GenerateTweet(TweetHeading, TweetBody))
}
