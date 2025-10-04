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

// This function does the following:
// 1. Takes the users input of student names as a string
// 2. Splits the string into individual names and stores them in studentArray
// 3. Checks if there is an odd number of names, and if so adds in a mystery guest
// 4. Shuffles the studentArray and creates pairs for set_1
// 5. Shifts all the names in the studentArray left by 1 place (Ensurinng there is no same pairs in the second set)
// 6. Creates set_2 by using the pearEmUp() function on the shifted studentArray
function createSets() {
  const studentArray = studentNameInput.value.split("\n");
  const set_1_ul = document.getElementById("set_1");
  const set_2_ul = document.getElementById("set_2");

  // MYSTERY_GUEST is added to balance pairs if uneven number of names
  if (studentArray.length % 2) {
    studentArray.push("MYSTERY_GUEST");
  }
  // Shuffle student and then create pairs
  shuffle(studentArray);
  const set_1 = pearEmUp(studentArray);
  // Shifts all the names left by 1 place (Ensuring pairs in new set are unique)
  studentArray.push(studentArray.shift());
  // Creates second set of pairs
  const set_2 = pearEmUp(studentArray);

  // Ensures list_1 and list_2 is empty before renderPairs() Function is called
  set_1_ul.innerHTML = "";
  set_2_ul.innerHTML = "";
  // Injects pairs into ul elements
  renderPairs(set_1, set_1_ul);
  renderPairs(set_2, set_2_ul);
}

// Creates a new li element which containts the pair and adds this to the target_ul
function renderPairs(set, target_ul) {
  for (let i = 0; i < set.length; i++) {
    const new_li = document.createElement("li");
    new_li.innerText = `${set[i][0]} + ${set[i][1]}`;
    target_ul.appendChild(new_li);
  }
}

// This function creates an array of pairs
// Input: [a, b, c, d, e, f]
// Output is in the format: [[a, b], [c, d], [e, f]]
function pearEmUp(arr) {
  const pairs = [];

  for (let i = 0; i < arr.length; i += 2) {
    pairs.push([arr[i], arr[i + 1]]);
  }
  return pairs;
}

// Shuffles array randomly using "Fisher-Yates" method
function shuffle(arr) {
  let i = arr.length,
    j,
    temp;
  while (i-- > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// ============ COPY SET TO CLIPBOARD ============
function copyToClipboard(setID) {
  const listItems = document.querySelectorAll(`${setID} li`);
  const UpdatedClipboard = []

  for (let i = 0; i < listItems.length; i++) {    
    UpdatedClipboard.push(listItems[i].textContent)
  }
  // Update clipboard with pairs and alert user 
  navigator.clipboard.writeText(UpdatedClipboard.join("\n"))
  window.alert(`${UpdatedClipboard.join("\n")} \nCopied to your clipboard`)
}