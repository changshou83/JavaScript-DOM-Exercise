function displayCitations() {
  const quotes = document.querySelectorAll("blockquote");
  for (const quote of quotes) {
    const url = quote.getAttribute("cite");
    if (!url) continue;
    const quoteChildren = quote.querySelectorAll("*");
    if (quoteChildren.length < 1) continue;
    // 获取引用中的最后一个元素节点
    const elem = quoteChildren[quoteChildren.length - 1];
    // 创建标记
    const link = document.createElement("a");
    const link_text = document.createTextNode("source");
    link.appendChild(link_text);
    link.setAttribute("href", url);
    const superscript = document.createElement("sup");
    superscript.appendChild(link);
    // 将标题添加到引用中的最后一个元素节点
    elem.appendChild(superscript);
  }
}

addLoadEvent(displayCitations);
