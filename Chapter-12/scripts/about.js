function showSection(id) {
  const sections = document.querySelectorAll("section");
  for (const section of sections) {
    section.style.display =
      section.getAttribute("id") === id.slice(1) ? "block" : "none";
    console.log(section.style.display);
  }
}
function prepareIntervalnav() {
  if (!document.querySelector || !document.querySelectorAll) return false;
  // 获取元素
  const articles = document.querySelectorAll("article");
  if (articles.length === 0) return false;
  const navs = articles[0].querySelectorAll("nav");
  if (navs.length === 0) return false;
  const links = navs[0].querySelectorAll("a");
  // 遍历nav下的a标签
  for (const link of links) {
    const sectionId = link.getAttribute("href");
    const section = document.querySelector(sectionId);
    if (!section) continue;
    section.style.display = "none";
    link.dest = sectionId;
    link.addEventListener("click", () => {
      showSection(link.dest);
      return false;
    });
  }
}

addLoadEvent(prepareIntervalnav);
