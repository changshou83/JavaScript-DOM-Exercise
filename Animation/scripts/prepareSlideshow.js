function prepareSlideshow() {
  if (
    !document.querySelectorAll ||
    !document.querySelector ||
    !document.createElement
  )
    return false;
  // 确保元素存在
  const linklist = document.querySelector("#linklist");
  const links = document.querySelectorAll("a");
  if (!linklist || !links) return false;
  // 创建元素
  const slideshow = document.createElement("div");
  slideshow.setAttribute("id", "slideshow");
  const preview = document.createElement("img");
  preview.setAttribute("src", "./images/topics.jpeg");
  preview.setAttribute("alt", "building blocks of web design");
  preview.setAttribute("id", "preview");
  slideshow.appendChild(preview);
  insertAfter(slideshow, linklist);
  // 为mouseover事件添加动画效果
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => {
      moveElement("preview", -100 * (i + 1), 0);
    });
  }
}

addLoadEvent(prepareSlideshow);
