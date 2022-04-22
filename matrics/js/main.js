let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffle(arr1) {
  let cntrl = arr1.length;
  let temp, index;
  while (cntrl > 0) {
    index = Math.floor(Math.random() * cntrl);
    cntrl--;
    temp = arr1[cntrl];
    arr1[cntrl] = arr1[index];
    arr1[index] = temp;
  }
  return arr1;
}

function createMatricsNode(arr) {
  let backgroundColorStyles = [
    "#536267",
    "#EFFEFE",
    "#2B&EAD",
    "#333333",
    "#6F98A8",
    "#EFFEFE",
    "#BFBFBF",
    "#EFEFEF",
    "#2F454E",
    "#333333",
    "#72C3DC"]
  const element = document.querySelector(".grid-container");
  let child = element.lastElementChild;
  while (child) {// remove child elements before creating new 
    element.removeChild(child);
    child = element.lastElementChild;
  }
  let i = 1;
  while (i <= arr.length) { // create new child elememts
    const e = document.createElement('div');
    e.className = "item";
    e.innerHTML = arr[i - 1];
    e.style.backgroundColor = backgroundColorStyles[i - 1];
    element.appendChild(e);
    i++;
  }
}

function onInit() {
  createMatricsNode(arr);
  document.getElementById("sortBox").addEventListener('click', () => {
    const sortedArr = arr.sort((a, b) => a - b);
    createMatricsNode(sortedArr);;
  })
  document.getElementById("shuffleBox").addEventListener('click', () => {
    createMatricsNode(shuffle(arr));
  })
}
onInit();