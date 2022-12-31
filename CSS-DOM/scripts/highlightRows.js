function highlightRows() {
  if (!document.querySelectorAll) return false;
  const rows = document.querySelectorAll("tr");
  for (const row of rows) {
    row.addEventListener("mouseover", () => {
      row.style.fontWeight = "bold";
    });
    row.addEventListener("mouseout", () => {
      row.style.fontWeight = "normal";
    });
  }
}

addLoadEvent(highlightRows);
