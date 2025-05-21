const categoryList = document.querySelector("#categories");
const categoryItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryList.children.length}`);
categoryItem.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("ul li").length}`);
});
