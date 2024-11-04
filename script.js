const treeNumber = prompt("Diga o bendito número:");
const element = document.getElementById("div1");

for (let i = 1; i <= treeNumber; i++) {
  const p = document.createElement("p");

  let treeBody = "";
  for (let j = 0; j < i; j++) {
    treeBody += "#";
  }

  const node = document.createTextNode(treeBody);
  p.appendChild(node);
  element.appendChild(p);
}
