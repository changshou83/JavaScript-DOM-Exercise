function positionMessage() {
  if (!document.querySelector) return false;
  const elem = document.querySelector(`#message`);
  if (!elem) return false;
  elem.style.position = "absolute";
  moveElement("message", 500, 100);
}

addLoadEvent(positionMessage);
