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
		return li
	});
	listId.replaceChildren(...bunchaLi)
}

//Setup the list on the first run
updatedList()

///When you press a button linked to this function, it executes, adding a name to the list above.
function addName(name) {
	if (!name) return;
	listData.push(name)
	if (listData.length > 0) {
		const warningDiv = document.getElementById("warning")
		warningDiv.classList.add("displaynone")
	}
	updatedList();
}

//When a button is pressed, this function will remove the last name in the list, IF there are any items in the list
function removeLastName() {

	if (listData.length <= 0) {
		const warningDiv = document.getElementById("warning")
		warningDiv.classList.remove("displaynone")
		return;
	};
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
	img_2: "path_to_image",
	img_3: "path_to_image",
	img_4: "path_to_image",
	img_5: "path_to_image",
};
const imageID = document.getElementById("imageID")

// sets the initial src of the image
imageID.src = imgSrcList.img_1

// when "Toggle Image" btn is pressed, this function shows and hides the image below 
function toggleImage () {
	if (imageID.classList.contains("displaynone")){
		imageID.classList.remove("displaynone");
	}
	else imageID.classList.add("displaynone")
}

function updateSrc () {
	
}