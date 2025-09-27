// ========================================
// ================Script==================
// ========================================

const listData = ["alex", "hamza", "jamal"]; //This is the list data
const listId = document.getElementById("myList"); //This is the list element
// THis should run every time listData is changed
function updatedList() {
  const bunchaLi = listData.map((item) => {
    //This renders the list by adding aelements for each item in the list
    // return `<li>${item}</li>`
    const li = document.createElement("li");
    li.innerText = item;
    return li;
  });
  listId.replaceChildren(...bunchaLi);
}

//Setup the list on the first run
updatedList();

///When you press a button linked to this function, it executes, adding a name to the list above.
function addName(name) {
  if (!name) return;
  listData.push(name);
  if (listData.length > 0) {
    const warningDiv = document.getElementById("warning");
    warningDiv.classList.add("displaynone");
  }
  updatedList();
}

//When a button is pressed, this function will remove the last name in the list, IF there are any items in the list
function removeLastName() {
  if (listData.length <= 0) {
    const warningDiv = document.getElementById("warning");
    warningDiv.classList.remove("displaynone");
    return;
  }
  listData.pop();
  updatedList();
}

// ============ JS CHALLENGES ============
// 1. Make a button that hides and shows an image
// 2. Make a button that toggles the image between two or more images
// 3. Make a two text input that accept numbers between 0 and 100. Add a button to sum the two numbers and display the answer.

// Store source of all images we want to rotate through
const imgSrcList = {
  img_1: "assets/images/desert-life.jpg",
  img_2: "assets/images/lady-with-flowers.jpg",
  img_3: "assets/images/monkey-smiling.jpg",
  img_4: "assets/images/man-laying-down.jpg",
  img_5: "assets/images/monkey-yawning.jpg",
};
const imageID = document.getElementById("imageID");

// sets the initial src of the image
imageID.src = imgSrcList.img_1;

// when "Toggle Image" btn is pressed, this function shows and hides the image below
function toggleImage() {
  imageID.classList.toggle("displaynone");
}

let imgIndex = 1;

// Update the src attribute of the img with the imgSrcList[imgIndex]
function updateSrc() {
  if (imgIndex < Object.keys(imgSrcList).length) {
    imgIndex = imgIndex += 1;
    console.log(
      `Image Index: ${imgIndex} imgSrcList.length: ${Object.keys(imgSrcList).length
      }`
    );

    imageID.src = imgSrcList[`img_${imgIndex}`];
  } else {
    imageID.src = imgSrcList['img_1'];
    imgIndex = 1;
  }
}

function addNumbers() {
  // getting the values from input fields
  const firstNumValue = document.getElementById("firstNumber").value;
  const secNumValue = document.getElementById("secondNumber").value;

  // turn the value into int
  const firstNumber = parseFloat(firstNumValue);
  const secondNumber = parseFloat(secNumValue);

  // calculate the sum
  const sum = firstNumber + secondNumber;

  // output the sum and create body tag
  const resultSumElement = document.createElement("p");
  resultSumElement.textContent = `The sum is: ${sum}`
  document.body.appendChild(resultSumElement)
}

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addNumbers)

// CORRECT SYNTAX
// imageID.src = imgSrcList["img_4"]
// console.log(imgSrcList["img_4"]);

// 3. Make a two text input that accept numbers between 0 and 100. Add a button to sum the two numbers and display the answer.

// ============ MDN DOCS EXAMPLE ============
// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }
