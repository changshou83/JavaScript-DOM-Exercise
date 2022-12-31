function stripeTables() {
  if (!document.querySelectorAll) return false;
  const tables = document.querySelectorAll("table");
  let rows;
  for (const table of tables) {
    rows = table.querySelectorAll("tr");
    for (let i = 0; i < rows.length; i++) {
      if (i % 2 !== 0) {
        addClass(rows[i], "odd");
      }
    }
  }
}

addLoadEvent(stripeTables);
