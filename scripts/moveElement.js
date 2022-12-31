function moveElement(elemId, finalX, finalY, interval) {
  if (!document.querySelector || !window.requestAnimationFrame) return false;
  // 确保元素存在
  const elem = document.querySelector(`#${elemId}`);
  if (!elem) return false;
  // 防抖
  if (elem.movement) {
    interval
      ? clearTimeout(elem.movement)
      : cancelAnimationFrame(elem.movement);
  }
  // 动画逻辑
  let posX = parseInt(elem.style.left || 0);
  let posY = parseInt(elem.style.top || 0);
  if (posX === finalX && posY === finalY) return true;
  const distX = Math.ceil(Math.abs(finalX - posX) / 10);
  const distY = Math.ceil(Math.abs(finalY - posY) / 10);
  posX += posX < finalX ? distX : -distX;
  posY += posY < finalY ? distY : -distY;
  elem.style.left = posX + "px";
  elem.style.top = posY + "px";
  // 防抖
  elem.movement = interval
    ? setTimeout(() => moveElement(elemId, finalX, finalY, interval), interval)
    : requestAnimationFrame(() => moveElement(elemId, finalX, finalY));
}
