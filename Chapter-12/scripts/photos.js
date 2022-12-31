function preparePlaceholder() {
  if (
    !document.querySelector ||
    !document.createElement ||
    !document.createTextNode
  )
    return false;

  const placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", "images/placeholder.gif");
  placeholder.setAttribute("alt", "my image gallery");
  const description = document.createElement("p");
  description.setAttribute("id", "description");
  const descText = document.createTextNode("Choose an image.");
  description.appendChild(descText);
  const gallery = document.querySelector("#imagegallery");
  if (gallery) {
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
  }
}
function prepareGallery() {
  if (!document.querySelector || !document.querySelectorAll) return false;

  const gallery = document.querySelector("#imagegallery");
  if (gallery) {
    const list = gallery.querySelectorAll("a");
    for (const item of list) {
      const fn = (event) => {
        showPic(item) && event.preventDefault();
      };
      item.addEventListener("click", fn);
      item.addEventListener("keypress", fn);
    }
  }
}
function showPic(whichpic) {
  const placeholder = document.querySelector("#placeholder");
  const description = document.querySelector("#description");
  if (!placeholder || placeholder.nodeName !== "IMG") return false;
  if (!description || description.firstChild.nodeType !== 3) return false;

  placeholder.setAttribute("src", whichpic.getAttribute("href"));
  const text = whichpic.getAttribute("title")
    ? whichpic.getAttribute("title")
    : "";
  description.firstChild.nodeValue = text;
  return true;
}

addLoadEvent(() => {
  preparePlaceholder();
  prepareGallery();
});
