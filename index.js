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
// 1. Make a button that hides and shows an image -- COMPLETE
// 2. Make a button that toggles the image between two or more images -- COMPLETE
// 3. Make a two text input that accept numbers between 0 and 100. Add a button to sum the two numbers and display the answer. -- IN PROGRESS

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

    imageID.src = imgSrcList[`img_${imgIndex}`];
  } else {
    imageID.src = imgSrcList["img_1"];
    imgIndex = 1;
  }
}

function addNumbers() {
  // getting the values from input fields + result
  const firstNumValue = document.getElementById("firstNumber").value;
  const secNumValue = document.getElementById("secondNumber").value;
  const result = document.getElementById("result");

  // turn the value into int
  const firstNumber = parseFloat(firstNumValue);
  const secondNumber = parseFloat(secNumValue);

  // calculate the sum
  const sum = firstNumber + secondNumber;

  // output the sum and create body tag
  result.textContent = `The sum is: ${sum}`;
}

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addNumbers);

// ============ JASON INTERVIEW PAIRING CHALLENGE ============
const studentNameInput = document.getElementById("student-names-input");

function createPairs() {
  let studentArray = studentNameInput.value.split("\n");
  studentArray = ["a", "b", "c"];

  // if there is an odd number of names provided, MYSTERY_GUEST is added to balance pairs
  if (studentArray.length % 2) {
    studentArray.push("MYSTERY_GUEST");
  }

  console.log(studentArray);
  console.log(shuffle(studentArray));
}

// This shuffles an array randomly
function shuffle() {
  testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

let n = 0;
while (n < 5) {
  n++;
  console.log(Math.floor(Math.random() * 6));
}

/* ============== INTERVIEW PAIR LOGIC LOGIC ==============
  1. Get student names input from user as string
  2. Split studentNames string to individual names and store in an Array
  3. If there is an odd number of studentsNames, add a Mystery_Guest to balance pairs

  4. Shuffle all names within StudentArray randomly
  5. Create first set of pairs from ShuffledStudentArray
  6. Shuffle again and create seccond set of pairs
  7. Compare second set of pairs with the first
  8. If any of the pairs are the same as the first set, go back to step 6
     Else output both sets of pairs (all pairs are now unique from the first set and second set) 
*/
