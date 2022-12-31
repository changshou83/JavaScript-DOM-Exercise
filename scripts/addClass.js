function addClass(elem, className) {
  if (!elem.className) {
    elem.className = className;
  } else {
    const newName = elem.className + " " + className;
    elem.className = newName;
  }
}
