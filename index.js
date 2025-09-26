// const names = ["alex", "hamza", "jamal", "jacobs"];
// const check = names.findLast;
// console.log(check);

// for (let i = names.length; i > names.length; i--) {
// 	console.log(names[i]);
// }

// ///item = item in the array
// const newArry = names.map((whatever) => whatever + "ABC"); //This one
// console.log("old array \n");
// names.forEach((item) => console.log(item));
// console.log("new array \n");
// newArry.forEach((item) => console.log(item));
// //THis reverses the array, then it for each the array
// // names.reverse().forEach((item) => console.log(item));

// const container = document.getElementById("card-container");

// names.forEach((name) => {
// 	const card = document.createElement("div");
// 	card.className = "card";
// 	card.textContent = name;
// 	container.appendChild(card);
// });

// const hammycards = document.getElementById("hamza-cards");

// const hammynames = ["John", "Alex", "ps5", "hehe"];
// hammynames.forEach((hnames) => {
// 	const hcards = document.createElement("div");
// 	hcards.className = "hcards";

// 	hcards.textContent = hnames;
// 	hammycards.appendChild(hcards);
// });

// const jammyContainer = document.getElementById("jammys-cards");
// const jammyArray = [1, 2, 3, 4, 5];
// jammyArray.forEach((num) => {
// 	const jammyCard = document.createElement("p");
// 	jammyCard.className = "jammyClass";
// 	jammyCard.textContent = num;
// 	jammyContainer.append(jammyCard);
// });

// ========================================
// ================Script==================
// ========================================

const listData = ["alex", "hamza", "jamal"]; //This is the list data
const listId = document.getElementById("myList"); //This is the list element

// THis should run every time listData is changed
listId. = listData.map((item) => {
	//This renders the list by adding aelements for each item in the list
	const li = document.createElement("li");
	li.innerText = item;
	return li;
});

///When you press a button linked to this function, it executes, adding a name to the list above.
function addName(name) {
	listData.append(name)
	// const li = document.createElement("li");
	// li.innerText = name;
	// listId.appendChild(li);

	if (listData.length > 0) {
		warningDiv.classList.remove("displaynone")
	}
}

//When a button is pressed, this function will remove the last name in the list, IF there are any items in the list
function removeLastName() {

	if (listData.length <= 0) {
		const warningDiv = document.getElementById("warning")
		warningDiv.classList.remove("displaynone")
		return;
	};
	listData.pop();
	// updateList();
	// listId.lastChild.remove();
}

/*
1.create div class name = displaynone > alertdiv (display: none)

2. toggle button hidden to show


toggle button



*/