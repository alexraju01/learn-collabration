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