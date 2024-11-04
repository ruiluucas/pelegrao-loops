const treeNumber = parseInt(prompt("Diga o bendito número:"), 10);
const element = document.getElementById("div1");

for (let i = 1; i <= treeNumber + Math.floor(treeNumber / 2); i++) {
  const p = document.createElement("p");

  const treeBody = i > treeNumber ? "##" : "#".repeat(i);

  const node = document.createTextNode(i === 1 ? "%" : treeBody);
  p.appendChild(node);
  element.appendChild(p);
}
