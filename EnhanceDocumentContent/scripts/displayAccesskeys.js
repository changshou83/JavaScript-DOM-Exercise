function displayAccesskeys() {
  // 兼容性检查
  if (
    !document.querySelectorAll ||
    !document.createElement ||
    !document.createTextNode
  )
    return false;
  // 获取链接
  const links = document.querySelectorAll("a");
  const keys = new Map();
  for (const link of links) {
    const key = link.getAttribute("accesskey");
    if (!key) continue;
    const text = link.lastChild.nodeValue;
    keys.set(key, text);
  }
  // 创建列表
  const list = document.createElement("ul");
  for (const [key, text] of keys.entries()) {
    const item = document.createElement("li");
    const item_text = document.createTextNode(`${key}：${text}`);
    item.appendChild(item_text);
    list.appendChild(item);
  }
  // 创建标题
  const header = document.createElement("h3");
  const header_text = document.createTextNode("Accesskeys");
  header.appendChild(header_text);
  // 将它们添加到body中
  document.body.appendChild(header);
  document.body.appendChild(list);
}

addLoadEvent(displayAccesskeys);
