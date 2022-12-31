function displayAbbr() {
  // 兼容性检查
  if (
    !document.querySelectorAll ||
    !document.createTextNode ||
    !document.createElement
  )
    return false;
  // 取得所有缩略词
  const abbrs = document.querySelectorAll("abbr");
  if (abbrs.length < 1) return false;
  // 获取缩略词数组
  const defs = {};
  for (const abbr of abbrs) {
    if (abbr.childNodes.length < 1) continue; // 兼容IE，因为IE不识别abbr元素
    const def = abbr.getAttribute("title");
    const key = abbr.lastChild.nodeValue;
    defs[key] = def;
  }
  // 创建定义列表
  const dlist = document.createElement("dl");
  // 将缩略词填入定义列表
  Object.entries(defs).forEach(([key, def]) => {
    // 创建定义标题
    const dtitle = document.createElement("dt");
    const dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);
    // 创建定义描述
    const ddesc = document.createElement("dd");
    const ddesc_text = document.createTextNode(def);
    ddesc.appendChild(ddesc_text);
    // 将它们填入定义列表
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  });
  if (dlist.childNodes.length < 1) return false; // 兼容IE，因为IE不识别abbr元素
  // 创建标题
  const header = document.createElement("h2");
  const header_text = document.createTextNode("Abbreviations");
  header.appendChild(header_text);
  // 将标题和列表添加入页面主体
  document.body.appendChild(header);
  document.body.appendChild(dlist);
}

addLoadEvent(displayAbbr);
