const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = getComputedStyle(items);


// rightBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   let currentRight = parseInt(computedStyles.right);
//   console.log(currentRight)
//   if (currentRight < 500) {
//     items.style.right = `${currentRight + 100}px`;
//   }
// });
// leftBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   let currentRight = parseInt(computedStyles.right);
//   if (currentRight > 0) {
//     items.style.right = `${currentRight - 100}px`;
//   }
// });


const loop = (direction,e)=>{
  e.preventDefault();
  if(direction === 'right'){
    items.appendChild(items.firstElementChild)
  }else{
  items.insertBefore(items.lastElementChild, items.firstElementChild)
  }
}
rightBtn.addEventListener("click", function (e) {

  loop('rigth',e)
}
)

leftBtn.addEventListener("click", function (e) {

  loop('left',e)
}
)