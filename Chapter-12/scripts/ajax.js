function displayAjaxLoading(element) {
  // Remove the existing content.
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild);
  }
  //  Create a loading image.
  var content = document.createElement("img");
  content.setAttribute("id", "loading-img");
  content.setAttribute("src", "./images/loading.gif");
  content.setAttribute("alt", "Loading...");
  // Append the loading element.
  element.appendChild(content);
  return () => {
    const loading = element.querySelector("#loading");
    if (loading) {
      element.removeChild(loading);
    }
  };
}

function submitFormWithAjax(whichform, thetarget) {
  var request = new XMLHttpRequest();
  if (!request) return false;
  // Display a loading message.
  const removeLoading = displayAjaxLoading(thetarget);
  // Collect the data.
  const dataParts = [];
  for (const element of whichform.elements) {
    dataParts.push(element.name + "=" + encodeURIComponent(element.value));
  }
  const data = dataParts.join("&");
  const url = whichform.getAttribute("action");
  // 配置请求参数
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // 请求处理函数
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      if (request.status == 200 || request.status == 0) {
        const matches = request.responseText.match(
          /<article>([\s\S]+)<\/article>/
        );
        thetarget.innerHTML =
          matches.length > 0
            ? matches[1]
            : "<p>Oops, there was an error. Sorry.</p>";
      } else {
        thetarget.innerHTML = "<p>" + request.statusText + "</p>";
      }
      removeLoading();
    }
  };
  // send data
  request.send(data);
  return true;
}
