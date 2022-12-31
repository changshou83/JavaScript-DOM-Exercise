function prepareSlideshow() {
  if (
    !document.querySelectorAll ||
    !document.querySelector ||
    !document.createElement
  )
    return false;
  // 确保元素存在
  const intro = document.querySelector("#intro");
  const links = document.querySelectorAll("a");
  if (!intro || !links) return false;
  // 创建元素
  const slideshow = document.createElement("div");
  slideshow.setAttribute("id", "slideshow");
  // 幻灯片边框图
  const frame = document.createElement("img");
  frame.setAttribute("src", "./images/frame.gif");
  frame.setAttribute("alt", "a glimpse of what awaits you");
  frame.setAttribute("id", "frame");
  slideshow.appendChild(frame);
  // 幻灯片图片
  const preview = document.createElement("img");
  preview.setAttribute("src", "./images/slideshow.gif");
  preview.setAttribute("alt", "building blocks of web design");
  preview.setAttribute("id", "preview");
  slideshow.appendChild(preview);
  // 插入intro
  insertAfter(slideshow, intro);
  // 为mouseover事件添加动画效果
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", () => {
      moveElement("preview", -150 * i, 0);
    });
  }
}

addLoadEvent(prepareSlideshow);
