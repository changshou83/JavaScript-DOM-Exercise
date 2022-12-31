function highlightPage() {
  if (!document.querySelector || !document.querySelectorAll) return false;

  const headers = document.querySelectorAll("header");
  if (headers.length == 0) return false;
  const navs = headers[0].querySelectorAll("nav");
  if (navs.length == 0) return false;

  const links = navs[0].querySelectorAll("a");
  let linkurl;
  for (const link of links) {
    linkurl = link.getAttribute("href");
    if (window.location.href.indexOf(linkurl.slice(2)) != -1) {
      link.className = "here";
      const linktext = link.lastChild.nodeValue.toLowerCase();
      document.body.setAttribute("id", linktext);
    }
  }
}

addLoadEvent(highlightPage);
