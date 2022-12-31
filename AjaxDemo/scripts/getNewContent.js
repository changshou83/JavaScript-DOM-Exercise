function getNewContent() {
  const request = new XMLHttpRequest();
  if (request) {
    request.open("GET", "example.txt", true);
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        const params = document.createElement("p");
        const txt = document.createTextNode(request.responseText);
        params.appendChild(txt);
        document.getElementById("new").appendChild(params);
      }
    };
    request.send(null);
  } else {
    alert("Sorry, your browser doesn't support XMLHttpRequest");
  }
}
addLoadEvent(getNewContent);
