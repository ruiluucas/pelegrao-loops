const treeNumber = prompt("Diga o bendito número:");
const element = document.getElementById("div1");

for (let i = 1; i <= treeNumber; i++) {
  const p = document.createElement("p");

  const treeBody = "#".repeat(i);

  const node = document.createTextNode(treeBody);
  p.appendChild(node);
  element.appendChild(p);
}
