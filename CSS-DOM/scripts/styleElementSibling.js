function styleElementSibling(tag, className) {
  if (!document.querySelectorAll) return false;
  const list = document.querySelectorAll(tag);
  let elem;
  for (const item of list) {
    elem = getNextElement(item.nextSibling);
    if (elem) {
      // 1.dom操作css
      // elem.style.fontWeight = "bold";
      // elem.style.fontSize = "1.2em";
      // 2.dom切换类名
      addClass(elem, className);
    }
  }
}
